'use client'

const steps = [
  {
    step: '01',
    title: 'Discovery & Needs Analysis',
    desc: 'We map your team\'s skill gaps through structured assessments and stakeholder interviews to define the exact learning outcomes you need.',
    icon: '🔍',
  },
  {
    step: '02',
    title: 'Custom Program Design',
    desc: 'Our curriculum experts co-design a tailored learning path with faculty from IITs/IIMs, built around your industry context and goals.',
    icon: '🎯',
  },
  {
    step: '03',
    title: 'Live Cohort Launch',
    desc: 'Cohorts go live with live instructor sessions, 1:1 mentorship, peer collaboration, and capstone projects tied to your business challenges.',
    icon: '🚀',
  },
  {
    step: '04',
    title: 'Analytics & ROI Reporting',
    desc: 'Track completion, engagement, skill acquisition, and business impact through your enterprise dashboard. Quarterly business reviews included.',
    icon: '📊',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="section-label">
            <span className="w-2 h-2 rounded-full bg-accent-500 inline-block" />
            How It Works
          </div>
          <h2 className="font-display font-700 text-4xl md:text-5xl text-white leading-tight mb-4">
            From Kickoff to{' '}
            <span className="gradient-text">Measurable Impact</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            A proven four-step process refined across 300+ enterprise deployments.
          </p>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-brand-500/50 via-accent-500/50 to-brand-500/50" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={step.step} className="relative text-center group">
                {/* Step circle */}
                <div className="relative z-10 w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center text-3xl"
                  style={{
                    background: `linear-gradient(135deg, rgba(79,70,229,0.2), rgba(99,102,241,0.1))`,
                    border: '1px solid rgba(79,70,229,0.3)',
                    boxShadow: '0 0 30px rgba(79,70,229,0.15)',
                  }}
                >
                  {step.icon}
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-brand-500 text-white text-xs font-display font-700 flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>

                <h3 className="font-display font-600 text-white text-lg mb-3">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
