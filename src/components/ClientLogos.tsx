import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'

/* @section: client-logos */
const BS_ENVITECH_LOGO = 'https://skyagent-artifacts.skywork.ai/router/agent/2026-06-22/prod_agent_c56c4711-609d-470f-b355-3c1db7b9cd64/OIP_56d26e4bbf3347f9ba078f624dcf73db.webp'

const clients: { name: string; logo: string | null; isReal: boolean; location?: string }[] = [
  {
    name: 'BS Envitech Pvt Ltd',
    logo: BS_ENVITECH_LOGO,
    isReal: true,
    location: 'Hyderabad',
  },
  { name: 'Your Company Here', logo: null, isReal: false },
  { name: 'Your Company Here', logo: null, isReal: false },
  { name: 'Your Company Here', logo: null, isReal: false },
]

export default function ClientLogos() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-14 bg-white border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Label */}
        <motion.div ref={ref} initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }} className="text-center mb-10">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-[0.12em]">
            Trusted by Growing Companies
          </p>
        </motion.div>

        {/* Logo strip */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
          {clients.map((c, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`flex items-center justify-center rounded-2xl border transition-all ${
                c.isReal
                  ? 'bg-white border-border/70 hover:border-primary/30 hover:shadow-[0_4px_20px_rgba(124,58,237,0.10)] hover:-translate-y-0.5 cursor-default px-6 py-4 min-w-[160px] h-20'
                  : 'bg-[hsl(240_10%_97%)] border-dashed border-border/50 px-6 py-4 min-w-[160px] h-20'
              }`}>
              {c.isReal && c.logo ? (
                <div className="flex flex-col items-center gap-1">
                  <img src={c.logo} alt={c.name}
                    className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 max-w-[120px]" />
                  <span className="text-[10px] text-muted-foreground font-medium">{c.location}</span>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-1.5">
                  <div className="w-8 h-8 rounded-full bg-border/60 flex items-center justify-center">
                    <span className="text-muted-foreground/40 text-lg">+</span>
                  </div>
                  <span className="text-xs text-muted-foreground/50 font-medium">{c.name}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-xs text-muted-foreground/60 mt-8">
          More client stories added as partnerships grow — verified only.
        </motion.p>
      </div>
    </section>
  )
}
