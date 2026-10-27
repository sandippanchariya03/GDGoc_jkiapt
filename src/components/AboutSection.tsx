import React from 'react'
import { COMMUNITY_FEATURES } from '../data/features'
import { Sparkles, Compass } from 'lucide-react'

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto scroll-mt-24">
      {/* Container with subtle glass frame */}
      <div className="relative rounded-3xl p-8 sm:p-12 md:p-14 bg-gradient-to-b from-[#0e142a]/80 via-[#0a0e1e]/80 to-[#070914]/90 border border-white/10 shadow-2xl overflow-hidden backdrop-blur-xl">
        {/* Subtle Ambient Glows inside the container */}
        <div
          className="absolute -top-24 left-1/4 w-80 h-80 rounded-full bg-blue-600/15 blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-24 right-1/4 w-80 h-80 rounded-full bg-emerald-600/10 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wider uppercase mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>OUR PURPOSE</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            A Community That Builds Together
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300/90 leading-relaxed font-normal">
            GDG On Campus at J.K. Institute of Applied Physics &amp; Technology brings students together to explore Google technologies, develop practical skills, collaborate on projects, and grow as developers.
          </p>
        </div>

        {/* 3 Feature Cards (Learn, Build, Connect) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {COMMUNITY_FEATURES.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.id}
                className={`group relative p-7 rounded-2xl bg-[#080c19]/80 border border-white/[0.08] ${feature.borderGlow} transition-all duration-300 hover:-translate-y-1`}
              >
                {/* Top Icon with colored badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${feature.iconBg} group-hover:scale-105 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono tracking-widest uppercase text-slate-400">
                    {feature.tagline}
                  </span>
                </div>

                {/* Feature Title */}
                <h3 className="font-display text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-200 transition-colors">
                  {feature.title}
                </h3>

                {/* Feature Description */}
                <p className="text-sm text-slate-300/80 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative Bottom Corner Accent */}
                <div
                  className="mt-6 pt-3 border-t border-white/[0.05] flex items-center gap-1.5 text-xs font-mono font-medium opacity-60 group-hover:opacity-100 transition-opacity"
                  style={{ color: feature.accentColor }}
                >
                  <Sparkles className="w-3 h-3" />
                  <span>Google Developer Groups</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
