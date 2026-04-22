'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 500, suffix: '+', label: 'Expert Mentors', desc: 'AI/ML, Data Science, Product, Leadership' },
  { value: 94, suffix: '%', label: 'Completion Rate', desc: 'Industry-leading learner engagement' },
  { value: 40, suffix: '%', label: 'Avg ROI Boost', desc: 'Measurable improvement in team output' },
  { value: 300, suffix: '+', label: 'Partner Institutions', desc: 'IITs, IIMs, global universities' },
]

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1800
          const steps = 60
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function Stats() {
  return (
    <section className="py-20 relative">
      <div className="divider mb-0" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`stat-card glass-card p-8 text-center ${
                i < stats.length - 1 ? 'md:border-r border-[rgba(79,70,229,0.15)]' : ''
              }`}
            >
              <div className="font-display font-800 text-4xl md:text-5xl gradient-text mb-2">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="font-display font-600 text-white text-base mb-1">{stat.label}</div>
              <div className="text-slate-500 text-sm">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="divider mt-0" />
    </section>
  )
}
