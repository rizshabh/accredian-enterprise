'use client'

import { Star } from 'lucide-react'

const testimonials = [
  {
    quote: 'Accredian Enterprise transformed how we think about talent development. Within 6 months, our data engineering team\'s velocity improved by 40%. The ROI is undeniable.',
    name: 'Priya Sharma',
    role: 'CHRO, Leading IT Services Co.',
    initials: 'PS',
    color: '#4F46E5',
    stars: 5,
  },
  {
    quote: 'The combination of IIT-quality curriculum and live mentorship is unlike anything else in the market. Our engineers can now lead ML projects independently.',
    name: 'Rahul Mehta',
    role: 'VP Engineering, Fintech Startup',
    initials: 'RM',
    color: '#7c3aed',
    stars: 5,
  },
  {
    quote: 'We onboarded 300 managers across three geographies simultaneously. The enterprise dashboard made tracking trivially easy. Completion rates hit 96%—unprecedented for us.',
    name: 'Ananya Iyer',
    role: 'L&D Director, FMCG Enterprise',
    initials: 'AI',
    color: '#0891b2',
    stars: 5,
  },
  {
    quote: 'The customization is real—not a sales pitch. They rebuilt the entire product management track to match our engineering culture. Feedback from managers has been overwhelmingly positive.',
    name: 'Vikram Nair',
    role: 'Head of Talent, SaaS Unicorn',
    initials: 'VN',
    color: '#f97316',
    stars: 5,
  },
  {
    quote: 'Our C-suite went through the CXO Leadership Suite and came back with a shared strategic vocabulary. The IIM faculty quality exceeded our expectations completely.',
    name: 'Deepa Krishnan',
    role: 'CEO, Mid-Market Manufacturing',
    initials: 'DK',
    color: '#10b981',
    stars: 5,
  },
  {
    quote: 'Monthly reviews, nudges, and adaptive recommendations kept our distributed team engaged well past the halfway mark. That\'s a first for any training we\'ve run.',
    name: 'Sanjay Patel',
    role: 'Head of HR, Logistics Corp',
    initials: 'SP',
    color: '#ec4899',
    stars: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-brand-500/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="section-label">
            <Star className="w-3.5 h-3.5 fill-current text-yellow-400" />
            Customer Stories
          </div>
          <h2 className="font-display font-700 text-4xl md:text-5xl text-white leading-tight mb-4">
            Loved by L&D Leaders{' '}
            <span className="gradient-text">Across India</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Hear from the CHROs and L&D leaders who transformed their organizations with Accredian Enterprise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="testimonial-card glass-card rounded-2xl p-7 flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-6 italic">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center font-display font-700 text-sm text-white flex-shrink-0"
                  style={{ background: `${t.color}30`, border: `1px solid ${t.color}40` }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-display font-600 text-white text-sm">{t.name}</div>
                  <div className="text-slate-500 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
