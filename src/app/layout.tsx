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
   'DiceVerse AI brings immersive roleplaying adventures powered by artificial intelligence. Experience dynamic storytelling and endless possibilities in the palm of your hand.',
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
       {children}
       <Footer />
     </body>
   </html>
 )
}