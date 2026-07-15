'use client';
import { Box, Button, Flex, Grid, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import MainMargin from '../component/MarginGuides/MianMargin';
import { MdGpsFixed, MdLocalShipping, MdShield, MdWbSunny } from 'react-icons/md';
import ProcessBox from '../component/MiniComponents/ProcessBox';
import { BsBoxFill } from 'react-icons/bs';
import { FaMapLocationDot } from 'react-icons/fa6';
import { RiMotorbikeFill } from 'react-icons/ri';
import { GiWallet } from 'react-icons/gi';
import { FiMonitor, FiCalendar } from 'react-icons/fi';
import { TbFileInvoice } from 'react-icons/tb';

const platformItems = [
  { title: 'Order Generation', desc: 'Driving volume and managing customer acquisition.' },
  { title: 'Customer Support', desc: 'Handling end-user queries and platform experience.' },
  { title: 'Marketing', desc: 'Brand promotion and product positioning.' },
];

const espatchItems = [
  { title: 'Rider Management', desc: 'Recruitment, training, and performance monitoring.' },
  { title: 'Vehicle Maintenance', desc: 'Ensuring fleet reliability and uptime.' },
  { title: 'Last-Mile Delivery', desc: 'Executing physical fulfilment safely and on time.' },
];

const slaItems = [
  {
    icon: FiCalendar,
    iconColor: '#7c6af7',
    iconBg: '#7c6af722',
    title: 'Schedule & Uptime',
    desc: 'Operating 6 days per week, guaranteeing 302 active delivery days per annum.',
  },
  {
    icon: MdWbSunny,
    iconColor: '#01decb',
    iconBg: '#01decb22',
    title: 'Weather Protocol',
    desc: 'Structured adverse weather adaptations ensuring safety without compromising core SLA commitments.',
  },
  {
    icon: TbFileInvoice,
    iconColor: '#01decb',
    iconBg: '#01decb22',
    title: 'Settlement Terms',
    desc: 'Strict weekly reconciliation and payout schedules with zero hidden fees.',
  },
];

const TealCheck = () => (
  <Box as="span" display="inline-flex" alignItems="center" justifyContent="center"
    w="18px" h="18px" borderRadius="full" border="1.5px solid" borderColor="#01decb66"
    color="#01decb" fontSize="10px" flexShrink={0} mt="2px">✓</Box>
);

const PurpleCheck = () => (
  <Box as="span" display="inline-flex" alignItems="center" justifyContent="center"
    w="18px" h="18px" borderRadius="full" border="1.5px solid" borderColor="#7c6af799"
    color="#7c6af7" fontSize="10px" flexShrink={0} mt="2px">✓</Box>
);

const HowItWorks: React.FC = () => {
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
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }
        @keyframes border-spin {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .liability-card {
          border-radius: 16px;
          padding: 2px;
          background: linear-gradient(135deg, #7c6af7, #01decb, #7c6af7);
          background-size: 200% 200%;
          animation: border-spin 4s ease infinite;
        }
        .liability-inner {
          background: #111f30;
          border-radius: 14px;
          padding: 28px 32px;
          display: flex;
          align-items: center;
          gap: 20px;
        }
        @media (max-width: 480px) {
          .liability-inner { flex-direction: column; text-align: center; }
        }
        .map-card {
          position: relative;
          background: #0a1628;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(1,222,203,0.15);
          min-height: 320px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 20px;
        }
        .map-dots {
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(circle, rgba(1,222,203,0.7) 1px, transparent 1px),
            radial-gradient(circle, rgba(1,222,203,0.4) 1px, transparent 1px),
            radial-gradient(circle, rgba(1,222,203,0.5) 1px, transparent 1px);
          background-size: 60px 60px, 40px 40px, 80px 80px;
          background-position: 10px 10px, 30px 30px, 50px 50px;
        }
        .map-glow {
          position: absolute;
          top: 40%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 200px;
          height: 200px;
          background: radial-gradient(ellipse, rgba(1,222,203,0.18) 0%, transparent 70%);
          pointer-events: none;
        }
        .pulse-dot {
          width: 10px;
          height: 10px;
          background: #01decb;
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
          flex-shrink: 0;
        }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(1,222,203,0.6); }
          50% { box-shadow: 0 0 0 6px rgba(1,222,203,0); }
        }
      `}</style>

      {/* ── Section 1: How eSpatch Works ── */}
      <MainMargin>
        <Flex as="section" overflow="hidden" bg="#0D1B2A" h="auto"
          justifyContent="space-between" alignItems="center"
          p={{ base: 6, md: 10, lg: '40px 30px' }}
          gap={{ base: 8, md: 12 }} flexDir={{ base: 'column', md: 'row' }}>
          <Box w={{ base: '100%', md: '50%' }}>
            <Flex mb={8} align="center" display="inline-flex" gap={2} border="0.5px solid"
              borderRadius="20px" px={3} py={1} borderColor="#01decb4c" bg="#00867b4c" whiteSpace="nowrap">
              <span className="gps-icon"><MdGpsFixed size={14} color="currentColor" /></span>
              <Box color="#01decb" as="span" letterSpacing="wider" fontWeight="medium" fontSize="10px">
                Enterprise Logistics Engine
              </Box>
            </Flex>
            <Box fontSize={{ base: '2.5rem', md: '3.5rem', lg: '4rem' }} fontWeight={700}
              fontFamily="'Syne', sans-serif" letterSpacing={{ base: '-0.02em', md: '-0.03em' }}
              lineHeight={{ base: 1.1, md: 1.05 }} color="white" mb={5}>
              How{' '}
              <Box as="span" color="#01decb" position="relative"
                _after={{ content: '""', position: 'absolute', bottom: '-4px', left: 0, width: '100%', height: '3px', background: '#01decb', opacity: 0.4, borderRadius: '2px' }}>
                eSpatch
              </Box>{' '}<br />Works
            </Box>
            <Text mb={8} fontFamily="'DM Sans', sans-serif" color="#9AA4B2"
              fontSize={{ base: 'md', md: 'lg' }} fontWeight={400} lineHeight={1.7} maxW="420px">
              A seamless B2B logistics model designed for scale, reliability, and operational excellence.
            </Text>
            <Button borderRadius={10} bg="#167c5729" color="#01decb" border="1px solid"
              borderColor="#01decb44" px={6} py={5} fontSize="sm" fontFamily="'DM Sans', sans-serif"
              _hover={{ bg: '#01decb22' }} transition="background 0.2s">
              View Process
            </Button>
          </Box>
          <Box w={{ base: '100%', md: '48%' }} borderRadius="2xl" overflow="hidden" flexShrink={0}>
            <img src="/it-works.png" alt="How eSpatch works"
              style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }} />
          </Box>
        </Flex>
      </MainMargin>

      {/* ── Section 2: Our Process ── */}
      <Box bg="#ffffffff" py={{ base: 14, md: 20 }} px={{ base: 4, md: 10 }}>
        <MainMargin>
          <Box textAlign="center" mb={{ base: 10, md: 14 }}>
            <Heading color="#0D1B2A" fontFamily="'Syne', sans-serif"
              fontSize={{ base: '2xl', md: '3xl', lg: '3rem' }} mb={4}>
              Our{' '}
              <Box as="span" color="#12635c" position="relative"
                _after={{ content: '""', position: 'absolute', bottom: '-4px', left: 0, width: '100%', height: '3px', background: '#01decb', opacity: 0.4, borderRadius: '2px' }}>
                Process
              </Box>
            </Heading>
            <Text color="#4D596E" fontFamily="'DM Sans', sans-serif"
              fontSize={{ base: 'md', md: 'lg' }} fontWeight={400} maxW="480px" mx="auto" lineHeight={1.7}>
              A collaborative structure designed for scale, transparency, and operational excellence.
            </Text>
          </Box>
          <Flex as="section" gap={{ base: 5, md: 6 }} flexDir={{ base: 'column', md: 'row' }}
            justifyContent="center" maxW="1200px" mx="auto">
            <ProcessBox step="Step 1" title="Platform Order"
              description="Orders are received directly from your platform via our robust API integration."
              icon={BsBoxFill} iconColor="d17b1fff" />
            <ProcessBox step="Step 2" title="Smart Dispatch"
              description="Our intelligent system assigns the nearest optimal rider for immediate pickup."
              icon={FaMapLocationDot} iconColor="d17b1fff" />
            <ProcessBox step="Step 3" title="Fulfilment"
              description="Professional, vetted riders ensure safe and timely delivery to the end customer."
              icon={RiMotorbikeFill} iconColor="d17b1fff" />
            <ProcessBox step="Step 4" title="Weekly Payment"
              description="Transparent weekly settlements with detailed performance and financial reporting."
              icon={GiWallet} iconColor="d17b1fff" />
          </Flex>
        </MainMargin>
      </Box>

      {/* ── Section 3: Who Does What ── */}
      <Box bg="#DDE4EA" py={{ base: 14, md: 24 }} px={{ base: 4, md: 10 }}>
        <Box textAlign="center" mb={{ base: 10, md: 14 }}>
          <Heading fontFamily="'Syne', sans-serif" fontWeight={600}
            fontSize={{ base: '2rem', md: '2.75rem', lg: '3rem' }}
            color="#0D1B2A" lineHeight={1.1} mb={3}>
            Who Does{' '}
            <Box as="span" color="#01decb" position="relative"
              _after={{ content: '""', position: 'absolute', bottom: '-4px', left: 0, width: '100%', height: '3px', background: '#01decb', opacity: 0.4, borderRadius: '2px' }}>
              What?
            </Box>
          </Heading>
          <Text color="#4D596E" fontFamily="'DM Sans', sans-serif"
            fontSize={{ base: 'sm', md: 'md' }} maxW="400px" mx="auto" lineHeight={1.6}>
            Clear delineation of duties for a seamless partnership.
          </Text>
        </Box>
        <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
          gap={5} maxW="1000px" mx="auto" mb={6}>
          {/* Platform */}
          <Box bg="#111f30" border="1px solid" borderColor="whiteAlpha.100" borderRadius="2xl" overflow="hidden">
            <Flex align="center" gap={3} px={6} py={5} borderBottom="1px solid" borderColor="whiteAlpha.100">
              <Flex w={9} h={9} bg="#1a2a3a" borderRadius="lg" align="center" justify="center" color="#9AA4B2">
                <FiMonitor size={16} />
              </Flex>
              <Text fontFamily="'DM Sans', sans-serif" fontWeight={700} fontSize="lg" color="white">
                Platform Responsibilities
              </Text>
            </Flex>
            {platformItems.map((item, i) => (
              <Box key={i} px={6} py={5}
                borderBottom={i < platformItems.length - 1 ? '1px solid' : 'none'}
                borderColor="whiteAlpha.100">
                <Flex align="flex-start" gap={3}>
                  <TealCheck />
                  <Box>
                    <Text fontFamily="'Syne', sans-serif" fontWeight={600} color="white" fontSize="sm" mb={1}>{item.title}</Text>
                    <Text fontFamily="'DM Sans', sans-serif" color="#9AA4B2" fontSize="sm" lineHeight={1.6}>{item.desc}</Text>
                  </Box>
                </Flex>
              </Box>
            ))}
          </Box>
          {/* eSpatch */}
          <Box bg="#151e2e" border="1px solid" borderColor="#7c6af733" borderRadius="2xl" overflow="hidden">
            <Flex align="center" gap={3} px={6} py={5} bg="#1c2540" borderBottom="1px solid" borderColor="#7c6af733">
              <Flex w={9} h={9} bg="#252d4a" borderRadius="lg" align="center" justify="center" color="#7c6af7">
                <MdLocalShipping size={16} />
              </Flex>
              <Text fontFamily="'DM Sans', sans-serif" fontWeight={700} fontSize="lg" color="white">
                eSpatch Responsibilities
              </Text>
            </Flex>
            {espatchItems.map((item, i) => (
              <Box key={i} px={6} py={5}
                borderBottom={i < espatchItems.length - 1 ? '1px solid' : 'none'}
                borderColor="#7c6af722">
                <Flex align="flex-start" gap={3}>
                  <PurpleCheck />
                  <Box>
                    <Text fontFamily="'Syne', sans-serif" fontWeight={600} color="white" fontSize="sm" mb={1}>{item.title}</Text>
                    <Text fontFamily="'DM Sans', sans-serif" color="#9AA4B2" fontSize="sm" lineHeight={1.6}>{item.desc}</Text>
                  </Box>
                </Flex>
              </Box>
            ))}
          </Box>
        </Grid>
        {/* Liability banner */}
        <Box maxW="1000px" mx="auto">
          <div className="liability-card">
            <div className="liability-inner">
              <Flex w="52px" h="52px" borderRadius="full" bg="#2a1a2e"
                border="2px solid" borderColor="#ff4d4d55" align="center" justify="center" flexShrink={0}>
                <MdShield size={24} color="#ff6b6b" />
              </Flex>
              <Box>
                <Text fontFamily="'DM Sans', sans-serif" fontWeight={500}
                  fontSize={{ base: 'lg', md: 'xl' }} color="white" mb={1}>
                  eSpatch bears ALL operational liability
                </Text>
                <Text fontFamily="'DM Sans', sans-serif" color="#9AA4B2"
                  fontSize={{ base: 'sm', md: 'md' }} lineHeight={1.6}>
                  You focus on growth. We handle the risks, insurance, and logistics operations.
                </Text>
              </Box>
            </div>
          </div>
        </Box>
      </Box>

      {/* ── Section 4: Coverage & SLA ── */}
      <Box bg="#0D1B2A" py={{ base: 14, md: 24 }} px={{ base: 4, md: 10 }}>
        <MainMargin>
          <Grid
            templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
            gap={{ base: 10, md: 16 }}
            maxW="1100px"
            mx="auto"
            alignItems="start"
          >
            {/* Left: Operational Coverage */}
            <Box>
              <Text
                fontFamily="'Syne', sans-serif"
                fontWeight={700}
                fontSize={{ base: '1.6rem', md: '2rem', lg: '2.25rem' }}
                color="white"
                lineHeight={1.15}
                mb={3}
              >
                Operational{' '}
                <Box as="span" color="#01decb" position="relative"
                  _after={{ content: '""', position: 'absolute', bottom: '-3px', left: 0, width: '100%', height: '2px', background: '#01decb', opacity: 0.4, borderRadius: '2px' }}>
                  Coverage
                </Box>
              </Text>
              <Text fontFamily="'DM Sans', sans-serif" color="#9AA4B2"
                fontSize="sm" lineHeight={1.7} mb={7} maxW="340px">
                Strategic geofenced zones optimised for density and speed.
              </Text>

              {/* Map card */}
              <Box className="map-card">
                <div className="map-dots" />
                <div className="map-glow" />

                {/* Active corridor label */}
                <Box position="relative" zIndex={1}>
                  <Text fontFamily="'DM Sans', sans-serif" fontSize="9px"
                    letterSpacing="0.15em" color="#9AA4B2" mb={1}>
                    ACTIVE CORRIDOR
                  </Text>
                  <Text fontFamily="'Syne', sans-serif" fontWeight={700}
                    fontSize="sm" color="white">
                    Sangotedo – Adeniji Adele
                  </Text>
                </Box>

                {/* Decorative network lines */}
                <Box position="absolute" inset={0} zIndex={0} opacity={0.25}>
                  <svg width="100%" height="100%" viewBox="0 0 400 320" fill="none">
                    <line x1="80" y1="60" x2="200" y2="140" stroke="#01decb" strokeWidth="0.8" />
                    <line x1="200" y1="140" x2="310" y2="80" stroke="#01decb" strokeWidth="0.8" />
                    <line x1="200" y1="140" x2="150" y2="240" stroke="#01decb" strokeWidth="0.8" />
                    <line x1="150" y1="240" x2="260" y2="260" stroke="#01decb" strokeWidth="0.8" />
                    <line x1="260" y1="260" x2="310" y2="180" stroke="#01decb" strokeWidth="0.8" />
                    <line x1="310" y1="80" x2="310" y2="180" stroke="#01decb" strokeWidth="0.8" />
                    <line x1="80" y1="60" x2="80" y2="180" stroke="#01decb" strokeWidth="0.8" />
                    <line x1="80" y1="180" x2="150" y2="240" stroke="#01decb" strokeWidth="0.8" />
                    <circle cx="80" cy="60" r="3" fill="#01decb" />
                    <circle cx="200" cy="140" r="4" fill="#01decb" />
                    <circle cx="310" cy="80" r="3" fill="#01decb" />
                    <circle cx="150" cy="240" r="3" fill="#01decb" />
                    <circle cx="260" cy="260" r="3" fill="#01decb" />
                    <circle cx="310" cy="180" r="3" fill="#01decb" />
                    <circle cx="80" cy="180" r="3" fill="#01decb" />
                  </svg>
                </Box>

                {/* Bottom status pill */}
                <Flex position="relative" zIndex={1} align="center" gap={2}
                  bg="rgba(1,222,203,0.08)" border="1px solid" borderColor="#01decb33"
                  borderRadius="full" px={3} py={2} w="fit-content">
                  <div className="pulse-dot" />
                  <Text fontFamily="'DM Sans', sans-serif" fontSize="11px"
                    color="#01decb" fontWeight={500}>
                    Battery Swap Stations Active
                  </Text>
                </Flex>
              </Box>
            </Box>

            {/* Right: SLA */}
            <Box>
              <Text
                fontFamily="'Syne', sans-serif"
                fontWeight={700}
                fontSize={{ base: '1.6rem', md: '2rem', lg: '2.25rem' }}
                color="white"
                lineHeight={1.15}
                mb={3}
              >
                Service Level{' '}
                <Box as="span" color="#7c6af7" position="relative"
                  _after={{ content: '""', position: 'absolute', bottom: '-3px', left: 0, width: '100%', height: '2px', background: '#7c6af7', opacity: 0.4, borderRadius: '2px' }}>
                  Agreement
                </Box>
              </Text>
              <Text fontFamily="'DM Sans', sans-serif" color="#9AA4B2"
                fontSize="sm" lineHeight={1.7} mb={7} maxW="380px">
                Guaranteed performance metrics you can build your business on.
              </Text>

              {/* SLA items */}
              <Flex flexDir="column" gap={4}>
                {slaItems.map((item, i) => (
                  <Flex key={i} align="flex-start" gap={4}
                    bg="#111f30"
                    border="1px solid"
                    borderColor="whiteAlpha.100"
                    borderRadius="xl"
                    px={5} py={5}
                    transition="border-color 0.2s, transform 0.2s"
                    _hover={{ borderColor: '#01decb33', transform: 'translateX(4px)' }}
                  >
                    <Flex
                      w="38px" h="38px" borderRadius="lg" flexShrink={0}
                      bg={item.iconBg}
                      align="center" justify="center"
                    >
                      <item.icon size={18} color={item.iconColor} />
                    </Flex>
                    <Box>
                      <Text fontFamily="'Syne', sans-serif" fontWeight={600}
                        color="white" fontSize="sm" mb={1}>
                        {item.title}
                      </Text>
                      <Text fontFamily="'DM Sans', sans-serif" color="#9AA4B2"
                        fontSize="sm" lineHeight={1.65}>
                        {item.desc}
                      </Text>
                    </Box>
                  </Flex>
                ))}
              </Flex>
            </Box>
          </Grid>
        </MainMargin>
      </Box>
      {/* ── Section 5: CTA ── */}
      <Box
        bg="#0a1628"
        borderTop="1px solid"
        borderColor="whiteAlpha.100"
        py={{ base: 16, md: 24 }}
        px={{ base: 4, md: 10 }}
        textAlign="center"
        position="relative"
        overflow="hidden"
      >
        {/* Subtle radial glow behind text */}
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          w="600px"
          h="300px"
          background="radial-gradient(ellipse, rgba(1,222,203,0.07) 0%, transparent 70%)"
          pointerEvents="none"
        />

        <Box position="relative" zIndex={1} maxW="560px" mx="auto">
          <Heading
            fontFamily="'Syne', sans-serif"
            fontWeight={700}
            fontSize={{ base: '1.8rem', md: '2.5rem', lg: '3rem' }}
            color="white"
            lineHeight={1.15}
            mb={4}
          >
            Ready to Scale Your{' '}
            <Box
              as="span"
              color="#01decb"
              position="relative"
              _after={{
                content: '""',
                position: 'absolute',
                bottom: '-4px',
                left: 0,
                width: '100%',
                height: '3px',
                background: '#01decb',
                opacity: 0.4,
                borderRadius: '2px',
              }}
            >
              Logistics?
            </Box>
          </Heading>

          <Text
            fontFamily="'DM Sans', sans-serif"
            color="#9AA4B2"
            fontSize={{ base: 'md', md: 'lg' }}
            lineHeight={1.7}
            mb={10}
          >
            Join leading platforms trusting eSpatch for reliable,
            liability-free B2B fulfilment.
          </Text>

          <Button
            fontFamily="'DM Sans', sans-serif"
            fontWeight={600}
            fontSize="md"
            bg="white"
            color="#0D1B2A"
            px={8}
            py={6}
            borderRadius="full"
            _hover={{
              bg: '#01decb',
              color: 'white',
              transform: 'translateY(-2px)',
              boxShadow: '0 8px 30px rgba(1,222,203,0.25)',
            }}
            transition="all 0.2s"
          >
            Get in Touch
            <Box as="span" ml={2}>→</Box>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HowItWorks;