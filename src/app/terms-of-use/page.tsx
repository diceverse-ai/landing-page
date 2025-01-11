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
  title: 'Home | DiceVerse AI',
  description:
    'DiceVerse AI is an AI-powered RPG platform that brings immersive adventures to your pocket. Play solo or with friends, develop your character across multiple campaigns, and dive into endless worlds.',
  keywords: [
    'DiceVerse',
    'DiceVerse AI',
    'AI RPG',
    'AI Game Master',
    'mobile RPG',
    'tabletop games',
    'role-playing games',
    'digital RPG',
    'AI storytelling',
    'immersive gaming',
    'solo RPG',
    'multiplayer RPG',
    'virtual game master',
    'adaptive storytelling'
  ],
  applicationName: 'DiceVerse AI',
  icons: {
    icon: './favicon.ico',
    apple: './diceverse-apple-icon.png',
    shortcut: './diceverse-apple-icon.png',
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

const sections: SectionsType[] = [
  {
    title: 'Introduction',
    url: '/terms-of-use#introduction',
  },
  {
    title: 'What is DiceVerse AI',
    url: '/terms-of-use#what-is-diceverse-ai',
  },
  {
    title: 'Platform Usage - How to Use',
    url: '/terms-of-use#platform-usage',
  },
  {
    title: 'Platform Rules',
    url: '/terms-of-use#platform-rules',
  },
  {
    title: 'Content Submission',
    url: '/terms-of-use#content-submission',
  },
  {
    title: 'Warranties and Representations',
    url: '/terms-of-use#warranties-and-representations',
  },
  {
    title: 'Limitations and Exclusions',
    url: '/terms-of-use#limitations-and-exclusions',
  },
  {
    title: 'Indemnification',
    url: '/terms-of-use#indemnification',
  },
  {
    title: 'Account Termination',
    url: '/terms-of-use#account-termination',
  },
  {
    title: 'Notifications',
    url: '/terms-of-use#notifications',
  },
  {
    title: 'Dispute Resolution',
    url: '/terms-of-use#dispute-resolution',
  },
  {
    title: 'Content and Copyright',
    url: '/terms-of-use#content-and-copyright',
  },
  {
    title: 'Copyright Claims',
    url: '/terms-of-use#copyright-claims',
  },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        id="root"
        className={`${madeforText.className} ${madeforDisplay.variable} ${nunitoSans.variable} bg-black text-marfin min-h-screen flex flex-col justify-between px-5`}
      >
        <Navbar />
        <main className="max-w-[920px] w-full mx-auto mt-[170px]">
          <div className="flex flex-col gap-8 mb-8">
            <h1 className="text-center font-madefor-display text-5xl font-bold text-white">
              DiceVerse AI Terms of Use
            </h1>

            <p className="text-[18px] font-medium text-center">
              Effective as of March 3rd, 2024
            </p>
          </div>

          <aside className="fixed right-5 top-1/2 -translate-y-1/2">
            <div className="hidden xl:flex items-center justify-center bg-black/60 border border-[#121212] p-[18px] rounded-xl">
              <ul className="hidden xl:flex flex-col items-end justify-center gap-1">
                {sections.map((section) => (
                  <Link
                    href={section.url}
                    key={section.url}
                    className="text-sm text-[#999] hover:text-marfin focus:text-marfin transition-all duration-200"
                  >
                    <li>{section.title}</li>
                  </Link>
                ))}
              </ul>
            </div>
          </aside>

          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="w-full border-b border-[#333] font-madefor-display text-white text-2xl pt-16 pb-3">
      {title}
    </h2>
  )
}

function SectionSubTitle({ subtitle }: { subtitle: string }) {
  return (
    <h3 className="w-full font-madefor-display text-white text-xl pt-4">
      {subtitle}
    </h3>
  )
}

function SectionList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-1">
      {items.map((item) => (
        <li key={item} className="flex text-[15px] leading-7 gap-3">
          <span>-</span>
          {item}
        </li>
      ))}
    </ul>
  )
}

function SectionText({ children }: { children: React.ReactNode }) {
  return <p className="text-[15px] leading-7">{children}</p>
}