import React from "react";
import {
    Box,
    Heading,
    Text,
    Flex,
} from "@chakra-ui/react";
import { Separator } from "@chakra-ui/react";

interface InfoCardProps {
    topIcon: React.ReactNode;
    title: string;
    sub: string;
    checktext: string[];
    checkIcon: React.ReactNode;
}

export default function InfoCards({
    topIcon,
    title,
    sub,
    checkIcon,
    checktext,
}: InfoCardProps) {
    return (
        <Box
            bg="white"
            p={{ base: 8, md: 10 }}
            borderRadius="3xl"
            border="1px solid"
            borderColor="gray.100"
            position="relative"
            overflow="hidden"
            h="100%"
            transition="all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
            _hover={{
                transform: "translateY(-8px)",
                shadow: "2xl",
                borderColor: "teal.100",
            }}
        >
            {/* LEFT ACCENT LINE */}
            <Box
                position="absolute"
                left={0}
                top={0}
                bottom={0}
                width="6px"
                bg="#00B4A5"
            />

            {/* TOP ICON */}
            <Flex
                w="60px"
                h="60px"
                align="center"
                justify="center"
                borderRadius="2xl"
                bg="#00b4a514"
                color="#00B4A5"
                fontSize="24px"
                mb={8}
                transition="0.3s ease"
                _groupHover={{ bg: "#00B4A5", color: "white" }}
            >
                {topIcon}
            </Flex>

            {/* TITLE */}
            <Heading
                fontFamily="Syne"
                fontSize={{ base: "22px", md: "26px" }}
                fontWeight="500"
                mb={4}
                color="#0F172A"
                lineHeight="1.2"
                letterSpacing="-0.02em"
            >
                {title}
            </Heading>

            {/* DESCRIPTION */}
            <Text
                color="gray.600"
                fontSize="16px"
                lineHeight="1.8"
                mb={10}
            >
                {sub}
            </Text>

            {/* DIVIDER */}
            <Separator mb={8} borderColor="gray.100" />

            {/* CHECK LIST */}
            <Flex direction="column" gap={5}>
                {checktext.map((check, index) => (
                    <Flex
                        key={`${check}-${index}`}
                        align="flex-start"
                        gap={4}
                    >
                        <Box
                            color="#00B4A5"
                            fontSize="18px"
                            mt="2px"
                        >
                            {checkIcon}
                        </Box>

                        <Text
                            color="gray.600"
                            fontSize="15px"
                            fontWeight="500"
                            lineHeight="short"
                        >
                            {check}
                        </Text>
                    </Flex>
                ))}
            </Flex>
        </Box>
    );
}
