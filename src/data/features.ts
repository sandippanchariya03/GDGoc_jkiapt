import { BookOpen, Hammer, Users } from 'lucide-react'

export const COMMUNITY_FEATURES = [
  {
    id: 'learn',
    title: 'Learn',
    tagline: 'Technical Discovery',
    description: 'Workshops, sessions, and technical learning.',
    icon: BookOpen,
    accentColor: '#4285F4', // Google Blue
    borderGlow: 'hover:border-blue-500/50 hover:shadow-[0_0_30px_-5px_rgba(66,133,244,0.3)]',
    iconBg: 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
  },
  {
    id: 'build',
    title: 'Build',
    tagline: 'Hands-on Creation',
    description: 'Projects, experimentation, and hands-on development.',
    icon: Hammer,
    accentColor: '#34A853', // Google Green
    borderGlow: 'hover:border-emerald-500/50 hover:shadow-[0_0_30px_-5px_rgba(52,168,83,0.3)]',
    iconBg: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
  },
  {
    id: 'connect',
    title: 'Connect',
    tagline: 'Vibrant Network',
    description: 'Community, collaboration, and networking.',
    icon: Users,
    accentColor: '#FBBC05', // Google Yellow
    borderGlow: 'hover:border-amber-500/50 hover:shadow-[0_0_30px_-5px_rgba(251,188,5,0.3)]',
    iconBg: 'bg-amber-500/10 text-amber-400 border border-amber-500/20',
  },
]
