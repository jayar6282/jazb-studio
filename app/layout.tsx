import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jay Ar Bao — Freelance Video Editor',
  description: 'Jay Ar Bao is a freelance video editor creating engaging, meaningful visual stories for creators and businesses worldwide.',
  generator: 'v0.app',
  openGraph: {
    title: 'Jay Ar Bao — Freelance Video Editor',
    description: 'Turning ideas into visual stories. Explore the portfolio and services of freelance video editor Jay Ar Bao.',
    type: 'website',
    images: [{ url: '/portfolio-cinematic.png', width: 1536, height: 1024, alt: 'Cinematic coastal landscape at blue hour' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jay Ar Bao — Freelance Video Editor',
    description: 'Turning ideas into visual stories.',
    images: ['/portfolio-cinematic.png'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#11110f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
