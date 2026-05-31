import {
    Box,
    Button,
    Container,
    Grid,
    GridItem,
    Heading,
    Image,
    Stack,
    Text,
} from "@chakra-ui/react";

export default function AboutPage() {
    return (
        <Box bg="gray.50">
            {/* HERO */}
            <Box bg="#0B1F2E" color="white" py={20}>
                <Container maxW="6xl">
                    <Grid templateColumns={{ base: "1fr", md: "1.2fr 1fr" }} gap={10}>

                        <Stack spacing={6}>
                            <Box
                                bg="teal.500"
                                w="40px"
                                h="4px"
                                borderRadius="full"
                            />

                            <Heading size="xl">
                                Clean. Smart. <br /> Reliable.
                            </Heading>

                            <Text color="gray.300" maxW="420px">
                                A modern logistics company bridging urban delivery gaps
                                using cutting-edge technology and sustainable systems.
                            </Text>

                            <Button bg="teal.500" color="white" w="fit-content">
                                Learn More
                            </Button>
                        </Stack>

                        <Image
                            src="/city-bus.jpg"
                            borderRadius="xl"
                            objectFit="cover"
                            h="260px"
                        />
                    </Grid>
                </Container>
            </Box>

            {/* ABOUT SECTION */}
            <Container maxW="6xl" py={20}>
                <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={10}>

                    <Stack spacing={6}>
                        <Heading size="md">Bridging the Gap in Urban Logistics</Heading>

                        <Text color="gray.600">
                            Logistics is one of the fastest-growing sectors in the world,
                            yet most systems are inefficient, disconnected, and lack
                            sustainability. We are changing that with innovative delivery
                            models and eco-friendly tech.
                        </Text>
                    </Stack>

                    <Stack spacing={6}>
                        <Text color="gray.600">
                            Our mission is to build a smarter transport system that
                            integrates fleets, infrastructure, and data to create a
                            seamless experience.
                        </Text>

                        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                            <Metric value="30K+" label="Deliveries per month" />
                            <Metric value="500K+" label="Km travelled annually" />
                        </Grid>
                    </Stack>
                </Grid>
            </Container>

            {/* ECOSYSTEM */}
            <Box bg="gray.100" py={20}>
                <Container maxW="6xl">
                    <Heading textAlign="center" size="md" mb={12}>
                        Our Strategic Ecosystem
                    </Heading>

                    <Grid templateColumns={{ base: "1fr", md: "repeat(3,1fr)" }} gap={6}>
                        <Card
                            title="Fleet Technology"
                            description="Smart vehicles equipped with IoT systems"
                        />
                        <Card
                            title="Infrastructure (EV)"
                            description="Supporting electric mobility with modern charging"
                            highlighted
                        />
                        <Card
                            title="Data & Analytics"
                            description="Leveraging real-time insights for optimization"
                        />
                    </Grid>
                </Container>
            </Box>

            {/* SUSTAINABILITY */}
            <Box bg="#0B1F2E" color="white" py={20}>
                <Container maxW="6xl">
                    <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={10}>

                        <Stack spacing={6}>
                            <Heading size="md">
                                Committed to Sustainable Growth
                            </Heading>

                            <Text color="gray.300">
                                Sustainability is central to everything we do. From electric
                                vehicles to efficient routing systems, we reduce our carbon
                                footprint every day.
                            </Text>

                            <Stack direction="row" spacing={4}>
                                <Box bg="teal.500" px={4} py={2} borderRadius="md">
                                    <Text fontSize="sm">EV Fleet</Text>
                                </Box>
                                <Box bg="teal.500" px={4} py={2} borderRadius="md">
                                    <Text fontSize="sm">Smart Routing</Text>
                                </Box>
                            </Stack>
                        </Stack>

                        {/* Fake Chart Placeholder */}
                        <Box
                            bg="whiteAlpha.200"
                            borderRadius="lg"
                            h="220px"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Text color="gray.300">Chart Area</Text>
                        </Box>

                    </Grid>
                </Container>
            </Box>

            {/* LEADERS */}
            <Container maxW="6xl" py={20}>
                <Heading mb={10}>Leadership</Heading>

                <Grid templateColumns={{ base: "repeat(2,1fr)", md: "repeat(4,1fr)" }} gap={6}>
                    {Array.from({ length: 4 }).map((_, i) => (
                        <Stack key={i} spacing={3}>
                            <Box
                                h="140px"
                                bg="gray.200"
                                borderRadius="md"
                            />
                            <Text fontWeight="bold">Name Here</Text>
                            <Text fontSize="sm" color="gray.500">
                                Role here
                            </Text>
                        </Stack>
                    ))}
                </Grid>
            </Container>

            {/* CTA */}
            <Box textAlign="center" py={20}>
                <Stack spacing={6} align="center">
                    <Heading size="sm">Press & Media Assets</Heading>

                    <Button bg="black" color="white">
                        Download Assets
                    </Button>

                    <Text fontSize="sm" color="gray.500">
                        Corporate Information
                    </Text>
                </Stack>
            </Box>
        </Box>
    );
}

/* ----------------- SMALL COMPONENTS ----------------- */

function Metric({ value, label }) {
    return (
        <Box>
            <Heading size="md" color="teal.500">
                {value}
            </Heading>
            <Text fontSize="sm" color="gray.500">
                {label}
            </Text>
        </Box>
    );
}

function Card({ title, description, highlighted }) {
    return (
        <Box
            bg="white"
            p={6}
            borderRadius="lg"
            boxShadow={highlighted ? "lg" : "sm"}
            border={highlighted ? "2px solid" : "1px solid"}
            borderColor={highlighted ? "teal.500" : "gray.200"}
        >
            <Heading size="sm" mb={2}>
                {title}
            </Heading>
            <Text fontSize="sm" color="gray.600">
                {description}
            </Text>
        </Box>
    );
}