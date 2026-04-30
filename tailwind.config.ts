import type { Config } from 'tailwindcss'

const config: Config = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            fontFamily: {
                headline: ['var(--font-space-grotesk)', 'sans-serif'],
                body: ['var(--font-inter)', 'sans-serif'],
                label: ['var(--font-space-grotesk)', 'sans-serif'],
            },
        },
    },
    plugins: [],
}

export default config