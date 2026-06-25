import type { Metadata } from 'next'
import { Space_Grotesk, Geist } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'Julien Raad | Game Developer — Unity, Unreal Engine, VR',
  description:
    'Portfolio of Julien Raad, Game Developer specializing in Unity, Unreal Engine 5 and VR. Featuring gameplay programming projects, immersive experiences and technical work.',
  keywords: [
    'Julien Raad',
    'Game Developer',
    'Unity',
    'Unreal Engine',
    'VR',
    'Gameplay Programming',
    'Game Programming Portfolio',
  ],
  openGraph: {
    title: 'Julien Raad | Game Developer — Unity, Unreal Engine, VR',
    description:
      'Portfolio of Julien Raad, Game Developer specializing in Unity, Unreal Engine 5 and VR.',
    type: 'website',
  },
  generator: 'v0.app',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark bg-background ${geist.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
