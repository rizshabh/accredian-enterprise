'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight, Play, Star, TrendingUp } from 'lucide-react'

const floatingBadges = [
  { icon: '🎓', label: 'IIT Certified', delay: '0s', pos: 'top-24 left-[5%]' },
  { icon: '📈', label: '40% ROI boost', delay: '1s', pos: 'top-36 right-[5%]' },
  { icon: '⚡', label: '94% Completion', delay: '2s', pos: 'bottom-32 left-[8%]' },
  { icon: '🌍', label: '500+ Mentors', delay: '1.5s', pos: 'bottom-20 right-[8%]' },
]

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const elements = heroRef.current?.querySelectorAll('.reveal')
    elements?.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('aos-visible')
        el.classList.remove('aos-hidden')
      }, i * 150)
    })
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(79,70,229,0.25) 0%, transparent 60%), #0a0d1a',
      }}
    >
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-accent-500/10 blur-[100px] pointer-events-none" />

      {/* Floating badges */}
      {floatingBadges.map((badge) => (
        <div
          key={badge.label}
          className={`absolute hidden lg:flex items-center gap-2 glass-card px-4 py-2.5 rounded-xl animate-float ${badge.pos}`}
          style={{ animationDelay: badge.delay }}
        >
          <span className="text-xl">{badge.icon}</span>
          <span className="text-sm font-semibold text-slate-200 font-body">{badge.label}</span>
        </div>
      ))}

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="reveal aos-hidden inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/25 text-indigo-300 px-4 py-2 rounded-full text-sm font-semibold font-display mb-8">
          <Star className="w-4 h-4 fill-current text-yellow-400" />
          India's #1 Enterprise Learning Platform
          <TrendingUp className="w-4 h-4" />
        </div>

        {/* Headline */}
        <h1 className="reveal aos-hidden font-display font-800 text-5xl md:text-7xl text-white leading-[1.1] tracking-tight mb-6">
          Upskill Your Workforce{' '}
          <span className="gradient-text">at Scale</span>
        </h1>

        {/* Subheadline */}
        <p className="reveal aos-hidden font-body text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10">
          Partner with IITs, IIMs, and global universities to deliver programs
          that build real capability—with live mentorship, cohort learning,
          and measurable ROI for every team.
        </p>

        {/* CTA row */}
        <div className="reveal aos-hidden flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            className="btn-primary text-base animate-glow-pulse"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get a Free Demo
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="btn-outline text-base">
            <Play className="w-4 h-4" />
            Watch Overview
          </button>
        </div>

        {/* Trust bar */}
        <div className="reveal aos-hidden mt-16">
          <p className="text-slate-500 text-sm font-body mb-6 uppercase tracking-widest">
            Trusted by L&D teams at leading organizations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-50">
            {['TCS', 'Infosys', 'Wipro', 'HCL', 'HDFC', 'Zepto', 'Meesho'].map((co) => (
              <span key={co} className="font-display font-700 text-slate-300 text-lg tracking-wide">
                {co}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0d1a] to-transparent pointer-events-none" />
    </section>
  )
}
