import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FUTÉ 2.0 — Corporate Website Concept',
  description:
    'FUTÉ 2.0 — The Real Estate Buyer Experience Company. Strategy, story, imagery, technology and delivery held in one buyer experience.',
  icons: { icon: '/logo.png' },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
