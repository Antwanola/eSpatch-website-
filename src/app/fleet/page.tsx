'use client';
import { Box, Button, Flex, Grid, Text } from '@chakra-ui/react';
import React from 'react';
import MainMargin from '../component/MarginGuides/MianMargin';
import { MdGpsFixed, MdElectricMoped, MdBolt } from 'react-icons/md';
import { TbBatteryCharging, TbRoute, TbTool } from 'react-icons/tb';
import { RiMotorbikeFill } from 'react-icons/ri';
import { IoTimerOutline } from "react-icons/io5";

// ── Data ──────────────────────────────────────────────────────────────────────

const stats = [
    { value: '81', label: 'Active Riders' },
    { value: '5', label: 'Swap Stations' },
    { value: '10', label: 'Daily Deliveries (k)' },
];

const swapFeatures = [
    {
        icon: TbBatteryCharging,
        color: '#000000ff',
        bg: '#01deccff',
        title: 'Proprietary Battery Fit',
        desc: 'Custom-designed battery packs engineered for Nigerian roads, ensuring perfect cargo balance.',
    },
    {
        icon: TbRoute,
        color: '#ffffffff',
        bg: '#7d6af7ff',
        title: 'Near-Zero Downtime Swap Cycle',
        desc: 'Riders execute a fully charged swap in under 90 seconds. Zero idle time, maximum throughput.',
    },
    {
        icon: TbTool,
        color: '#000000ff',
        bg: '#01deccff',
        title: 'Fast-Charge Backup',
        desc: 'Every station has full-charge fallback ensuring riders are never stranded during peak hours.',
    },
];

const assembledPerks = [
    'Load capacity rated & tested',
    'Zero compromise reliability',
    'Supporting local employment',
];

const specCards = [
    { icon: MdElectricMoped, label: 'Electric Powertrain', value: '100%', sub: 'Zero-emission fleet' },
    { icon: IoTimerOutline, label: 'Swap Time', value: '< 90s', sub: 'Per battery exchange' },
    { icon: TbBatteryCharging, label: 'Range Per Charge', value: '120km', sub: 'Lagos urban cycle' },
];

// ── Component ─────────────────────────────────────────────────────────────────

const FleetPage: React.FC = () => {
    return (
        <Box bg="#0D1B2A">
            <style>{`
        @keyframes blink-glow {
          0%, 100% { opacity: 1; filter: drop-shadow(0 0 6px #01decb) drop-shadow(0 0 14px #01decb); }
          50% { opacity: 0.1; filter: none; }
        }
        .gps-icon {
          animation: blink-glow 1.2s ease-in-out infinite;
          color: #01decb;
          display: flex; align-items: center; flex-shrink: 0;
        }
        @keyframes border-spin {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .gradient-border {
          border-radius: 20px; padding: 1.5px;
          background: linear-gradient(135deg, #01decb, #7c6af7, #01decb);
          background-size: 200% 200%;
          animation: border-spin 5s ease infinite;
        }
        .gradient-border-inner {
          background: #111f30; border-radius: 18px; padding: 28px;
        }
        .chart-line {
          stroke-dasharray: 400; stroke-dashoffset: 400;
          animation: draw 2s ease forwards 0.5s;
        }
        @keyframes draw { to { stroke-dashoffset: 0; } }
        .stat-divider {
          width: 1px; align-self: stretch;
          background: linear-gradient(to bottom, transparent, rgba(1,222,203,0.3), transparent);
        }
        .map-bg {
          position: absolute; inset: 0;
          background-image: radial-gradient(circle, rgba(1,222,203,0.55) 1px, transparent 1px);
          background-size: 28px 28px;
          opacity: 0.2;
        }
        .pulse-dot {
          width: 8px; height: 8px;
          background: #01decb; border-radius: 50%; flex-shrink: 0;
          animation: blink-glow 2s ease-in-out infinite;
        }
      `}</style>

            {/* ── Section 1: Hero — split layout (page 2 style) ── */}
            <Box bg="#080f1c" position="relative" overflow="hidden">
                <MainMargin>
                    <Flex
                        flexDir={{ base: 'column', md: 'row' }}
                        alignItems="center"
                        gap={{ base: 8, md: 12 }}
                        py={{ base: 16, md: 24 }}
                        px={{ base: 4, md: 0 }}
                    >
                        {/* Left: heading + copy */}
                        <Box w={{ base: '100%', md: '50%' }} flexShrink={0}>
                            <Flex mb={5} align="center" display="inline-flex" gap={2}
                                border="0.5px solid" borderRadius="20px" px={3} py={1}
                                borderColor="#01decb4c" bg="#00867b4c" whiteSpace="nowrap">
                                <span className="gps-icon"><MdGpsFixed size={13} color="currentColor" /></span>
                                <Text color="#01decb" letterSpacing="wider" fontWeight="medium"
                                    fontSize="10px" fontFamily="'DM Sans', sans-serif">
                                    Built for Lagos. Ready for Africa.
                                </Text>
                            </Flex>

                            <Text fontFamily="'Syne', sans-serif" fontWeight={600}
                                fontSize={{ base: '2.8rem', md: '3.5rem', lg: '4.2rem' }}
                                color="white" lineHeight={1.05} letterSpacing="-0.03em" mb={5}>
                                The Future of{' '}
                                <Box as="span" color="#01decb">Urban</Box>
                                <br />Logistics.
                            </Text>

                            <Text fontFamily="'DM Sans', sans-serif" color="#9AA4B2"
                                fontSize={{ base: 'md', md: 'lg' }} lineHeight={1.75} maxW="380px" mb={8}>
                                Zero emissions. Data-driven. Our purpose-built electric fleet is
                                engineered for last-mile delivery across the continent.
                            </Text>

                            <Flex gap={4} flexWrap="wrap">
                                <Button fontFamily="'DM Sans', sans-serif" fontWeight={600} fontSize="sm"
                                    bg="white" color="#0D1B2A" px={7} py={5} borderRadius="full"
                                    _hover={{ bg: '#01decb', color: 'white', boxShadow: '0 8px 30px rgba(1,222,203,0.25)', transform: 'translateY(-2px)' }}
                                    transition="all 0.2s">
                                    Explore Fleet
                                </Button>
                                <Button fontFamily="'DM Sans', sans-serif" fontWeight={600} fontSize="sm"
                                    bg="transparent" color="white" px={7} py={5} borderRadius="full"
                                    border="1px solid" borderColor="whiteAlpha.300"
                                    _hover={{ borderColor: '#01decb', color: '#01decb', transform: 'translateY(-2px)' }}
                                    transition="all 0.2s">
                                    View Specs →
                                </Button>
                            </Flex>
                        </Box>

                        {/* Right: bike image card */}
                        <Box w={{ base: '100%', md: '50%' }} position="relative">
                            <Box borderRadius="2xl" overflow="hidden"
                                border="1px solid" borderColor="rgba(1,222,203,0.2)"
                                bg="#0a1628" minH={{ base: '220px', md: '320px' }}
                                display="flex" alignItems="center" justifyContent="center">
                                <img src="/bike.png" alt="eSpatch electric bike"
                                    style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
                                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                                />
                            </Box>
                            {/* Floating stat chip */}
                            <Box position="absolute" bottom={4} left={4}
                                bg="rgba(10,22,40,0.92)" backdropFilter="blur(8px)"
                                border="1px solid" borderColor="#01decb33"
                                borderRadius="xl" px={4} py={3}>
                                <Text fontFamily="'Syne', sans-serif" fontWeight={600}
                                    fontSize="1.4rem" color="#01decb" lineHeight={1}>100%</Text>
                                <Text fontFamily="'DM Sans', sans-serif" color="#9AA4B2" fontSize="10px">
                                    Electric Fleet
                                </Text>
                            </Box>
                        </Box>
                    </Flex>
                </MainMargin>
            </Box>

            {/* ── Section 2: Purpose-Built — white split layout (page 2 "Bridging the Gap" style) ── */}
            <Box bg="#ffffff" py={{ base: 16, md: 24 }} px={{ base: 4, md: 10 }}>
                <MainMargin>
                    <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }}
                        gap={{ base: 10, md: 20 }} alignItems="start" maxW="1100px" mx="auto">

                        {/* Left: heading + stats */}
                        <Box>
                            <Text fontFamily="'Syne', sans-serif" fontWeight={600}
                                fontSize={{ base: '1.8rem', md: '2.2rem', lg: '2.75rem' }}
                                color="#0D1B2A" lineHeight={1.15} mb={6}>
                                Purpose-Built for{' '}
                                <Box as="span" color="#12635c" position="relative"
                                    _after={{ content: '""', position: 'absolute', bottom: '-3px', left: 0, width: '100%', height: '2px', background: '#01decb', opacity: 0.5, borderRadius: '2px' }}>
                                    Delivery
                                </Box>
                            </Text>

                            {/* Stats row */}
                            <Flex gap={10} mt={8} flexWrap="wrap">
                                {stats.map((s, i) => (
                                    <React.Fragment key={s.label}>
                                        <Box>
                                            <Text fontFamily="'Syne', sans-serif" fontWeight={700}
                                                fontSize="2rem" color="#01decb" lineHeight={1}>{s.value}</Text>
                                            <Text fontFamily="'DM Sans', sans-serif" color="#4D596E"
                                                fontSize="xs" mt={1}>{s.label}</Text>
                                        </Box>
                                        {i < stats.length - 1 && <div className="stat-divider" />}
                                    </React.Fragment>
                                ))}
                            </Flex>
                        </Box>

                        {/* Right: body copy */}
                        <Box>
                            <Text fontFamily="'DM Sans', sans-serif" color="#4D596E"
                                fontSize={{ base: 'md', md: 'lg' }} lineHeight={1.8} mb={5}>
                                Lagos is one of the fastest-growing cities in the world, yet its
                                last-mile delivery infrastructure remains fragmented and carbon-heavy.{' '}
                                <Box as="span" fontWeight={600} color="#0D1B2A">eSpatch</Box>{' '}
                                was engineered from the ground up for Nigerian road conditions,
                                high-efficiency load delivery, and zero-compromise uptime.
                            </Text>
                            <Text fontFamily="'DM Sans', sans-serif" color="#4D596E"
                                fontSize={{ base: 'md', md: 'lg' }} lineHeight={1.8}>
                                By combining proprietary battery management systems with a professionally
                                managed fleet of 100% electric vehicles, we created a system that isn't
                                just "green" — it's smarter and more efficient than traditional
                                fossil-fuel alternatives.
                            </Text>
                        </Box>
                    </Grid>
                </MainMargin>
            </Box>

            {/* ── Section 3: Spec Cards — dark card grid (page 2 "Ecosystem" style) ── */}
            <Box bg="#0D1B2A" py={{ base: 16, md: 24 }} px={{ base: 4, md: 10 }}>
                <MainMargin>
                    <Box textAlign="center" mb={{ base: 10, md: 14 }}>
                        <Text fontFamily="'Syne', sans-serif" fontWeight={700}
                            fontSize={{ base: '1.8rem', md: '2.5rem', lg: '3rem' }}
                            color="white" lineHeight={1.1} mb={3}>
                            Fleet{' '}
                            <Box as="span" color="#01decb" position="relative"
                                _after={{ content: '""', position: 'absolute', bottom: '-4px', left: 0, width: '100%', height: '3px', background: '#01decb', opacity: 0.4, borderRadius: '2px' }}>
                                Specifications
                            </Box>
                        </Text>
                        <Text fontFamily="'DM Sans', sans-serif" color="#9AA4B2"
                            fontSize={{ base: 'sm', md: 'md' }} maxW="440px" mx="auto" lineHeight={1.7}>
                            Every metric engineered for Nigerian road conditions and last-mile performance.
                        </Text>
                    </Box>

                    <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
                        gap={5} maxW="1000px" mx="auto">
                        {specCards.map((spec, i) => (
                            i === 1 ? (
                                // Highlighted middle card — gradient border (page 2 highlighted card style)
                                <Box key={spec.label}>
                                    <div className="gradient-border">
                                        <div className="gradient-border-inner">
                                            <Flex w={10} h={10} borderRadius="lg" bg="#01decb18"
                                                align="center" justify="center" mb={5} color="#01decb">
                                                <spec.icon size={20} />
                                            </Flex>
                                            <Text fontFamily="'DM Sans', sans-serif" fontSize="9px"
                                                letterSpacing="0.15em" color="#01decb" mb={2} fontWeight={600}>
                                                ✓ KEY METRIC
                                            </Text>
                                            <Text fontFamily="'Syne', sans-serif" fontWeight={700}
                                                fontSize="2rem" color="#01decb" lineHeight={1} mb={1}>
                                                {spec.value}
                                            </Text>
                                            <Text fontFamily="'Syne', sans-serif" fontWeight={600}
                                                color="white" fontSize="sm" mb={1}>{spec.label}</Text>
                                            <Text fontFamily="'DM Sans', sans-serif" color="#9AA4B2" fontSize="xs">
                                                {spec.sub}
                                            </Text>
                                        </div>
                                    </div>
                                </Box>
                            ) : (
                                <Box key={spec.label}
                                    bg="#111f30" border="1px solid" borderColor="whiteAlpha.100"
                                    borderRadius="2xl" p={7}
                                    transition="border-color 0.2s, transform 0.2s"
                                    _hover={{ borderColor: '#01decb22', transform: 'translateY(-4px)' }}>
                                    <Flex w={10} h={10} borderRadius="lg" bg="#01decb18"
                                        align="center" justify="center" mb={5} color="#01decb">
                                        <spec.icon size={20} />
                                    </Flex>
                                    <Text fontFamily="'DM Sans', sans-serif" fontSize="9px"
                                        letterSpacing="0.15em" color="#9AA4B2" mb={2} fontWeight={600}>
                                        ✓ SPEC
                                    </Text>
                                    <Text fontFamily="'Syne', sans-serif" fontWeight={700}
                                        fontSize="2rem" color="#01decb" lineHeight={1} mb={1}>
                                        {spec.value}
                                    </Text>
                                    <Text fontFamily="'Syne', sans-serif" fontWeight={600}
                                        color="white" fontSize="sm" mb={1}>{spec.label}</Text>
                                    <Text fontFamily="'DM Sans', sans-serif" color="#9AA4B2" fontSize="xs">
                                        {spec.sub}
                                    </Text>
                                </Box>
                            )
                        ))}
                    </Grid>
                </MainMargin>
            </Box>

            {/* ── Section 4: Swap Network — light split layout (page 2 "Sustainable Growth" style) ── */}
            <Box bg="#DDE4EA" py={{ base: 16, md: 24 }} px={{ base: 4, md: 10 }}>
                <MainMargin>
                    <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }}
                        gap={{ base: 12, md: 20 }} alignItems="center" maxW="1100px" mx="auto">

                        {/* Left: swap feature cards */}
                        <Box>
                            <Text fontFamily="'Syne', sans-serif" fontWeight={700}
                                fontSize={{ base: '1.8rem', md: '2.2rem', lg: '2.75rem' }}
                                color="#0D1B2A" lineHeight={1.15} mb={4}>
                                The Swap{' '}
                                <Box as="span" color="#12635c" position="relative"
                                    _after={{ content: '""', position: 'absolute', bottom: '-3px', left: 0, width: '100%', height: '2px', background: '#01decb', opacity: 0.5, borderRadius: '2px' }}>
                                    Network
                                </Box>
                            </Text>
                            <Text fontFamily="'DM Sans', sans-serif" color="#4D596E"
                                fontSize={{ base: 'md', md: 'lg' }} lineHeight={1.75} mb={8} maxW="400px">
                                Fast-charging infrastructure strategically placed across Lagos
                                corridors for near-zero downtime. Our operations are directly
                                aligned for maximum rider efficiency.
                            </Text>

                            <Flex flexDir="column" gap={4}>
                                {swapFeatures.map((f) => (
                                    <Flex key={f.title} align="flex-start" gap={4}
                                        bg="white" border="1px solid" borderColor="gray.100"
                                        borderRadius="xl" px={5} py={5}
                                        transition="border-color 0.2s, transform 0.2s"
                                        _hover={{ borderColor: '#01decb66', transform: 'translateX(4px)' }}>
                                        <Flex w="38px" h="38px" borderRadius="lg" bg={f.bg}
                                            align="center" justify="center" flexShrink={0}>
                                            <f.icon size={18} color={f.color} />
                                        </Flex>
                                        <Box>
                                            <Text fontFamily="'Syne', sans-serif" fontWeight={600}
                                                color="#0D1B2A" fontSize="sm" mb={1}>{f.title}</Text>
                                            <Text fontFamily="'DM Sans', sans-serif" color="#4D596E"
                                                fontSize="sm" lineHeight={1.65}>{f.desc}</Text>
                                        </Box>
                                    </Flex>
                                ))}
                            </Flex>
                        </Box>

                        {/* Right: map / coverage chart (page 2 chart card style) */}
                        <Box bg="#0D1B2A" borderRadius="2xl" p={6}
                            border="1px solid" borderColor="rgba(1,222,203,0.15)"
                            position="relative" overflow="hidden" minH="360px">
                            <div className="map-bg" />
                            <Box position="absolute" top="40%" left="50%" transform="translate(-50%,-50%)"
                                w="260px" h="260px" pointerEvents="none"
                                background="radial-gradient(ellipse, rgba(1,222,203,0.15) 0%, transparent 70%)" />

                            <Box position="relative" zIndex={1}>
                                <Text fontFamily="'DM Sans', sans-serif" fontSize="10px"
                                    letterSpacing="0.12em" color="#9AA4B2" mb={1}>
                                    COVERAGE RANGE
                                </Text>
                                <Text fontFamily="'Syne', sans-serif" fontWeight={700}
                                    fontSize="1.8rem" color="white" lineHeight={1} mb={6}>
                                    Growing{' '}
                                    <Box as="span" color="#01decb">&gt;150km²</Box>
                                </Text>

                                {/* SVG network map */}
                                <Box opacity={0.5}>
                                    <svg width="100%" viewBox="0 0 400 220" fill="none">
                                        <line x1="60" y1="40" x2="200" y2="110" stroke="#01decb" strokeWidth="1" />
                                        <line x1="200" y1="110" x2="330" y2="60" stroke="#01decb" strokeWidth="1" />
                                        <line x1="200" y1="110" x2="160" y2="190" stroke="#01decb" strokeWidth="1" />
                                        <line x1="160" y1="190" x2="280" y2="200" stroke="#01decb" strokeWidth="1" />
                                        <line x1="280" y1="200" x2="330" y2="130" stroke="#01decb" strokeWidth="1" />
                                        <line x1="330" y1="60" x2="330" y2="130" stroke="#01decb" strokeWidth="1" />
                                        <line x1="60" y1="40" x2="60" y2="140" stroke="#01decb" strokeWidth="1" />
                                        <line x1="60" y1="140" x2="160" y2="190" stroke="#01decb" strokeWidth="1" />
                                        <circle cx="60" cy="40" r="4" fill="#01decb" />
                                        <circle cx="200" cy="110" r="6" fill="#01decb" />
                                        <circle cx="330" cy="60" r="4" fill="#01decb" />
                                        <circle cx="160" cy="190" r="4" fill="#01decb" />
                                        <circle cx="280" cy="200" r="4" fill="#01decb" />
                                        <circle cx="330" cy="130" r="4" fill="#01decb" />
                                        <circle cx="60" cy="140" r="4" fill="#01decb" />
                                    </svg>
                                </Box>
                            </Box>

                            {/* Status pill */}
                            <Flex position="absolute" bottom={6} left={6} zIndex={1}
                                align="center" gap={2} bg="rgba(1,222,203,0.08)"
                                border="1px solid" borderColor="#01decb33"
                                borderRadius="full" px={3} py={2}>
                                <div className="pulse-dot" />
                                <Text fontFamily="'DM Sans', sans-serif" fontSize="11px"
                                    color="#01decb" fontWeight={500}>
                                    Lagos Network — Active
                                </Text>
                            </Flex>
                        </Box>
                    </Grid>
                </MainMargin>
            </Box>

            {/* ── Section 5: Assembled in Lagos — dark split layout (page 2 "Leadership" style) ── */}
            <Box bg="#0D1B2A" py={{ base: 16, md: 24 }} px={{ base: 4, md: 10 }}>
                <MainMargin>
                    <Flex justify="space-between" align="flex-end" mb={{ base: 10, md: 14 }}
                        flexWrap="wrap" gap={4} maxW="1100px" mx="auto">
                        <Box>
                            <Text fontFamily="'Syne', sans-serif" fontWeight={700}
                                fontSize={{ base: '1.8rem', md: '2.5rem' }}
                                color="white" lineHeight={1.1} mb={2}>
                                Assembled in Lagos
                            </Text>
                            <Text fontFamily="'DM Sans', sans-serif" color="#9AA4B2"
                                fontSize="sm" maxW="320px" lineHeight={1.6}>
                                Building local capacity for a cleaner, smarter Africa.
                            </Text>
                        </Box>
                        <Button fontFamily="'DM Sans', sans-serif" fontWeight={600} fontSize="sm"
                            variant="ghost" color="#01decb" p={0}
                            _hover={{ color: 'white', bg: 'transparent' }}>
                            Meet Our Bikes →
                        </Button>
                    </Flex>

                    <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }}
                        gap={{ base: 10, md: 16 }} alignItems="start" maxW="1100px" mx="auto">

                        {/* Left: perks + copy */}
                        <Box>
                            <Flex mb={6} align="center" display="inline-flex" gap={2}
                                border="0.5px solid" borderRadius="20px" px={3} py={1}
                                borderColor="#01decb4c" bg="#00867b4c" whiteSpace="nowrap">
                                <Box w={2} h={2} borderRadius="full" bg="#01decb" />
                                <Text color="#01decb" letterSpacing="wider" fontWeight={600}
                                    fontSize="10px" fontFamily="'DM Sans', sans-serif">
                                    MADE IN NIGERIA
                                </Text>
                            </Flex>

                            <Text fontFamily="'DM Sans', sans-serif" color="#9AA4B2"
                                fontSize={{ base: 'md', md: 'lg' }} lineHeight={1.75} mb={8} maxW="400px">
                                We're building local capacity. Our fleet is assembled right here in
                                Lagos, ensuring reduced import costs, faster maintenance turnaround,
                                and the creation of skilled technical jobs within our community.
                            </Text>

                            <Flex flexDir="column" gap={3}>
                                {assembledPerks.map((p) => (
                                    <Flex key={p} align="center" gap={3}>
                                        <Box display="inline-flex" alignItems="center" justifyContent="center"
                                            w="18px" h="18px" borderRadius="full"
                                            border="1.5px solid" borderColor="#01decb66"
                                            color="#01decb" fontSize="10px" flexShrink={0}>
                                            ✓
                                        </Box>
                                        <Text fontFamily="'DM Sans', sans-serif" color="#9AA4B2"
                                            fontSize="sm" fontWeight={500}>{p}</Text>
                                    </Flex>
                                ))}
                            </Flex>
                        </Box>

                        {/* Right: assembly image card */}
                        <Box borderRadius="2xl" overflow="hidden"
                            bg="#111f30" border="1px solid" borderColor="whiteAlpha.100"
                            minH="300px" position="relative"
                            transition="border-color 0.2s, transform 0.2s"
                            _hover={{ borderColor: '#01decb33', transform: 'translateY(-4px)' }}>
                            <img src="/bike.png" alt="Bikes assembled in Lagos"
                                style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
                                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                            />
                        </Box>
                    </Grid>
                </MainMargin>
            </Box>

            {/* ── CTA ── */}
            <Box bg="#0a1628" borderTop="1px solid" borderColor="whiteAlpha.100"
                py={{ base: 16, md: 24 }} px={{ base: 4, md: 10 }}
                textAlign="center" position="relative" overflow="hidden">
                <Box position="absolute" top="50%" left="50%" transform="translate(-50%,-50%)"
                    w="600px" h="300px" pointerEvents="none"
                    background="radial-gradient(ellipse, rgba(1,222,203,0.07) 0%, transparent 70%)" />
                <Box position="relative" zIndex={1} maxW="540px" mx="auto">
                    <Text fontFamily="'Syne', sans-serif" fontWeight={700}
                        fontSize={{ base: '1.8rem', md: '2.5rem', lg: '3rem' }}
                        color="white" lineHeight={1.15} mb={4}>
                        Ready to Scale Your{' '}
                        <Box as="span" color="#01decb" position="relative"
                            _after={{ content: '""', position: 'absolute', bottom: '-4px', left: 0, width: '100%', height: '3px', background: '#01decb', opacity: 0.4, borderRadius: '2px' }}>
                            Logistics?
                        </Box>
                    </Text>
                    <Text fontFamily="'DM Sans', sans-serif" color="#9AA4B2"
                        fontSize={{ base: 'md', md: 'lg' }} lineHeight={1.7} mb={10}>
                        Join leading platforms trusting eSpatch for reliable,
                        liability-free B2B fulfilment.
                    </Text>
                    <Button fontFamily="'DM Sans', sans-serif" fontWeight={600} fontSize="md"
                        bg="white" color="#0D1B2A" px={8} py={6} borderRadius="full"
                        _hover={{ bg: '#01decb', color: 'white', transform: 'translateY(-2px)', boxShadow: '0 8px 30px rgba(1,222,203,0.25)' }}
                        transition="all 0.2s">
                        Get in Touch →
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default FleetPage;