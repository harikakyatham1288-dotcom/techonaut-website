import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { Mail, Phone, Globe, ArrowRight, Zap, Send, CheckCircle, MapPin } from 'lucide-react'
import { diversity, trainingHighlights, company } from '@/data/content'

const LOGO_URL = 'https://skyagent-artifacts.skywork.ai/router/agent/2026-06-20/prod_agent_c56c4711-609d-470f-b355-3c1db7b9cd64/logo_ad24bbcf7066483db5632683e54fda2a.jpeg'

function useFadeIn() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return { ref, inView }
}

function SectionHeader({ badge, title, sub }: { badge: string; title: string; sub?: string }) {
  const { ref, inView } = useFadeIn()
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12 lg:mb-16">
      <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 mb-4">{badge}</span>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{title}</h2>
      {sub && <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{sub}</p>}
    </motion.div>
  )
}

/* @section: diversity */
export function DiversityTraining() {
  const { ref, inView } = useFadeIn()
  return (
    <section id="diversity" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 40% at 80% 50%, rgba(249,115,22,0.05) 0%, transparent 70%)' }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader badge="Diversity & Future-Ready" title="Building Inclusive, Future-Ready Teams" sub="Diversity is not a checkbox — it is a competitive advantage. Our commitment is embedded in every process." />
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-5">
            {diversity.map((d, i) => (
              <motion.div key={i} ref={ref} initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.12 }}
                className="bg-card border border-border rounded-xl p-6 flex gap-5 hover:border-primary/40 hover:shadow-[0_4px_20px_rgba(37,99,235,0.1)] transition-all group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform">{d.icon}</div>
                <div>
                  <h4 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{d.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-primary/20 rounded-2xl p-8 relative overflow-hidden shadow-[0_8px_40px_rgba(37,99,235,0.08)]">
            <div className="absolute top-0 right-0 w-56 h-56 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl mb-5">🚀</div>
              <h3 className="text-xl font-bold text-foreground mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Future Skills Pipeline</h3>
              <p className="text-muted-foreground text-sm mb-7 leading-relaxed">We identify candidates with high learning agility and adaptability — the meta-skills for navigating technological disruption.</p>
              <div className="space-y-4">
                {trainingHighlights.map((t, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-primary/5 border border-primary/15 hover:border-primary/30 transition-all">
                    <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground text-sm">{t.title}</p>
                      <p className="text-xs text-muted-foreground">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-7 p-4 rounded-xl bg-accent/10 border border-accent/20">
                <p className="text-sm text-foreground"><span className="font-bold text-accent">Our Pledge: </span>Measurable diversity outcomes with full diversity analytics for every client.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* @section: contact */
export function Contact() {
  const { ref, inView } = useFadeIn()
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1200)
  }

  const inputClass = "w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all"

  return (
    <section id="contact" className="py-24 bg-card/40 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(37,99,235,0.07) 0%, transparent 70%)' }} />
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader badge="Contact Us" title="Let's Build Your Dream Team" sub="Reach out today and let our AI-powered recruiters find the perfect talent for you." />

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* LEFT — Info column */}
          <motion.div ref={ref} initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }} className="space-y-8">
            {/* Headline */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Your Next Great Hire{' '}
                <span className="text-primary" style={{ textShadow: '0 0 24px rgba(37,99,235,0.5)' }}>Starts Here.</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">Whether you are scaling a startup, growing a mid-sized team, or transforming enterprise hiring — we are ready to help. Let us build the team that will shape your future.</p>
            </div>

            {/* Contact info cards */}
            <div className="space-y-4">
              <a href="mailto:info@techonautai.com"
                className="flex items-center gap-4 p-5 bg-card border border-border rounded-2xl hover:border-primary/40 hover:shadow-[0_4px_20px_rgba(37,99,235,0.1)] transition-all group">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5 uppercase tracking-wider">Email Us</p>
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors">info@techonautai.com</p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary ml-auto transition-colors" />
              </a>

              <a href="tel:+919177306224"
                className="flex items-center gap-4 p-5 bg-card border border-border rounded-2xl hover:border-accent/40 hover:shadow-[0_4px_20px_rgba(249,115,22,0.1)] transition-all group">
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5 uppercase tracking-wider">Call Us</p>
                  <p className="font-semibold text-foreground group-hover:text-accent transition-colors">+91 9177306224</p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent ml-auto transition-colors" />
              </a>

              <div className="flex items-center gap-4 p-5 bg-card border border-border rounded-2xl">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5 uppercase tracking-wider">Website</p>
                  <p className="font-semibold text-foreground">techonautai.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 bg-card border border-border rounded-2xl">
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5 uppercase tracking-wider">Location</p>
                  <p className="font-semibold text-foreground">India · Hiring Across Borders</p>
                </div>
              </div>
            </div>

            {/* Quick CTA */}
            <div className="p-5 bg-primary/10 border border-primary/20 rounded-2xl">
              <p className="text-sm text-foreground font-medium mb-1">⚡ Fast Response Guarantee</p>
              <p className="text-xs text-muted-foreground">We respond to all enquiries within 24 hours. For urgent hiring needs, call us directly.</p>
            </div>
          </motion.div>

          {/* RIGHT — Contact form */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-card border border-border rounded-2xl p-8 shadow-[0_8px_40px_rgba(0,0,0,0.2)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            {!submitted ? (
              <form onSubmit={handleSubmit} className="relative space-y-5">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Send Us a Message</h3>
                  <p className="text-sm text-muted-foreground">Fill in the details below and we'll get back to you within 24 hours.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wider">Full Name *</label>
                    <input required type="text" placeholder="John Smith" value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wider">Email Address *</label>
                    <input required type="email" placeholder="john@company.com" value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      className={inputClass} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wider">Company Name</label>
                    <input type="text" placeholder="Your Company" value={form.company}
                      onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                      className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wider">Service Needed</label>
                    <select value={form.service} onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
                      className={inputClass + ' cursor-pointer'}>
                      <option value="">Select a service</option>
                      <option>Recruitment & Executive Search</option>
                      <option>Staffing & Contract Hiring</option>
                      <option>HR Consulting</option>
                      <option>Training & Upskilling</option>
                      <option>Technology Solutions</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wider">Message *</label>
                  <textarea required rows={4} placeholder="Tell us about your hiring needs, the roles you're looking to fill, and timeline..." value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className={inputClass + ' resize-none'} />
                </div>

                <button type="submit" disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 disabled:opacity-70 transition-all shadow-[0_0_24px_rgba(37,99,235,0.4)] hover:shadow-[0_0_36px_rgba(37,99,235,0.6)] hover:-translate-y-0.5 active:translate-y-0">
                  {loading ? (
                    <><div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />Sending...</>
                  ) : (
                    <><Send className="w-4 h-4" />Send Message<ArrowRight className="w-4 h-4" /></>
                  )}
                </button>

                <p className="text-xs text-muted-foreground text-center">🔒 Your information is secure and will never be shared.</p>
              </form>
            ) : (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="relative text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Message Sent! 🎉</h3>
                <p className="text-muted-foreground text-sm max-w-xs mx-auto">Thank you, <span className="text-foreground font-medium">{form.name}</span>! We'll get back to you at <span className="text-primary">{form.email}</span> within 24 hours.</p>
                <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', service: '', message: '' }) }}
                  className="text-sm text-primary hover:underline mt-2">Send another message</button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* @section: footer */
export function Footer() {
  const currentYear = new Date().getFullYear()
  const footerLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Industries', href: '#industries' },
    { label: 'Services', href: '#services' },
    { label: 'Roles', href: '#roles' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Contact Us', href: '#contact' },
  ]

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer className="bg-background border-t border-border">
      {/* Top footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={LOGO_URL} alt="Techonaut AI Talent" className="h-10 w-auto rounded-xl border border-white/10 shadow-[0_0_16px_rgba(37,99,235,0.3)] object-contain" />
              <div>
                <p className="font-bold text-foreground leading-none">Techonaut<span className="text-primary">AI</span></p>
                <p className="text-[10px] text-muted-foreground tracking-widest uppercase">Talent Pvt Ltd</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">Next-generation AI-powered recruitment. Connecting exceptional talent with forward-thinking companies across India and beyond.</p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Actively recruiting across India
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-5 uppercase tracking-wider">Quick Links</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {footerLinks.map((l) => (
                <a key={l.label} href={l.href} onClick={(e) => scrollTo(e, l.href)}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5 group">
                  <div className="w-1 h-1 rounded-full bg-border group-hover:bg-primary transition-colors" />
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-5 uppercase tracking-wider">Get In Touch</h4>
            <div className="space-y-3">
              <a href="mailto:info@techonautai.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-primary" />
                </div>
                info@techonautai.com
              </a>
              <a href="tel:+919177306224" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-accent transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-accent" />
                </div>
                +91 9177306224
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Globe className="w-3.5 h-3.5 text-primary" />
                </div>
                techonautai.com
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">© {currentYear} {company.legalName}. All rights reserved.</p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Zap className="w-3 h-3 text-primary" />
            Built with AI · Powered by Innovation · Driven by Founders
          </div>
        </div>
      </div>
    </footer>
  )
}
