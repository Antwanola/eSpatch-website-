'use client';
import {
    Box, Button, Flex, Grid, Text, HStack, Badge,
} from '@chakra-ui/react';
import React from 'react';
import {
    TbGps, TbRoute, TbBatteryCharging, TbShieldLock,
    TbChartBar, TbMapPin, TbUserCheck, TbApi,
} from 'react-icons/tb';
import { MdArrowForward, MdCode } from 'react-icons/md';
import { RiExternalLinkLine } from 'react-icons/ri';

// ── Data ─────────────────────────────────────────────────────────────────────

const capabilities = [
    {
        icon: TbGps,
        color: '#01decb',
        title: 'Live GPS Telematics',
        desc: 'Sub-second location updates for all active vehicles, streamed to any dashboard or partner platform in real time.',
    },
    {
        icon: TbMapPin,
        color: '#7c6af7',
        title: 'Geofence Monitoring',
        desc: 'Define custom zones and receive instant alerts when vehicles enter or exit pre-configured boundaries.',
    },
    {
        icon: TbBatteryCharging,
        color: '#01decb',
        title: 'Battery State Management',
        desc: 'Granular cell-level telemetry so operators can predict swap needs and pre-position charged units.',
    },
    {
        icon: TbShieldLock,
        color: '#7c6af7',
        title: 'Security Alerts',
        desc: 'Tamper detection, immobilisation triggers, and real-time incident notifications for fleet security.',
    },
    {
        icon: TbChartBar,
        color: '#01decb',
        title: 'Performance Analytics',
        desc: 'Full trip history, speed profiles, idle time, and efficiency scores surfaced per rider and per vehicle.',
    },
    {
        icon: TbRoute,
        color: '#7c6af7',
        title: 'Route & ETA Tracking',
        desc: 'Dynamic route adherence scoring and live ETA recalculation delivered to end-customers automatically.',
    },
    {
        icon: TbUserCheck,
        color: '#01decb',
        title: 'Rider Behaviour Scoring',
        desc: 'AI-derived safety scores based on acceleration, braking, and cornering patterns to reduce risk and improve training.',
    },
    {
        icon: TbApi,
        color: '#7c6af7',
        title: 'Platform API Integration',
        desc: 'RESTful and webhook APIs that connect directly into any logistics platform with sub-100ms response times.',
    },
];

// ── Mini chart SVG ────────────────────────────────────────────────────────────
const MiniChart = () => (
    <svg viewBox="0 0 260 80" width="100%" style={{ overflow: 'visible' }}>
        <defs>
            <linearGradient id="cg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#01decb" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#01decb" stopOpacity="0" />
            </linearGradient>
        </defs>
        {[60, 40, 20].map((y, i) => (
            <line key={i} x1="0" y1={y} x2="260" y2={y}
                stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        ))}
        <path d="M0,72 C30,68 55,60 80,52 C105,44 120,30 145,22 C165,16 195,10 220,6 C235,4 248,3 260,2 L260,80 L0,80Z"
            fill="url(#cg)" />
        <path d="M0,72 C30,68 55,60 80,52 C105,44 120,30 145,22 C165,16 195,10 220,6 C235,4 248,3 260,2"
            fill="none" stroke="#01decb" strokeWidth="2" strokeLinecap="round" />
        <circle cx="260" cy="2" r="4" fill="#01decb" />
        <circle cx="260" cy="2" r="8" fill="#01decb" fillOpacity="0.2" />
    </svg>
);

// ── Component ─────────────────────────────────────────────────────────────────
const ForiTechPage: React.FC = () => {
    return (
        <Box bg="#07111f" fontFamily="'DM Sans', sans-serif">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&family=DM+Mono:wght@400;500&display=swap');

        @keyframes blink-glow {
          0%,100%{opacity:1;filter:drop-shadow(0 0 5px #01decb);}
          50%{opacity:0.25;filter:none;}
        }
        @keyframes draw-line {
          to{stroke-dashoffset:0;}
        }
        @keyframes float {
          0%,100%{transform:translateY(0);}
          50%{transform:translateY(-8px);}
        }
        @keyframes spin-border {
          0%{background-position:0% 50%;}
          50%{background-position:100% 50%;}
          100%{background-position:0% 50%;}
        }
        .live-dot {
          width:8px;height:8px;border-radius:50%;background:#01decb;
          animation:blink-glow 1.4s ease-in-out infinite;
          flex-shrink:0;
        }
        .chart-line { stroke-dasharray:600;stroke-dashoffset:600;animation:draw-line 2s ease forwards 0.4s; }
        .dashboard-float { animation:float 5s ease-in-out infinite; }
        .gradient-border-wrap {
          border-radius:18px;padding:1.5px;
          background:linear-gradient(135deg,#01decb,#7c6af7,#01decb);
          background-size:200% 200%;
          animation:spin-border 5s ease infinite;
        }
        .gradient-border-inner { background:#0a1628;border-radius:16px;padding:28px; }
        .cap-card { transition:border-color 0.2s,transform 0.2s; }
        .cap-card:hover { border-color:rgba(1,222,203,0.3)!important; transform:translateY(-4px); }
        .dot-grid {
          background-image:radial-gradient(circle,rgba(1,222,203,0.4) 1px,transparent 1px);
          background-size:24px 24px;
        }
      `}</style>

            {/* ── HERO ─────────────────────────────────────────────────────────── */}
            <Box bg="#07111f" position="relative" overflow="hidden"
                pt={{ base: 16, md: 24 }} pb={{ base: 0, md: 0 }}>

                {/* top glow */}
                <Box position="absolute" top="-100px" left="50%" transform="translateX(-50%)"
                    w="900px" h="500px" pointerEvents="none"
                    background="radial-gradient(ellipse,rgba(1,222,203,0.07) 0%,transparent 65%)" />

                <Box maxW="1200px" mx="auto" px={{ base: 5, md: 10 }}>
                    {/* breadcrumb badge */}
                    <Flex mb={6} align="center" gap={2} display="inline-flex"
                        border="0.5px solid" borderColor="#01decb4c" borderRadius="20px"
                        px={3} py={1} bg="#00867b22">
                        <div className="live-dot" />
                        <Text color="#01decb" fontSize="10px" letterSpacing="wider" fontWeight={500}>
                            aDryv Core Technology
                        </Text>
                    </Flex>

                    <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }}
                        gap={{ base: 10, md: 16 }} alignItems="center">

                        {/* LEFT */}
                        <Box>
                            <Text fontFamily="'Syne', sans-serif" fontWeight={600}
                                fontSize={{ base: '32px', md: '40', lg: '48px' }}
                                color="white" lineHeight={1.05} letterSpacing="-0.03em" mb={5}>
                                The Intelligence{' '}
                                <Box as="br" display={{ base: 'none', md: 'block' }} />
                                Engine for{' '}
                                <Box as="span" color="#01decb" position="relative"
                                    _after={{ content: '""', position: 'absolute', bottom: '-4px', left: 0, width: '100%', height: '3px', background: '#01decb', opacity: 0.4, borderRadius: '2px' }}>
                                    Modern Fleets
                                </Box>
                            </Text>

                            <Text color="#9AA4B2" fontSize={{ base: 'md', md: 'lg' }}
                                lineHeight={1.75} maxW="420px" mb={9}>
                                Real-time telematics, predictive battery management, and
                                autonomous dispatch — powered by the industry's most
                                robust IoT infrastructure.
                            </Text>

                            <Flex gap={3} flexWrap="wrap">
                                <Button fontFamily="'DM Sans', sans-serif" fontWeight={600}
                                    bg="#01decb" color="#07111f" px={6} py={5} borderRadius="full" fontSize="sm"
                                    _hover={{ bg: '#00c4b4', transform: 'translateY(-2px)', boxShadow: '0 8px 24px rgba(1,222,203,0.3)' }}
                                    transition="all 0.2s">
                                    Explore Platform <MdArrowForward style={{ display: 'inline', marginLeft: 4 }} />
                                </Button>
                                <Button fontFamily="'DM Sans', sans-serif" fontWeight={600}
                                    bg="transparent" color="#9AA4B2" px={6} py={5} borderRadius="full" fontSize="sm"
                                    border="1px solid" borderColor="whiteAlpha.200"
                                    _hover={{ borderColor: '#01decb55', color: 'white', transform: 'translateY(-2px)' }}
                                    transition="all 0.2s">
                                    <RiExternalLinkLine style={{ marginRight: 6 }} />
                                    Read Documentation
                                </Button>
                            </Flex>

                            {/* stat chips */}
                            <Flex gap={6} mt={10} flexWrap="wrap">
                                {[
                                    { val: '2,812', label: 'Active Units', up: true },
                                    { val: '49.2k', label: 'Trips Today' },
                                    { val: '12ms', label: 'Avg Latency' },
                                ].map((s) => (
                                    <Box key={s.label} pb={10}>
                                        <Text fontFamily="'Syne', sans-serif" fontWeight={600}
                                            fontSize="1.5rem" color="white" lineHeight={1}>
                                            {s.val}
                                            {s.up && (
                                                <Box as="span" fontSize="11px" color="#01decb" ml={1} fontFamily="'DM Sans'">↑</Box>
                                            )}
                                        </Text>
                                        <Text color="#9AA4B2" fontSize="11px" mt="2px">{s.label}</Text>
                                    </Box>
                                ))}
                            </Flex>
                        </Box>

                        {/* RIGHT — dashboard mockup */}
                        <Box position="relative">
                            <Box className="dashboard-float"
                                bg="#0d1e30" borderRadius="2xl" overflow="hidden"
                                border="1px solid" borderColor="rgba(1,222,203,0.18)"
                                boxShadow="0 30px 80px rgba(0,0,0,0.5)">

                                {/* top bar */}
                                <Flex bg="#091524" px={4} py={3} align="center" justify="space-between"
                                    borderBottom="1px solid" borderColor="rgba(255,255,255,0.06)">
                                    <Flex align="center" gap={2}>
                                        <div className="live-dot" />
                                        <Text color="#9AA4B2" fontSize="11px">aDryv · Dashboard · Status</Text>
                                    </Flex>
                                    <Flex gap={2} >
                                        {['#ff5f57', '#febc2e', '#28c840'].map(c => (
                                            <Box key={c} w="9px" h="9px" borderRadius="full" bg={c} />
                                        ))}
                                    </Flex>
                                </Flex>

                                {/* chart area */}
                                <Box px={5} pt={5} pb={3}>
                                    <Text color="#9AA4B2" fontSize="10px" letterSpacing="0.1em" mb={1}>
                                        FLEET ACTIVITY · LAST 30 DAYS
                                    </Text>
                                    <MiniChart />
                                </Box>

                                {/* mini stat row */}
                                <Grid templateColumns="repeat(3,1fr)" gap={0}
                                    borderTop="1px solid" borderColor="rgba(255,255,255,0.06)">
                                    {[
                                        { label: 'Uptime', val: '99.97%' },
                                        { label: 'Avg Speed', val: '34 km/h' },
                                        { label: 'CO₂ Saved', val: '4.2t' },
                                    ].map((s, i) => (
                                        <Box key={s.label} px={4} py={3}
                                            borderRight={i < 2 ? '1px solid' : 'none'}
                                            borderColor="rgba(255,255,255,0.06)">
                                            <Text color="#01decb" fontFamily="'Syne',sans-serif"
                                                fontWeight={600} fontSize="1rem" lineHeight={1} pb={10}>{s.val}</Text>
                                            <Text color="#9AA4B2" fontSize="10px" mt="2px">{s.label}</Text>
                                        </Box>
                                    ))}
                                </Grid>
                            </Box>

                            {/* floating uptime badge */}
                            <Box position="absolute" bottom={-4} left={-4}
                                bg="rgba(10,22,40,0.95)" backdropFilter="blur(12px)"
                                border="1px solid" borderColor="#01decb33"
                                borderRadius="xl" px={4} py={3}>
                                <Flex align="center" gap={2}>
                                    <div className="live-dot" />
                                    <Box>
                                        <Text fontFamily="'Syne',sans-serif" fontWeight={500}
                                            fontSize="1.1rem" color="white" lineHeight={1}>99.99%</Text>
                                        <Text color="#9AA4B2" fontSize="9px">Platform Uptime</Text>
                                    </Box>
                                </Flex>
                            </Box>
                        </Box>
                    </Grid>
                </Box>
            </Box>

            {/* ── aDryv SECTION ────────────────────────────────────────────────── */}
            <Box bg="#ffffff" py={{ base: 16, md: 24 }}>
                <Box maxW="1200px" mx="auto" px={{ base: 5, md: 10 }}>
                    <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }}
                        gap={{ base: 12, md: 20 }} alignItems="center">

                        {/* LEFT */}
                        <Box>
                            {/* dashed border badge */}
                            <Flex mb={5} align="center" gap={2} display="inline-flex"
                                border="1.5px dashed" borderColor="#01decb88" borderRadius="20px"
                                px={3} py={1}>
                                <Box w="6px" h="6px" borderRadius="full" bg="#01decb" />
                                <Text color="#12635c" fontSize="10px" letterSpacing="wider" fontWeight={600}>
                                    aDryv by Forti Technologies
                                </Text>
                            </Flex>

                            <Text fontFamily="'DM Sans', sans-serif" fontWeight={600}
                                fontSize={{ base: '1.6rem', md: '2rem', lg: '2.4rem' }}
                                color="#0D1B2A" lineHeight={1.2} mb={4}>
                                A comprehensive fleet{' '}
                                <Box as="span" color="#12635c">management</Box>{' '}
                                platform designed to bridge the gap between physical vehicles
                                and digital operations.
                            </Text>

                            <Text color="#4D596E" fontSize={{ base: 'md', md: 'lg' }}
                                lineHeight={1.8} mb={4}>
                                It's a real-time GPS tracking platform (agnostic of data points) for
                                fleet logistics routing, smarter security, and real-time analytics. Platform
                                partners can access this intelligence via our intuitive dashboards or
                                integrate directly through our robust API.
                            </Text>

                            {/* feature bullets */}
                            <Flex flexDir="column" gap={3} mb={8}>
                                {[
                                    { label: 'Dyrnavid Guide Dashboard', sub: 'Full operational visibility over all 200+ active vehicles' },
                                    { label: 'REST API Integration', sub: 'Plug into any TMS or logistics platform in under a day' },
                                ].map((f) => (
                                    <Flex key={f.label} align="flex-start" gap={3}
                                        bg="#f5f8fa" borderRadius="xl" px={4} py={4}
                                        border="1px solid" borderColor="gray.100"
                                        transition="border-color 0.2s"
                                        _hover={{ borderColor: '#01decb55' }}>
                                        <Box w="18px" h="18px" borderRadius="full" flexShrink={0}
                                            border="1.5px solid" borderColor="#01decb66"
                                            display="flex" alignItems="center" justifyContent="center"
                                            color="#01decb" fontSize="10px" mt="2px">
                                            ✓
                                        </Box>
                                        <Box>
                                            <Text fontFamily="'Syne',sans-serif" fontWeight={600}
                                                color="#0D1B2A" fontSize="sm">{f.label}</Text>
                                            <Text color="#4D596E" fontSize="xs" lineHeight={1.6}>{f.sub}</Text>
                                        </Box>
                                    </Flex>
                                ))}
                            </Flex>
                        </Box>

                        {/* RIGHT — dashboard mockup dark */}
                        <Box>
                            <Box bg="#0d1e30" borderRadius="2xl" overflow="hidden"
                                border="1px solid" borderColor="rgba(1,222,203,0.15)"
                                boxShadow="0 20px 60px rgba(0,0,0,0.3)">

                                {/* top bar */}
                                <Flex bg="#091524" px={4} py={3} align="center" gap={2}
                                    borderBottom="1px solid" borderColor="rgba(255,255,255,0.06)">
                                    <div className="live-dot" />
                                    <Text color="#9AA4B2" fontSize="10px">aDryv Platform · Live View</Text>
                                </Flex>

                                {/* world map placeholder */}
                                <Box position="relative" h="180px" overflow="hidden" bg="#091524">
                                    <Box className="dot-grid" position="absolute" inset={0} opacity={0.3} />
                                    <Box position="absolute" top="50%" left="50%"
                                        transform="translate(-50%,-50%)"
                                        w="200px" h="200px"
                                        background="radial-gradient(ellipse,rgba(1,222,203,0.12) 0%,transparent 70%)" />
                                    {/* SVG route lines */}
                                    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
                                        viewBox="0 0 400 180" fill="none">
                                        <path d="M60,140 C100,100 160,60 220,80 C270,96 310,50 360,40"
                                            stroke="#01decb" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.5" />
                                        <circle cx="60" cy="140" r="4" fill="#01decb" />
                                        <circle cx="220" cy="80" r="5" fill="#01decb" />
                                        <circle cx="360" cy="40" r="4" fill="#01decb" />
                                        <circle cx="60" cy="140" r="10" fill="#01decb" fillOpacity="0.15" />
                                        <circle cx="220" cy="80" r="12" fill="#01decb" fillOpacity="0.15" />
                                    </svg>
                                </Box>

                                {/* uptime strip */}
                                <Flex bg="#0a1628" px={5} py={4} align="center" justify="space-between"
                                    borderTop="1px solid" borderColor="rgba(255,255,255,0.06)">
                                    <Box>
                                        <Text fontFamily="'Syne',sans-serif" fontWeight={500}
                                            fontSize="1.4rem" color="#01decb" lineHeight={1}>99.99%</Text>
                                        <Text color="#9AA4B2" fontSize="10px">Platform Uptime</Text>
                                    </Box>
                                    <Flex align="center" gap={2} bg="rgba(1,222,203,0.08)"
                                        border="1px solid" borderColor="#01decb33"
                                        borderRadius="full" px={3} py={2}>
                                        <div className="live-dot" />
                                        <Text color="#01decb" fontSize="11px" fontWeight={500}>All Systems Operational</Text>
                                    </Flex>
                                </Flex>
                            </Box>
                        </Box>
                    </Grid>
                </Box>
            </Box>

            {/* ── CORE TELEMATICS CAPABILITIES ─────────────────────────────────── */}
            <Box bg="#0D1B2A" py={{ base: 16, md: 24 }}>
                <Box maxW="1200px" mx="auto" px={{ base: 5, md: 10 }}>
                    <Box textAlign="center" mb={{ base: 12, md: 16 }}>
                        <Text fontFamily="'Syne', sans-serif" fontWeight={500}
                            fontSize={{ base: '1.8rem', md: '2.5rem', lg: '3rem' }}
                            color="white" lineHeight={1.1} mb={3}>
                            Core Telematics{' '}
                            <Box as="span" color="#01decb" position="relative"
                                _after={{ content: '""', position: 'absolute', bottom: '-4px', left: 0, width: '100%', height: '3px', background: '#01decb', opacity: 0.4, borderRadius: '2px' }}>
                                Capabilities
                            </Box>
                        </Text>
                        <Text color="#9AA4B2" fontSize={{ base: 'sm', md: 'md' }}
                            maxW="460px" mx="auto" lineHeight={1.7}>
                            A complete suite of tools to monitor, manage, and optimize your connected fleet operations.
                        </Text>
                    </Box>

                    <Grid templateColumns={{ base: '1fr', sm: 'repeat(2,1fr)', lg: 'repeat(4,1fr)' }}
                        gap={4}>
                        {capabilities.map((cap, i) => (
                            <Box key={cap.title} className="cap-card"
                                bg="#111f30" border="1px solid" borderColor="whiteAlpha.300"
                                borderRadius="2xl" p={6}>
                                <Flex w={10} h={10} borderRadius="lg"
                                    bg={cap.color === '#01decb' ? '#01deccff' : '#7c6af7ff'}
                                    align="center" justify="center" mb={4} color={'#0a0a0aff'}>
                                    <cap.icon size={20} />
                                </Flex>
                                <Text fontFamily="'Syne',sans-serif" fontWeight={600}
                                    color="white" fontSize="sm" mb={2}>{cap.title}</Text>
                                <Text color="#9AA4B2" fontSize="xs" lineHeight={1.65}>{cap.desc}</Text>
                            </Box>
                        ))}
                    </Grid>
                </Box>
            </Box>

            {/* ── QUOTE BAND ────────────────────────────────────────────────────── */}
            <Box bg="#01decb" py={{ base: 14, md: 20 }} position="relative" overflow="hidden">
                <Box position="absolute" inset={0} opacity={0.06}
                    background="repeating-linear-gradient(45deg,#000 0,#000 1px,transparent 0,transparent 50%)"
                    backgroundSize="20px 20px" />
                <Box maxW="800px" mx="auto" px={{ base: 5, md: 10 }} textAlign="center" position="relative">
                    <Box fontFamily="'Syne', sans-serif" fontWeight={600}
                        fontSize={{ base: '1.4rem', md: '1.8rem', lg: '2.2rem' }}
                        color="#07111f" lineHeight={1.3}>
                        "All fleet data is available to platform partners in real
                        time — full operational transparency, no black box."
                    </Box>
                </Box>
            </Box>

            {/* ── BUILT FOR DEVELOPERS ─────────────────────────────────────────── */}
            <Box bg="#0D1B2A" py={{ base: 16, md: 24 }}>
                <Box maxW="1200px" mx="auto" px={{ base: 5, md: 10 }}>
                    <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }}
                        gap={{ base: 12, md: 20 }} alignItems="center">

                        {/* LEFT: API mockup */}
                        <Box bg="#091524" borderRadius="2xl" overflow="hidden"
                            border="1px solid" borderColor="rgba(1,222,203,0.15)"
                            fontFamily="'DM Mono', monospace">

                            {/* tab bar */}
                            <Flex bg="#07111f" px={4} py={3} gap={3} align="center"
                                borderBottom="1px solid" borderColor="rgba(255,255,255,0.06)">
                                {['Vehicle', 'aDryv Event API', 'Partner Platform'].map((t, i) => (
                                    <Box key={t} px={3} py={1} borderRadius="md" fontSize="11px"
                                        bg={i === 1 ? '#01decb22' : 'transparent'}
                                        color={i === 1 ? '#01decb' : '#9AA4B2'}
                                        border={i === 1 ? '1px solid' : '1px solid transparent'}
                                        borderColor={i === 1 ? '#01decb44' : 'transparent'}>
                                        {t}
                                    </Box>
                                ))}
                            </Flex>

                            {/* code block */}
                            <Box px={5} py={6} fontSize="12px" lineHeight={1.9}>
                                {[
                                    { t: '// Subscribe to live vehicle events', c: '#9AA4B2' },
                                    { t: "const stream = aDryv.events.subscribe({", c: '#01decb' },
                                    { t: "  vehicle_id: 'VEH-002-LOS',", c: 'white' },
                                    { t: "  events: ['location', 'battery', 'alerts'],", c: 'white' },
                                    { t: "  interval_ms: 500,", c: 'white' },
                                    { t: "});", c: '#01decb' },
                                    { t: '', c: 'white' },
                                    { t: "stream.on('location', (data) => {", c: '#7c6af7' },
                                    { t: "  // lat: 6.5244, lng: 3.3792", c: '#9AA4B2' },
                                    { t: "  dispatch.update(data);", c: 'white' },
                                    { t: "});", c: '#7c6af7' },
                                ].map((line, i) => (
                                    <Box key={i} color={line.c}>{line.t || '\u00A0'}</Box>
                                ))}
                            </Box>

                            {/* bottom bar */}
                            <Flex bg="#07111f" px={4} py={3} align="center" gap={2}
                                borderTop="1px solid" borderColor="rgba(255,255,255,0.06)">
                                <div className="live-dot" />
                                <Text color="#9AA4B2" fontSize="10px">Stream active · 2 vehicles connected</Text>
                            </Flex>
                        </Box>

                        {/* RIGHT: copy */}
                        <Box>
                            <Flex mb={5} align="center" gap={2} display="inline-flex"
                                border="0.5px solid" borderColor="#01decb4c" borderRadius="20px"
                                px={3} py={1} bg="#00867b22">
                                <MdCode color="#01decb" size={13} />
                                <Text color="#01decb" fontSize="10px" letterSpacing="wider" fontWeight={500}>
                                    API INTEGRATION
                                </Text>
                            </Flex>

                            <Text fontFamily="'Syne', sans-serif" fontWeight={700}
                                fontSize={{ base: '1.8rem', md: '2.2rem', lg: '2.6rem' }}
                                color="white" lineHeight={1.15} mb={4}>
                                Built for{' '}
                                <Box as="span" color="#01decb" position="relative"
                                    _after={{ content: '""', position: 'absolute', bottom: '-3px', left: 0, width: '100%', height: '2px', background: '#01decb', opacity: 0.4, borderRadius: '2px' }}>
                                    Developers
                                </Box>
                            </Text>

                            <Text color="#9AA4B2" fontSize={{ base: 'md', md: 'lg' }}
                                lineHeight={1.8} mb={5}>
                                aDryv sits at the raw, high-speed data between physical hardware
                                and your software stack. We bridge the transport MQTT
                                protocols, hardware firmware updates, and data normalisation.
                            </Text>

                            <Text color="#9AA4B2" fontSize={{ base: 'md', md: 'lg' }}
                                lineHeight={1.8} mb={8}>
                                You interact with clean REST endpoints and real-time WebSockets.
                                Subscribe to any live stream you care about, and command individual
                                vehicles with simple JSON requests.
                            </Text>

                            <Button fontFamily="'DM Sans',sans-serif" fontWeight={600}
                                variant="ghost" color="#01decb" fontSize="sm" px={0}
                                _hover={{ color: 'white', bg: 'transparent' }}>
                                View Full API Reference →
                            </Button>
                        </Box>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};

export default ForiTechPage;