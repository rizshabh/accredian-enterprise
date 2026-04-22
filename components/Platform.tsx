'use client'

import { useEffect, useRef } from 'react'
import {
  BarChart3, Users, BookOpen, Trophy, Settings, Shield, Cpu, Globe
} from 'lucide-react'

const features = [
  {
    icon: BookOpen,
    title: 'IIT & IIM Certified Curriculum',
    desc: 'Programs co-designed with IITs, IIMs, and global universities. Every course is rigorously structured for real-world applicability.',
    color: '#4F46E5',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics Dashboard',
    desc: 'Track learner progress, engagement metrics, and ROI reporting—all from a unified command center accessible to L&D teams.',
    color: '#7c3aed',
  },
  {
    icon: Users,
    title: '1:1 Live Mentorship',
    desc: 'Direct sessions with 500+ industry practitioners across AI/ML, Data Science, Product Management, and Leadership roles.',
    color: '#0891b2',
  },
  {
    icon: Trophy,
    title: '94%+ Completion Rates',
    desc: 'Structured cohorts drive collaboration, accountability, and peer learning—delivering completion rates that set the industry benchmark.',
    color: '#f97316',
  },
  {
    icon: Settings,
    title: 'Fully Customizable Programs',
    desc: "Tailor every program to your organization's skill gaps, industry context, and strategic objectives. No cookie-cutter solutions.",
    color: '#10b981',
  },
  {
    icon: Shield,
    title: 'Globally Recognized Credentials',
    desc: 'Verifiable, shareable certifications from partner institutions that are career-defining and trusted by top employers worldwide.',
    color: '#f59e0b',
  },
  {
    icon: Cpu,
    title: 'Adaptive Learning Engine',
    desc: 'AI-powered content delivery surfaces the right material at the right time, maximizing engagement and long-term knowledge retention.',
    color: '#ec4899',
  },
  {
    icon: Globe,
    title: 'Multi-Geography Deployment',
    desc: 'Deploy simultaneously across teams, time zones, and geographies. Built for global enterprise at any scale.',
    color: '#8b5cf6',
  },
]

export default function Platform() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = sectionRef.current?.querySelectorAll('.feature-card')
            cards?.forEach((card, i) => {
              setTimeout(() => {
                card.classList.add('aos-visible')
                card.classList.remove('aos-hidden')
              }, i * 80)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="platform" ref={sectionRef} className="py-24 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-brand-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="section-label">
            <span className="w-2 h-2 rounded-full bg-brand-500 inline-block animate-pulse" />
            Platform Capabilities
          </div>
          <h2 className="font-display font-700 text-4xl md:text-5xl text-white leading-tight mb-4">
            The Operating System for{' '}
            <span className="gradient-text">Ambitious L&D Teams</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From curriculum design to outcomes analytics—every tool you need to build
            a high-performance learning organization.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feat) => {
            const Icon = feat.icon
            return (
              <div key={feat.title} className="feature-card aos-hidden glass-card rounded-2xl p-6 cursor-default">
                <div
                  className="feature-icon"
                  style={{ background: `${feat.color}18`, borderColor: `${feat.color}30` }}
                >
                  <Icon className="w-5 h-5" style={{ color: feat.color }} />
                </div>
                <h3 className="font-display font-600 text-white text-base mb-2 leading-snug">
                  {feat.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
