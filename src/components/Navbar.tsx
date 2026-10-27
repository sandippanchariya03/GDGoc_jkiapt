import React, { useState, useEffect } from 'react'
import { Sparkles, ArrowUpRight, Menu, X } from 'lucide-react'

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-[#06080f]/85 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/40 py-3'
        : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand / Logo link */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1"
          aria-label="GDG On Campus JKIAPT Home"
        >
          <div className="relative w-9 h-9 rounded-full overflow-hidden p-0.5 bg-white border border-white/40 shadow-sm shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
            <img
              src="/images/gdg-logo.png"
              alt="GDG On Campus JKIAPT Logo"
              className="w-full h-full object-cover scale-[1.11] rounded-full"
            />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-sm font-semibold tracking-wide text-white group-hover:text-blue-400 transition-colors">
              GDG On Campus
            </span>
            <span className="text-[11px] font-medium text-slate-400 tracking-wider">
              JKIAPT
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a
            href="#socials"
            className="hover:text-white transition-colors duration-200"
          >
            Social Links
          </a>
          <a
            href="#about"
            className="hover:text-white transition-colors duration-200"
          >
            About
          </a>
          <div className="h-4 w-[1px] bg-white/10" aria-hidden="true" />
          <a
            href="https://www.instagram.com/gdgoc_jkiapt/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold tracking-wide text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-md shadow-blue-600/25 hover:shadow-cyan-500/30 transition-all duration-200 active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-200 animate-pulse" />
            <span>Join Community</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
          </a>
        </nav>

        {/* Mobile Menu Trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-6 bg-[#090d1a]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl">
          <div className="flex flex-col gap-3 pt-2">
            <a
              href="#socials"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-slate-200 hover:bg-white/5 font-medium text-sm"
            >
              Social Media Links
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-slate-200 hover:bg-white/5 font-medium text-sm"
            >
              About Our Community
            </a>
            <div className="h-px bg-white/10 my-1" />
            <a
              href="https://www.instagram.com/gdgoc_jkiapt/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 shadow-lg shadow-blue-600/30"
            >
              <Sparkles className="w-4 h-4 text-cyan-200" />
              <span>Join On Instagram</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
