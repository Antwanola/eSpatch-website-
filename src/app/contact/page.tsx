"use client"
import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  HStack,
  Icon,
  Input,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import { FormFieldProps } from "@/types/forms";

import {
  FiArrowRight,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiTwitter,
} from "react-icons/fi";

export default function ContactPage() {

  const [formData, setFormData] = useState({
    companyName: "",
    fullName: "",
    email: "",
    phoneNumber: "",
    platformType: "",
    jobTitle: "",
    pickupLocation: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const sendEmail = async () => {
    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Failed to send email.");
      }

      setStatusMessage({
        type: "success",
        text: "Enquiry submitted successfully! Our team will reach out soon.",
      });

      setFormData({
        companyName: "",
        fullName: "",
        email: "",
        phoneNumber: "",
        platformType: "",
        jobTitle: "",
        pickupLocation: "",
        message: "",
      });
    } catch (error: any) {
      console.error(error);
      setStatusMessage({
        type: "error",
        text: error.message || "An error occurred while sending your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Box minH="100vh" bg="#F4F8FA" color="#0B1D2A">
      {/* =========================
          HERO
      ========================= */}
      <Box
        bg="#071A29"
        color="white"
        minH={{ base: "auto", md: "380px" }}
        display="flex"
        alignItems="center"
      >
        <Container maxW="1200px" px={{ base: "4", sm: "6", md: "8" }}>
          <Stack
            maxW="650px"
            gap="5"
            py={{ base: "12", sm: "16", md: "20" }}
          >
            <Box
              alignSelf="flex-start"
              px="3"
              py="1"
              border="1px solid"
              borderColor="#00B8A9"
              borderRadius="full"
            >
              <Text
                fontSize={{ base: "8px", sm: "9px" }}
                fontWeight="600"
                color="#00B8A9"
                letterSpacing="0.12em"
              >
                CONTACT & PARTNER
              </Text>
            </Box>

            <Heading
              fontSize={{
                base: "32px",
                sm: "44px",
                md: "56px",
                lg: "64px",
              }}
              lineHeight="1.05"
              fontWeight="500"
              letterSpacing="-0.045em"
            >
              Get in Touch
            </Heading>

            <Text
              maxW="520px"
              fontSize={{
                base: "13px",
                sm: "14px",
                md: "15px",
              }}
              lineHeight="1.7"
              color="whiteAlpha.600"
            >
              Powering sustainable logistics in Sub-Saharan Africa.
              Whether you're a potential partner, investor, or journalist,
              we're ready to talk.
            </Text>
          </Stack>
        </Container>
      </Box>

      {/* =========================
          CONTACT SECTION
      ========================= */}
      <Box
        id="contact"
        bg="#F4F8FA"
        py={{ base: "10", sm: "14", md: "20" }}
      >
        <Container maxW="1100px" px={{ base: "4", sm: "6", md: "8" }}>
          <Grid
            templateColumns={{
              base: "1fr",
              md: "0.85fr 1.15fr",
            }}
            gap={{
              base: "10",
              sm: "12",
              md: "16",
              lg: "20",
            }}
            alignItems="start"
          >
            {/* =====================
                CONTACT INFORMATION
            ===================== */}
            <Stack gap={{ base: "7", md: "9" }}>
              {/* Office Address */}
              <Box>
                <Text
                  fontSize={{ base: "11px", md: "12px" }}
                  fontWeight="600"
                  color="#0B1D2A"
                  mb={{ base: "3", md: "4" }}
                >
                  Office Address
                </Text>

                <HStack align="start" gap="4">
                  <Box
                    w="36px"
                    h="36px"
                    borderRadius="8px"
                    bg="#DCEFF0"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexShrink="0"
                  >
                    <Icon color="#00A99B">
                      <FiMapPin />
                    </Icon>
                  </Box>

                  <Stack gap="1">
                    <Text
                      fontSize={{ base: "12px", md: "13px" }}
                      fontWeight="600"
                    >
                      Lagos Island Corridor
                    </Text>

                    <Text
                      fontSize={{ base: "11px", md: "12px" }}
                      color="gray.500"
                      lineHeight="1.5"
                    >
                      Sangotedo – Ajah / Lekki
                      <br />
                      Lagos, Nigeria
                    </Text>
                  </Stack>
                </HStack>
              </Box>

              {/* Email Enquiries */}
              <Box>
                <Text
                  fontSize={{ base: "11px", md: "12px" }}
                  fontWeight="600"
                  mb={{ base: "3", md: "4" }}
                >
                  Email Enquiries
                </Text>

                <Stack gap="4">
                  <HStack align="center" gap="4">
                    <Box
                      w="36px"
                      h="36px"
                      borderRadius="8px"
                      bg="#DCEFF0"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      flexShrink="0"
                    >
                      <Icon color="#00A99B">
                        <FiMail />
                      </Icon>
                    </Box>

                    <Stack gap="0">
                      <Text
                        fontSize="9px"
                        color="gray.500"
                        textTransform="uppercase"
                        letterSpacing="0.05em"
                      >
                        General
                      </Text>

                      <Link
                        href="mailto:hello@espatch.ng"
                        fontSize={{ base: "11px", md: "12px" }}
                        fontWeight="600"
                        color="#0B1D2A"
                      >
                        hello@espatch.ng
                      </Link>
                    </Stack>
                  </HStack>

                  <HStack align="center" gap="4">
                    <Box
                      w="36px"
                      h="36px"
                      borderRadius="8px"
                      bg="#DCEFF0"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      flexShrink="0"
                    >
                      <Icon color="#00A99B">
                        <FiMail />
                      </Icon>
                    </Box>

                    <Stack gap="0">
                      <Text
                        fontSize="9px"
                        color="gray.500"
                        textTransform="uppercase"
                        letterSpacing="0.05em"
                      >
                        Press & Media
                      </Text>

                      <Link
                        href="mailto:press@espatch.ng"
                        fontSize={{ base: "11px", md: "12px" }}
                        fontWeight="600"
                        color="#0B1D2A"
                      >
                        press@espatch.ng
                      </Link>
                    </Stack>
                  </HStack>
                </Stack>
              </Box>

              {/* Social Media */}
              <Box>
                <Text
                  fontSize={{ base: "11px", md: "12px" }}
                  fontWeight="600"
                  mb="3"
                >
                  Follow Our Journey
                </Text>

                <HStack gap="3">
                  {[
                    FiLinkedin,
                    FiTwitter,
                    FiInstagram,
                  ].map((SocialIcon, index) => (
                    <Link
                      key={index}
                      href="#"
                      w="36px"
                      h="36px"
                      border="1px solid"
                      borderColor="gray.200"
                      borderRadius="8px"
                      bg="white"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      color="gray.500"
                      _hover={{
                        color: "#00B8A9",
                        borderColor: "#00B8A9",
                      }}
                    >
                      <Icon size="sm">
                        <SocialIcon />
                      </Icon>
                    </Link>
                  ))}
                </HStack>
              </Box>
            </Stack>

            {/* =====================
                PARTNERSHIP FORM
            ===================== */}
            <Box
              id="partner-form"
              bg="white"
              borderRadius="12px"
              p={{
                base: "5",
                sm: "6",
                md: "8",
              }}
              boxShadow="0 5px 25px rgba(7, 26, 41, 0.07)"
              border="1px solid"
              borderColor="gray.100"
            >
              <Stack gap={{ base: "4", sm: "5" }}>
                <Box>
                  <Heading
                    fontSize={{ base: "18px", md: "20px" }}
                    fontWeight="500"
                    mb="1"
                  >
                    Partnership Enquiry
                  </Heading>

                  <Text
                    fontSize={{ base: "11px", md: "12px" }}
                    color="gray.500"
                    lineHeight="1.5"
                  >
                    Fill out the form below and our team
                    will reach out within 24 hours.
                  </Text>
                </Box>

                <SimpleGrid columns={{ base: 1, sm: 2 }} gap={{ base: "3", sm: "4" }}>
                  <FormField
                    label="Full Name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleTextChange}
                    placeholder="John Doe"
                  />

                  <FormField
                    label="Company Name"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleTextChange}
                    placeholder="e.g. Acme Corp"
                  />

                  <FormField
                    label="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleTextChange}
                    placeholder="john@example.com"
                  />

                  <FormField
                    label="Phone Number"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleTextChange}
                    placeholder="+234 800 000 0000"
                  />

                  <FormField
                    label="Job Title"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleTextChange}
                    placeholder="Head of Logistics"
                  />

                  <FormField
                    label="Platform Type"
                    name="platformType"
                    value={formData.platformType}
                    onChange={handleTextChange}
                    placeholder="E-commerce"
                  />
                </SimpleGrid>

                <Box>
                  <Text
                    fontSize="11px"
                    fontWeight="600"
                    mb="2"
                    color="gray.600"
                  >
                    Message
                  </Text>

                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleTextChange}
                    placeholder="How can we help you?"
                    minH="110px"
                    resize="none"
                    bg="#F4F7F8"
                    border="none"
                    borderRadius="6px"
                    fontSize="12px"
                    p="3"
                    _placeholder={{
                      color: "gray.400",
                    }}
                    _focus={{
                      borderColor: "#00B8A9",
                      boxShadow:
                        "0 0 0 1px #00B8A9",
                    }}
                  />
                </Box>

                {statusMessage && (
                  <Box
                    p="3"
                    borderRadius="6px"
                    bg={statusMessage.type === "success" ? "teal.50" : "red.50"}
                    color={statusMessage.type === "success" ? "teal.800" : "red.800"}
                    border="1px solid"
                    borderColor={statusMessage.type === "success" ? "teal.200" : "red.200"}
                    fontSize="12px"
                  >
                    {statusMessage.text}
                  </Box>
                )}

                <Button
                  w="full"
                  bg="#00B8A9"
                  color="white"
                  h="40px"
                  fontSize="12px"
                  fontWeight="600"
                  borderRadius="6px"
                  _hover={{
                    bg: "#00A99B",
                  }}
                  transition="all 0.2s"
                  onClick={sendEmail}
                  disabled={isSubmitting}
                  opacity={isSubmitting ? 0.7 : 1}
                >
                  {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                  {!isSubmitting && <FiArrowRight />}
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Container>
      </Box>

      {/* =========================
          INVESTOR CTA
      ========================= */}
      <Box
        bg="#071A29"
        color="white"
        py={{
          base: "12",
          sm: "16",
          md: "20",
        }}
        px={{ base: "4", sm: "6" }}
        textAlign="center"
      >
        <Container maxW="700px">
          <Stack align="center" gap="4">
            <Box
              px="3"
              py="1"
              border="1px solid"
              borderColor="#00B8A9"
              borderRadius="full"
            >
              <Text
                fontSize={{ base: "7px", sm: "8px" }}
                fontWeight="600"
                letterSpacing="0.12em"
                color="#00B8A9"
              >
                INVESTOR RELATIONS
              </Text>
            </Box>

            <Heading
              fontSize={{
                base: "22px",
                sm: "30px",
                md: "38px",
              }}
              fontWeight="500"
              letterSpacing="-0.035em"
              lineHeight="1.15"
            >
              Scale with the Future of African Logistics
            </Heading>

            <Text
              maxW="540px"
              fontSize={{ base: "11px", md: "12px" }}
              lineHeight="1.6"
              color="whiteAlpha.500"
            >
              We are building the next-zero infrastructure
              for Africa's urban centers. For diligence
              requests, investor decks, or meeting
              requirements, connect with our capital
              management team.
            </Text>

            <HStack
              gap="3"
              pt="3"
              flexWrap="wrap"
              justify="center"
              w="full"
            >
              <Button
                bg="#00B8A9"
                color="white"
                size="sm"
                h="38px"
                fontSize="11px"
                px="6"
                w={{ base: "full", sm: "auto" }}
                borderRadius="6px"
                _hover={{
                  bg: "#00A99B",
                }}
              >
                Request Investor Deck
                <FiArrowRight />
              </Button>

              <Button
                variant="outline"
                borderColor="whiteAlpha.200"
                color="white"
                size="sm"
                h="38px"
                fontSize="11px"
                px="6"
                w={{ base: "full", sm: "auto" }}
                borderRadius="6px"
                _hover={{
                  bg: "whiteAlpha.100",
                }}
              >
                Schedule a Briefing
              </Button>
            </HStack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}


/* =========================
   FORM FIELD
========================= */

function FormField({
  label,
  placeholder,
  name,
  value,
  onChange,
}: FormFieldProps) {
  return (
    <Box>
      <Text
        fontSize="11px"
        fontWeight="600"
        mb="2"
        color="gray.600"
      >
        {label}
      </Text>

      <Input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        h="40px"
        bg="#F4F7F8"
        border="none"
        borderRadius="6px"
        fontSize="12px"
        px="3"
        _placeholder={{
          color: "gray.400",
        }}
        _focus={{
          borderColor: "#00B8A9",
          boxShadow: "0 0 0 1px #00B8A9",
        }}
      />
    </Box>
  );
}