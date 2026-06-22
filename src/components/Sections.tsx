import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { stats, mission, vision, values, industries } from '@/data/content'

/* @section: fade-in-hook */
function useFadeIn(delay = 0) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return { ref, inView, delay }
}

/* @section: animated-counter */
function useCounter(target: number, inView: boolean, duration = 1800) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = Math.ceil(target / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(start)
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target, duration])
  return count
}

/* @section: section-header */
function SectionHeader({ badge, title, sub }: { badge: string; title: string; sub?: string }) {
  const { ref, inView } = useFadeIn()
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center mb-12 lg:mb-16"
    >
      <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 mb-4">
        {badge}
      </span>
      <h2
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {title}
      </h2>
      {sub && <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{sub}</p>}
    </motion.div>
  )
}

/* @section: stats-bar */
function StatItem({ s, i, inView }: { s: typeof stats[number]; i: number; inView: boolean }) {
  const numericVal = parseInt(String(s.value).replace(/\D/g, ''), 10) || 0
  const animated = useCounter(numericVal, inView, 1600 + i * 200)
  const isNumeric = !isNaN(numericVal) && numericVal > 0
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      className="text-center group"
    >
      <div
        className={`text-4xl sm:text-5xl font-bold mb-1 transition-all group-hover:scale-105 ${i % 2 === 0 ? 'text-primary' : 'text-accent'}`}
        style={s.mono ? { fontFamily: "'JetBrains Mono', monospace" } : {}}
      >
        {isNumeric ? animated : s.value}
        <span className="text-2xl">{s.unit}</span>
      </div>
      <p className="text-muted-foreground text-sm">{s.label}</p>
    </motion.div>
  )
}

export function StatsBar() {
  const { ref, inView } = useFadeIn()
  return (
    <section className="py-16 bg-card border-y border-border relative overflow-hidden">
      {/* subtle glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 100% at 50% 50%, rgba(37,99,235,0.04) 0%, transparent 70%)' }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <StatItem key={i} s={s} i={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* @section: about */
export function About() {
  const { ref, inView } = useFadeIn()
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader badge="Who We Are" title="Where AI Meets Human Expertise" sub="Techonaut AI Talent is a next-generation recruitment company combining AI precision with experienced recruiter judgment." />
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Mission */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border rounded-2xl p-8 relative overflow-hidden hover:border-primary/30 hover:shadow-[0_8px_32px_rgba(37,99,235,0.08)] transition-all"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/3 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-2xl border border-primary/20">🎯</div>
              <h3 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {mission.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{mission.text}</p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card border border-border rounded-2xl p-8 relative overflow-hidden hover:border-accent/30 hover:shadow-[0_8px_32px_rgba(249,115,22,0.08)] transition-all"
          >
            <div className="absolute top-0 left-0 w-40 h-40 bg-accent/5 rounded-full -translate-y-1/2 -translate-x-1/2" />
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 text-2xl border border-accent/20">🔭</div>
              <h3 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {vision.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{vision.text}</p>
              <div className="mt-4 space-y-2">
                {vision.pillars.map((p, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <div>
                      <span className="text-foreground font-medium">{p.title}</span>
                      <span className="text-muted-foreground"> — {p.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/30 hover:bg-primary/5 hover:shadow-[0_4px_16px_rgba(37,99,235,0.1)] transition-all group cursor-default"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{v.icon}</div>
              <h4 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{v.title}</h4>
              <p className="text-xs text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* @section: industries */
export function Industries() {
  const { ref, inView } = useFadeIn()
  return (
    <section id="industries" className="py-24 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader badge="Industries We Serve" title="Expertise Across Every Sector" sub="Our AI-powered platform is trained across a wide spectrum of industries, enabling deep domain alignment for every placement." />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              ref={ref}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-card border border-border rounded-xl p-5 hover:border-primary/40 hover:bg-primary/5 hover:shadow-[0_4px_20px_rgba(37,99,235,0.1)] hover:-translate-y-1 transition-all group cursor-default"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{ind.icon}</div>
              <h4 className="font-semibold text-foreground text-sm mb-1 group-hover:text-primary transition-colors">{ind.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{ind.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
