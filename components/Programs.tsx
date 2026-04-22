'use client'

import { useState } from 'react'
import { ArrowRight, Clock, Users, Award } from 'lucide-react'

const categories = ['All', 'AI & Data', 'Leadership', 'Product', 'Finance', 'Management']

const programs = [
  {
    category: 'AI & Data',
    title: 'Advanced AI & Machine Learning',
    institution: 'IIT Roorkee',
    duration: '6 months',
    learners: '2,400+',
    level: 'Advanced',
    badge: '🔥 Most Popular',
    color: '#4F46E5',
  },
  {
    category: 'AI & Data',
    title: 'Data Science & Analytics',
    institution: 'IIT Kanpur',
    duration: '5 months',
    learners: '3,100+',
    level: 'Intermediate',
    badge: null,
    color: '#7c3aed',
  },
  {
    category: 'Leadership',
    title: 'Executive Leadership Program',
    institution: 'IIM Lucknow',
    duration: '8 months',
    learners: '1,200+',
    level: 'Senior',
    badge: "⭐ Editor's Choice",
    color: '#0891b2',
  },
  {
    category: 'Leadership',
    title: 'CXO Leadership Suite',
    institution: 'IIM Visakhapatnam',
    duration: '10 months',
    learners: '800+',
    level: 'Executive',
    badge: null,
    color: '#f97316',
  },
  {
    category: 'Product',
    title: 'Product Management Bootcamp',
    institution: 'SP Jain',
    duration: '4 months',
    learners: '1,800+',
    level: 'Intermediate',
    badge: null,
    color: '#10b981',
  },
  {
    category: 'Finance',
    title: 'Finance & Fintech Leadership',
    institution: 'XLRI Jamshedpur',
    duration: '6 months',
    learners: '950+',
    level: 'Advanced',
    badge: null,
    color: '#f59e0b',
  },
  {
    category: 'Management',
    title: 'Business Analytics & Strategy',
    institution: 'IIM Trichy',
    duration: '5 months',
    learners: '1,500+',
    level: 'Intermediate',
    badge: null,
    color: '#ec4899',
  },
  {
    category: 'AI & Data',
    title: 'Generative AI for Enterprise',
    institution: 'IIT Delhi',
    duration: '3 months',
    learners: '2,000+',
    level: 'All Levels',
    badge: '🆕 New',
    color: '#8b5cf6',
  },
]

export default function Programs() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? programs : programs.filter((p) => p.category === active)

  return (
    <section id="programs" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="section-label">
            <Award className="w-3 h-3" />
            Program Catalog
          </div>
          <h2 className="font-display font-700 text-4xl md:text-5xl text-white leading-tight mb-4">
            Courses Built for{' '}
            <span className="gradient-text">Real Outcomes</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Co-designed with India's most prestigious institutions, each program
            is structured for immediate workplace impact.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold font-display transition-all duration-200 ${
                active === cat
                  ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/30'
                  : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Programs grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((prog) => (
            <div
              key={prog.title}
              className="glass-card rounded-2xl p-6 flex flex-col cursor-pointer group relative overflow-hidden"
            >
              {/* Top glow */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
                style={{ background: `linear-gradient(90deg, ${prog.color}, transparent)` }}
              />

              {/* Badge */}
              {prog.badge && (
                <div className="text-xs font-semibold text-white bg-white/10 rounded-full px-3 py-1 mb-3 w-fit">
                  {prog.badge}
                </div>
              )}

              {/* Institution */}
              <div
                className="text-xs font-700 font-display uppercase tracking-widest mb-2"
                style={{ color: prog.color }}
              >
                {prog.institution}
              </div>

              {/* Title */}
              <h3 className="font-display font-600 text-white text-base leading-snug mb-4 flex-1">
                {prog.title}
              </h3>

              {/* Meta */}
              <div className="flex items-center gap-4 text-slate-400 text-sm mb-5">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {prog.duration}
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" />
                  {prog.learners}
                </div>
              </div>

              {/* Level + CTA */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500 bg-white/5 px-3 py-1 rounded-full">
                  {prog.level}
                </span>
                <button
                  className="flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all"
                  style={{ color: prog.color }}
                >
                  Explore
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-10">
          <button className="btn-outline">
            View All 40+ Programs
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
