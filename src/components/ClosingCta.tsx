import React from 'react'
import { InstagramIcon } from './BrandIcons'
import { ExternalLink, Sparkles } from 'lucide-react'
import confetti from 'canvas-confetti'

export const ClosingCta: React.FC = () => {
  const handleFollowClick = () => {
    try {
      confetti({
        particleCount: 60,
        spread: 80,
        origin: { y: 0.75 },
        colors: ['#E1306C', '#833AB4', '#FD1D1D', '#F56040', '#FCAF45'],
        disableForReducedMotion: true,
      })
    } catch {
      // safe fallback
    }
  }

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 max-w-5xl mx-auto">
      <div className="relative rounded-3xl p-8 sm:p-12 md:p-16 text-center bg-gradient-to-br from-[#121832] via-[#0d1226] to-[#070a16] border border-white/10 shadow-2xl overflow-hidden">
        {/* Glow Effects */}
        <div
          className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-pink-600/15 blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-blue-600/15 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        {/* Small Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-semibold tracking-wider text-pink-300 uppercase mb-5">
          <Sparkles className="w-3.5 h-3.5 text-pink-400" />
          <span>JOIN THE MOVEMENT</span>
        </div>

        {/* Heading */}
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight max-w-2xl mx-auto mb-4 leading-tight">
          Your Developer Journey Starts Here
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg text-slate-300/90 max-w-xl mx-auto mb-8 font-normal leading-relaxed">
          Follow our platforms and stay connected with the community.
        </p>

        {/* CTA Button: Follow on Instagram */}
        <div className="flex justify-center">
          <a
            href="https://www.instagram.com/gdgoc_ikiapt/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleFollowClick}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-base font-semibold text-white bg-gradient-to-r from-pink-600 via-rose-600 to-amber-600 hover:from-pink-500 hover:via-rose-500 hover:to-amber-500 shadow-xl shadow-pink-600/25 hover:shadow-pink-500/40 border border-white/20 transition-all duration-300 hover:-translate-y-1 active:scale-95"
          >
            <InstagramIcon size={22} className="group-hover:rotate-12 transition-transform duration-300" />
            <span>Follow on Instagram</span>
            <ExternalLink className="w-4 h-4 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
