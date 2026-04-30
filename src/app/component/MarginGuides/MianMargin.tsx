import { Box } from "@chakra-ui/react";



export default function MainMargin({ children }: { children: React.ReactNode }) {
    return <Box
        as="main"
        flex="1"
        px={{ base: 4, sm: 6, md: 10, lg: 16, xl: 24 }}
    >{children}</Box>
}