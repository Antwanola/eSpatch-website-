'use client';

import { Box, Text, Flex } from '@chakra-ui/react';
import { useRef, useState, useEffect, useCallback } from 'react';

const RESUME_DELAY = 2000; // ms idle before auto-rotate resumes

interface BikeViewerProps {
    src: string;              // e.g. "/bikes/bike.glb"
    poster?: string;          // optional placeholder image while model loads
    alt?: string;
    autoRotate?: boolean;
}

const ModelViewerTag = 'model-viewer' as any;

const BikeViewer: React.FC<BikeViewerProps> = ({
    src,
    poster,
    alt = 'eSpatch electric delivery motorcycle',
    autoRotate = true,
}) => {
    const mvRef = useRef<HTMLElement & Record<string, any>>(null);
    const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const [loaded, setLoaded] = useState(false);
    const [progress, setProgress] = useState(0);
    const [isAutoSpinning, setIsAutoSpinning] = useState(autoRotate);
    const [hintVisible, setHintVisible] = useState(true);
    const [orbitDeg, setOrbitDeg] = useState(0);
    const [mvReady, setMvReady] = useState(false);
    const hintShown = useRef(true);

    // ── load the custom element client-side only (avoids SSR "self is not defined") ──
    useEffect(() => {
        let cancelled = false;
        import('@google/model-viewer').then(() => {
            if (!cancelled) setMvReady(true);
        });
        return () => { cancelled = true; };
    }, []);

    // ── load / progress events ──────────────────────────────────────────────
    useEffect(() => {
        if (!mvReady) return;
        const el = mvRef.current;
        if (!el) return;

        const onProgress = (e: any) => {
            setProgress(Math.round((e.detail?.totalProgress ?? 0) * 100));
        };
        const onLoad = () => setLoaded(true);
        const onCameraChange = (e: any) => {
            const orbit = el.getCameraOrbit?.();
            if (orbit) setOrbitDeg(Math.round(((orbit.theta * 180) / Math.PI + 360) % 360));
        };

        el.addEventListener('progress', onProgress);
        el.addEventListener('load', onLoad);
        el.addEventListener('camera-change', onCameraChange);

        return () => {
            el.removeEventListener('progress', onProgress);
            el.removeEventListener('load', onLoad);
            el.removeEventListener('camera-change', onCameraChange);
        };
    }, [mvReady]);

    // ── auto-rotate resume-after-idle ───────────────────────────────────────
    const stopAutoRotate = useCallback(() => {
        setIsAutoSpinning(false);
        if (resumeTimerRef.current) { clearTimeout(resumeTimerRef.current); resumeTimerRef.current = null; }
    }, []);

    const startAutoRotate = useCallback(() => {
        setIsAutoSpinning(true);
    }, []);

    const scheduleResume = useCallback(() => {
        if (!autoRotate) return;
        if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
        resumeTimerRef.current = setTimeout(startAutoRotate, RESUME_DELAY);
    }, [autoRotate, startAutoRotate]);

    const onInteraction = useCallback(() => {
        stopAutoRotate();
        if (hintShown.current) { setHintVisible(false); hintShown.current = false; }
        scheduleResume();
    }, [stopAutoRotate, scheduleResume]);

    const resetCamera = useCallback(() => {
        const el = mvRef.current;
        if (!el) return;
        el.cameraOrbit = '0deg 75deg auto';
        el.jumpCameraToGoal?.();
        scheduleResume();
    }, [scheduleResume]);

    useEffect(() => {
        return () => { if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current); };
    }, []);

    return (
        <Box
            position="relative"
            w="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            py={8}
            userSelect="none"
        >
            {/* Orbit angle badge */}
            <Box
                position="absolute"
                top={3}
                right={4}
                fontSize="11px"
                fontWeight="500"
                color="whiteAlpha.600"
                bg="whiteAlpha.100"
                border="0.5px solid"
                borderColor="whiteAlpha.200"
                borderRadius="8px"
                px={2}
                py="2px"
                letterSpacing="wider"
                minW="52px"
                textAlign="center"
                zIndex={2}
            >
                {orbitDeg}°
            </Box>

            {/* Model viewer */}
            <Box
                w="100%"
                maxW={{ base: '100%', md: '900px' }}
                h={{ base: '420px', md: '600px', lg: '680px' }}
                position="relative"
                opacity={loaded ? 1 : 0}
                transition="opacity 0.3s"
            >
                {mvReady && (
                    <ModelViewerTag
                        className="espatch-model-viewer"
                        ref={mvRef as any}
                        src={src}
                        poster={poster}
                        alt={alt}
                        camera-controls
                        auto-rotate={isAutoSpinning}
                        auto-rotate-delay={0}
                        rotation-per-second="24deg"
                        shadow-intensity="0.9"
                        environment-image="neutral"
                        exposure="1.1"
                        field-of-view="25deg"
                        camera-orbit="0deg 75deg 90%"
                        min-camera-orbit="auto auto 60%"
                        max-camera-orbit="auto auto 120%"
                        loading="eager"
                        reveal="auto"
                        onPointerDown={onInteraction}
                        onWheel={onInteraction}
                        style={{ width: '100%', height: '100%' }}
                    />
                )}
            </Box>

            {/* Loading state */}
            {!loaded && (
                <Box
                    position="absolute"
                    fontSize="xs"
                    color="whiteAlpha.400"
                    letterSpacing="wide"
                >
                    Loading… {progress}%
                </Box>
            )}

            {/* Drag hint */}
            <Flex
                align="center"
                gap={2}
                mt={8}
                fontSize="xs"
                color="whiteAlpha.400"
                letterSpacing="wide"
                opacity={hintVisible ? 1 : 0}
                transition="opacity 0.4s"
                pointerEvents="none"
            >
                <Box as="span" fontSize="14px">⟷</Box>
                <Text>{isAutoSpinning ? 'Auto-rotating · drag to control' : 'Drag to rotate'}</Text>
            </Flex>

            {/* Load progress scrubber */}
            <Box
                mt={4}
                w="75%"
                maxW="380px"
                h="2px"
                bg="whiteAlpha.100"
                borderRadius="2px"
                position="relative"
            >
                <Box
                    position="absolute"
                    top="0"
                    left="0"
                    h="100%"
                    bg="whiteAlpha.300"
                    borderRadius="2px"
                    width={`${progress}%`}
                    transition="width 0.2s"
                />
                <Box
                    position="absolute"
                    top="50%"
                    w="10px"
                    h="10px"
                    bg="white"
                    borderRadius="50%"
                    left={`${progress}%`}
                    transform="translate(-50%, -50%)"
                    boxShadow="0 0 6px rgba(1,222,203,0.5)"
                />
            </Box>

            {/* Controls */}
            <Flex gap={2} mt={4}>
                <Box
                    as="button"
                    fontSize="11px"
                    color="whiteAlpha.400"
                    bg="transparent"
                    border="0.5px solid"
                    borderColor="whiteAlpha.200"
                    borderRadius="8px"
                    px={3}
                    py={1}
                    cursor="pointer"
                    letterSpacing="wider"
                    _hover={{ color: 'whiteAlpha.700', borderColor: 'whiteAlpha.400' }}
                    onClick={resetCamera}
                >
                    RESET
                </Box>
                <Box
                    as="button"
                    fontSize="11px"
                    color={isAutoSpinning ? '#01decb' : 'whiteAlpha.400'}
                    bg={isAutoSpinning ? 'rgba(1,222,203,0.08)' : 'transparent'}
                    border="0.5px solid"
                    borderColor={isAutoSpinning ? 'rgba(1,222,203,0.35)' : 'whiteAlpha.200'}
                    borderRadius="8px"
                    px={3}
                    py={1}
                    cursor="pointer"
                    letterSpacing="wider"
                    _hover={{ color: '#01decb', borderColor: 'rgba(1,222,203,0.35)' }}
                    onClick={() => (isAutoSpinning ? stopAutoRotate() : startAutoRotate())}
                >
                    {isAutoSpinning ? '⏸ AUTO' : '▶ AUTO'}
                </Box>
            </Flex>
        </Box>
    );
};

export default BikeViewer;