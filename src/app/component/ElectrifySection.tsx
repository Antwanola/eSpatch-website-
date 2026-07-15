"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";

// Icon components (inline SVG to avoid extra deps)
const ShieldIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.35C16.5 22.15 20 17.25 20 12V6l-8-4z" />
  </svg>
);

const ContractIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6z" />
  </svg>
);

const BoltIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const badges = [
  { icon: ShieldIcon, label: "Fully Insured" },
  { icon: ContractIcon, label: "Single Contract" },
  { icon: BoltIcon, label: "100% Electric" },
  { icon: ClockIcon, label: "7-Day Onboarding" },
];

export default function ElectrifySection() {
  return (
    <Box
      as="section"
      position="relative"
      bg="#0d1f2d"
      overflow="hidden"
      py={{ base: "80px", md: "100px" }}
      px={{ base: "24px", md: "48px" }}
    >
      {/* Subtle background grid / texture */}
      <Box
        position="absolute"
        inset={0}
        backgroundImage="radial-gradient(circle at 20% 50%, rgba(0,200,180,0.06) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(0,200,180,0.04) 0%, transparent 40%)"
        pointerEvents="none"
      />

      {/* Border glow effect (mimics the blue outline in screenshot) */}
      {/* <Box
        position="absolute"
        inset="0"
        border="1.5px solid"
        borderColor="rgba(0,180,220,0.35)"
        borderRadius="xl"
        pointerEvents="none"
        mx="2"
        my="2"
      /> */}

      <Container maxW="720px" position="relative">
        <Stack align="center" gap={6} textAlign="center">

          {/* "START TODAY" pill */}
          <Box
            display="inline-flex"
            alignItems="center"
            border="1px solid"
            borderColor="rgba(0,200,180,0.5)"
            borderRadius="full"
            px={4}
            py={1}
          >
            <Text
              fontSize="10px"
              fontWeight="700"
              letterSpacing="0.18em"
              color="rgba(0,200,180,0.9)"
              textTransform="uppercase"
            >
              Start Today
            </Text>
          </Box>

          {/* Headline */}
          <Heading
            as="h2"
            fontSize={{ base: "36px", md: "52px", lg: "58px" }}
            fontWeight="700"
            lineHeight="1.1"
            color="white"
            letterSpacing="-0.02em"
            fontFamily={'Syne'}
          >
            Ready to Electrify
            <br />
            Your Last-Mile?
          </Heading>

          {/* Subtext */}
          <Text
            fontSize={{ base: "15px", md: "16px" }}
            color="rgba(255,255,255,0.55)"
            maxW="420px"
            lineHeight="1.7"
          >
            Join Lagos&apos; most innovative delivery platforms. One contract,
            one partner, zero operational headaches.
          </Text>

          {/* CTA Buttons */}
          <HStack gap={4} flexWrap="wrap" justify="center" mt={2}>
            <Button
              size="lg"
              bg="rgba(0,200,170,0.9)"
              color="white"
              fontWeight="700"
              fontSize="15px"
              px={7}
              py={6}
              borderRadius="md"
              _hover={{
                bg: "rgba(0,220,190,1)",
                transform: "translateY(-1px)",
                boxShadow: "0 8px 30px rgba(0,200,170,0.4)",
              }}
              _active={{ transform: "translateY(0)" }}
              transition="all 0.2s ease"
            >
              <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                Partner with Us
                <ArrowRightIcon />
              </span>
            </Button>

            <Button
              size="lg"
              variant="outline"
              color="white"
              borderColor="rgba(255,255,255,0.3)"
              fontWeight="600"
              fontSize="15px"
              px={7}
              py={6}
              borderRadius="md"
              _hover={{
                bg: "rgba(255,255,255,0.07)",
                borderColor: "rgba(255,255,255,0.55)",
              }}
              transition="all 0.2s ease"
            >
              Request a Demo
            </Button>
          </HStack>

          {/* Trust badges */}
          <Flex
            gap={{ base: 4, md: 6 }}
            flexWrap="wrap"
            justify="center"
            align="center"
            mt={4}
            pt={4}
            borderTop="1px solid"
            borderColor="rgba(255,255,255,0.08)"
            w="full"
          >
            {badges.map(({ icon: IconComp, label }, i) => (
              <HStack key={i} gap={2} color="rgba(255,255,255,0.45)">
                <Box color="rgba(0,200,180,0.7)">
                  <IconComp />
                </Box>
                <Text fontSize="12px" fontWeight="500" letterSpacing="0.02em">
                  {label}
                </Text>
                {i < badges.length - 1 && (
                  <Box
                    as="span"
                    ml={2}
                    color="rgba(255,255,255,0.2)"
                    display={{ base: "none", md: "inline" }}
                  >
                    ✦
                  </Box>
                )}
              </HStack>
            ))}
          </Flex>

        </Stack>
      </Container>
    </Box>
  );
}