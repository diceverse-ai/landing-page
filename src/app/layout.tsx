/* eslint-disable camelcase */
/* eslint-disable react-refresh/only-export-components */
import './global.css'
import type { Metadata } from 'next'
import {
  Nunito_Sans,
  Wix_Madefor_Display,
  Wix_Madefor_Text,
} from 'next/font/google'
import { Navbar } from '../components/navbar'
import { Footer } from '../components/footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://diceverse-ai.com'),
  title: {
    default: 'DiceVerse AI - Immersive AI-Powered RPG Experience',
    template: '%s | DiceVerse AI'
  },
  description: 'DiceVerse AI brings immersive roleplaying adventures powered by artificial intelligence. Experience dynamic storytelling and endless possibilities in the palm of your hand.',
  keywords: [
    'DiceVerse AI',
    'AI Game Master',
    'roleplaying games',
    'RPG',
    'AI storytelling',
    'virtual dungeon master',
    'mobile RPG',
    'solo roleplaying',
    'multiplayer RPG',
    'adaptive storytelling',
    'digital dice rolling',
    'fantasy RPG',
    'AI dungeon master',
    'interactive storytelling',
    'tabletop simulator'
  ],
  authors: [
    {
      name: 'DiceVerse AI Team',
      url: 'https://diceverse-ai.com/team',
    }
  ],
  creator: 'DiceVerse AI',
  publisher: 'DiceVerse AI',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  applicationName: 'DiceVerse AI',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  category: 'game',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'es_ES',
    url: 'https://diceverse-ai.com',
    siteName: 'DiceVerse AI',
    title: 'DiceVerse AI - Next Generation RPG Experience',
    description: 'Experience unique AI-driven roleplaying adventures with DiceVerse AI. Featuring intelligent Game Master, dynamic storytelling, and immersive gameplay anytime, anywhere.',
    images: [
      {
        url: '/images/bannerdiceverse.png',
        width: 1200,
        height: 630,
        alt: 'DiceVerse AI - Immersive RPG Experience',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DiceVerse AI - AI-Powered RPG Experience',
    description: 'Immerse yourself in epic adventures with our AI Game Master. Play anytime, anywhere.',
    creator: '@diceverseai',
    images: ['/images/bannerdiceverse.png'],
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/logodiceverse.png', type: 'image/png' },
    ],
    apple: [
      { url: '/diceverse-apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: [
      { url: '/diceverse-apple-icon.png' },
    ]
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: 'google-site-verification',
    yandex: 'yandex-verification',
    other: {
      'msvalidate.01': 'bing-verification',
    },
  },
  other: {
    'msapplication-TileColor': '#222222',
    'theme-color': '#222222'
  },
  alternates: {
    canonical: 'https://diceverse-ai.com',
    languages: {
      'en-US': 'https://diceverse-ai.com/en',
      'es-ES': 'https://diceverse-ai.com/es',
    },
  },
}

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-nunito-sans',
})

const madeforDisplay = Wix_Madefor_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-madefor-display',
})

const madeforText = Wix_Madefor_Text({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logodiceverse.png" type="image/png" />
        <link rel="apple-touch-icon" href="/diceverse-apple-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body
        id="root"
        className={`${madeforText.className} ${madeforDisplay.variable} ${nunitoSans.variable} bg-black text-marfin min-h-screen flex flex-col justify-between px-5`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}