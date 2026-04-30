// src/lib/theme.ts
import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'
//var(--font-space-grotesk),
const config = defineConfig({
    theme: {
        tokens: {
            fonts: {
                heading: { value: ' Syne, sans-serif' },
                body: { value: 'var(--font-syne), Syne, sans-serif' },
            },
        },
        semanticTokens: {
            colors: {
                bg: {
                    DEFAULT: { value: '#0D1B2A' },
                },
                text: {
                    DEFAULT: { value: '#E5E7EB' },
                    green: {value: '#00B4A6'}
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
            },
        },
    },
    globalCss: {
        body: {
            bg: 'bg',
            color: 'text',
            margin: 0,
        },
        'label, .label': {
            fontFamily: 'var(--font-space-grotesk), Syne, sans-serif',
        },
        '@keyframes softGlow': {
            '0%, 100%': {
                boxShadow: '0 0 8px 2px rgba(0, 180, 166, 0.4), 0 0 20px 4px rgba(0, 180, 166, 0.15)',
            },
            '50%': {
                boxShadow: '0 0 16px 5px rgba(0, 180, 166, 0.65), 0 0 40px 10px rgba(0, 180, 166, 0.25)',
            },
        },
        'button-glow, .btn': {
            animation: 'softGlow 2.8s ease-in-out infinite',
            transition: 'box-shadow 0.3s ease, transform 0.2s ease',
            _hover: {
                boxShadow: '0 0 24px 8px rgba(0, 180, 166, 0.75), 0 0 60px 16px rgba(0, 180, 166, 0.3)',
                transform: 'translateY(-1px)',
            },
        },
    },
})

const system = createSystem(defaultConfig, config)

export default system