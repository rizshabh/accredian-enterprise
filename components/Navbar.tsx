'use client'

import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, Zap } from 'lucide-react'

const navItems = [
  { label: 'Platform', anchor: '#platform' },
  { label: 'Programs', anchor: '#programs' },
  { label: 'Partners', anchor: '#partners' },
  { label: 'Testimonials', anchor: '#testimonials' },
  { label: 'Contact', anchor: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (anchor: string) => {
    setMenuOpen(false)
    document.querySelector(anchor)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0d1a]/90 backdrop-blur-xl border-b border-[rgba(79,70,229,0.15)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <span className="font-display font-700 text-white text-lg tracking-tight">
            Accredian <span className="text-brand-500">Enterprise</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button key={item.label} onClick={() => scrollTo(item.anchor)} className="nav-link">
              {item.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button className="btn-outline py-2 px-5 text-sm">Log in</button>
          <button
            className="btn-primary py-2 px-5 text-sm"
            onClick={() => scrollTo('#contact')}
          >
            Get a Demo
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-300 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0d1a]/95 backdrop-blur-xl border-t border-[rgba(79,70,229,0.15)] px-6 py-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.anchor)}
              className="text-left text-slate-300 font-medium text-base py-2 border-b border-[rgba(99,102,241,0.1)]"
            >
              {item.label}
            </button>
          ))}
          <button
            className="btn-primary w-full justify-center mt-2"
            onClick={() => scrollTo('#contact')}
          >
            Get a Demo
          </button>
        </div>
      )}
    </nav>
  )
}
