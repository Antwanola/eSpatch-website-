import { Box, Flex, Text } from "@chakra-ui/react";

export default function LogisticCard() {
    return (
        <Box p={5} rounded={8} bgColor={'white'}>
            <Flex>
                <Box
                    rounded={10}
                    bgGradient="to-br" gradientFrom="#F99D26" gradientTo="#F05A28"
                    fontFamily={'Syne'}
                    px={10}
                    py={5}
                    color="white"
                    fontWeight="700"
                    fontSize="sm"
                >
                    SDG 11
                </Box>
                <Text fontFamily={'Syne'} fontWeight={600} fontSize={20} px={5} color={'black'}>Sustainable Cities</Text>
            </Flex>
        </Box >
    )
}