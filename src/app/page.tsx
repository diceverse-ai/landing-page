import { Cards, CardsProps } from '../components/cards'
import { CTAButton } from '../components/cta-button'
import { TimelineNode } from '../components/TimelineNode'
import { HiOutlineLightningBolt } from 'react-icons/hi'
import { IoGameControllerOutline } from 'react-icons/io5'
import { AiOutlineRobot } from 'react-icons/ai'
import { FaRegCircle } from 'react-icons/fa'
import Spline from '@splinetool/react-spline/next'
import Image from 'next/image'
import { FaPatreon } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';
import questoria from '../../public/newblanco3.png';

const infoCards: CardsProps[] = [
  {
    icon: <HiOutlineLightningBolt size={42} className="text-purple-400" />,
    title: 'AI Game Master On-The-Go',
    description:
      'Your personal Game Master available 24/7 on your smartphone. Create and join adventures whenever you want. Cooperate, invade, or fight your friends.',
  },
  {
    icon: <IoGameControllerOutline size={42} className="text-purple-400" />,
    title: 'Character Development',
    description:
      "Build your legacy through multiple campaigns. Every decision is persistent across different worlds. Improve your character's story, abilities, and relationships.",
  },
  {
    icon: <AiOutlineRobot size={42} className="text-purple-400" />,
    title: 'Immersive Storytelling',
    description:
      'Experience dynamic storytelling with AI-generated visuals, adaptive music, and rich narrative descriptions that take your adventures to the next level of immersion.',
  },
]


function Circle() {
  return (
    <div role="figure" className="flex items-center justify-center py-4">
      <FaRegCircle size={13} className="text-white" />
    </div>
  );
}

function DashedLine() {
  return (
    <div
      role="figure"
      className="border border-dashed border-white h-[75px]"
    ></div>
  );
}

export default function Home() {
  return (
    <main className="max-w-[1060px] w-full mx-auto">
      <div className="flex items-center justify-center mt-8">
        <Image 
          src={questoria}
          alt="DiceVerse Logo" 
          width={250} 
          height={100} 
          className="object-contain"
        />
      </div>
      <div className="flex flex-col items-center gap-2 mt-10">
      <h1 className="text-[45px] font-bold text-center">
        Your 360º AI Game Master{' '}<br />And{' '}
        <span className="gradient-text text-transparent animate-gradient">
          Tabletop RPG Experience
        </span>
      </h1>
      <p className="max-w-[675px] w-full text-center text-[18px] mb-8">
        Experience the <span className="text-[#D495FF] ">future of RPGs</span> with DiceVerse: An <span className="text-[#D495FF] ">AI-powered experience</span> that brings <span className="text-[#D495FF] ">immersive adventures</span> to your pocket. Play <span className="text-[#D495FF]
        ">solo or with friends</span>, develop your character across <span className="text-[#D495FF] ">multiple campaigns</span>, and dive into <span className="text-[#D495FF] ">endless worlds</span>.
      </p>
      {/* Botones */}
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-4 sm:justify-center">
        <div className="relative z-100">
          <div className="relative w-[250px] h-[50px] rounded-full flex items-center justify-center overflow-hidden transition-all duration-200 hover:scale-105">
            {/* Animated borders */}
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-spin-slow">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform rotate-45"></div>
            </div>
            <a
              href="https://www.patreon.com/diceverse"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 w-[calc(100%-2px)] h-[calc(100%-2px)] bg-[#7E54E0] rounded-full flex items-center justify-center gap-3 text-white font-bold text-lg transition-colors duration-300"
            >
              <FaPatreon className="w-6 h-6" />
              <span>Follow us on Patreon</span>
            </a>
          </div>
        </div>
        <div className="relative z-100">
          <div className="relative w-[250px] h-[50px] rounded-full flex items-center justify-center overflow-hidden transition-all duration-200 hover:scale-105">
            {/* Animated borders */}
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-spin-slow">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform rotate-45"></div>
            </div>
            <a
              href="https://discord.gg/w9jEJVkmkj"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 w-[calc(100%-2px)] h-[calc(100%-2px)] bg-[#5865F2] rounded-full flex items-center justify-center gap-3 text-white font-bold text-lg transition-colors duration-300"
            >
              <FaDiscord className="w-6 h-6" />
              <span>Join our Discord</span>
            </a>
          </div>
        </div>
      </div>
    </div>


      <section className="w-full flex flex-col items-center justify-center lgp:items-start lgp:justify-start gap-8 lgp:gap-6 mt-16">
      <div className="w-full flex items-center justify-center gap-8 lgp:justify-between lgp:gap-8 flex-wrap">
        {infoCards.map((card) => (
          <Cards
            key={card.title}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>

        <div className="w-full bg-[#111] border border-[#222] rounded-3xl p-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Texto principal */}
          <div className="flex flex-col gap-4 flex-1">
            <h3 className="text-xl font-bold text-white">
              Why DiceVerse AI?
            </h3>
            <p className="text-gray-400 text-[15px] leading-relaxed">
              Experience tabletop RPGs reimagined for the modern era. Our AI Game Master adapts 
              to your schedule, offering personalized adventures whenever you are ready to play. 
              Choose from multiple game settings and dice systems, or create your own. Whether 
              solo or with friends, your next adventure is just a tap away.
            </p>
          </div>

          {/* Badge */}
          <div className="shrink-0 self-center">
            <span className="px-4 py-2 text-sm bg-black border border-[#222] rounded-full text-gray-400">
              Powered by Gemini 1.5
            </span>
          </div>
        </div>
      </div>
      </section>
      <section
        id="caracteristicas"
        className="w-full flex flex-col lgp:flex-row items-center justify-center lgp:justify-between gap-12 lgp:gap-34 py-[120px]"
      >
        <div className="flex flex-col gap-3 lgp:max-w-[480px] w-full">
          <h2 className="text-white text-[28px] font-madefor-display font-bold">
          Your Story, Unbound
          </h2>
          <h3 className="text-beige text-2xl font-madefor-display font-bold mb-4">
            Powered by Gemini 1.5
          </h3>
          <p className="text-[15px] leading-7">
          Shape a story that grows with you. Our AI Game Master uses advanced context understanding 
          and memory to build each session upon your character's history, creating a dynamic and 
          personalized adventure that evolves with your choices and actions.
          </p>
        </div>

        <div className="image-wrapper">
          <div className="w-[calc(100%-2px)] h-[calc(100%-2px)] z-20 relative rounded-2xl overflow-hidden bg-[#000]">
            <Image
              src="/images/mockups-grid.png"
              alt="diceverse Character Creation Screen"
              className="object-scale-down"
              objectFit="fit"
              quality={100}
              fill
              sizes="(min-width: 350px) 70vw, 100vw"
            />
          </div>
        </div>

        

        
      </section>

      <section
        id="personalizacion"
        className="w-full flex flex-col-reverse lgp:flex-row items-center justify-center lgp:justify-between gap-12 lgp:gap-4 py-[120px]"
      >
        <div className="image-wrapper">
          <div className="w-[calc(100%-2px)] h-[calc(100%-2px)] z-20 relative rounded-2xl overflow-hidden bg-[#000]">
            <Image
              src="/images/mockups-chat.png"
              alt="diceverse Character Creation Screen"
              className="object-scale-down"
              objectFit="fit"
              quality={100}
              fill
              sizes="(min-width: 726px) 70vw, 100vw"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3 lgp:max-w-[480px] w-full">
          <h2 className="text-white text-[28px] font-madefor-display font-bold">
          360º Immersion
          </h2>
          <h3 className="text-purple text-2xl font-madefor-display font-bold mb-4">
          A world of senses
          </h3>
          <p className="text-[15px] leading-7">
          Dive deeper than ever before with our revolutionary 360º Immersion experience. 
          Our AI Game Master doesn't just tell your story – it brings it to life.

          </p>
          <ul className="space-y-3">
        <li className="flex items-start gap-2">
          <span className="text-purple-500 font-bold">•</span>
          <span>Enjoy dynamic music that shifts and changes with the mood of your adventure</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-purple-500 font-bold">•</span>
          <span>Transform your imagination into reality through breathtaking AI-generated visuals</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-purple-500 font-bold">•</span>
          <span>Engage in rich conversations with fully voiced NPCs, each with a unique voice and personality.</span>
        </li>
      </ul>
        </div>
      </section>

      <section
        id="caracteristicas"
        className="w-full flex flex-col lgp:flex-row items-center justify-center lgp:justify-between gap-12 lgp:gap-34 py-[120px]"
      >
        <div className="flex flex-col gap-3 lgp:max-w-[480px] w-full">
          <h2 className="text-white text-[28px] font-madefor-display font-bold">
          Friends & Foes
          </h2>
          <h3 className="text-beige text-2xl font-madefor-display font-bold mb-4">
          Choose your allies, confront your rivals
          </h3>
          <p className="text-[15px] leading-7">
          Embark on epic quests with friends and forge legendary tales together. Coordinate strategies and create unforgettable memories.

          </p>
          <p className="text-[15px] leading-7">
          Or, storm the arena for thrilling PvP combat. Unleash your characters in strategic dice-rolling battles. Test your builds. Prove your tactics. Seize victory.
          </p>
        </div>

        <div className="image-wrapper">
          <div className="w-[calc(100%-2px)] h-[calc(100%-2px)] z-20 relative rounded-2xl overflow-hidden bg-[#000]">
            <Image
              src="/images/mockups-fight.png"
              alt="diceverse Character Creation Screen"
              className="object-scale-down"
              objectFit="fit"
              quality={100}
              fill
              sizes="(min-width: 726px) 70vw, 100vw"
            />
          </div>
        </div>

        

        
      </section>

      <section className="w-full flex flex-col lgp:flex-row items-center justify-center lgp:justify-between gap-12 lgp:gap-20 py-[120px]">
        <div className="flex flex-col gap-3 lgp:max-w-[480px] w-full">
          <h2 className="text-white text-[28px] font-madefor-display font-bold">
            Flexibility Without Limits
          </h2>
          <h3 className="text-blue text-2xl font-madefor-display font-bold mb-4">
            Your Schedule, Your Rules
          </h3>
          <p className="text-[15px] leading-7 mb-5">
            No more scheduling conflicts or dependency on other players. diceverse offers 
            complete freedom to play whenever and wherever you want. Choose from various 
            game settings, create custom content, and share your creations with the community.
          </p>

          <div className="w-full flex items-center gap-10 sm:gap-28">
            <div className="flex flex-col gap-2 text-white font-madefor-display font-bold text-2xl">
              <div className="flex items-center justify-start text-[38px]">
                <p className="">
                  <span className="">2</span>
                </p>
                <span>+</span>
              </div>
              <p>Languages</p>
            </div>

            <div className="flex flex-col gap-2 text-white font-madefor-display font-bold text-2xl">
              <div className="flex items-center justify-start text-[38px]">
                <p className="">
                  <span className="">15</span>
                </p>
                <span>min</span>
              </div>
              <p>Avg Session</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center flex-grow w-full lgp:justify-between gap-8 lgp:gap-0 flex-wrap lgp:w-auto">
          {/* MVP Timeline */}
          <div className="max-w-[240px] w-full border border-[#333] rounded-xl text-[13px] p-3">
            <div className="flex items-center justify-between mb-3">
              <p>Path to MVP</p>
              <span>Core Features</span>
            </div>
            Development Path
            <div className="flex items-center mt-6 gap-3">
              <div className="pl-2 flex flex-col items-center justify-center">
                <Circle />
                <DashedLine />
                <Circle />
                <DashedLine />
                <Circle />
                <DashedLine />
                <Circle />
              </div>
              <div className="flex-grow flex flex-col items-start justify-center">
                <div className="flex flex-col items-center justify-center gap-8">
                  <TimelineNode
                    name="Character Creation"
                    description="Character Creation & Progression"
                    features={[
                      'Deep character customization',
                      'Persistent progression',
                      'Multiple character slots',
                      'Background generation'
                    ]}
                    label="Foundation"
                  />
                  <TimelineNode
                    name="AI Narratives"
                    description="Dynamic Story Generation"
                    features={[
                      'AI-powered storytelling',
                      'Adaptive campaigns',
                      'Context memory',
                      'Branching narratives'
                    ]}
                    label="Core Engine"
                  />
                  <TimelineNode
                    name="Game Systems"
                    description="Core Gameplay Mechanics"
                    features={[
                      'Multiple dice systems',
                      'Combat mechanics',
                      'Skill challenges',
                      'Character progression'
                    ]}
                    label="Current Focus"
                  />
                  <TimelineNode
                    name="User Experience"
                    description="Mobile Interface & Features"
                    features={[
                      'Intuitive controls',
                      'Quick actions',
                      'Offline support',
                      'Session management'
                    ]}
                    label="MVP Release"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Post-MVP Timeline */}
          <div className="max-w-[240px] w-full border border-[#333] rounded-xl text-[13px] p-3">
            <div className="flex items-center justify-between mb-3">
              <p>Future Evolution</p>
              <span>Expansion</span>
            </div>
            Growth Path
            <div className="flex items-center mt-6 gap-3">
              <div className="pl-2 flex flex-col items-center justify-center">
                <Circle />
                <DashedLine />
                <Circle />
                <DashedLine />
                <Circle />
                <DashedLine />
                <Circle />
              </div>
              <div className="flex-grow flex flex-col items-start justify-center">
                <div className="flex flex-col items-center justify-center gap-8">
                  <TimelineNode
                    name="Competitive Play"
                    description="PvP Adventures & Challenges"
                    features={[
                      'Player vs Player campaigns',
                      'Competitive ranking',
                      'Tournament system',
                      'Balanced mechanics'
                    ]}
                    label="PvP Mode"
                  />
                  <TimelineNode
                    name="Group Play"
                    description="Multiplayer Adventures"
                    features={[
                      'Party system',
                      'Shared campaigns',
                      'Real-time cooperation',
                      'Group chat'
                    ]}
                    label="Multiplayer"
                  />
                  <TimelineNode
                    name="New Settings"
                    description="Additional Game Worlds"
                    features={[
                      'Fantasy settings',
                      'Sci-fi universe',
                      'Horror campaigns',
                      'Custom themes'
                    ]}
                    label="Worlds"
                  />
                  <TimelineNode
                    name="Community"
                    description="Content Creation Tools"
                    features={[
                      'World builder',
                      'Custom rules',
                      'Asset sharing',
                      'Community events'
                    ]}
                    label="Creation"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section
<section className="w-full mb-24">
  <h2 className="text-[28px] font-bold text-center mb-6">Early Access Offer</h2>
  <p className="text-gray-400 text-center mb-12 max-w-lg mx-auto">
    Join our growing community of adventurers with our special launch pricing
  </p>
  
  <div className="max-w-sm mx-auto p-8 rounded-2xl border border-purple-500 
       bg-black/50 backdrop-blur-sm relative overflow-hidden
       hover:shadow-[0_0_50px_rgba(168,85,247,0.15)] transition-all duration-300">
    <div className="absolute top-4 right-4 bg-purple-500 text-xs px-3 py-1.5 rounded-full font-medium">
      Limited Time
    </div>

    <div className="mb-6">
      <h3 className="text-2xl font-bold mb-2">Founder's Access</h3>
      <p className="text-gray-400 text-sm">Be among the first to shape diceverse</p>
    </div>

    <div className="mb-8">
      <div className="flex items-end gap-2 mb-1">
        <span className="text-4xl font-bold">$9.99</span>
        <span className="text-gray-400 mb-1.5">/month</span>
      </div>
      <p className="text-sm text-purple-400">Special early access pricing</p>
    </div>

    <ul className="space-y-4 mb-8">
      <li className="flex items-start gap-3">
        <span className="text-purple-500 text-lg">✓</span>
        <span>Unlimited campaigns and characters</span>
      </li>
      <li className="flex items-start gap-3">
        <span className="text-purple-500 text-lg">✓</span>
        <span>Access to all game systems and settings</span>
      </li>
      <li className="flex items-start gap-3">
        <span className="text-purple-500 text-lg">✓</span>
        <span>Advanced AI storytelling features</span>
      </li>
      <li className="flex items-start gap-3">
        <span className="text-purple-500 text-lg">✓</span>
        <span>Early access to new features</span>
      </li>
      <li className="flex items-start gap-3">
        <span className="text-purple-500 text-lg">✓</span>
        <span>Founder's badge and exclusive content</span>
      </li>
    </ul>

    <p className="text-center text-sm text-gray-500 mt-6">
      7-day money-back guarantee • Cancel anytime
    </p>
  </div>
</section> 
      */}

{/* Enhanced Final CTA */}
<div className="w-full flex flex-col items-center justify-center py-20 rounded-3xl shadow-[0_0_100px_rgba(168,85,247,0.2)] relative overflow-hidden">
  {/* Background Image */}
  <Image
    src="/bannerdiceverse.png"
    alt="Background"
    fill
    className="object-cover opacity-20"
    quality={100}
    priority
  />
  {/* Overlay gradient */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80"></div>
  
  <h2 className="relative z-10 text-4xl md:text-5xl font-bold text-white mb-6 text-center">
    Join Us - Build The Journey
  </h2>
  <p className="relative z-10 text-white text-xl mb-10 text-center max-w-2xl px-4">
  Join the future of tabletop gaming. Create your character, let our AI Game Master guide you through 
  unforgettable adventures and enjoy our PvP experience against your friends  - all from your mobile device.

  </p>
  <div className="relative z-100">
  <div className="relative w-[250px] h-[50px] bg-[#7E54E0] rounded-full flex items-center justify-center overflow-hidden transition-all duration-200 hover:scale-105">
    {/* Animated borders */}
    <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-spin-slow">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform rotate-45"></div>
    </div>
    
    <a 
      href="https://www.patreon.com/diceverse" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="relative z-10 w-[calc(100%-2px)] h-[calc(100%-2px)] bg-[#7E54E0] rounded-full flex items-center justify-center gap-3 text-white font-bold text-lg transition-colors duration-300"
    >
      <FaPatreon className="w-6 h-6" />
      <span>Follow us on Patreon</span>
    </a>
  </div>
  </div>
  <p className="relative z-10 text-sm text-white/80 mt-6 font-medium text-center">
  Join now and enjoy our first playable beta version in March 2025
  </p>
</div>
    </main>
  );
}