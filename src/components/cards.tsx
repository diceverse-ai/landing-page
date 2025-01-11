interface CardsProps {
  icon: React.ReactNode
  title: string
  description: string
}

export function Cards({ icon, title, description }: CardsProps) {
  return (
    <div className="w-full max-w-[330px] p-8 rounded-2xl bg-[#111] border border-[#222] backdrop-blur-sm">
      <div className="flex flex-col gap-5">
        {/* Icon */}
        <div className="w-12 h-12 flex items-center justify-center">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-[15px] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}
