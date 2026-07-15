import { Box, Flex, Separator, Text } from "@chakra-ui/react";
import { ImOffice } from "react-icons/im";


interface LogisticCardProps {
    IconBgColor1: string;
    IconBgColor2:string;
    sdgNumber: string;
    title: string;
    description: string;
    text: string;
    address: string;
    icon: React.ComponentType;

}
export default function LogisticCard({ IconBgColor1, IconBgColor2, sdgNumber, title, address, description, text, icon: Icon }: LogisticCardProps) {
    return (
        <Box p={{ base: 3, md: 5 }} rounded={8} bgColor={'white'}>
            <Flex align="center" gap={{ base: 3, md: 5 }} >
                <Box
                    rounded={10}
                    bgGradient="to-br" gradientFrom={IconBgColor1} gradientTo={IconBgColor2}
                    fontFamily={'Syne'}
                    px={{ base: 2, md: 3 }}
                    py={{ base: 1, md: 2 }}
                    color={'white'}
                    fontWeight="700"
                    fontSize={{ base: '12px', md: '12px' }}
                    // textAlign="center"
                    minW={{ base: '48px', md: 'auto' }}
                >
                    SDG <br />{sdgNumber}
                </Box>
                <Box>
                    <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight="500" fontFamily={'Syne'} color={'black'}>{title}</Text>
                    <Text fontSize={{ base: 'xxs', md: 'xs' }} color="gray.500" fontFamily={'var(--font-dm-sans)'} letterSpacing={'0.5px'}>{description}</Text>
                </Box>



            </Flex>
           <Box >
             <Text mb={5} fontSize="12px" color={'gray.600'} mt={2} >
                {text}</Text>
                 <Separator  borderColor="gray.100"  />
           </Box>
           <Flex align={'center'} gap={2}>
            <Box color={'green.300'}>{<Icon/>}</Box> <Text fontSize="12px" color={'gray.600'} mt={2} ml={2} display={'inline-block'}>{address}</Text>
           </Flex>
        </Box>
    )
}