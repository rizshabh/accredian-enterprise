'use client'

import { GraduationCap } from 'lucide-react'

const institutions = [
  { name: 'IIT Roorkee', type: 'Technology' },
  { name: 'IIT Kanpur', type: 'Technology' },
  { name: 'IIT Delhi', type: 'Technology' },
  { name: 'IIM Lucknow', type: 'Management' },
  { name: 'IIM Visakhapatnam', type: 'Management' },
  { name: 'IIM Trichy', type: 'Management' },
  { name: 'XLRI Jamshedpur', type: 'Business' },
  { name: 'SP Jain', type: 'Business' },
]

const techPartners = ['Google', 'Microsoft', 'AWS', 'IBM', 'Oracle', 'NVIDIA', 'Salesforce', 'Meta']

export default function Partners() {
  return (
    <section id="partners" className="py-24 relative overflow-hidden">
      {/* bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-500/3 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="section-label">
            <GraduationCap className="w-3.5 h-3.5" />
            Academic Partners
          </div>
          <h2 className="font-display font-700 text-4xl md:text-5xl text-white leading-tight mb-4">
            Backed by India's{' '}
            <span className="gradient-text">Most Prestigious Institutions</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Our programs carry the weight of India's top academic brands,
            giving your workforce credentials that open doors.
          </p>
        </div>

        {/* Institution cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {institutions.map((inst) => (
            <div
              key={inst.name}
              className="glass-card rounded-2xl p-6 text-center group cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center mx-auto mb-3">
                <GraduationCap className="w-6 h-6 text-indigo-400" />
              </div>
              <div className="font-display font-700 text-white text-sm mb-1">{inst.name}</div>
              <div className="text-slate-500 text-xs">{inst.type}</div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="divider mb-12" />

        {/* Tech partners */}
        <div className="text-center">
          <p className="text-slate-500 text-sm uppercase tracking-widest mb-8">
            Technology Partners
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {techPartners.map((tp) => (
              <span
                key={tp}
                className="font-display font-700 text-slate-400 text-lg hover:text-slate-200 transition-colors cursor-default"
              >
                {tp}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
