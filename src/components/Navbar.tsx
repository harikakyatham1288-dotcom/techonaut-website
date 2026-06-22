import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

/* @section: navbar */
const LOGO_URL = 'https://skyagent-artifacts.skywork.ai/router/agent/2026-06-20/prod_agent_c56c4711-609d-470f-b355-3c1db7b9cd64/logo_ad24bbcf7066483db5632683e54fda2a.jpeg'

const links = [
  { label: 'About Us', href: '#about' },
  { label: 'Industries', href: '#industries' },
  { label: 'Services', href: '#services' },
  { label: 'Roles', href: '#roles' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact Us', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setOpen(false)
    const id = href.replace('#', '')
    if (!id) { window.scrollTo({ top: 0, behavior: 'smooth' }); return }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-background/92 border-b border-border/60 shadow-[0_4px_24px_rgba(0,0,0,0.3)]' : 'bg-transparent'
      }`}
      style={{ backdropFilter: scrolled ? 'blur(20px)' : 'none' }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between py-3">
        {/* Logo */}
        <a href="#" onClick={(e) => scrollTo(e, '')} className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 rounded-xl bg-primary/20 blur-md group-hover:blur-lg transition-all" />
            <img
              src={LOGO_URL}
              alt="Techonaut AI Talent"
              className="relative h-10 w-auto rounded-xl object-contain border border-white/10 shadow-[0_0_16px_rgba(37,99,235,0.4)] group-hover:shadow-[0_0_28px_rgba(37,99,235,0.65)] transition-all"
            />
          </div>
          <div className="hidden sm:block">
            <span className="text-foreground font-bold text-base tracking-tight leading-none block">
              Techonaut<span className="text-primary">AI</span>
            </span>
            <span className="text-muted-foreground text-[10px] tracking-widest uppercase">Talent Pvt Ltd</span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-0.5">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={(e) => scrollTo(e, l.href)}
              className={`px-3 py-2 text-sm font-medium transition-all duration-200 rounded-lg ${
                l.label === 'Contact Us'
                  ? 'text-accent hover:text-accent/80 hover:bg-accent/10'
                  : 'text-muted-foreground hover:text-foreground hover:bg-secondary/80'
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, '#contact')}
            className="px-5 py-2.5 text-sm font-semibold bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.65)] hover:-translate-y-0.5 active:translate-y-0"
          >
            Get Started →
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-b border-border/60"
            style={{ background: 'rgba(10,17,40,0.97)', backdropFilter: 'blur(20px)' }}
          >
            <div className="px-4 py-5 flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={(e) => scrollTo(e, l.href)}
                  className={`px-4 py-3 text-sm font-medium rounded-xl transition-all ${
                    l.label === 'Contact Us'
                      ? 'text-accent hover:bg-accent/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary/60'
                  }`}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="mailto:info@techonautai.com"
                className="mt-3 px-4 py-3 text-sm font-semibold bg-primary text-primary-foreground rounded-xl text-center shadow-[0_0_20px_rgba(37,99,235,0.3)]"
              >
                Get Started →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
