import { Cards, CardsProps } from '../../components/cards'
import { CTAButton } from '../../components/cta-button'
import { TimelineNode } from '../../components/TimelineNode'
import { HiOutlineLightningBolt } from 'react-icons/hi'
import { IoGameControllerOutline } from 'react-icons/io5'
import { AiOutlineRobot } from 'react-icons/ai'
import { FaRegCircle } from 'react-icons/fa'
import Spline from '@splinetool/react-spline/next'
import Image from 'next/image'
import { FaPatreon } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';
import questoria from '../../../public/newblanco3.png';

const infoCards: CardsProps[] = [
  {
    icon: <HiOutlineLightningBolt size={42} className="text-purple-400" />,
    title: 'Game Master con IA ',
    description:
      'Disfruta de un Game Master con IA disponible 24/7 en tu smartphone. Crea y únete a multiples aventuras. Coopera, invade o lucha contra tus amigos.',
  },
  {
    icon: <IoGameControllerOutline size={42} className="text-purple-400" />,
    title: 'Desarrollo de Personaje',
    description:
      'Construye tu legado a través de múltiples campañas. Cada decisión afecta a los diferentes mundos. Mejora tu historia, habilidades y relaciones de tu personaje.',
  },
  {
    icon: <AiOutlineRobot size={42} className="text-purple-400" />,
    title: 'Narración Inmersiva',
    description:
      'Experimenta una narración dinámica con recursos visuales generados por IA, música adaptativa y descripciones narrativas que llevan tus aventuras al siguiente nivel de inmersión.',
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
        Una Experiencia de Rol 360º Con IA {' '}<br />{' '}
        <span className="gradient-text text-transparent animate-gradient">
          Donde Quieras y Cuando Quieras
        </span>
      </h1>
      <p className="max-w-[675px] w-full text-center text-[18px] mb-8">
        Experimenta el <span className="text-[#D495FF] ">futuro de los juegos de rol</span> con DiceVerse: Una <span className="text-[#D495FF] ">experiencia impulsada por IA</span> que trae <span className="text-[#D495FF] ">aventuras inmersivas</span> a tu bolsillo. Juega <span className="text-[#D495FF]">solo o con amigos</span>, desarrolla tu personaje a través de <span className="text-[#D495FF] ">múltiples campañas</span> y sumérgete en <span className="text-[#D495FF] ">mundos infinitos</span>.
      </p>
      {/* Botones */}
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-4 sm:justify-center">
        <div className="relative z-100">
          <div className="relative w-[250px] h-[50px] rounded-full flex items-center justify-center overflow-hidden transition-all duration-200 hover:scale-105">
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
              <span>Síguenos en Patreon</span>
            </a>
          </div>
        </div>
        <div className="relative z-100">
          <div className="relative w-[250px] h-[50px] rounded-full flex items-center justify-center overflow-hidden transition-all duration-200 hover:scale-105">
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
              <span>Únete a Discord</span>
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
          <div className="flex flex-col gap-4 flex-1">
            <h3 className="text-xl font-bold text-white">
              ¿Por qué DiceVerse AI?
            </h3>
            <p className="text-gray-400 text-[15px] leading-relaxed">
              Disfruta de la nueva experiencia de los TTRPG reimaginados para la era moderna. Nuestro Game Master con IA 
              se adapta a tu horario, ofreciendo aventuras personalizadas cuando estés listo 
              para jugar. Elige entre múltiples ambientaciones y sistemas de dados, o crea los tuyos propios. 
              Ya sea en solitario o con amigos, tu próxima aventura está a solo un toque de distancia.
            </p>
          </div>

          <div className="shrink-0 self-center">
            <span className="px-4 py-2 text-sm bg-black border border-[#222] rounded-full text-gray-400">
              Impulsado por Gemini
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
            Tu Historia, Sin Límites
          </h2>
          <h3 className="text-beige text-2xl font-madefor-display font-bold mb-4">
            Impulsado por Gemini 1.5
          </h3>
          <p className="text-[15px] leading-7">
          Forja una historia que crece contigo. Con un profundo entendimiento del contexto y memoria, nuestro Game Master con IA construye cada sesión sobre la historia de tu personaje, creando una aventura dinámica y personalizada que evoluciona con tus elecciones y acciones.
          </p>
        </div>

        <div className="image-wrapper">
          <div className="w-[calc(100%-2px)] h-[calc(100%-2px)] z-20 relative rounded-2xl overflow-hidden bg-[#000]">
            <Image
              src="/images/mockups-grid.png"
              alt="Pantalla de Creación de Personaje de DiceVerse"
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
              alt="Pantalla de Chat de DiceVerse"
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
            Inmersión 360º
          </h2>
          <h3 className="text-purple text-2xl font-madefor-display font-bold mb-4">
          Un mundo para sentir
          </h3>
          <p className="text-[15px] leading-7">
          Sumérgete como nunca antes en nuestra revolucionaria experiencia de Inmersión 360º. Nuestro Game Master con IA da vida a tu historia, descubriéndote un mundo de sensaciones.
        
        
        
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-purple-500 font-bold">•</span>
              <span>Déjate llevar por una música dinámica que evoluciona con el ambiente de tu aventura.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-500 font-bold">•</span>
              <span>Contempla cómo tu imaginación se hace realidad con impresionantes imágenes generadas por IA.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-500 font-bold">•</span>
              <span>Interactúa con NPCs con voces y personalidades únicas.</span>
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
          Amigos y Enemigos
          </h2>
          <h3 className="text-beige text-2xl font-madefor-display font-bold mb-4">
          Elige a tus aliados, desafía a tus rivales
          </h3>
          <p className="text-[15px] leading-7">
          Únete a tus amigos en misiones épicas y cread leyendas juntos. Coordinad tácticas y vivid momentos inolvidables.

          </p>
          <p className="text-[15px] leading-7">
          O, domina la arena en emocionantes combates PvP. Desata el poder de tus personajes en batallas de dados. Pon a prueba tus estrategias. Demuestra tu habilidad. ¡Consigue la victoria!
          </p>
        </div>

        <div className="image-wrapper">
          <div className="w-[calc(100%-2px)] h-[calc(100%-2px)] z-20 relative rounded-2xl overflow-hidden bg-[#000]">
            <Image
              src="/images/mockups-fight.png"
              alt="Pantalla de Combate de DiceVerse"
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
            Flexibilidad Sin Límites
          </h2>
          <h3 className="text-blue text-2xl font-madefor-display font-bold mb-4">
            Tu Horario, Tus Reglas
          </h3>
          <p className="text-[15px] leading-7 mb-5">
            No más conflictos de horarios ni dependencia de otros jugadores. DiceVerse ofrece 
            libertad total para jugar cuando y donde quieras. Elige entre varias 
            ambientaciones, crea contenido personalizado y comparte tus creaciones con la comunidad.
          </p>

          <div className="w-full flex items-center gap-10 sm:gap-28">
            <div className="flex flex-col gap-2 text-white font-madefor-display font-bold text-2xl">
              <div className="flex items-center justify-start text-[38px]">
                <p className="">
                  <span className="">2</span>
                </p>
                <span>+</span>
              </div>
              <p>Idiomas</p>
            </div>

            <div className="flex flex-col gap-2 text-white font-madefor-display font-bold text-2xl">
              <div className="flex items-center justify-start text-[38px]">
                <p className="">
                  <span className="">15</span>
                </p>
                <span>min</span>
              </div>
              <p>Sesión Media</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center flex-grow w-full lgp:justify-between gap-8 lgp:gap-0 flex-wrap lgp:w-auto">
          {/* MVP Timeline */}
          <div className="max-w-[240px] w-full border border-[#333] rounded-xl text-[13px] p-3">
            <div className="flex items-center justify-between mb-3">
              <p>MVP</p>
              <span>Características Principales</span>
            </div>
            Ruta de Desarrollo
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
                    name="Creación de Personaje"
                    description="Creación y Progresión de Personajes"
                    features={[
                      'Personalización profunda',
                      'Progresión persistente',
                      'Múltiples personajes',
                      'Generación de trasfondo'
                    ]}
                    label="Fundación"
                  />
                  <TimelineNode
                    name="Narrativas con IA"
                    description="Generación Dinámica de Historias"
                    features={[
                      'Narración impulsada por IA',
                      'Campañas adaptativas',
                      'Memoria contextual',
                      'Narrativas ramificadas'
                    ]}
                    label="Motor Principal"
                  />
                  <TimelineNode
                    name="Sistemas de Juego"
                    description="Mecánicas Principales"
                    features={[
                      'Múltiples sistemas de dados',
                      'Mecánicas de combate',
                      'Desafíos de habilidad',
                      'Progresión de personaje'
                    ]}
                    label="Foco Actual"
                  />
                  <TimelineNode
                    name="Experiencia de Usuario"
                    description="Interfaz Móvil y Características"
                    features={[
                      'Controles intuitivos',
                      'Acciones rápidas',
                      'Soporte sin conexión',
                      'Gestión de sesiones'
                    ]}
                    label="Lanzamiento MVP"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Post-MVP Timeline */}
          <div className="max-w-[240px] w-full border border-[#333] rounded-xl text-[13px] p-3">
            <div className="flex items-center justify-between mb-3">
              <p>Evolución Futura</p>
              <span>Expansión</span>
            </div>
            Ruta de Crecimiento
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
                    name="Juego Competitivo"
                    description="Aventuras y Desafíos PvP"
                    features={[
                      'Campañas JcJ',
                      'Ranking competitivo',
                      'Sistema de torneos',
                      'Mecánicas balanceadas'
                    ]}
                    label="Modo PvP"
                  />
                  <TimelineNode
                    name="Juego en Grupo"
                    description="Aventuras Multijugador"
                    features={[
                      'Sistema de grupos',
                      'Campañas compartidas',
                      'Cooperación en tiempo real',
                      'Chat grupal'
                    ]}
                    label="Multijugador"
                  />
                  <TimelineNode
                    name="Nuevos Escenarios"
                    description="Mundos de Juego Adicionales"
                    features={[
                      'Ambientación fantástica',
                      'Universo sci-fi',
                      'Campañas de terror',
                      'Temas personalizados'
                    ]}
                    label="Mundos"
                  />
                  <TimelineNode
                    name="Comunidad"
                    description="Herramientas de Creación"
                    features={[
                      'Constructor de mundos',
                      'Reglas personalizadas',
                      'Compartir recursos',
                      'Eventos comunitarios'
                    ]}
                    label="Creación"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <div className="w-full flex flex-col items-center justify-center py-20 rounded-3xl shadow-[0_0_100px_rgba(168,85,247,0.2)] relative overflow-hidden">
        {/* Background Image */}
        <Image
          src="/bannerdiceverse.png"
          alt="Fondo"
          fill
          className="object-cover opacity-20"
          quality={100}
          priority
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80"></div>
        
        <h2 className="relative z-10 text-4xl md:text-5xl font-bold text-white mb-6 text-center">
          Únete a Nosotros - Construye el Viaje
        </h2>
        <p className="relative z-10 text-white text-xl mb-10 text-center max-w-2xl px-4">
          Únete al futuro de los juegos de rol de mesa. Crea tu personaje, deja que nuestro Game Master 
          con IA te guíe a través de aventuras inolvidables y disfruta de nuestra experiencia 
          PvP contra tus amigos - todo desde tu dispositivo móvil.
        </p>
        <div className="relative z-100">
          <div className="relative w-[250px] h-[50px] bg-[#7E54E0] rounded-full flex items-center justify-center overflow-hidden transition-all duration-200 hover:scale-105">
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
              <span>Síguenos en Patreon</span>
            </a>
          </div>
        </div>
        <p className="relative z-10 text-sm text-white/80 mt-6 font-medium">
          Únete ahora y disfruta de nuestra primera beta disponible en Marzo de 2025
        </p>
      </div>
    </main>
  );
}