import { Box, Flex, Heading, Text, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import InfoCards from './InfoCards';
import { FaShieldAlt } from "react-icons/fa";
import { RiCheckDoubleFill } from "react-icons/ri";
import { BsBroadcast } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";

interface Props { }

const WhiteCTA: React.FC<Props> = () => {
  return (
    <Box bg="white" color="black">

      {/* HEADER */}
      <Flex
        px={{ base: 5, md: 10, lg: 20 }}
        pt={{ base: 12, md: 16, lg: 20 }}
        pb={{ base: 8, md: 10 }}
        direction="column"
        align="center"
      >
        <Flex
          mb={6}
          align="center"
          gap={2}
          border="1px solid"
          borderColor="#01decb4c"
          borderRadius="full"
          px={4}
          py={1}
          bg="#00867b2c"
        >
          <Text
            color="teal.500"
            fontSize="xs"
            fontWeight="600"
            letterSpacing="wider"
          >
            WHY ESPATCH ?
          </Text>
        </Flex>

        <Heading
          textAlign="center"
          fontSize={{ base: "30px", md: "42px", lg: "54px" }}
          lineHeight="1.1"
          maxW="850px"
        >
          Built for platforms. Designed for scale
        </Heading>

        <Text
          mt={6}
          textAlign="center"
          color="gray.500"
          fontSize={{ base: "16px", md: "18px" }}
          maxW="600px"
        >
          One contract covers everything. We own the risk,
          you own the results.
        </Text>
      </Flex>

      {/* CARDS */}
      <Box
        px={{ base: 5, md: 10, lg: 20 }}
        pb={{ base: 14, md: 20 }}
      >
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          gap={6}
        >

          <InfoCards
            topIcon={<FaShieldAlt />}
            title="Zero Liability"
            sub="All operational risk sits with eSpatch — accidents, insurance, employment compliance, and regulatory exposure. Your platform stays clean."
            checkIcon={<RiCheckDoubleFill />}
            checktext={[
              "Fully insured fleet operations",
              "Labour law compliance handled",
              "Incident response built-in",
            ]}
          />

          <InfoCards
            topIcon={<BsBroadcast />}
            title="Real-Time Visibility"
            sub="Full GPS telematics access for partners — live tracking, accurate ETAs, rider performance scores, and delivery completion data."
            checkIcon={<RiCheckDoubleFill />}
            checktext={[
              "Live GPS per rider, per order",
              "Partner API & dashboard access",
              "Performance analytics reports",
            ]}
          />

          <InfoCards
            topIcon={<HiUserGroup />}
            title="Professional Riders"
            sub="Uniformed, salaried employees — not gig workers. Consistent standards, trained conduct, and accountability on every delivery."
            checkIcon={<RiCheckDoubleFill />}
            checktext={[
              "Salaried & benefits-eligible",
              "Branded uniform standards",
              "Ongoing training programme",
            ]}
          />

        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default WhiteCTA;