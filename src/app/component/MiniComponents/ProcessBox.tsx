import { Box, Heading, Text, Icon } from "@chakra-ui/react";

interface ProcessBoxProps {
    step: string;
    title: string;
    description: string;
    icon: React.ElementType;
    iconColor?: string;
}

export default function ProcessBox({ step, title, description, icon, iconColor }: ProcessBoxProps) {
    return (
        <Box
            p={6}
            bgColor={'#152B43'}
            rounded={12}
            w={'full'}
            transition="all 0.3s ease"
            _hover={{ transform: 'translateY(-5px)', bgColor: '#1a3a5a' }}
        >
            <Box rounded={15} p={3} bgColor={'#0d1b2ad1'} w={'fit-content'} fontSize={24} mb={5} color={`#${iconColor}`}>
                <Icon as={icon} />
            </Box>
            <Box>
                <Text fontSize="11px" fontWeight="600" letterSpacing="0.12em" color="#00B4A5" mb={1} fontFamily="'DM Sans', sans-serif">{step}</Text>
                <Heading fontSize="18px" fontFamily="Syne" fontWeight="600" mb={3} color="white">{title}</Heading>
                <Text fontSize="15px" fontFamily="'DM Sans', sans-serif" color="gray.400" lineHeight="1.65">{description}</Text>
            </Box>
        </Box >
    )
}