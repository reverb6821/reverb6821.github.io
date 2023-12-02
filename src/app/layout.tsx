import type { Metadata } from 'next'
import { Providers } from '@/redux/provider'
import { ThemeProvider } from '@/components/ui/theme/ThemeProvider'
import { Inter } from 'next/font/google'
import './globals.css'
import 'remixicon/fonts/remixicon.css'
import Navbar from '@/components/ui/navigation/Navbar'
import Footer from '@/components/ui/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Giuseppe Gigliotti',
  description: 'Portfolio Website made by Giuseppe Gigliotti React Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  const headerEl = [
    { label: 'About', route: 'about'},
    { label: 'Experience', route: '/experience'},
    { label: 'Projects', route: '/projects'},
  ]

  return (
    <html lang="en" >
      <body className={`${inter.className} ` }>
        <Providers>
          <ThemeProvider>
            <div className='bg-color-primary'>
              <Navbar 
                headerTitle="Giuseppe Gigliotti"
                headerSubTitle="Frontend Developer"
                headerEl={headerEl}
              />
              {children}
              <Footer footerTitle='Giuseppe Gigliotti'/>
            </div>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  )
}
