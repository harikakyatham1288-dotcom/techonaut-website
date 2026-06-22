import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { services, itRoles, nonItRoles, advantages, whyUs } from '@/data/content'
import { Check } from 'lucide-react'

function useFadeIn() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return { ref, inView }
}

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
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        {title}
      </h2>
      {sub && <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{sub}</p>}
    </motion.div>
  )
}

/* Service card images — user-provided */
const serviceImages = [
  'https://skyagent-artifacts.skywork.ai/router/agent/2026-06-22/prod_agent_c56c4711-609d-470f-b355-3c1db7b9cd64/3BACFTcP22k9J2CZIRnh_Hy50ZgFKbACSPw_c5s-ahbM8BVW-ZgFv1nD0NqjxmwTV14rql7n-e0fO_uttTX0Sg3Xw8T_bJlmgUc_Db9SRJAgqX9ouT3LPTo5QD62WK7SScTm4Qzknd_4KEcdOSCVatSYAyEHSRYN69AYu1K-JmSc-e0_2b956591d0044e608d52fe8925888441.jpg',
  'https://skyagent-artifacts.skywork.ai/router/agent/2026-06-22/prod_agent_c56c4711-609d-470f-b355-3c1db7b9cd64/SvdP8k2_mW-TnyK70136UqQtHb8OIIfLzpZKOzEImWf02IufMK4YyYi9Mjgmg9JDFe3Ys_ovCAENH_-VF93Kappcq6zbaqAm-Dtdxo5BQwef_G7BCDN4V0Y4kONLRdp630r94v6QS1Plc7yrjsCUvAMZD0dp-7D33AVtWRs12-VyeDRdFxt_7496bd7c20d440bda9087b50e088574c.jpg',
  'https://skyagent-artifacts.skywork.ai/router/agent/2026-06-22/prod_agent_c56c4711-609d-470f-b355-3c1db7b9cd64/training%20and%20upskill09xwW5AZb2Kq__Zm9h-lpeIHeJKYrLzeduX_BfUnHEuwjMiG1HdzJe4qnD9yG_Zn4myXf7uSxJPiouCMx1uhOCbuugtKIcF940rBCnTZYGNuutQUSoY5E_n-rNTdAsvRwKxvWbe4PKD576a245lJ5DWepV_c3eQsCF7e5fx0IPbhzGt_184f368ab3374253ba687faa7238f1a5.jpg',
  'https://skyagent-artifacts.skywork.ai/router/agent/2026-06-22/prod_agent_c56c4711-609d-470f-b355-3c1db7b9cd64/technology%20solutionsEKyIAoMKjZ1GKwmMuvkxtXn5IcgyJ9jdCLxJcZAd3JJQoFmrXBoQ2OPnwb21zhS1QMvVej2UCVTCz8gC28nRpdZqIIElrpGw2ekPLNrCYJT2ZzsweQo15PBA1Y5IxmQqlVkXk0dwNGbSOnwb3fXn1b-z9z998lR6v2YwK8Jb--wYqiv_b551c363e2404a4a82bb5df68404d603.jpg',
  'https://images.unsplash.com/photo-1614852206732-6728910dc175?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=500',
]

/* @section: services */
export function Services() {
  const { ref, inView } = useFadeIn()
  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader badge="Our Services" title="End-to-End Talent Ecosystem" sub="From first hire to full workforce strategy — we deliver at every stage of your talent journey." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              ref={ref}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`bg-white border rounded-2xl overflow-hidden hover:-translate-y-1.5 transition-all group cursor-default shadow-sm ${
                s.color === 'primary'
                  ? 'border-primary/15 hover:border-primary/40 hover:shadow-[0_12px_40px_rgba(124,58,237,0.14)]'
                  : 'border-accent/15 hover:border-accent/40 hover:shadow-[0_12px_40px_rgba(249,115,22,0.12)]'
              } ${i === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              {/* Image header */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={serviceImages[i] || serviceImages[0]}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute inset-0 opacity-60 ${
                  s.color === 'primary'
                    ? 'bg-gradient-to-br from-primary/30 to-transparent'
                    : 'bg-gradient-to-br from-accent/25 to-transparent'
                }`} />
                {/* Icon badge over image */}
                <div className={`absolute bottom-3 left-4 w-11 h-11 rounded-xl flex items-center justify-center text-xl shadow-lg border border-white/20 ${
                  s.color === 'primary' ? 'bg-primary/90' : 'bg-accent/90'
                }`}>{s.icon}</div>
              </div>

              {/* Text content */}
              <div className="p-6">
                <h3 className={`text-base font-bold mb-2.5 group-hover:transition-colors ${
                  s.color === 'primary' ? 'text-foreground group-hover:text-primary' : 'text-foreground group-hover:text-accent'
                }`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* @section: roles */
export function Roles() {
  const [tab, setTab] = useState<'it' | 'non-it'>('it')
  const { ref, inView } = useFadeIn()
  const roles = tab === 'it' ? itRoles : nonItRoles

  return (
    <section id="roles" className="py-24 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader badge="Roles We Fill" title="Deep Domain Expertise" sub="From junior developers to C-suite executives — across IT and Non-IT functions." />

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="flex p-1 rounded-xl bg-secondary border border-border">
            {(['it', 'non-it'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  tab === t
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {t === 'it' ? '💻 IT & Tech Roles' : '🏭 Non-IT Roles'}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {roles.map((r, i) => (
            <motion.div
              key={`${tab}-${i}`}
              ref={ref}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 hover:bg-primary/3 transition-all group"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{r.icon}</span>
                <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{r.title}</h4>
              </div>
              <div className="space-y-1.5">
                {r.items.map((item, j) => (
                  <div key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground text-sm bg-card border border-border rounded-full px-6 py-2 inline-block">
            {tab === 'it'
              ? '✦ Junior Developers to CTOs — Full IT Organizational Hierarchy Across All Industries'
              : '✦ Entry-Level Coordinators to C-Suite Executives — IT & Non-IT Functions'}
          </p>
        </div>
      </div>
    </section>
  )
}

/* @section: advantage */
export function Advantage() {
  const { ref, inView } = useFadeIn()
  return (
    <section id="advantage" className="py-24 bg-background relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(37,99,235,0.06) 0%, transparent 70%)' }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader badge="The Techonaut Advantage" title="Built Lean. Powered by AI." sub="We're a startup that thinks different — lean processes, founder-led service, and AI-first from day one." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {advantages.map((a, i) => (
            <motion.div
              key={i}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`bg-card border rounded-xl p-6 hover:-translate-y-1 transition-all group ${
                i % 2 === 0
                  ? 'border-primary/20 hover:border-primary/40 hover:shadow-[0_8px_24px_rgba(37,99,235,0.12)]'
                  : 'border-accent/15 hover:border-accent/35 hover:shadow-[0_8px_24px_rgba(249,115,22,0.10)]'
              }`}
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4 ${
                i % 2 === 0 ? 'bg-primary/10' : 'bg-accent/10'
              }`}>{a.icon}</div>
              <h4 className={`font-semibold mb-2 text-sm group-hover:transition-colors ${
                i % 2 === 0 ? 'text-foreground group-hover:text-primary' : 'text-foreground group-hover:text-accent'
              }`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{a.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* @section: why-us */
export function WhyUs() {
  const { ref, inView } = useFadeIn()
  return (
    <section id="why-us" className="py-24 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader badge="Why Partner With Us" title="Unparalleled Efficiency & Quality" sub="Choosing a recruitment partner is one of the most important strategic decisions. Here is why leading organizations choose Techonaut AI." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUs.map((w, i) => (
            <motion.div
              key={i}
              ref={ref}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-7 hover:border-primary/30 hover:shadow-[0_8px_30px_rgba(37,99,235,0.1)] transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl mb-4">{w.icon}</div>
              <h4 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{w.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
