import { Space_Grotesk, Syne, Inter, DM_Sans, } from 'next/font/google'
import { Providers } from "./Providers"
import { Box } from '@chakra-ui/react'
import Header from './Header'
import "./globals.css"
import Footer from './Footer'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const dm_sans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
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
      className={`${inter.variable} ${spaceGrotesk.variable} ${dm_sans.variable} ${syne.variable} ${dm_sans.variable}`}
      data-theme="light"
    >
      <body suppressHydrationWarning>
        <Providers>
          <Box suppressHydrationWarning minH="100vh" display="flex" flexDirection="column">
            <Header />
            {children}
            <Footer />
          </Box>
        </Providers>
      </body>
    </html>
  )
}