import React, { useEffect, useRef, useState } from 'react'

export const BackgroundEffects: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [cursorPos, setCursorPos] = useState({ x: -1000, y: -1000 })
  const [isDesktopWithPointer, setIsDesktopWithPointer] = useState(false)

  // Cursor follow on desktop
  useEffect(() => {
    // Check if device has fine pointer and motion is not reduced
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (hasFinePointer && !prefersReducedMotion) {
      setIsDesktopWithPointer(true)

      const handleMouseMove = (e: MouseEvent) => {
        setCursorPos({ x: e.clientX, y: e.clientY })
      }

      window.addEventListener('mousemove', handleMouseMove, { passive: true })
      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [])

  // Interactive subtle particle canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize, { passive: true })

    // Generate lightweight subtle floating nodes
    const nodeCount = Math.min(Math.floor((width * height) / 32000), 45)
    interface Node {
      x: number
      y: number
      vx: number
      vy: number
      size: number
      color: string
      alpha: number
    }

    const colors = [
      'rgba(66, 133, 244, ', // Google Blue
      'rgba(52, 168, 83, ',  // Google Green
      'rgba(251, 188, 5, ',  // Google Yellow
      'rgba(234, 67, 53, ',  // Google Red
      'rgba(0, 240, 255, ',  // Cyan
    ]

    const nodes: Node[] = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      size: Math.random() * 1.8 + 0.8,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: Math.random() * 0.35 + 0.15,
    }))

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      // Draw faint connections between close nodes
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i]
        n1.x += n1.vx
        n1.y += n1.vy

        if (n1.x < 0) n1.x = width
        else if (n1.x > width) n1.x = 0
        if (n1.y < 0) n1.y = height
        else if (n1.y > height) n1.y = 0

        // Draw particle
        ctx.beginPath()
        ctx.arc(n1.x, n1.y, n1.size, 0, Math.PI * 2)
        ctx.fillStyle = `${n1.color}${n1.alpha})`
        ctx.fill()

        // Connect nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j]
          const dx = n1.x - n2.x
          const dy = n1.y - n2.y
          const dist = Math.hypot(dx, dy)

          if (dist < 110) {
            const lineAlpha = (1 - dist / 110) * 0.12
            ctx.beginPath()
            ctx.moveTo(n1.x, n1.y)
            ctx.lineTo(n2.x, n2.y)
            ctx.strokeStyle = `rgba(100, 160, 255, ${lineAlpha})`
            ctx.lineWidth = 0.7
            ctx.stroke()
          }
        }
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
      {/* Background Deep Canvas Gradient */}
      <div className="absolute inset-0 bg-[#06080F]" />

      {/* Atmospheric Ambient Glow Blobs */}
      <div className="absolute -top-36 left-1/2 -translate-x-1/2 w-[650px] h-[450px] bg-gradient-to-b from-blue-600/18 via-cyan-500/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[28%] -left-48 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[55%] -right-48 w-[550px] h-[550px] bg-blue-700/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[600px] h-[400px] bg-teal-500/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Tech Grid Pattern (Very subtle) */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.7) 1px, transparent 0)`,
          backgroundSize: '36px 36px',
        }}
      />

      {/* Subtle Dynamic Floating Constellation Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-70" />

      {/* Desktop Ambient Cursor Glow */}
      {isDesktopWithPointer && (
        <div
          className="absolute w-[360px] h-[360px] rounded-full blur-[80px] transition-transform duration-100 ease-out pointer-events-none opacity-25"
          style={{
            background: 'radial-gradient(circle, rgba(0, 240, 255, 0.35) 0%, rgba(66, 133, 244, 0.15) 50%, transparent 70%)',
            transform: `translate3d(${cursorPos.x - 180}px, ${cursorPos.y - 180}px, 0)`,
          }}
        />
      )}
    </div>
  )
}
