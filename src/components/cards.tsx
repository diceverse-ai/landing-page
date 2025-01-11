// components/cards.tsx
interface CardsProps {
  icon: React.ReactNode
  title: string
  description: string
 }
 
 export function Cards({ icon, title, description }: CardsProps) {
  return (
    <div className="w-full max-w-[330px] p-6 rounded-2xl bg-black/40 border border-gray-800 backdrop-blur-sm">
      <div className="flex flex-col gap-4">
        {/* Icon */}
        <div className="relative w-14 h-14 flex items-center justify-center">
          <div className="absolute inset-0 bg-purple-500/10 rounded-xl"></div>
          {icon}
        </div>
 
        {/* Title */}
        <h3 className="text-xl font-bold text-white">
          {title}
        </h3>
 
        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
 }