import { Box, Heading, Text, Icon } from "@chakra-ui/react";

interface ProcessBoxProps {
    step: string;
    title: string;
    description: string;
    icon: React.ElementType;
}

export default function ProcessBox({ step, title, description, icon }: ProcessBoxProps) {
    return (
        <Box
            p={6}
            bgColor={'#152B43'}
            rounded={12}
            w={'full'}
            transition="all 0.3s ease"
            _hover={{ transform: 'translateY(-5px)', bgColor: '#1a3a5a' }}
        >
            <Box rounded={15} p={3} bgColor={'#0d1b2ad1'} w={'fit-content'} fontSize={24} mb={5} color="#00B4A5">
                <Icon as={icon} />
            </Box>
            <Box>
                <Text fontSize="xs" fontWeight="bold" color="#00B4A5" mb={1}>{step}</Text>
                <Heading size="md" mb={3} color="white">{title}</Heading>
                <Text fontSize="sm" color="gray.400" lineHeight="tall">{description}</Text>
            </Box>
        </Box >
    )
}