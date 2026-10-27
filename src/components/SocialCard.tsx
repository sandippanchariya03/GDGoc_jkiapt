import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import type { SocialItem } from '../data/socialLinks'

interface SocialCardProps {
  item: SocialItem
  index: number
}

export const SocialCard: React.FC<SocialCardProps> = ({ item, index }) => {
  const IconComponent = item.icon

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-[#0c1122]/70 hover:bg-[#10172e]/90 border border-white/[0.08] ${item.borderHoverClass} transition-all duration-300 hover:-translate-y-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 overflow-hidden ${item.glowClass}`}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
      aria-label={`Visit our official ${item.name} profile at ${item.handle}`}
    >
      {/* Subtle Ambient Radial Highlight on Hover */}
      <div
        className="absolute -top-16 -right-16 w-36 h-36 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
        style={{ backgroundColor: item.accentColor }}
        aria-hidden="true"
      />

      {/* Top Header: Icon + Category Badge + Arrow */}
      <div>
        <div className="flex items-start justify-between mb-5">
          {/* Platform Icon with Ambient Tile */}
          <div
            className={`w-14 h-14 rounded-2xl flex items-center justify-center p-3.5 border border-white/10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-md ${item.iconBgClass}`}
          >
            <IconComponent size={28} className="transition-transform duration-300" />
          </div>

          {/* Right badges & External Link Indicator */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono tracking-wider px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-400 group-hover:text-slate-200 transition-colors">
              {item.badgeText}
            </span>
            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/[0.04] group-hover:bg-white/10 border border-white/[0.06] text-slate-400 group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Platform Identity */}
        <div className="mb-2.5">
          <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-colors">
            {item.name}
          </h3>
          <p className="text-xs font-mono text-slate-400/90 tracking-wide mt-0.5">
            {item.handle}
          </p>
        </div>

        {/* Platform Purpose / Description */}
        <p className="text-sm text-slate-300/80 leading-relaxed font-normal">
          {item.description}
        </p>
      </div>

      {/* Bottom Action Hint */}
      <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-medium text-slate-400 group-hover:text-white transition-colors">
        <span className="tracking-wide">Open profile</span>
        <span
          className="inline-flex items-center gap-1 font-semibold transition-transform duration-200 group-hover:translate-x-1"
          style={{ color: item.accentColor }}
        >
          Connect <ArrowUpRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </a>
  )
}
