import { Box, Text, Flex } from '@chakra-ui/react';
import { useRef, useState, useEffect, useCallback } from 'react';

const AUTO_SPEED = 0.4;    // degrees per frame (~24°/s at 60fps)
const RESUME_DELAY = 2000; // ms idle before auto-spin resumes

interface BikeViewerProps {
    src?: string;
    alt?: string;
    autoRotate?: boolean;
}

const BikeViewer: React.FC<BikeViewerProps> = ({
    src = '/bike.png',
    alt = 'eSpatch electric delivery motorcycle',
    autoRotate = true,
}) => {
    const viewerRef = useRef<HTMLDivElement>(null);
    const rafRef = useRef<number | null>(null);
    const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const rotationRef = useRef(0);
    const startXRef = useRef<number | null>(null);
    const lastRotationRef = useRef(0);
    const velocityRef = useRef(0);
    const isAutoRef = useRef(autoRotate);
    const hintShown = useRef(true);

    const [displayAngle, setDisplayAngle] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [isAutoSpinning, setIsAutoSpinning] = useState(autoRotate);
    const [hintVisible, setHintVisible] = useState(true);

    const applyRotation = useCallback((deg: number) => {
        rotationRef.current = deg;
        const normalized = ((deg % 360) + 360) % 360;
        setDisplayAngle(Math.round(normalized));
        setRotateY(deg);
    }, []);

    const autoLoop = useCallback(() => {
        if (!isAutoRef.current) return;
        applyRotation(rotationRef.current + AUTO_SPEED);
        rafRef.current = requestAnimationFrame(autoLoop);
    }, [applyRotation]);

    const startAutoRotate = useCallback(() => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        isAutoRef.current = true;
        setIsAutoSpinning(true);
        rafRef.current = requestAnimationFrame(autoLoop);
    }, [autoLoop]);

    const stopAutoRotate = useCallback(() => {
        isAutoRef.current = false;
        setIsAutoSpinning(false);
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    }, []);

    const scheduleResume = useCallback(() => {
        if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
        if (!autoRotate) return;
        resumeTimerRef.current = setTimeout(startAutoRotate, RESUME_DELAY);
    }, [autoRotate, startAutoRotate]);

    const momentum = useCallback(() => {
        velocityRef.current *= 0.93;
        if (Math.abs(velocityRef.current) < 0.2) {
            velocityRef.current = 0;
            scheduleResume();
            return;
        }
        applyRotation(rotationRef.current + velocityRef.current);
        rafRef.current = requestAnimationFrame(momentum);
    }, [applyRotation, scheduleResume]);

    const onPointerDown = useCallback((e: React.PointerEvent) => {
        stopAutoRotate();
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        velocityRef.current = 0;
        startXRef.current = e.clientX;
        lastRotationRef.current = rotationRef.current;
        setIsDragging(true);
        if (hintShown.current) {
            setHintVisible(false);
            hintShown.current = false;
        }
        viewerRef.current?.setPointerCapture(e.pointerId);
    }, [stopAutoRotate]);

    const onPointerMove = useCallback((e: React.PointerEvent) => {
        if (startXRef.current === null) return;
        const dx = e.clientX - startXRef.current;
        applyRotation(lastRotationRef.current + dx * 0.5);
    }, [applyRotation]);

    const onPointerUp = useCallback((e: React.PointerEvent) => {
        if (startXRef.current === null) return;
        const dx = e.clientX - startXRef.current;
        velocityRef.current = dx * 0.007;
        startXRef.current = null;
        setIsDragging(false);
        if (Math.abs(velocityRef.current) > 0.2) {
            rafRef.current = requestAnimationFrame(momentum);
        } else {
            scheduleResume();
        }
    }, [momentum, scheduleResume]);

    const resetBike = useCallback(() => {
        stopAutoRotate();
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        velocityRef.current = 0;
        let current = rotationRef.current;
        const target = Math.round(current / 360) * 360;
        const snap = () => {
            current += (target - current) * 0.18;
            applyRotation(current);
            if (Math.abs(current - target) > 0.3) {
                rafRef.current = requestAnimationFrame(snap);
            } else {
                applyRotation(target);
                scheduleResume();
            }
        };
        snap();
    }, [applyRotation, stopAutoRotate, scheduleResume]);

    useEffect(() => {
        applyRotation(0);
        if (autoRotate) startAutoRotate();
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
        };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const progressPct = (((rotationRef.current % 360) + 360) % 360) / 360 * 100;
    const shadowScale = Math.abs(Math.cos(rotateY * Math.PI / 180)) * 0.55 + 0.45;

    return (
        <Box
            ref={viewerRef}
            position="relative"
            w="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            py={8}
            cursor={isDragging ? 'grabbing' : 'grab'}
            userSelect="none"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerLeave={onPointerUp}
            role="img"
            aria-label={`${alt} — drag to rotate`}
        >
            {/* Angle badge */}
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
                {displayAngle}°
            </Box>

            {/* 3D perspective container */}
            <Box
                w="100%"
                maxW="540px"
                position="relative"
                style={{
                    perspective: '1200px',
                    perspectiveOrigin: '50% 50%',
                }}
            >
                {/* Rotating stage — true CSS 3D rotateY */}
                <Box
                    style={{
                        transformStyle: 'preserve-3d',
                        transform: `rotateY(${rotateY}deg)`,
                        willChange: 'transform',
                    }}
                >
                    {/* Front face */}
                    <Box
                        as="img"
                        src={src}
                        alt={alt}
                        draggable={false}
                        w="100%"
                        display="block"
                        pointerEvents="none"
                        style={{ backfaceVisibility: 'hidden' }}
                    />
                    {/* Back face: rotated 180° + horizontally mirrored so it reads correctly */}
                    <Box
                        as="img"
                        src={src}
                        alt=""
                        aria-hidden="true"
                        draggable={false}
                        w="100%"
                        display="block"
                        pointerEvents="none"
                        position="absolute"
                        top="0"
                        left="0"
                        style={{
                            backfaceVisibility: 'hidden',
                            transform: 'rotateY(180deg) scaleX(-1)',
                        }}
                    />
                </Box>

                {/* Ground shadow — scales with foreshortening */}
                <Box
                    position="absolute"
                    bottom="-14px"
                    left="50%"
                    w="58%"
                    h="14px"
                    borderRadius="50%"
                    pointerEvents="none"
                    style={{
                        background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.4) 0%, transparent 70%)',
                        transform: `translateX(-50%) scaleX(${shadowScale})`,
                    }}
                />
            </Box>

            {/* Drag hint */}
            <Flex
                align="center"
                gap={2}
                mt={8}
                fontSize="xs"
                color="whiteAlpha.400"
                letterSpacing="wide"
                style={{
                    opacity: hintVisible ? 1 : 0,
                    transition: 'opacity 0.4s',
                    pointerEvents: 'none',
                }}
            >
                <Box as="span" fontSize="14px">⟷</Box>
                <Text>{isAutoSpinning ? 'Auto-rotating · drag to control' : 'Drag to rotate'}</Text>
            </Flex>

            {/* Progress scrubber */}
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
                    style={{ width: `${progressPct}%` }}
                />
                <Box
                    position="absolute"
                    top="50%"
                    w="10px"
                    h="10px"
                    bg="white"
                    borderRadius="50%"
                    style={{
                        left: `${progressPct}%`,
                        transform: 'translate(-50%, -50%)',
                        boxShadow: '0 0 6px rgba(1,222,203,0.5)',
                    }}
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
                    onClick={(e: React.MouseEvent) => { e.stopPropagation(); resetBike(); }}
                    onPointerDown={(e: React.PointerEvent) => e.stopPropagation()}
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
                    onClick={(e: React.MouseEvent) => {
                        e.stopPropagation();
                        isAutoSpinning ? stopAutoRotate() : startAutoRotate();
                    }}
                    onPointerDown={(e: React.PointerEvent) => e.stopPropagation()}
                >
                    {isAutoSpinning ? '⏸ AUTO' : '▶ AUTO'}
                </Box>
            </Flex>
        </Box>
    );
};

export default BikeViewer;