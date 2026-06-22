import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'

/* @section: how-it-works */
const steps = [
  {
    num: 1,
    title: 'Share Your Needs',
    desc: 'Tell us about the role, culture, and growth plans. Our AI builds a precision job profile in minutes.',
    detail: 'Job Description · Culture Fit · Budget · Timeline',
    color: 'primary',
    img: 'https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    imgAlt: 'Blue plexus network — share your needs',
  },
  {
    num: 2,
    title: 'AI Sources & Screens',
    desc: 'Our platform scans thousands of profiles across talent signals — skills, trajectory, culture, and compensation.',
    detail: 'AI Matching · Skills Analysis · Culture Fit Score',
    color: 'accent',
    img: 'https://skyagent-artifacts.skywork.ai/router/agent/2026-06-22/prod_agent_c56c4711-609d-470f-b355-3c1db7b9cd64/ai%20souce%20icon%202L3uoqeTT3N0jJ5vTjArIHyt17nt_JKrN8B9dRWyXdqcyMV_EZwlTtr_qI_YnB45atUbeniSu3qUpeYjlK8xUBGe0LAEv-k7rt-QdHZJ17woMfuQX1NiRXGPpVOYUtdsQlcFhOYNYYG420Jr-FW2UdRnzgGDOwN8R6GwPSvaq7agzRR4h6hi_124d435af20a4dbb8a7ff4edf85745ed.jpg',
    imgAlt: 'AI sourcing and screening',
  },
  {
    num: 3,
    title: 'Human-Verified Shortlist',
    desc: 'Expert recruiters review every AI-selected candidate. You receive only the best 3–5 profiles within 48 hours.',
    detail: '48-Hour Delivery · Quality Guarantee · Interview Ready',
    color: 'primary',
    img: 'https://skyagent-artifacts.skywork.ai/router/agent/2026-06-22/prod_agent_c56c4711-609d-470f-b355-3c1db7b9cd64/human%20verfies%20icon-BusIm3GJ3RxC_6PSmTm0wYgBqp3GFAt4jPZEYmo3dVjIf_qjGcXF_ZE-t8RRFSqT8ajTcYokw469yNBrBSwsjYTQ5lWty8m6Ec58XJT0PGOS-21C8JrnhVGsFsqAeu0nXckxgyfXe4tf-BXJJgUJG9SQuNTqef0CAww9BHbuYGZJVy_4e41b25f055f4501abd6bee247585804.jpg',
    imgAlt: 'Human-verified shortlist',
  },
  {
    num: 4,
    title: 'Hire & We Stay',
    desc: "We manage the offer, joining process, and post-hire support. We're your long-term talent partner, not a one-off agency.",
    detail: 'Offer Management · Onboarding Support · Long-term Partner',
    color: 'accent',
    img: 'https://skyagent-artifacts.skywork.ai/router/agent/2026-06-22/prod_agent_c56c4711-609d-470f-b355-3c1db7b9cd64/hire%20and%20we%20stayb7sU4QiAVXFJUO5_6Lqa8L0iO4BAWqx3vHiY49lCKiRv6TZQuUMTTyOrIVWoZfWASyAcVzNTsWJGBz6eEnj1ssGOBtNl47Fvf_Zh9xZE6IBU-lJ_z2WTlB8d6j0gW8P4eetuHfoNwruyj1uAnRSKwvfXolL-76gVW_VH_hngMgUSFC8KWgq_08500c96a4c74c4baad11b83455c5f95.jpg',
    imgAlt: 'Hire and we stay — long-term partner',
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="how-it-works" className="py-24 bg-[hsl(240_10%_98%)] relative overflow-hidden">
      {/* BG decoration */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(124,58,237,0.05) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            From Brief to Hire in{' '}
            <span className="text-primary">4 Simple Steps</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our AI-powered process is fast, transparent, and built around your exact requirements.
          </p>
        </motion.div>

        {/* Steps grid — photo cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.12 }}
              className="group bg-white rounded-2xl overflow-hidden border border-border/70 hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(124,58,237,0.12)] transition-all duration-300">

              {/* Photo header */}
              <div className="relative h-44 overflow-hidden">
                <img src={s.img} alt={s.imgAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                {/* Gradient overlay */}
                <div className="absolute inset-0"
                  style={{ background: s.color === 'primary'
                    ? 'linear-gradient(to bottom, transparent 40%, rgba(124,58,237,0.55) 100%)'
                    : 'linear-gradient(to bottom, transparent 40%, rgba(249,115,22,0.50) 100%)' }} />
                {/* Step number badge */}
                <div className={`absolute top-3 left-3 w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm text-white shadow-lg ${
                  s.color === 'primary' ? 'bg-primary' : 'bg-accent'
                }`}>{s.num}</div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className={`font-bold text-foreground text-base mb-2 group-hover:transition-colors ${
                  s.color === 'primary' ? 'group-hover:text-primary' : 'group-hover:text-accent'
                }`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                <div className={`inline-flex px-3 py-1.5 rounded-full text-xs font-medium border ${
                  s.color === 'primary'
                    ? 'bg-primary/8 border-primary/20 text-primary'
                    : 'bg-accent/8 border-accent/20 text-accent'
                }`}>
                  {s.detail}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop connecting arrows (decorative) */}
        <div className="hidden lg:flex items-center justify-center gap-2 mt-6 mb-2">
          {[0, 1, 2].map(i => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-16 h-px border-t-2 border-dashed border-border" />
              <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${
                i % 2 === 0 ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'
              }`}>→</div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.65 }} className="text-center mt-12">
          <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-white border border-primary/20 shadow-[0_4px_24px_rgba(124,58,237,0.08)]">
            <div className="flex -space-x-2">
              {['🧑‍💻','👩‍💼','🧑‍🔬','👩‍🏭'].map((e, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-primary/15 border-2 border-white flex items-center justify-center text-sm">{e}</div>
              ))}
            </div>
            <p className="text-sm text-foreground">
              <span className="font-bold text-primary">Hiring made simple.</span>{' '}
              <span className="text-muted-foreground">Start your first search in under 10 minutes.</span>
            </p>
            <a href="mailto:info@techonautai.com"
              className="px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-xl hover:bg-primary/90 transition-all shadow-[0_0_16px_rgba(124,58,237,0.30)] whitespace-nowrap">
              Get Started →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
