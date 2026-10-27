import type { LucideIcon } from 'lucide-react'

export interface SocialPlatform {
  id: string
  name: string
  handle: string
  url: string
  description: string
  icon: LucideIcon
  badge: string
  accentColor: string
  glowClass: string
  iconColor: string
  bgGlow: string
  buttonText: string
}

export interface FeatureItem {
  id: string
  title: string
  tagline: string
  description: string
  icon: LucideIcon
  accentColor: string
  gradient: string
}
