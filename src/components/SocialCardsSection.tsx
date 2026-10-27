import React from 'react'
import { SOCIAL_LINKS } from '../data/socialLinks'
import { SocialCard } from './SocialCard'
import { Share2 } from 'lucide-react'

export const SocialCardsSection: React.FC = () => {
  return (
    <section id="socials" className="py-16 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-3">
          <Share2 className="w-3.5 h-3.5" />
          <span>OFFICIAL CHANNELS</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Connect Across Platforms
        </h2>
        <p className="mt-3 text-base sm:text-lg text-slate-400">
          Stay connected with workshops, project showcases, announcements, and developer discussions across our official handles.
        </p>
      </div>

      {/* Responsive Grid: 3 cols on desktop (lg:grid-cols-3), 2 on tablet (md:grid-cols-2), 1-2 on mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {SOCIAL_LINKS.map((item, idx) => (
          <SocialCard key={item.id} item={item} index={idx} />
        ))}
      </div>
    </section>
  )
}
