import type { Metadata } from 'next'
import { Nunito, Caveat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
})

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  weight: ['500', '600', '700'],
})

export const metadata: Metadata = {
  title: "Julien Raad | Game Developer — Unity, Unreal Engine, VR",
  description:
    'A scrapbook-style portfolio of Julien Raad, Game Developer specializing in Unity, Unreal Engine 5 and VR. Featuring gameplay programming projects, immersive experiences and technical work.',
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
    <html lang="en" className={`bg-background ${nunito.variable} ${caveat.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
