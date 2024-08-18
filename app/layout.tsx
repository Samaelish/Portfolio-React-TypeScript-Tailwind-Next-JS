/**
 * Root layout component for the application.
 * This component wraps the entire application and provides a basic structure for the HTML document.
 * It also sets up the theme provider for the application.
 */
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from 'next-themes'

const inter = Inter({ subsets: ['latin'] })

/**
 * Metadata for the application.
 *
 * This object contains metadata about the application, such as the title and description.
 */

export const metadata: Metadata = {
  title: "Semyon's Portfolio",
  description: 'Современное и минималистичное портфолио',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
