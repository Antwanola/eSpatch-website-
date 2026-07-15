import { Box, Flex, Heading, Text, Image, Stack } from "@chakra-ui/react";
import MainMargin from "./MarginGuides/MianMargin";
import { FaLeaf } from "react-icons/fa6";
import LogisticCard from "./MiniComponents/LogisticCard";
import { ImOffice } from "react-icons/im";
import { FaCloud } from "react-icons/fa";

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
                    // spacing={{ base: 10, lg: 20 }}
                    align="center"
                >
                    <Box
                        flex={{ base: '1 1 100%', lg: '0.95 1 25%' }}
                        borderRadius="3xl"
                        overflow="hidden"
                        boxShadow="xl"
                        minW={{ lg: '45%' }}

                    >
                        <Image
                            src="/Logistics%20pic.png"
                            alt="Sustainable Logistics in Lagos"
                            w="full"
                            h="auto"
                            display="block"
                        />
                    </Box>

                    <Box flex={{ base: '1 1 100%', lg: '1.05 1 55%' }} gap={5} ml={7}>
                        <Heading
                            fontFamily="Syne"
                            fontSize={{ base: "18px", md: "26px", lg: "38px" }}
                            fontWeight="500"
                            lineHeight="1.1"
                            color="gray.900"
                            mb={6}
                            textWrap={'wrap'}
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
                        {/* <Text fontFamily={'Syne'} color={'black'}>& communities</Text> */}
                        <Box mt={5} gap={5} display="flex" flexDirection={{ base: "column", md: "row" }}>
                            <LogisticCard
                                address="Sangotedo — Adeniji Adele Corridor"
                                icon={ImOffice}
                                IconBgColor1="#F99D26"
                                IconBgColor2="#F05A28"
                                description="& Communities"
                                sdgNumber="11"
                                title="Sustainable Cities"
                                text="Reducing urban congestion and pollution
                            by replacing combustion motorcycles with
                            clean electric alternatives across Lagos corridors."/>
                            <LogisticCard
                                icon={FaCloud}
                                address="Zero direct emissions per delivery "
                                IconBgColor1="#3D9E36"
                                IconBgColor2="#1B6B29"
                                description="Carbon reduction"
                                sdgNumber="13"
                                title="Climate Action"
                                text="Every delivery on our electric fleet
eliminates CO₂ emissions. We track and
report carbon savings per partner, per
month."  />
                        </Box>
                        <Box
                            mt={10}
                            display={'flex'}
                            flexDirection={{ base: 'column', sm: 'row' }}
                            justifyContent={'space-between'}
                            alignItems={{ base: 'flex-start', sm: 'stretch' }}
                            flexWrap="wrap"
                            borderWidth="1.5px"
                            borderStyle="solid"
                            borderColor="#00b4a542"
                            borderRadius={10}
                            bgColor={'#00b4a514'}
                            px={{ base: 5, md: 8 }}
                            py={{ base: 5, md: 6 }}
                            gap={{ base: 5, sm: 4 }}
                            color="black"
                        >
                            {/* Stat 1 */}
                            <Box flex="1" minW={{ base: '100%', sm: '0' }}>
                                <Heading fontSize={{ base: '2xl', md: '3xl' }}>0kg</Heading>
                                <Text color={'gray.500'} fontFamily={'var(--font-dm-sans)'} fontSize={{ base: 'sm', md: 'md' }}>
                                    Direct CO₂ per delivery
                                </Text>
                            </Box>

                            {/* Divider */}
                            <Box display={{ base: 'none', sm: 'block' }} w="1px" alignSelf="stretch" bg="#00b4a542" />

                            {/* Stat 2 */}
                            <Box flex="1" minW={{ base: '100%', sm: '0' }} px={{ base: 0, sm: 4 }}>
                                <Heading fontSize={{ base: '2xl', md: '3xl' }}>100%</Heading>
                                <Text color={'gray.500'} fontFamily={'var(--font-dm-sans)'} fontSize={{ base: 'sm', md: 'md' }}>
                                    Electric fleet coverage
                                </Text>
                            </Box>

                            {/* Divider */}
                            <Box display={{ base: 'none', sm: 'block' }} w="1px" alignSelf="stretch" bg="#00b4a542" />

                            {/* Stat 3 */}
                            <Box
                                flex="1"
                                minW={{ base: '100%', sm: '0' }}
                                px={{ base: 0, sm: 4 }}
                            >
                                <Heading fontSize={{ base: '2xl', md: '3xl' }}>SDG</Heading>
                                <Flex align="center" gap={2} mt={1} flexWrap="wrap">
                                    <Text color={'gray.500'} fontFamily={'var(--font-dm-sans)'} fontSize={{ base: 'xs', md: 'sm' }}>
                                        UN Goals aligned
                                    </Text>
                                    <Flex
                                        align="center"
                                        gap={1.5}
                                        border="1px solid"
                                        borderColor="#01decb4c"
                                        borderRadius="md"
                                        px={2}
                                        py={0.5}
                                        bg="#00867b2c"
                                        color="teal.600"
                                        flexShrink={0}
                                    >
                                        <FaLeaf size={10} />
                                        <Text fontSize="2xs" fontWeight="700" letterSpacing="0.05em" lineHeight="1.3">
                                            ESG Reporting
                                        </Text>
                                    </Flex>
                                </Flex>
                            </Box>
                        </Box>
                    </Box>

                </Stack>

            </MainMargin>
        </Box>
    );
}