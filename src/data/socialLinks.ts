import React from 'react'
import {
  InstagramIcon,
  LinkedInIcon,
  FacebookIcon,
  YouTubeIcon,
  XTwitterIcon,
} from '../components/BrandIcons'

export interface SocialItem {
  id: string
  name: string
  handle: string
  url: string
  description: string
  icon: React.FC<{ size?: number | string; className?: string }>
  badgeText: string
  accentColor: string
  glowClass: string
  iconBgClass: string
  iconColorClass: string
  borderHoverClass: string
  category: string
}

export const SOCIAL_LINKS: SocialItem[] = [
  {
    id: 'instagram',
    name: 'Instagram',
    handle: '@gdgoc_jkiapt',
    url: 'https://www.instagram.com/gdgoc_jkiapt/',
    description: 'Event highlights, campus reels, behind-the-scenes stories & community moments.',
    icon: InstagramIcon,
    badgeText: 'Official Media',
    accentColor: '#E1306C',
    glowClass: 'card-glow-insta',
    iconBgClass: 'bg-gradient-to-tr from-amber-500/15 via-rose-500/20 to-purple-600/20 text-pink-400 group-hover:from-amber-500/25 group-hover:via-rose-500/30 group-hover:to-purple-600/30',
    iconColorClass: 'text-pink-400 group-hover:text-pink-300',
    borderHoverClass: 'group-hover:border-pink-500/40',
    category: 'Visual & Stories',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    handle: 'GDG On Campus jkiapt',
    url: 'https://www.linkedin.com/company/gdgoc-jkiapt/home/',
    description: 'Professional networking, speaker announcements, industry insights & opportunities.',
    icon: LinkedInIcon,
    badgeText: 'Professional',
    accentColor: '#0A66C2',
    glowClass: 'card-glow-linkedin',
    iconBgClass: 'bg-blue-600/15 text-blue-400 group-hover:bg-blue-600/25',
    iconColorClass: 'text-blue-400 group-hover:text-blue-300',
    borderHoverClass: 'group-hover:border-blue-500/40',
    category: 'Careers & Network',
  },
  {
    id: 'youtube',
    name: 'YouTube',
    handle: '@GDGOC_jkiapt',
    url: 'https://www.youtube.com/@GDGOC_jkiapt',
    description: 'Hands-on workshops, tech talks, live broadcasts & project showcases on replay.',
    icon: YouTubeIcon,
    badgeText: 'Video & Talks',
    accentColor: '#FF0000',
    glowClass: 'card-glow-youtube',
    iconBgClass: 'bg-red-600/15 text-red-500 group-hover:bg-red-600/25',
    iconColorClass: 'text-red-500 group-hover:text-red-400',
    borderHoverClass: 'group-hover:border-red-500/40',
    category: 'Workshops & Demos',
  },
  {
    id: 'x',
    name: 'X (Twitter)',
    handle: '@gdgoc_jkiapt',
    url: 'https://x.com/gdgoc_jkiapt',
    description: 'Instant announcements, developer insights, community spaces & live updates.',
    icon: XTwitterIcon,
    badgeText: 'Fast Updates',
    accentColor: '#FFFFFF',
    glowClass: 'card-glow-x',
    iconBgClass: 'bg-slate-800/60 text-slate-200 group-hover:bg-slate-700/60',
    iconColorClass: 'text-slate-200 group-hover:text-white',
    borderHoverClass: 'group-hover:border-slate-400/40',
    category: 'Discussions & News',
  },
  {
    id: 'facebook',
    name: 'Facebook',
    handle: 'gdgoc.jkiapt',
    url: 'https://www.facebook.com/gdgoc.jkiapt/',
    description: 'Campus notices, community photo albums, student interaction & alumni updates.',
    icon: FacebookIcon,
    badgeText: 'Community',
    accentColor: '#1877F2',
    glowClass: 'card-glow-facebook',
    iconBgClass: 'bg-indigo-600/15 text-indigo-400 group-hover:bg-indigo-600/25',
    iconColorClass: 'text-indigo-400 group-hover:text-indigo-300',
    borderHoverClass: 'group-hover:border-indigo-500/40',
    category: 'Notices & Alumni',
  },
]
