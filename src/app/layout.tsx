import { Space_Grotesk, Syne } from 'next/font/google'
import { Providers } from "./Providers"
import { Box } from '@chakra-ui/react'
import Header from './Header'
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html 
      lang="en" 
      suppressHydrationWarning 
      className={`${spaceGrotesk.variable} ${syne.variable}`}
      data-theme="light" 
    >
      <body suppressHydrationWarning>
        <Providers>
          <Box minH="100vh" display="flex" flexDirection="column">
            <Header />
            {children}
          </Box>
        </Providers>
      </body>
    </html>
  )
}