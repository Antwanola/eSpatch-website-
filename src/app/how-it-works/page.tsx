'use client';
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import MainMargin from '../component/MarginGuides/MianMargin';
import { MdGpsFixed } from 'react-icons/md';
import ProcessBox from '../component/MiniComponents/ProcessBox';
import { GiBoxUnpacking } from "react-icons/gi";

interface Props { }

const HowItWorks: React.FC<Props> = () => {
  return (
    <Box bg={'#0D1B2A'}>
      <MainMargin>
        <style>{`
        @keyframes blink-glow {
          0%, 100% {
            opacity: 1;
            filter: drop-shadow(0 0 6px #01decb) drop-shadow(0 0 14px #01decb);
          }
          50% {
            opacity: 0.1;
            filter: none;
          }
        }
        .gps-icon {
          animation: blink-glow 1.2s ease-in-out infinite;
          color: #01decb;
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }
        .hero-radial {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 80% 60% at 65% 50%, rgba(0,222,203,0.13) 0%, rgba(0,180,166,0.06) 35%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }
      `}</style>
        <Flex
          as="section"
          overflow="hidden"
          bg="#0D1B2A"
          h="auto"
          justifyContent="space-between"
          p={{ base: 5, md: 10, lg: '30px' }}
          gap={{ base: 6, md: 10 }}
          flexDir={{ base: 'column', md: 'row' }}
        >
          {/* ── Left column ── */}
          <Box w={'50%'}>
            {/* Badge */}
            <Flex
              mb={10}
              align="center"
              display="inline-flex"
              gap={2}
              border="0.5px solid"
              borderRadius="20px"
              px={3}
              py={1}
              fontSize="xs"
              borderColor="#01decb4c"
              bg="#00867b4c"
              whiteSpace="nowrap"
            >
              <span className="gps-icon">
                <MdGpsFixed size={14} color="currentColor" />
              </span>
              <Box
                color="text.green"
                as="span"
                letterSpacing="wider"
                fontWeight="medium"
                fontSize={8}
              >
                Enterprise Logistics Engine
              </Box>
            </Flex>

            {/* Heading */}
            <Box
              fontSize={{ base: '2.5rem', md: '4rem', lg: '24' }}
              fontWeight={{ base: 500, md: 600 }}
              fontFamily="'Syne', sans-serif"
              letterSpacing={{ base: '-0.02em', md: '-0.03em' }}
              lineHeight={{ base: 1.1, md: 1.05 }}
              color="white"
              mb={5}
            >
              How{' '}
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
                eSpatch
              </Box>{' '}
              <br />
              Works
            </Box>

            <Text mb={10} textWrap={'wrap'} fontFamily={'DM Sans'} color="#9AA4B2" fontSize={{ base: 'lg', md: 'xl', lg: '16' }} fontWeight={400}>A seamless B2B logistics model designed for scale,
              reliability, and operational excellence.</Text>
            <Button rounded={10} bg={'#167c5729'}> View Process</Button>
          </Box> {/* ← this was the missing closing tag */}
          <Box borderRadius={'2xl'} overflow={'hidden'} display={'inline-flex'}> <img src="/it-works.png" alt="" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }} /></Box>
          {/* ── Right column (placeholder) ── */}
        </Flex>
      </MainMargin>
      <Box bg={'#152B43'} p={20}>
        <Box textAlign={'center'}>
          <Heading>Our Process</Heading>
        </Box>
        <Flex as={'section'} gap={10} bg={'#0a1624'} p={10} borderRadius={'2xl'} my={10}>
          <ProcessBox step="1" title="Onboarding" description="s ds dvg sgd ds" icon={GiBoxUnpacking} />
          <ProcessBox step="1" title="Onboarding" description="s ds dvg sgd ds" icon={GiBoxUnpacking} />
          <ProcessBox step="1" title="Onboarding" description="s ds dvg sgd ds" icon={GiBoxUnpacking} />
          <ProcessBox step="1" title="Onboarding" description="s ds dvg sgd ds" icon={GiBoxUnpacking} />
        </Flex>
      </Box>
      {/* <ProcessBox />
      <ProcessBox />
      <ProcessBox /> */}
    </Box >

  );
};

export default HowItWorks;