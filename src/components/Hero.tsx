import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Users, Brain, Zap, Shield, Globe } from 'lucide-react'
import { company } from '@/data/content'

/* @section: hero */
const HERO_IMG = 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900'

const badges = [
  { icon: Brain,    label: 'AI-First Platform',  color: 'text-primary' },
  { icon: Users,    label: 'Founder-Led Team',    color: 'text-accent'  },
  { icon: Shield,   label: 'DPDP Compliant',      color: 'text-primary' },
  { icon: Globe,    label: 'Pan-India Reach',      color: 'text-accent'  },
]

/* animated particle canvas — purple/blue on white */
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    let raf: number
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight }
    resize()
    window.addEventListener('resize', resize)
    const N = 55
    const pts = Array.from({ length: N }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.4 + 0.4,
      purple: Math.random() > 0.4,
    }))
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > canvas.width)  p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.purple ? 'rgba(124,58,237,0.35)' : 'rgba(37,99,235,0.30)'
        ctx.fill()
      })
      for (let i = 0; i < N; i++) for (let j = i + 1; j < N; j++) {
        const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y
        const d = Math.sqrt(dx * dx + dy * dy)
        if (d < 100) {
          ctx.beginPath()
          ctx.moveTo(pts[i].x, pts[i].y)
          ctx.lineTo(pts[j].x, pts[j].y)
          ctx.strokeStyle = `rgba(124,58,237,${0.08 * (1 - d / 100)})`
          ctx.lineWidth = 0.5
          ctx.stroke()
        }
      }
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
}

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-12">

      {/* ── Background layers ── */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(124,58,237,0.9) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 60% 0%, rgba(124,58,237,0.07) 0%, transparent 60%)' }} />
        <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)' }} />
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.05) 0%, transparent 70%)' }} />
        <ParticleCanvas />
      </div>

      {/* ── Split content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── LEFT: Text column ── */}
          <div className="text-center lg:text-left">

            {/* Badge pill */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/30 bg-primary/8 text-primary text-sm font-semibold mb-7">
              <Sparkles className="w-4 h-4" />
              Next-Generation AI Recruitment Platform
            </motion.div>

            {/* Headline */}
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-foreground leading-[1.06] mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Hire{' '}
              <span className="text-primary" style={{ textShadow: '0 0 40px rgba(124,58,237,0.20)' }}>Smarter.</span>
              <br />
              Faster.{' '}
              <span className="relative inline-block">
                <span className="text-accent" style={{ textShadow: '0 0 32px rgba(249,115,22,0.25)' }}>With AI.</span>
                <motion.span className="absolute -bottom-1 left-0 h-[3px] bg-accent rounded-full"
                  initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 0.8, delay: 1.0 }} />
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
              className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              {company.heroSub}
            </motion.p>

            {/* CTAs */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <a href="mailto:info@techonautai.com"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all shadow-[0_4px_24px_rgba(124,58,237,0.35)] hover:shadow-[0_6px_36px_rgba(124,58,237,0.55)] hover:-translate-y-0.5">
                <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Start Hiring with AI
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button onClick={() => scrollTo('services')}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold border border-border text-foreground rounded-xl hover:bg-primary/5 hover:border-primary/40 transition-all">
                Explore Services
              </button>
            </motion.div>

            {/* Feature badges */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-2.5 justify-center lg:justify-start">
              {badges.map((b, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, delay: 0.5 + i * 0.07 }}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-border text-sm text-muted-foreground hover:border-primary/40 hover:text-foreground hover:shadow-sm transition-all cursor-default">
                  <b.icon className={`w-3.5 h-3.5 ${b.color}`} />
                  {b.label}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Image column ── */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end">

            {/* Main image card */}
            <div className="relative w-full max-w-lg lg:max-w-none">
              {/* Purple glow behind image */}
              <div className="absolute inset-4 rounded-3xl"
                style={{ background: 'radial-gradient(ellipse at center, rgba(124,58,237,0.20) 0%, transparent 70%)', filter: 'blur(30px)' }} />

              <div className="relative rounded-3xl overflow-hidden border border-primary/15 shadow-[0_20px_60px_rgba(124,58,237,0.18),0_4px_20px_rgba(0,0,0,0.06)]">
                <img
                  src={HERO_IMG}
                  alt="AI-powered recruitment technology"
                  className="w-full h-[420px] lg:h-[500px] object-cover"
                  loading="eager"
                />
                {/* Subtle overlay for text readability on chips */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>

              {/* Floating stat chip — top left */}
              <motion.div initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="absolute -top-4 -left-4 lg:-left-8 flex items-center gap-2.5 px-4 py-3 bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.12)] border border-border/60">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-lg">⚡</div>
                <div>
                  <p className="font-bold text-foreground text-sm leading-none" style={{ fontFamily: "'JetBrains Mono',monospace" }}>24 HRS</p>
                  <p className="text-muted-foreground text-xs mt-0.5">client response</p>
                </div>
              </motion.div>

              {/* Floating stat chip — bottom left */}
              <motion.div initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.05 }}
                className="absolute -bottom-4 -left-4 lg:-left-8 flex items-center gap-2.5 px-4 py-3 bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.12)] border border-border/60">
                <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center text-lg">🎯</div>
                <div>
                  <p className="font-bold text-foreground text-sm leading-none" style={{ fontFamily: "'JetBrains Mono',monospace" }}>95%+</p>
                  <p className="text-muted-foreground text-xs mt-0.5">Placement Rate</p>
                </div>
              </motion.div>

              {/* Floating stat chip — top right */}
              <motion.div initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.15 }}
                className="absolute -top-4 -right-4 lg:-right-8 flex items-center gap-2.5 px-4 py-3 bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.12)] border border-border/60">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-lg">🌐</div>
                <div>
                  <p className="font-bold text-foreground text-sm leading-none">10+</p>
                  <p className="text-muted-foreground text-xs mt-0.5">Industries</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={() => scrollTo('about')}>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-border rounded-full flex items-start justify-center pt-2 mx-auto">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </motion.div>
        <p className="text-xs text-muted-foreground mt-1.5 text-center">Scroll</p>
      </motion.div>
    </section>
  )
}
