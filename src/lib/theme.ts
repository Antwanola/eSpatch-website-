// src/lib/theme.ts
import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'
//var(--font-space-grotesk),
const config = defineConfig({
    theme: {
        tokens: {
            fonts: {
                heading: { value: ' Syne, sans-serif' },
                body: { value: 'var(--font-inter), Syne, sans-serif' },
            },
        },
        semanticTokens: {
            colors: {
                bg: {
                    DEFAULT: { value: '#0D1B2A' },
                },
                text: {
                    DEFAULT: { value: '#E5E7EB' },
                    green: { value: '#00B4A6' }
                },
                button: {
                    DEFAULT: { value: "#00B4A6" }
                },
                subtle: {
                    DEFAULT: { value: '#1a1a1a' },
                },
                border: {
                    DEFAULT: { value: "#E5E7EB" },
                },
                footerBg: {
                    DEFAULT: { value: "#0D1B2A" },
                },
            },
        },
    },
})

const system = createSystem(defaultConfig, config)

export default system