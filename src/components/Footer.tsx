import React from 'react'
import { SOCIAL_LINKS } from '../data/socialLinks'
import { Heart, ArrowUp } from 'lucide-react'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative mt-20 border-t border-white/[0.08] bg-[#04060b]/90 backdrop-blur-xl pt-14 pb-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Logo and Campus Title */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-14 h-14 rounded-full p-0.5 bg-white border border-white/40 shadow-lg shadow-blue-500/20 mb-3 flex items-center justify-center overflow-hidden">
            <img
              src="/images/gdg-logo.png"
              alt="GDG On Campus JKIAPT Logo"
              className="w-full h-full object-cover scale-[1.11]"
            />
          </div>
          <h3 className="font-display text-lg font-bold text-white tracking-wide">
            Google Developer Groups On Campus — JKIAPT
          </h3>
          <p className="text-xs font-mono text-slate-400 mt-0.5">
            J.K. Institute of Applied Physics &amp; Technology
          </p>
        </div>

        {/* Compact row of all 5 social icons */}
        <div className="flex items-center gap-3.5 mb-8">
          {SOCIAL_LINKS.map((item) => {
            const Icon = item.icon
            return (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GDG On Campus JKIAPT on ${item.name}`}
                className="w-10 h-10 rounded-xl bg-white/[0.05] hover:bg-white/[0.12] border border-white/[0.08] hover:border-white/20 flex items-center justify-center text-slate-300 hover:text-white transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <Icon size={18} />
              </a>
            )
          })}
        </div>

        {/* Built for developer community & dynamic year */}
        <div className="space-y-1.5 text-xs text-slate-400 font-normal">
          <p className="flex items-center justify-center gap-1.5 text-slate-300">
            <span>Built for the developer community.</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          </p>
          <p className="text-slate-400">
            &copy; {currentYear} Google Developer Groups On Campus — JKIAPT. All rights reserved.
          </p>
        </div>

        {/* Back to top button */}
        <button
          type="button"
          onClick={scrollToTop}
          className="mt-8 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-mono text-slate-400 hover:text-white transition-all duration-200"
          aria-label="Back to top of page"
        >
          <ArrowUp className="w-3.5 h-3.5" />
          <span>Back to Top</span>
        </button>
      </div>
    </footer>
  )
}
