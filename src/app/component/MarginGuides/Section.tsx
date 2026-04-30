import { Box, type BoxProps } from "@chakra-ui/react";

type SectionProps = {
  children: React.ReactNode;
  px?: BoxProps["px"]; // supports responsive values
};

export default function Section({ children, px }: SectionProps) {
  return (
    <Box
      as="section"
      py={{ base: 4, md: 6, lg: 8 }}
      px={px }
    >
      {children}
    </Box>
  );
}