import { Box, Flex, Heading, Text, SimpleGrid } from "@chakra-ui/react"
import MainMargin from "./MarginGuides/MianMargin"
import ProcessBox from "./MiniComponents/ProcessBox"
import { FaCode, FaRoute, FaLeaf, FaWallet } from "react-icons/fa6"

export default function Works() {
    const steps = [
        {
            step: "STEP 01",
            title: "API Booking",
            description: "Seamlessly integrate your platform via our robust API for instant order placement.",
            icon: FaCode
        },
        {
            step: "STEP 02",
            title: "Smart Dispatch",
            description: "Our AI-driven system assigns the nearest rider for optimal delivery routes.",
            icon: FaRoute
        },
        {
            step: "STEP 03",
            title: "Green Delivery",
            description: "100% electric delivery with zero emissions, protecting our urban environment.",
            icon: FaLeaf
        },
        {
            step: "STEP 04",
            title: "Instant Settlement",
            description: "Real-time tracking and automated financial settlement for every completed trip.",
            icon: FaWallet
        }
    ]

    return (
        <Box bgColor={'#151c34ff'} color={'white'} py={20}>
            <MainMargin>
                <Flex gap={6} flexDirection={'column'} px={6} justifyContent={'center'} alignItems={'center'}>
                    <Heading
                        fontFamily="Syne"
                        fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                        textAlign="center"
                    >
                        Our Process
                    </Heading>
                    <Text
                        fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
                        textAlign={'center'}
                        maxW="600px"
                        color="gray.400"
                    >
                        From API integration to final settlement, our automated workflow ensures zero friction and maximum efficiency.
                    </Text>

                    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} mt={16} gap={8} w="full">
                        {steps.map((item) => (
                            <ProcessBox
                                key={item.step}
                                step={item.step}
                                title={item.title}
                                description={item.description}
                                icon={item.icon}
                            />
                        ))}
                    </SimpleGrid>
                </Flex>
            </MainMargin>
        </Box>
    )
}