import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Horode Design Studio — Brand Identity & Product Design',
  description: 'We are not just another agency. We partner with businesses to see they stand out and grow.',
  keywords: 'brand identity, logo design, product design, UI/UX, Horode, Nigeria',
  openGraph: {
    title: 'Horode Design Studio',
    description: 'A system that creates greatness for businesses.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
