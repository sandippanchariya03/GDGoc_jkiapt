import React from 'react'
import { Sparkles, ArrowDown, ExternalLink } from 'lucide-react'
import confetti from 'canvas-confetti'

export const Hero: React.FC = () => {
  const handleJoinClick = () => {
    // Joyful celebration micro-interaction
    try {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#4285F4', '#EA4335', '#FBBC05', '#34A853', '#00F0FF'],
        disableForReducedMotion: true,
      })
    } catch {
      // safe fallback
    }
  }

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 flex flex-col items-center text-center">
      {/* Student Developer Community Badge */}
      <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-inner text-xs font-semibold tracking-wider text-slate-300 uppercase mb-8 hover:border-blue-500/30 transition-colors">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="text-slate-200">STUDENT DEVELOPER COMMUNITY</span>
        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
      </div>

      {/* GDG Logo Presentation with Outer Ambient Entrance Animation */}
      <div className="relative mb-8 group">
        {/* Subtle Conic Animated Halo Ring Around Logo */}
        <div
          className="absolute -inset-2.5 rounded-full opacity-65 blur-lg transition duration-700 group-hover:opacity-100 animate-ring pointer-events-none"
          style={{
            background:
              'conic-gradient(from 0deg, #4285F4, #34A853, #FBBC05, #EA4335, #4285F4)',
          }}
          aria-hidden="true"
        />

        {/* Ambient Pulse Glow */}
        <div
          className="absolute -inset-6 rounded-full bg-blue-500/20 blur-2xl animate-pulse-subtle pointer-events-none"
          aria-hidden="true"
        />

        {/* Logo Container preserving full proportions and original text */}
        <div className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56 rounded-full p-1 bg-white border-2 border-white/40 shadow-2xl shadow-blue-500/25 flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.03] overflow-hidden">
          <img
            src="/images/gdg-logo.png"
            alt="Google Developer Groups On Campus — J.K. Institute of Applied Physics & Technology"
            className="w-full h-full object-cover scale-[1.11] pointer-events-none select-none"
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </div>

      {/* Organization Titles */}
      <div className="space-y-1 mb-4 max-w-3xl">
        <h2 className="text-sm sm:text-base font-semibold tracking-wide text-blue-400 uppercase font-mono">
          Google Developer Groups On Campus
        </h2>
        <p className="text-xs sm:text-sm font-medium text-slate-400 tracking-wider">
          J.K. Institute of Applied Physics &amp; Technology
        </p>
      </div>

      {/* Large Hero Heading: "Build. Learn. Innovate." */}
      <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.1] mb-4">
        Build. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-cyan-400">Learn.</span>{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-rose-400 to-red-400">Innovate.</span>
      </h1>

      {/* Tagline */}
      <div className="inline-block px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-xs sm:text-sm font-medium text-slate-300 font-mono tracking-widest uppercase mb-5">
        Learn. Build. Connect.
      </div>

      {/* Supporting Text */}
      <p className="max-w-2xl text-base sm:text-lg text-slate-300/90 leading-relaxed font-normal mb-9">
        Connect with our community, explore our activities, and stay updated with the latest opportunities in technology.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
        {/* Button 1: Explore Our Socials */}
        <a
          href="#socials"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl text-sm font-semibold tracking-wide text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 hover:border-blue-400/50 backdrop-blur-md shadow-lg shadow-black/20 hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
        >
          <span>Explore Our Socials</span>
          <ArrowDown className="w-4 h-4 text-blue-400 animate-bounce" />
        </a>

        {/* Button 2: Join Our Community */}
        <a
          href="https://www.instagram.com/gdgoc_jkiapt/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleJoinClick}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 hover:from-blue-500 hover:via-cyan-500 hover:to-emerald-500 shadow-xl shadow-cyan-600/25 hover:shadow-cyan-500/40 border border-white/20 transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
        >
          <Sparkles className="w-4 h-4 text-amber-200" />
          <span>Join Our Community</span>
          <ExternalLink className="w-4 h-4 opacity-80" />
        </a>
      </div>
    </section>
  )
}
