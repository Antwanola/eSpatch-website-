// src/lib/theme.ts
import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'
//var(--font-space-grotesk),
const config = defineConfig({
    theme: {
        tokens: {
            fonts: {
                heading: { value: 'Syne, sans-serif' },
                body: { value: 'var(--font-dm-sans), var(--font-inter), sans-serif' },
                eyebrow: { value: 'var(--font-dm-sans), sans-serif' },
            },
            fontSizes: {
                badge: { value: '11px' },
                caption: { value: '13px' },
                sm: { value: '14px' },
                body: { value: '15px' },
                md: { value: '16px' },
                lg: { value: '18px' },
                xl: { value: '20px' },
                '2xl': { value: '24px' },
                '3xl': { value: '28px' },
                '4xl': { value: '36px' },
                '5xl': { value: '44px' },
                display: { value: '56px' },
            },
            fontWeights: {
                regular: { value: '400' },
                medium: { value: '500' },
                semibold: { value: '600' },
                bold: { value: '700' },
            },
            lineHeights: {
                tight: { value: '1.08' },
                heading: { value: '1.15' },
                snug: { value: '1.3' },
                normal: { value: '1.65' },
                relaxed: { value: '1.75' },
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