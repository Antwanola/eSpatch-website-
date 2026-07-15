"use client";

import {
    Box,
    Container,
    Flex,
    Grid,
    Heading,
    Text,
    Button,
    Badge,
    VStack,
    HStack,
    SimpleGrid,
    Image,
} from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
    FiZap,
    FiShield,
    FiTrendingUp,
    FiCheckCircle,
    FiUsers,
    FiBarChart2,
    FiDownload,
    FiArrowRight,
    FiDollarSign,
    FiLayers,
} from "react-icons/fi";

const MotionBox = motion.create(Box);

// ─── Design tokens ─────────────────────────────────────────────────────────────
const TEAL = "#10988dff";
const PURPLE = "#7c6af7";
const NAVY = "#0a0f1e";
const NAVY_CARD = "#0d1526";
const NAVY_BORDER = "rgba(1,222,203,0.15)";
const TEAL_GLOW = "rgba(1,222,203,0.10)";

// ─── Fade-in wrapper ───────────────────────────────────────────────────────────
function FadeIn({
    children,
    delay = 0,
    y = 30,
}: {
    children: React.ReactNode;
    delay?: number;
    y?: number;
}) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });
    return (
        <MotionBox
            ref={ref}
            initial={{ opacity: 0, y }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
        >
            {children}
        </MotionBox>
    );
}

// ─── Section label ─────────────────────────────────────────────────────────────
function SectionLabel({ children }: { children: string }) {
    return (
        <HStack gap={2} mb={3}>
            <Box w="18px" h="2px" bg={TEAL} />
            <Text
                fontSize="10px"
                fontFamily="'DM Sans', sans-serif"
                color="#0c6a4fff"
                letterSpacing="0.2em"
                fontWeight={600}
                textTransform="uppercase"
            >
                {children}
            </Text>
        </HStack>
    );
}

// ─── Stat card ─────────────────────────────────────────────────────────────────
function StatCard({ label, value, sub }: { label: string; value: string; sub?: string }) {
    return (
        <Box
            bg="rgba(1,222,203,0.06)"
            border="1px solid"
            borderColor={NAVY_BORDER}
            borderRadius="12px"
            p={4}
        >
            <Text
                fontSize="10px"
                color="rgba(255,255,255,0.5)"
                fontFamily="'DM Sans', sans-serif"
                textTransform="uppercase"
                letterSpacing="0.1em"
                mb={1}
            >
                {label}
            </Text>
            <Text
                fontSize="22px"
                fontFamily="'Syne', sans-serif"
                fontWeight={700}
                color="white"
                lineHeight={1}
            >
                {value}
            </Text>
            {sub && (
                <Text fontSize="11px" color={TEAL} fontFamily="'DM Sans', sans-serif" mt={1}>
                    {sub}
                </Text>
            )}
        </Box>
    );
}

// ─── Rationale card ────────────────────────────────────────────────────────────
function RationaleCard({
    icon: IconComp,
    title,
    body,
    delay,
}: {
    icon: React.ElementType;
    title: string;
    body: string;
    delay: number;
}) {
    return (
        <FadeIn delay={delay}>
            <Box
                bg={NAVY_CARD}
                border="1px solid"
                borderColor={NAVY_BORDER}
                borderRadius="14px"
                p={6}
                h="100%"
                _hover={{
                    borderColor: TEAL,
                    transform: "translateY(-4px)",
                    boxShadow: "0 12px 32px rgba(1,222,203,0.12)",
                }}
                transition="all 0.25s ease"
                position="relative"
                overflow="hidden"
            >
                <Box
                    position="absolute"
                    top={0}
                    right={0}
                    w="80px"
                    h="80px"
                    bg={TEAL_GLOW}
                    borderRadius="50%"
                    filter="blur(24px)"
                    pointerEvents="none"
                />
                <Flex
                    w="40px"
                    h="40px"
                    bg="rgba(1,222,203,0.1)"
                    borderRadius="10px"
                    alignItems="center"
                    justifyContent="center"
                    mb={4}
                >
                    <IconComp size={18} color={TEAL} />
                </Flex>
                <Text
                    fontSize="14px"
                    fontFamily="'Syne', sans-serif"
                    fontWeight={600}
                    color="white"
                    mb={2}
                >
                    {title}
                </Text>
                <Text
                    fontSize="12px"
                    fontFamily="'DM Sans', sans-serif"
                    color="rgba(255,255,255,0.6)"
                    lineHeight={1.7}
                >
                    {body}
                </Text>
            </Box>
        </FadeIn>
    );
}

// ─── SPV step ──────────────────────────────────────────────────────────────────
function SpvStep({
    icon: IconComp,
    label,
    sub,
    center,
}: {
    icon: React.ElementType;
    label: string;
    sub: string;
    center?: boolean;
}) {
    return (
        <VStack gap={2} textAlign="center">
            <Flex
                w={center ? "64px" : "52px"}
                h={center ? "64px" : "52px"}
                bg={center ? TEAL : "rgba(1,222,203,0.1)"}
                borderRadius={center ? "16px" : "12px"}
                alignItems="center"
                justifyContent="center"
                border="1px solid"
                borderColor={center ? TEAL : NAVY_BORDER}
            >
                <IconComp size={center ? 26 : 20} color={center ? NAVY : TEAL} />
            </Flex>
            <Text fontSize="12px" fontFamily="'Syne', sans-serif" fontWeight={600} color="white">
                {label}
            </Text>
            <Text fontSize="10px" fontFamily="'DM Sans', sans-serif" color="rgba(255,255,255,0.5)">
                {sub}
            </Text>
        </VStack>
    );
}

// ─── Table row ─────────────────────────────────────────────────────────────────
function TableRow({
    label,
    y1,
    y2,
    y3,
    highlight,
}: {
    label: string;
    y1: string;
    y2: string;
    y3: string;
    highlight?: boolean;
}) {
    return (
        <Grid
            templateColumns="2fr 1fr 1fr 1fr"
            gap={2}
            px={4}
            py={3}
            bg={highlight ? "rgba(1,222,203,0.07)" : "transparent"}
            borderRadius={highlight ? "8px" : "0"}
            borderBottom="1px solid rgba(255,255,255,0.05)"
        >
            <Text
                fontSize="12px"
                fontFamily="'DM Sans', sans-serif"
                color={highlight ? TEAL : "rgba(255,255,255,0.7)"}
                fontWeight={highlight ? 600 : 400}
            >
                {label}
            </Text>
            {[y1, y2, y3].map((v, i) => (
                <Text
                    key={i}
                    fontSize="12px"
                    fontFamily="'DM Sans', sans-serif"
                    color="rgba(255,255,255,0.8)"
                    textAlign="right"
                >
                    {v}
                </Text>
            ))}
        </Grid>
    );
}

// ─── Main page ─────────────────────────────────────────────────────────────────
export default function InvestorsPage() {
    return (
        <Box bg={NAVY} minH="100vh" color="white" fontFamily="'DM Sans', sans-serif">

            {/* ── HERO ──────────────────────────────────────────────────────────────── */}
            <Box
                position="relative"
                overflow="hidden"
                py={{ base: 20, md: 28 }}
                borderBottom="1px solid"
                borderColor={NAVY_BORDER}
            >
                <Box
                    position="absolute"
                    top="-120px"
                    right="-80px"
                    w="500px"
                    h="500px"
                    bg="radial-gradient(circle, rgba(1,222,203,0.12) 0%, transparent 70%)"
                    pointerEvents="none"
                />
                <Box
                    position="absolute"
                    bottom="-80px"
                    left="10%"
                    w="360px"
                    h="360px"
                    bg="radial-gradient(circle, rgba(124,106,247,0.08) 0%, transparent 70%)"
                    pointerEvents="none"
                />
                <Box
                    position="absolute"
                    inset={0}
                    backgroundImage="radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)"
                    backgroundSize="28px 28px"
                    pointerEvents="none"
                />

                <Container maxW="1200px" px={{ base: 6, md: 10 }} position="relative">
                    <Grid
                        templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
                        gap={12}
                        alignItems="center"
                    >
                        <Box>
                            <FadeIn>
                                <SectionLabel>Investors · eSpatch</SectionLabel>
                                <Heading
                                    fontFamily="'Syne', sans-serif"
                                    fontSize={{ base: "36px", md: "52px", lg: "60px" }}
                                    fontWeight={600}
                                    lineHeight={1.1}
                                    mb={6}
                                >
                                    Invest in{" "}
                                    <Text as="span" color="white">
                                        Nigeria's
                                    </Text>
                                    <br />
                                    <Text as="span" color={TEAL}>
                                        First Corporate
                                    </Text>
                                    <br />
                                    <Text as="span" color={TEAL}>
                                        Electric Fleet.
                                    </Text>
                                </Heading>
                                <Text
                                    fontSize="14px"
                                    fontFamily="DM Sans"
                                    color="rgba(255,255,255,0.6)"
                                    maxW="480px"
                                    lineHeight={1.8}
                                    mb={8}
                                >
                                    eSpatch is building Africa's most efficient electric delivery network.
                                    We combine zero-emission vehicles with intelligent dispatch software to
                                    transform last-mile logistics in Lagos and beyond.
                                </Text>
                                <HStack gap={4} flexWrap="wrap">
                                    <Button
                                        bg={TEAL}
                                        color={NAVY}
                                        fontFamily="'Syne', sans-serif"
                                        fontWeight={700}
                                        fontSize="13px"
                                        px={7}
                                        h="44px"
                                        borderRadius="10px"
                                        _hover={{ bg: "#00c4b3", transform: "translateY(-2px)" }}
                                        transition="all 0.2s"
                                    >
                                        View Investor Deck
                                    </Button>
                                    <Button
                                        bg="transparent"
                                        border="1px solid"
                                        borderColor={NAVY_BORDER}
                                        color="rgba(255,255,255,0.7)"
                                        fontFamily="'Syne', sans-serif"
                                        fontWeight={600}
                                        fontSize="13px"
                                        px={7}
                                        h="44px"
                                        borderRadius="10px"
                                        _hover={{ borderColor: TEAL, color: TEAL }}
                                        transition="all 0.2s"
                                    >
                                        <HStack gap={2}>
                                            <Text>How it Works</Text>
                                            <FiArrowRight size={14} />
                                        </HStack>
                                    </Button>
                                </HStack>
                            </FadeIn>
                        </Box>

                        <FadeIn delay={0.2}>
                            <Box
                                bg="rgba(13,21,38,0.9)"
                                border="1px solid"
                                borderColor={NAVY_BORDER}
                                borderRadius="20px"
                                p={7}
                                backdropFilter="blur(16px)"
                                position="relative"
                                overflow="hidden"
                            >
                                <Box
                                    position="absolute"
                                    top={0}
                                    right={0}
                                    w="160px"
                                    h="160px"
                                    bg="radial-gradient(circle, rgba(1,222,203,0.08) 0%, transparent 70%)"
                                    pointerEvents="none"
                                />
                                <Text
                                    fontFamily="'Syne', sans-serif"
                                    fontSize="42px"
                                    fontWeight={600}
                                    color="white"
                                    lineHeight={1}
                                    mb={2}
                                >
                                    ₦1.425B
                                </Text>
                                <Text
                                    fontSize="11px"
                                    color="rgba(255,255,255,0.4)"
                                    mb={6}
                                    letterSpacing="0.05em"
                                >
                                    TOTAL ADDRESSABLE MARKET · LAGOS CORRIDOR
                                </Text>
                                <SimpleGrid columns={2} gap={4}>
                                    <StatCard label="Revenue Target Y1" value="₦240M" sub="+38% QoQ" />
                                    <StatCard label="Fleet Size Y2" value="120+" sub="EVs deployed" />
                                    <StatCard label="EBITDA Margin" value="34.7%" sub="Projected Y3" />
                                    <StatCard label="IRR" value="38 PMs" sub="Avg. return" />
                                </SimpleGrid>
                            </Box>
                        </FadeIn>
                    </Grid>
                </Container>
            </Box>

            {/* ── CORE INVESTMENT RATIONALE ─────────────────────────────────────────── */}
            <Box py={{ base: 16, md: 24 }} borderBottom="1px solid" borderColor={NAVY_BORDER} bg="gray.200">
                <Container maxW="1200px" px={{ base: 6, md: 10 }}>
                    <FadeIn>
                        <Box textAlign="center" mb={14}>
                            <SectionLabel>Investment Rationale</SectionLabel>
                            <Heading
                                fontFamily="'Syne', sans-serif"
                                fontSize={{ base: "28px", md: "36px" }}
                                fontWeight={700}
                                color="black"
                            >
                                Core Investment Rationale
                            </Heading>
                        </Box>
                    </FadeIn>
                    <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap={5}>
                        <RationaleCard
                            icon={FiZap}
                            title="Market Timing Advantage"
                            body="Nigeria's EV market is nascent — early movers capture regulatory incentives, premium fleet contracts, and brand positioning unavailable to late entrants."
                            delay={0}
                        />
                        <RationaleCard
                            icon={FiTrendingUp}
                            title="Capital Efficiency"
                            body="Asset-light SPV model limits capital at risk. Shared fleet infrastructure and software margins deliver outsized returns on invested capital."
                            delay={0.08}
                        />
                        <RationaleCard
                            icon={FiShield}
                            title="Regulatory Alignment"
                            body="Carbon credit frameworks and CBN green finance incentives structurally advantage electric fleet operators through 2030."
                            delay={0.16}
                        />
                        <RationaleCard
                            icon={FiDollarSign}
                            title="Blended IRR"
                            body="Fleet leasing + SaaS dispatch fees generate dual revenue streams, producing blended IRR superior to single-model logistics investments."
                            delay={0.24}
                        />
                    </SimpleGrid>
                </Container>
            </Box>

            {/* ── FINANCIAL GROWTH PROJECTIONS ──────────────────────────────────────── */}
            <Box py={{ base: 16, md: 24 }} borderBottom="1px solid" borderColor={NAVY_BORDER}>
                <Container maxW="1200px" px={{ base: 6, md: 10 }}>
                    <Grid
                        templateColumns={{ base: "1fr", lg: "1fr 1.2fr" }}
                        gap={14}
                        alignItems="start"
                    >
                        <FadeIn>
                            <SectionLabel>Business Action</SectionLabel>
                            <Heading
                                fontFamily="'Syne', sans-serif"
                                fontSize={{ base: "26px", md: "34px" }}
                                fontWeight={700}
                                mb={5}
                                color="white"
                                lineHeight={1.25}
                            >
                                Financial Growth Projections
                            </Heading>
                            <VStack alignItems="flex-start" gap={3} mb={7}>
                                {[
                                    "Revenue scales 3× from Year 1 to Year 3",
                                    "EBITDA breakeven reached in Q3 of Year 2",
                                    "ARR from SaaS grows to ₦180M by Year 3",
                                    "Fleet utilisation rate targets 78% by Year 2",
                                ].map((item) => (
                                    <HStack key={item} gap={3}>
                                        <FiCheckCircle size={16} color={TEAL} style={{ flexShrink: 0 }} />
                                        <Text fontSize="13px" color="rgba(255,255,255,0.7)" lineHeight={1.6}>
                                            {item}
                                        </Text>
                                    </HStack>
                                ))}
                            </VStack>
                        </FadeIn>

                        <FadeIn delay={0.15}>
                            <Box
                                bg={NAVY_CARD}
                                border="1px solid"
                                borderColor={NAVY_BORDER}
                                borderRadius="16px"
                                overflow="hidden"
                            >
                                <Box px={4} pt={4} pb={3}>
                                    <SectionLabel>Year 1–3 Projections</SectionLabel>
                                </Box>
                                <Grid
                                    templateColumns="2fr 1fr 1fr 1fr"
                                    gap={2}
                                    px={4}
                                    pb={3}
                                    borderBottom="1px solid"
                                    borderColor={NAVY_BORDER}
                                >
                                    {["Metric", "Year 1", "Year 2", "Year 3"].map((h, i) => (
                                        <Text
                                            key={h}
                                            fontSize="10px"
                                            color="rgba(255,255,255,0.4)"
                                            fontWeight={600}
                                            letterSpacing="0.1em"
                                            textTransform="uppercase"
                                            textAlign={i > 0 ? "right" : "left"}
                                            fontFamily="'DM Sans', sans-serif"
                                        >
                                            {h}
                                        </Text>
                                    ))}
                                </Grid>
                                <Box py={2}>
                                    <TableRow label="Revenue (₦M)" y1="240" y2="510" y3="870" />
                                    <TableRow label="Gross Margin" y1="42%" y2="51%" y3="58%" highlight />
                                    <TableRow label="EBITDA (₦M)" y1="-38" y2="112" y3="302" />
                                    <TableRow label="Fleet Size" y1="40" y2="90" y3="160" highlight />
                                    <TableRow label="Deliveries / Day" y1="800" y2="2,100" y3="4,600" />
                                </Box>
                            </Box>
                        </FadeIn>
                    </Grid>
                </Container>
            </Box>

            {/* ── INVESTMENT SPV FRAMEWORK ──────────────────────────────────────────── */}
            <Box py={{ base: 16, md: 24 }} borderBottom="1px solid" borderColor={NAVY_BORDER}>
                <Container maxW="1200px" px={{ base: 6, md: 10 }}>
                    <FadeIn>
                        <Box textAlign="center" mb={14}>
                            <SectionLabel>Structure</SectionLabel>
                            <Heading
                                fontFamily="'Syne', sans-serif"
                                fontSize={{ base: "26px", md: "34px" }}
                                fontWeight={700}
                                color="white"
                            >
                                Investment SPV Framework
                            </Heading>
                        </Box>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <Flex
                            alignItems="center"
                            justifyContent="center"
                            gap={{ base: 4, md: 8 }}
                            flexWrap="wrap"
                            mb={14}
                        >
                            <SpvStep icon={FiUsers} label="Lead Investors" sub="Anchor capital" />
                            <Box w="40px" h="1px" bg={NAVY_BORDER} />
                            <SpvStep icon={FiLayers} label="SPV Entity" sub="eSpatch SPV Ltd" center />
                            <Box w="40px" h="1px" bg={NAVY_BORDER} />
                            <SpvStep icon={FiBarChart2} label="Portfolio Returns" sub="Dividend + exit" />
                        </Flex>

                        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} gap={5}>
                            {[
                                {
                                    title: "Early Admission",
                                    body: "Founding investors enter at pre-seed valuation with pro-rata rights on Series A.",
                                },
                                {
                                    title: "Governance",
                                    body: "Board observer seats allocated to investors above ₦50M commitment.",
                                },
                                {
                                    title: "Profit Highlights",
                                    body: "Annual dividend distributions begin Year 2. Target yield 12–18% per annum.",
                                },
                                {
                                    title: "Exit Pathway",
                                    body: "Strategic buyout or secondary market trade after 36-month lock-up.",
                                },
                            ].map((item, i) => (
                                <FadeIn key={item.title} delay={i * 0.07}>
                                    <Box
                                        bg={NAVY_CARD}
                                        border="1px solid"
                                        borderColor={NAVY_BORDER}
                                        borderRadius="14px"
                                        p={5}
                                        h="100%"
                                        _hover={{ borderColor: "rgba(124,106,247,0.4)" }}
                                        transition="all 0.2s"
                                    >
                                        <Text
                                            fontSize="13px"
                                            fontFamily="'Syne', sans-serif"
                                            fontWeight={600}
                                            color="white"
                                            mb={2}
                                        >
                                            {item.title}
                                        </Text>
                                        <Text
                                            fontSize="12px"
                                            color="rgba(255,255,255,0.6)"
                                            lineHeight={1.7}
                                            fontFamily="'DM Sans', sans-serif"
                                        >
                                            {item.body}
                                        </Text>
                                    </Box>
                                </FadeIn>
                            ))}
                        </SimpleGrid>
                    </FadeIn>
                </Container>
            </Box>

            {/* ── INVESTOR PRIVILEGES & BENEFITS ───────────────────────────────────── */}
            <Box py={{ base: 16, md: 24 }} borderBottom="1px solid" borderColor={NAVY_BORDER} bg="gray.300">
                <Container maxW="1200px" px={{ base: 6, md: 10 }}>
                    <Grid
                        templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
                        gap={14}
                        alignItems="center"
                    >
                        {/* left — quote card */}
                        <FadeIn>
                            <Box
                                borderRadius="24px"
                                overflow="hidden"
                                position="relative"
                                h={{ base: "340px", md: "420px" }}
                                bg="linear-gradient(160deg, #3a3a3a 0%, #1a1a1a 40%, #0a0a0a 100%)"
                                boxShadow="0 24px 60px rgba(0,0,0,0.35)"
                            >
                                {/* top-to-bottom fade overlay */}
                                <Image
                                    position="absolute"
                                    src="/bikes/15.png"
                                    inset={0}
                                    bg="linear-gradient(to bottom, rgba(255,255,255,0.03) 0%, transparent 55%, rgba(0,0,0,0.25) 100%)"
                                    pointerEvents="none"
                                />
                                {/* quote pinned to bottom */}
                                <Box
                                    position="absolute"
                                    bottom={0}
                                    left={0}
                                    right={0}
                                    p={8}
                                    bg="rgba(15,15,15,0.75)"
                                    backdropFilter="blur(14px)"
                                    borderTop="1px solid rgba(255,255,255,0.07)"
                                >
                                    <Text
                                        fontFamily="'Syne', sans-serif"
                                        fontSize={{ base: "15px", md: "18px" }}
                                        fontWeight={600}
                                        color="white"
                                        lineHeight={1.55}
                                        mb={3}
                                    >
                                        "Last-mile delivery is the pulse of Africa's commerce. We're electrifying that pulse."
                                    </Text>
                                    <Text
                                        fontFamily="'DM Sans', sans-serif"
                                        fontSize="12px"
                                        color={TEAL}
                                        fontWeight={500}
                                    >
                                        Managing Director, eSpatch
                                    </Text>
                                </Box>
                            </Box>
                        </FadeIn>

                        {/* right — checklist */}
                        <FadeIn delay={0.15}>
                            <Heading
                                fontFamily="'Syne', sans-serif"
                                fontSize={{ base: "26px", md: "34px" }}
                                fontWeight={700}
                                mb={9}
                                color="#0a0f1e"
                                lineHeight={1.2}
                            >
                                Investor Privileges & Benefits
                            </Heading>
                            <VStack alignItems="flex-start" gap={7}>
                                {[
                                    {
                                        title: "Direct Equity Appreciation",
                                        body: "Early-stage positioning in the dominant electric logistics infrastructure provider for Nigeria.",
                                    },
                                    {
                                        title: "Recurring Dividend Yield",
                                        body: "Cash flow distributions from monthly operational surpluses generated by the SPV fleet.",
                                    },
                                    {
                                        title: "Impact First Alpha",
                                        body: "Market-beating returns coupled with significant verified ESG impact (SDG 11 & 13).",
                                    },
                                    {
                                        title: "Preferential Network Access",
                                        body: "First right of refusal for future asset expansion into new Lagos corridors and other major cities.",
                                    },
                                ].map((item, i) => (
                                    <FadeIn key={item.title} delay={0.15 + i * 0.07}>
                                        <HStack gap={4} alignItems="flex-start">
                                            {/* teal checkbox */}
                                            <Box
                                                flexShrink={0}
                                                mt="3px"
                                                w="34px"
                                                h="34px"
                                                borderRadius="8px"
                                                border="1.5px solid"
                                                borderColor={TEAL}
                                                bg="rgba(1,222,203,0.06)"
                                                display="flex"
                                                alignItems="center"
                                                justifyContent="center"
                                            >
                                                <FiCheckCircle size={16} color={TEAL} />
                                            </Box>
                                            <Box>
                                                <Text
                                                    fontFamily="'Syne', sans-serif"
                                                    fontSize="15px"
                                                    fontWeight={700}
                                                    color="#0a0f1e"
                                                    mb={1}
                                                >
                                                    {item.title}
                                                </Text>
                                                <Text
                                                    fontFamily="'DM Sans', sans-serif"
                                                    fontSize="13px"
                                                    color="rgba(20,20,20,0.6)"
                                                    lineHeight={1.65}
                                                >
                                                    {item.body}
                                                </Text>
                                            </Box>
                                        </HStack>
                                    </FadeIn>
                                ))}
                            </VStack>
                        </FadeIn>
                    </Grid>
                </Container>
            </Box>

            {/* ── DECARBONIZING LAGOS ───────────────────────────────────────────────── */}
            <Box py={{ base: 16, md: 24 }} borderBottom="1px solid" borderColor={NAVY_BORDER}>
                <Container maxW="1200px" px={{ base: 6, md: 10 }}>
                    <Grid
                        templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
                        gap={14}
                        alignItems="center"
                    >
                        <FadeIn>
                            <SectionLabel>Business Action</SectionLabel>
                            <Heading
                                fontFamily="'Syne', sans-serif"
                                fontSize={{ base: "26px", md: "34px" }}
                                fontWeight={700}
                                mb={5}
                                color="white"
                            >
                                Decarbonizing Lagos Logistics
                            </Heading>
                            <Text fontSize="13px" color="rgba(255,255,255,0.6)" lineHeight={1.8} mb={8}>
                                Every eSpatch EV displaces a petrol-fuelled delivery vehicle, reducing CO₂
                                emissions by an estimated 4.2 tonnes per vehicle per year. Our fleet of 40
                                vehicles in Year 1 represents a meaningful first step toward greening
                                commercial logistics across the Lagos megacity corridor.
                            </Text>
                            <SimpleGrid columns={2} gap={5}>
                                <Box>
                                    <Text
                                        fontFamily="'Syne', sans-serif"
                                        fontSize="32px"
                                        fontWeight={800}
                                        color={TEAL}
                                    >
                                        1.2k
                                    </Text>
                                    <Text fontSize="11px" color="rgba(255,255,255,0.5)" letterSpacing="0.08em">
                                        TONNES CO₂ AVOIDED · Y1
                                    </Text>
                                </Box>
                                <Box>
                                    <Text
                                        fontFamily="'Syne', sans-serif"
                                        fontSize="32px"
                                        fontWeight={800}
                                        color={TEAL}
                                    >
                                        0.6L
                                    </Text>
                                    <Text fontSize="11px" color="rgba(255,255,255,0.5)" letterSpacing="0.08em">
                                        FUEL EQUIV. SAVED / KM
                                    </Text>
                                </Box>
                            </SimpleGrid>
                        </FadeIn>

                        <FadeIn delay={0.15}>
                            <Box
                                bg={NAVY_CARD}
                                border="1px solid"
                                borderColor={NAVY_BORDER}
                                borderRadius="16px"
                                p={6}
                                h="280px"
                                position="relative"
                                overflow="hidden"
                            >
                                <Text
                                    fontSize="11px"
                                    color="rgba(255,255,255,0.4)"
                                    fontFamily="'DM Sans', sans-serif"
                                    mb={4}
                                    textTransform="uppercase"
                                    letterSpacing="0.1em"
                                >
                                    CO₂ Reduction Trajectory
                                </Text>
                                <svg viewBox="0 0 380 180" width="100%" height="auto">
                                    {[0, 45, 90, 135].map((yVal) => (
                                        <line
                                            key={yVal}
                                            x1="0"
                                            y1={yVal}
                                            x2="380"
                                            y2={yVal}
                                            stroke="rgba(255,255,255,0.05)"
                                            strokeWidth="1"
                                        />
                                    ))}
                                    <defs>
                                        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor={TEAL} stopOpacity="0.3" />
                                            <stop offset="100%" stopColor={TEAL} stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                    <path
                                        d="M0,160 C60,155 90,130 140,100 C190,70 230,50 280,30 C310,18 350,10 380,5 L380,180 L0,180 Z"
                                        fill="url(#chartGrad)"
                                    />
                                    <path
                                        d="M0,160 C60,155 90,130 140,100 C190,70 230,50 280,30 C310,18 350,10 380,5"
                                        fill="none"
                                        stroke={TEAL}
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                    {([[0, 160], [95, 100], [190, 65], [285, 28], [380, 5]] as [number, number][]).map(([cx, cy], i) => (
                                        <circle key={i} cx={cx} cy={cy} r="4" fill={TEAL} />
                                    ))}
                                    {["Y0", "Y1", "Y2", "Y3", "Y4"].map((lbl, i) => (
                                        <text
                                            key={lbl}
                                            x={i * 95}
                                            y="178"
                                            fontSize="9"
                                            fill="rgba(255,255,255,0.3)"
                                            textAnchor="middle"
                                        >
                                            {lbl}
                                        </text>
                                    ))}
                                </svg>
                            </Box>
                        </FadeIn>
                    </Grid>
                </Container>
            </Box>

            {/* ── DOWNLOAD CTA ──────────────────────────────────────────────────────── */}
            <Box py={{ base: 16, md: 24 }}>
                <Container maxW="1200px" px={{ base: 6, md: 10 }}>
                    <FadeIn>
                        <Box
                            position="relative"
                            bg="linear-gradient(135deg, rgba(1,222,203,0.08) 0%, rgba(124,106,247,0.08) 100%)"
                            border="1px solid"
                            borderColor={NAVY_BORDER}
                            borderRadius="24px"
                            p={{ base: 10, md: 16 }}
                            overflow="hidden"
                            textAlign="center"
                        >
                            <Box
                                position="absolute"
                                top="-60px"
                                left="50%"
                                transform="translateX(-50%)"
                                w="300px"
                                h="300px"
                                bg="radial-gradient(circle, rgba(1,222,203,0.10) 0%, transparent 70%)"
                                pointerEvents="none"
                            />
                            <Box
                                position="absolute"
                                bottom="-40px"
                                right="10%"
                                w="200px"
                                h="200px"
                                bg="radial-gradient(circle, rgba(124,106,247,0.10) 0%, transparent 70%)"
                                pointerEvents="none"
                            />

                            <Badge
                                bg="rgba(1,222,203,0.1)"
                                color={TEAL}
                                border="1px solid"
                                borderColor={NAVY_BORDER}
                                borderRadius="6px"
                                px={3}
                                py={1}
                                fontSize="10px"
                                letterSpacing="0.15em"
                                textTransform="uppercase"
                                fontFamily="'DM Sans', sans-serif"
                                mb={5}
                                display="inline-block"
                            >
                                Private Access Only
                            </Badge>

                            <Heading
                                fontFamily="'Syne', sans-serif"
                                fontSize={{ base: "28px", md: "40px" }}
                                fontWeight={800}
                                color="white"
                                mb={4}
                                position="relative"
                            >
                                Download Private
                                <br />
                                Investor Deck
                            </Heading>
                            <Text
                                fontSize="14px"
                                color="rgba(255,255,255,0.6)"
                                maxW="500px"
                                mx="auto"
                                lineHeight={1.8}
                                mb={8}
                            >
                                Get full access to financial models, fleet deployment plans, and term
                                sheets. Contact us at investors@espatch.com or +234 (0) 800 000 0000.
                            </Text>

                            <HStack justifyContent="center" gap={4} flexWrap="wrap">
                                <Button
                                    bg={TEAL}
                                    color={NAVY}
                                    fontFamily="'Syne', sans-serif"
                                    fontWeight={700}
                                    fontSize="14px"
                                    px={9}
                                    h="50px"
                                    borderRadius="12px"
                                    _hover={{
                                        bg: "#00c4b3",
                                        transform: "translateY(-2px)",
                                        boxShadow: "0 12px 30px rgba(1,222,203,0.3)",
                                    }}
                                    transition="all 0.2s"
                                >
                                    <HStack gap={2}>
                                        <FiDownload size={16} />
                                        <Text>Get Access Now</Text>
                                    </HStack>
                                </Button>
                                <Button
                                    bg="transparent"
                                    border="1px solid"
                                    borderColor={NAVY_BORDER}
                                    color="rgba(255,255,255,0.7)"
                                    fontFamily="'DM Sans', sans-serif"
                                    fontSize="13px"
                                    px={7}
                                    h="50px"
                                    borderRadius="12px"
                                    _hover={{ borderColor: PURPLE, color: PURPLE }}
                                    transition="all 0.2s"
                                >
                                    Schedule a Call
                                </Button>
                            </HStack>
                        </Box>
                    </FadeIn>
                </Container>
            </Box>
        </Box>
    );
}