"use client";

import { useState, useRef } from "react";
import {
    Box,
    Container,
    Flex,
    SimpleGrid,
    Stack,
    HStack,
    Text,
    Heading,
    Badge,
    Button,
    Input,
    Textarea,
    Field,
    Icon,
} from "@chakra-ui/react";
import {
    FiArrowRight as ArrowRight,
    FiMapPin as MapPin,
    FiShield as ShieldCheck,
    FiZap as Zap,
    FiUserCheck as UserCheck,
    FiTool as Wrench,
    FiTrendingUp as TrendingUp,
} from "react-icons/fi";
import {
    FaGraduationCap as GraduationCap,
    FaLeaf as Leaf,
} from "react-icons/fa";

/**
 * RiderRecruitmentPage
 * -------------------------------------------------------------------------
 * eSpatch rider-recruitment landing page, built with Chakra UI v3.
 *
 * Design tokens follow the existing eSpatch system:
 *  - navy base:    #0A121C
 *  - navy panel:   #0F1A28
 *  - teal accent:  #01DECB
 *  - purple:       #7C6AF7 (used sparingly)
 *  - display font: "Syne", body font: "DM Sans"
 *
 * This file assumes "Syne" and "DM Sans" are already registered as CSS
 * variables (e.g. via next/font in the app's root layout) as
 * `--font-syne` and `--font-dm-sans`. Swap the `fonts.*` values below if
 * your app wires them up differently.
 */

const fonts = {
    display: "var(--font-syne, 'Syne', sans-serif)",
    body: "var(--font-dm-sans, 'DM Sans', sans-serif)",
};

const colors = {
    navy: "#0A121C",
    navyPanel: "#0F1A28",
    navyLine: "#16273A",
    teal: "#01DECB",
    tealSoft: "rgba(1, 222, 203, 0.12)",
    purple: "#7C6AF7",
    ink: "#0B1220",
    slateBg: "#EEF3F6",
    bodyGray: "#5B6B7A",
};

const benefits = [
    {
        icon: UserCheck,
        title: "Salaried Employment",
        description:
            "Steady monthly income with full benefits. No more worrying about daily earnings or platform fees.",
        highlight: "Health insurance included",
    },
    {
        icon: Wrench,
        title: "Full Equipment",
        description:
            "We provide the motorcycle, branded uniforms, safety gear, and rider-enabled devices.",
        highlight: "Zero maintenance costs",
    },
    {
        icon: Zap,
        title: "Structured Training",
        description:
            "Comprehensive training on electric vehicle handling, customer service, and advanced road safety.",
        highlight: "Certification provided",
    },
    {
        icon: TrendingUp,
        title: "Performance Perks",
        description:
            "Bonus structures based on safety scores, on-time delivery, and customer ratings.",
        highlight: "Quarterly rewards",
    },
];

const criteria = [
    {
        icon: MapPin,
        title: "Lagos Residency",
        description: "Must have deep knowledge of Lagos Island and mainland corridors.",
    },
    {
        icon: ShieldCheck,
        title: "Valid Class A License",
        description: "Full Nigerian rider's license with no active violations.",
    },
    {
        icon: Zap,
        title: "Safety First Mindset",
        description: "Commitment to our safety policy and respect for all road users.",
    },
];

export default function RiderRecruitmentPage() {
    const [form, setForm] = useState({
        fullName: "",
        phoneNumber: "",
        preferredLocation: "",
        experienceYears: "",
        message: "",
    });
    const [cvFile, setCvFile] = useState<File | null>(null);
    const [cvError, setCvError] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const [submitError, setSubmitError] = useState("");
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleChange =
        (field: keyof typeof form) =>
            (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
                setForm((prev) => ({ ...prev, [field]: e.target.value }));

    const handleCvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] ?? null;
        setCvError("");
        if (!file) { setCvFile(null); return; }
        const allowed = ["application/pdf", "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
        if (!allowed.includes(file.type)) {
            setCvError("Only PDF or Word documents are accepted (.pdf, .doc, .docx).");
            setCvFile(null);
            return;
        }
        if (file.size > 5 * 1024 * 1024) {
            setCvError("File must not exceed 5 MB.");
            setCvFile(null);
            return;
        }
        setCvFile(file);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!cvFile) { setCvError("Please attach your CV before submitting."); return; }
        setSubmitting(true);
        setSubmitStatus("idle");
        setSubmitError("");
        try {
            const payload = new FormData();
            payload.append("fullName", form.fullName);
            payload.append("phoneNumber", form.phoneNumber);
            payload.append("preferredLocation", form.preferredLocation);
            payload.append("experienceYears", form.experienceYears);
            payload.append("message", form.message);
            payload.append("cv", cvFile, cvFile.name);
            const res = await fetch("/api/apply", { method: "POST", body: payload });
            const json = await res.json();
            if (!res.ok) throw new Error(json.error || "Submission failed.");
            setSubmitStatus("success");
            setForm({ fullName: "", phoneNumber: "", preferredLocation: "", experienceYears: "", message: "" });
            setCvFile(null);
            if (fileInputRef.current) fileInputRef.current.value = "";
        } catch (err: unknown) {
            setSubmitStatus("error");
            setSubmitError(err instanceof Error ? err.message : "Something went wrong.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Box fontFamily={fonts.body} bg="white" color={colors.ink}>
            {/* ---------------------------------------------------------------- */}
            {/* Hero                                                              */}
            {/* ---------------------------------------------------------------- */}
            <Box
                bg={colors.navy}
                // borderWidth="2px"
                // borderStyle="dashed"
                // borderColor={colors.teal}
                // m={{ base: 3, md: 6 }}
                // rounded="2xl"
                overflow="hidden"
            >
                <Container maxW="6xl" py={{ base: 12, md: 20 }}>
                    <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 10, md: 8 }} alignItems="center">
                        <Stack gap={6}>
                            <Badge
                                alignSelf="flex-start"
                                bg={colors.tealSoft}
                                color={colors.teal}
                                border="1px solid"
                                borderColor="rgba(1, 222, 203, 0.35)"
                                rounded="full"
                                px={3}
                                py={1}
                                fontSize="xs"
                                fontWeight="medium"
                                textTransform="none"
                            >
                                Folti Tech × eSpatch
                            </Badge>

                            <Heading
                                as="h1"
                                fontFamily={fonts.display}
                                color="white"
                                fontSize={{ base: "4xl", md: "5xl" }}
                                lineHeight="1.1"
                                fontWeight="700"
                            >
                                Join Nigeria's Professional{" "}
                                <Text as="span" color={colors.teal}>
                                    Electric Rider
                                </Text>{" "}
                                Workforce
                            </Heading>

                            <Text color="rgba(255,255,255,0.65)" fontSize="md" maxW="42ch">
                                Build a stable career with eSpatch. We offer salaried positions
                                for professional riders dedicated to safe and sustainable
                                urban logistics.
                            </Text>

                            <HStack gap={4} pt={2}>
                                <Button
                                    bg={colors.teal}
                                    color={colors.ink}
                                    rounded="full"
                                    px={6}
                                    _hover={{ bg: "#02f0da" }}
                                >
                                    Apply Now
                                    <Icon as={ArrowRight} boxSize={4} />
                                </Button>
                                <Button
                                    variant="outline"
                                    borderColor="rgba(255,255,255,0.25)"
                                    color="white"
                                    rounded="full"
                                    px={6}
                                    _hover={{ bg: "rgba(255,255,255,0.06)" }}
                                >
                                    View Benefits
                                </Button>
                            </HStack>
                        </Stack>

                        <Box position="relative" justifySelf={{ base: "start", md: "end" }} w="full">
                            <Box
                                rounded="2xl"
                                overflow="hidden"
                                borderWidth="1px"
                                borderColor={colors.navyLine}
                                aspectRatio={4 / 5}
                                maxW="380px"
                                ml={{ base: 0, md: "auto" }}
                            >
                                {/* Replace with the real rider photo asset */}
                                <Box
                                    as="img"
                                    src="/rider2.jpeg"
                                    alt="eSpatch rider on an electric delivery motorcycle"
                                    w="full"
                                    h="full"
                                    objectFit="cover"
                                />
                            </Box>

                            <Box
                                position="absolute"
                                top={4}
                                left={4}
                                bg="rgba(10, 18, 28, 0.85)"
                                backdropFilter="blur(6px)"
                                border="1px solid"
                                borderColor={colors.navyLine}
                                rounded="lg"
                                px={3}
                                py={2}
                            >
                                <HStack gap={2} mb={0.5}>
                                    <Box boxSize={2} rounded="full" bg={colors.teal} />
                                    <Text fontSize="2xs" color="rgba(255,255,255,0.6)">
                                        Hired
                                    </Text>
                                </HStack>
                                <Text fontSize="sm" fontWeight="semibold" color="white">
                                    100% Verified
                                </Text>
                            </Box>
                        </Box>
                    </SimpleGrid>
                </Container>
            </Box>

            {/* ---------------------------------------------------------------- */}
            {/* Why join — feature cards                                         */}
            {/* ---------------------------------------------------------------- */}
            <Box bg={colors.slateBg} py={{ base: 16, md: 20 }}>
                <Container maxW="6xl">
                    <Stack gap={4} textAlign="center" maxW="2xl" mx="auto" mb={12}>
                        <Badge
                            alignSelf="center"
                            bg="rgba(1, 222, 203, 0.1)"
                            color="#049b8d"
                            rounded="full"
                            px={3}
                            py={1}
                            fontSize="xs"
                            w="fit-content"
                        >
                            Why join eSpatch
                        </Badge>
                        <Heading
                            as="h2"
                            fontFamily={fonts.display}
                            fontSize={{ base: "2xl", md: "3xl" }}
                            fontWeight="700"
                            color={colors.ink}
                        >
                            A Career Built on Stability and Professionalism
                        </Heading>
                        <Text color={colors.bodyGray}>
                            We aren't a gig platform. We are an employer of choice providing
                            a structured career path for Nigeria's best riders.
                        </Text>
                    </Stack>

                    <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap={5}>
                        {benefits.map((benefit) => (
                            <Stack
                                key={benefit.title}
                                bg="white"
                                p={6}
                                rounded="xl"
                                borderWidth="1px"
                                borderColor="rgba(11, 18, 32, 0.06)"
                                gap={4}
                                boxShadow="0 1px 2px rgba(16, 24, 40, 0.04)"
                            >
                                <Flex
                                    boxSize={10}
                                    align="center"
                                    justify="center"
                                    rounded="lg"
                                    bg={colors.tealSoft}
                                >
                                    <Icon as={benefit.icon} boxSize={5} color={colors.teal} />
                                </Flex>
                                <Stack gap={1}>
                                    <Heading as="h3" fontSize="md" fontFamily={fonts.display} color={colors.ink}>
                                        {benefit.title}
                                    </Heading>
                                    <Text fontSize="sm" color={colors.bodyGray}>
                                        {benefit.description}
                                    </Text>
                                </Stack>
                                <HStack gap={2} fontSize="xs" color="#049b8d" fontWeight="medium">
                                    <Text>✓</Text>
                                    <Text>{benefit.highlight}</Text>
                                </HStack>
                            </Stack>
                        ))}
                    </SimpleGrid>
                </Container>
            </Box>

            {/* ---------------------------------------------------------------- */}
            {/* Criteria + application form                                      */}
            {/* ---------------------------------------------------------------- */}
            <Box py={{ base: 16, md: 24 }}>
                <Container maxW="6xl">
                    <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: 12, lg: 16 }}>
                        {/* Left column */}
                        <Stack gap={8}>
                            <Stack gap={3}>
                                <Heading
                                    as="h2"
                                    fontFamily={fonts.display}
                                    fontSize={{ base: "2xl", md: "3xl" }}
                                    fontWeight="700"
                                    color={colors.ink}
                                >
                                    What We Look For
                                </Heading>
                                <Text color={colors.bodyGray} maxW="46ch">
                                    We maintain the highest standards in the industry. To join
                                    our fleet, you must meet the following criteria:
                                </Text>
                            </Stack>

                            <Stack gap={3}>
                                {criteria.map((item) => (
                                    <HStack
                                        key={item.title}
                                        align="start"
                                        gap={4}
                                        bg={colors.slateBg}
                                        rounded="lg"
                                        p={4}
                                    >
                                        <Flex
                                            boxSize={8}
                                            flexShrink={0}
                                            align="center"
                                            justify="center"
                                            rounded="full"
                                            bg="white"
                                        >
                                            <Icon as={item.icon} boxSize={4} color={colors.teal} />
                                        </Flex>
                                        <Stack gap={0.5}>
                                            <Text fontWeight="semibold" fontSize="sm" color={colors.ink}>
                                                {item.title}
                                            </Text>
                                            <Text fontSize="sm" color={colors.bodyGray}>
                                                {item.description}
                                            </Text>
                                        </Stack>
                                    </HStack>
                                ))}
                            </Stack>

                            <Box bg={colors.navy} rounded="xl" p={6} position="relative" overflow="hidden">
                                <Stack gap={2} maxW="80%">
                                    <Text fontFamily={fonts.display} fontWeight="700" color="white">
                                        ESG Impact
                                    </Text>
                                    <Text fontSize="sm" color="rgba(255,255,255,0.65)">
                                        Our riders are the face of sustainable logistics. By
                                        joining, you're helping Lagos breathe easier.
                                    </Text>
                                    <HStack gap={2} color={colors.teal} fontSize="sm" fontWeight="medium" pt={1}>
                                        <Icon as={Leaf} boxSize={4} />
                                        <Text>See how it's measured</Text>
                                    </HStack>
                                </Stack>
                            </Box>
                        </Stack>

                        {/* Right column — application form */}
                        <Box
                            as="form"
                            onSubmit={handleSubmit}
                            bg="white"
                            rounded="2xl"
                            p={{ base: 6, md: 8 }}
                            borderWidth="1px"
                            borderColor="rgba(11, 18, 32, 0.08)"
                            boxShadow="0 20px 40px -20px rgba(11, 18, 32, 0.18)"
                            h="fit-content"
                        >
                            <Stack gap={1} mb={6}>
                                <Heading as="h3" fontFamily={fonts.display} fontSize="xl" color={colors.ink}>
                                    Apply for a Position
                                </Heading>
                                <Text fontSize="sm" color={colors.bodyGray}>
                                    Submit your details below and our recruitment team will
                                    reach out within 24 hours.
                                </Text>
                            </Stack>

                            <Stack gap={5}>
                                <SimpleGrid columns={2} gap={4}>
                                    <Field.Root>
                                        <Field.Label fontSize="xs" color={colors.bodyGray}>
                                            Full Name
                                        </Field.Label>
                                        <Input
                                            placeholder="John Doe"
                                            value={form.fullName}
                                            onChange={handleChange("fullName")}
                                            bg={colors.slateBg}
                                            border="none"
                                        />
                                    </Field.Root>
                                    <Field.Root>
                                        <Field.Label fontSize="xs" color={colors.bodyGray}>
                                            Phone Number
                                        </Field.Label>
                                        <Input
                                            placeholder="+234..."
                                            value={form.phoneNumber}
                                            onChange={handleChange("phoneNumber")}
                                            bg={colors.slateBg}
                                            border="none"
                                        />
                                    </Field.Root>
                                </SimpleGrid>

                                <Field.Root>
                                    <Field.Label fontSize="xs" color={colors.bodyGray}>
                                        Preferred Location
                                    </Field.Label>
                                    <Input
                                        placeholder="Lagos Island"
                                        value={form.preferredLocation}
                                        onChange={handleChange("preferredLocation")}
                                        bg={colors.slateBg}
                                        border="none"
                                    />
                                </Field.Root>

                                <SimpleGrid columns={2} gap={4}>
                                    <Field.Root>
                                        <Field.Label fontSize="xs" color={colors.bodyGray}>
                                            Attach CV
                                        </Field.Label>
                                        {/* Hidden native file input */}
                                        <input
                                            ref={fileInputRef}
                                            type="file"
                                            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                            style={{ display: "none" }}
                                            onChange={handleCvChange}
                                            id="cv-upload"
                                        />
                                        {/* Styled upload trigger */}
                                        <Box
                                            as="label"
                                            htmlFor="cv-upload"
                                            display="flex"
                                            flexDirection="column"
                                            alignItems="center"
                                            justifyContent="center"
                                            gap={1}
                                            bg={cvFile ? "rgba(1,222,203,0.08)" : colors.slateBg}
                                            border={cvFile ? "1.5px solid" : "1.5px dashed"}
                                            borderColor={cvFile ? colors.teal : "#cdd8e3"}
                                            borderRadius="md"
                                            px={3}
                                            py={3}
                                            cursor="pointer"
                                            transition="all 0.2s"
                                            _hover={{ borderColor: colors.teal, bg: "rgba(1,222,203,0.06)" }}
                                            minH="56px"
                                        >
                                            {cvFile ? (
                                                <>
                                                    <Text fontSize="xl" lineHeight={1}>📄</Text>
                                                    <Text fontSize="2xs" color={colors.teal} fontWeight="600" textAlign="center" noOfLines={1}>{cvFile.name}</Text>
                                                    <Text fontSize="2xs" color={colors.bodyGray}>{(cvFile.size / 1024).toFixed(0)} KB</Text>
                                                </>
                                            ) : (
                                                <>
                                                    <Text fontSize="xl" lineHeight={1}>⬆</Text>
                                                    <Text fontSize="2xs" color={colors.bodyGray} textAlign="center">PDF / DOCX · max 5 MB</Text>
                                                </>
                                            )}
                                        </Box>
                                        {cvError && (
                                            <Text fontSize="2xs" color="red.500" mt={1}>{cvError}</Text>
                                        )}
                                    </Field.Root>
                                    <Field.Root>
                                        <Field.Label fontSize="xs" color={colors.bodyGray}>
                                            Experience (Years)
                                        </Field.Label>
                                        <Input
                                            placeholder="2"
                                            type="number"
                                            min={0}
                                            value={form.experienceYears}
                                            onChange={handleChange("experienceYears")}
                                            bg={colors.slateBg}
                                            border="none"
                                        />
                                    </Field.Root>
                                </SimpleGrid>

                                <Field.Root>
                                    <Field.Label fontSize="xs" color={colors.bodyGray}>
                                        Message (Optional)
                                    </Field.Label>
                                    <Textarea
                                        placeholder="Tell us why you want to join eSpatch..."
                                        value={form.message}
                                        onChange={handleChange("message")}
                                        bg={colors.slateBg}
                                        border="none"
                                        rows={3}
                                    />
                                </Field.Root>

                                {submitStatus === "success" ? (
                                    <Box
                                        bg="rgba(1,222,203,0.12)"
                                        border="1px solid"
                                        borderColor={colors.teal}
                                        borderRadius="xl"
                                        p={5}
                                        textAlign="center"
                                    >
                                        <Text fontSize="2xl" mb={2}>✅</Text>
                                        <Text fontWeight="700" color={colors.ink} fontSize="sm">Application Received!</Text>
                                        <Text fontSize="xs" color={colors.bodyGray} mt={1}>
                                            We have received your application and will be in touch shortly.
                                        </Text>
                                    </Box>
                                ) : (
                                    <>
                                        {submitStatus === "error" && (
                                            <Box bg="red.50" border="1px solid" borderColor="red.200" borderRadius="md" p={3}>
                                                <Text fontSize="xs" color="red.600">{submitError}</Text>
                                            </Box>
                                        )}
                                        <Button
                                            type="submit"
                                            bg={colors.teal}
                                            color={colors.ink}
                                            rounded="full"
                                            size="lg"
                                            _hover={{ bg: "#02f0da" }}
                                            loading={submitting}
                                            loadingText="Sending…"
                                            disabled={submitting}
                                        >
                                            Submit Application
                                            <Icon as={ArrowRight} boxSize={4} />
                                        </Button>
                                        <Text fontSize="2xs" color={colors.bodyGray} textAlign="center">
                                            By submitting, you agree to our Rider Terms and Privacy Policy.
                                        </Text>
                                    </>
                                )}
                            </Stack>
                        </Box>
                    </SimpleGrid>
                </Container>
            </Box>
        </Box>
    );
}