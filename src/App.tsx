import React from 'react'
import { BackgroundEffects } from './components/BackgroundEffects'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { SocialCardsSection } from './components/SocialCardsSection'
import { AboutSection } from './components/AboutSection'
import { ClosingCta } from './components/ClosingCta'
import { Footer } from './components/Footer'

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen text-slate-100 flex flex-col font-sans selection:bg-blue-500/30 selection:text-blue-200">
      {/* Background Ambience & Particles */}
      <BackgroundEffects />

      {/* Top Glass Navigation */}
      <Navbar />

      {/* Main Content Landmarks */}
      <main className="flex-1 w-full flex flex-col">
        {/* Hero Section */}
        <Hero />

        {/* 5 Social Media Cards Section */}
        <SocialCardsSection />

        {/* About Section: Learn, Build, Connect */}
        <AboutSection />

        {/* Closing CTA */}
        <ClosingCta />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
