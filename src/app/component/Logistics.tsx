import { Box, Flex, Heading, Text, Image, Stack } from "@chakra-ui/react";
import MainMargin from "./MarginGuides/MianMargin";
import { FaLeaf } from "react-icons/fa6";
import LogisticCard from "./MiniComponents/LogisticCard";

export default function Logistics() {
    return (
        <Box bgColor="#E5E7EB" py={{ base: 12, md: 24 }}>
            <Box display="flex" justifyContent="center">
                <Flex
                    mb={{ base: 10, md: 16 }}
                    align="center"
                    gap={2}
                    border="1px solid"
                    borderColor="#01decb4c"
                    borderRadius="full"
                    px={4}
                    py={1.5}
                    bg="#00867b2c"
                    w="fit-content"
                    color="teal.600"
                >
                    <FaLeaf />
                    <Text
                        fontSize="xs"
                        fontWeight="700"
                        letterSpacing="0.1em"
                    >
                        ESG COMMITMENT
                    </Text>
                </Flex>
            </Box>

            <MainMargin>
                <Stack
                    direction={{ base: 'column', lg: 'row' }}
                    spacing={{ base: 10, lg: 20 }}
                    align="center"
                >
                    <Box
                        flex="1"
                        borderRadius="3xl"
                        overflow="hidden"
                        boxShadow="xl"
                    >
                        <Image
                            src="/Logistics%20pic.png"
                            alt="Sustainable Logistics in Lagos"
                            w="full"
                            h="auto"
                            display="block"
                        />
                    </Box>

                    <Box flex="1" gap={5}>
                        <Heading
                            fontFamily="Syne"
                            fontSize={{ base: "26px", md: "32px", lg: "42px" }}
                            fontWeight="500"
                            lineHeight="1.1"
                            color="gray.900"
                            mb={6}
                        >
                            Logistics That&apos;s Good for Lagos. And the Planet.
                        </Heading>
                        <Text
                            fontSize={{ base: "md", md: "lg" }}
                            color="gray.600"
                            lineHeight="tall"
                        >
                            Every eSpatch delivery is a petrol journey not made. We are building
                            the infrastructure for a net-zero urban supply chain in Sub-Saharan
                            Africa.
                        </Text>
                        <Text fontFamily={'Syne'} color={'black'}>& communities</Text>
                        <Box mt={5}>
                            <LogisticCard />
                        </Box>
                    </Box>
                </Stack>
            </MainMargin>
        </Box>
    );
}