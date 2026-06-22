import { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { Star, Quote, ChevronUp, Mail, Briefcase, Rocket, Users, ArrowRight, Send } from 'lucide-react'

const BS_ENVITECH_LOGO = 'https://skyagent-artifacts.skywork.ai/router/agent/2026-06-22/prod_agent_c56c4711-609d-470f-b355-3c1db7b9cd64/OIP_56d26e4bbf3347f9ba078f624dcf73db.webp'

/* ─────────────────────────────────────────
   CLIENT DIARIES — real stories only
   (more will be added as clients share feedback)
───────────────────────────────────────── */
const realStories = [
  {
    name: 'Anil',
    company: 'BS Envitech Pvt Ltd',
    role: 'BS Envitech Pvt Ltd — Hyderabad',
    industry: 'Environmental Services · Hyderabad',
    role_closed: 'Environmental Engineer',
    time_to_close: '36 hours',
    rating: 5,
    text: 'We had an urgent requirement for an Environmental Engineer and weren\'t sure how fast it could be closed. Techonaut AI delivered a shortlisted, interview-ready candidate in just 36 hours. Impressive speed, highly professional process.',
  },
]

/* @section: testimonials */
export function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="testimonials" className="py-24 bg-card/30 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 40% at 50% 100%, rgba(37,99,235,0.06) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 mb-4">
            Client Diaries
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Real Clients. <span className="text-accent">Real Results.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Every story here is verified — no fabricated reviews, ever.
          </p>
          <div className="flex items-center justify-center gap-1 mt-3">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}
            <span className="ml-2 text-sm text-muted-foreground">Verified client feedback</span>
          </div>
        </motion.div>

        {/* Cards row — real + coming-soon placeholders */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">

          {/* Real story card */}
          {realStories.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card border border-primary/25 rounded-2xl p-6 flex flex-col gap-4 hover:border-primary/50 hover:shadow-[0_8px_40px_rgba(37,99,235,0.13)] transition-all group relative overflow-hidden">

              {/* Accent top bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-t-2xl" />

              <Quote className="absolute top-5 right-4 w-7 h-7 text-primary/12 group-hover:text-primary/20 transition-colors" />

              {/* Stars */}
              <div className="flex gap-0.5 mt-2">
                {[...Array(t.rating)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-accent text-accent" />)}
              </div>

              {/* Role + time badge */}
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium">
                  <Briefcase className="w-3 h-3" /> {t.role_closed}
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold">
                  ⚡ Closed in {t.time_to_close}
                </span>
              </div>

              {/* Quote */}
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 italic">"{t.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-3 border-t border-border/60">
                <div className="w-12 h-12 rounded-xl bg-white border border-border flex items-center justify-center overflow-hidden shadow-sm flex-shrink-0">
                  <img src={BS_ENVITECH_LOGO} alt="BS Envitech Pvt Ltd" className="w-full h-full object-contain p-1" />
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                  <p className="text-xs text-primary font-medium">{t.industry}</p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Coming-soon placeholder 1 */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card/50 border border-dashed border-border/60 rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-3 min-h-[240px]">
            <div className="w-12 h-12 rounded-full bg-primary/8 border border-primary/15 flex items-center justify-center text-xl">💬</div>
            <p className="text-sm font-semibold text-foreground">More Stories Coming Soon</p>
            <p className="text-xs text-muted-foreground max-w-[160px] leading-relaxed">
              We share only verified client experiences — new diaries added as partners share feedback.
            </p>
          </motion.div>

          {/* Coming-soon placeholder 2 */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-card/50 border border-dashed border-border/60 rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-3 min-h-[240px]">
            <div className="w-12 h-12 rounded-full bg-accent/8 border border-accent/15 flex items-center justify-center text-xl">🌟</div>
            <p className="text-sm font-semibold text-foreground">Your Story Here?</p>
            <p className="text-xs text-muted-foreground max-w-[160px] leading-relaxed">
              Hired with Techonaut? We'd love to feature your experience.
            </p>
            <a href="mailto:info@techonautai.com"
              className="text-xs text-primary font-semibold underline underline-offset-2 hover:text-primary/80 transition-colors">
              Share your story →
            </a>
          </motion.div>

        </div>

        {/* Trust strip */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }} className="flex flex-wrap justify-center gap-5 mt-12">
          {[
            { icon: '✅', label: 'Verified Only' },
            { icon: '⚡', label: '48-hr Delivery' },
            { icon: '🎯', label: 'AI-Powered Match' },
            { icon: '🤝', label: 'Founder-Led Service' },
            { icon: '🌍', label: 'Pan-India Reach' },
          ].map((b, i) => (
            <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/60 text-sm text-muted-foreground">
              <span>{b.icon}</span>{b.label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────
   CAREERS SECTION
───────────────────────────────────────── */
const openRoles = [
  { icon: '🤖', title: 'AI Talent Sourcer', type: 'Full-Time', tag: 'Tech' },
  { icon: '🤝', title: 'Recruitment Consultant', type: 'Full-Time · Remote OK', tag: 'Ops' },
  { icon: '📈', title: 'Business Development Executive', type: 'Full-Time', tag: 'Sales' },
  { icon: '💼', title: 'HR Trainee / Intern', type: 'Internship · 3–6 months', tag: 'Training' },
]

/* @section: careers */
export function Careers() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="careers" className="py-24 bg-background relative overflow-hidden">
      {/* BG accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] opacity-25"
          style={{ background: 'radial-gradient(ellipse at center, rgba(249,115,22,0.12) 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20 mb-4">
            Careers at Techonaut
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Start Your Career <span className="text-primary">With Us</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're a young, ambitious AI-first recruitment startup — and we're growing. If you're passionate about talent, technology, and building something meaningful, we'd love to hear from you.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* Open roles */}
          <motion.div initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}>
            <h3 className="font-bold text-foreground text-xl mb-6 flex items-center gap-2"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              <Briefcase className="w-5 h-5 text-primary" /> Open Opportunities
            </h3>
            <div className="space-y-3">
              {openRoles.map((r, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -16 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/30 hover:bg-primary/3 transition-all group">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform">{r.icon}</div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">{r.title}</p>
                    <p className="text-xs text-muted-foreground">{r.type}</p>
                  </div>
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium border ${
                    r.tag === 'Tech'     ? 'bg-primary/10 text-primary border-primary/20' :
                    r.tag === 'Sales'   ? 'bg-accent/10 text-accent border-accent/20' :
                    r.tag === 'Ops'     ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                                          'bg-purple-500/10 text-purple-400 border-purple-500/20'
                  }`}>{r.tag}</span>
                </motion.div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-4 italic">
              Don't see your role? We welcome all talent — send us your CV anyway.
            </p>
          </motion.div>

          {/* Apply CTA card */}
          <motion.div initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-card border border-accent/25 rounded-2xl p-8 relative overflow-hidden shadow-[0_8px_40px_rgba(249,115,22,0.08)]">

            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-accent/15 border border-accent/25 flex items-center justify-center text-3xl mb-6">🚀</div>

              <h3 className="text-2xl font-bold text-foreground mb-3"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Ready to Build the Future of Hiring?
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We're a founder-led, AI-first team that moves fast, cares deeply, and rewards initiative. Join us and help place exceptional talent across India.
              </p>

              {/* Perks */}
              <div className="grid grid-cols-2 gap-2 mb-8">
                {[
                  { icon: '🎓', text: 'Continuous Learning' },
                  { icon: '⚡', text: 'Fast-Paced Growth' },
                  { icon: '🤖', text: 'Work with AI Tools' },
                  { icon: '🏠', text: 'Flexible Work Options' },
                ].map((p, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{p.icon}</span>{p.text}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground font-medium">
                  📩 Send your resume directly to:
                </p>
                <a href="mailto:info@techonautai.com?subject=Career Application – Techonaut AI Talent"
                  className="group flex items-center justify-between w-full px-6 py-4 bg-accent text-white rounded-xl font-semibold hover:bg-accent/90 transition-all shadow-[0_0_28px_rgba(249,115,22,0.3)] hover:shadow-[0_0_40px_rgba(249,115,22,0.5)] hover:-translate-y-0.5">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5" />
                    <span>info@techonautai.com</span>
                  </div>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="text-xs text-muted-foreground text-center">
                  Subject: <span className="text-foreground font-medium">"Career Application – [Your Role]"</span>
                </p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom motivational banner */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center p-6 rounded-2xl bg-gradient-to-r from-primary/8 via-card to-accent/8 border border-border/60">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Users className="w-5 h-5 text-primary" />
            <p className="text-foreground font-medium">
              We're not just hiring talent — we <span className="text-primary">are</span> talent.
              <span className="text-muted-foreground font-normal"> Join a team that lives and breathes what it places.</span>
            </p>
            <Rocket className="w-5 h-5 text-accent" />
          </div>
        </motion.div>

      </div>
    </section>
  )
}

/* @section: scroll-to-top */
export function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 16 }}
          transition={{ duration: 0.25 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-[0_0_24px_rgba(37,99,235,0.5)] hover:shadow-[0_0_36px_rgba(37,99,235,0.7)] hover:-translate-y-1 transition-all"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
