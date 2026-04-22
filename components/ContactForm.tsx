'use client'

import { useState } from 'react'
import { Send, CheckCircle, Loader2 } from 'lucide-react'

type FormData = {
  name: string
  email: string
  company: string
  phone: string
  teamSize: string
  interest: string
  message: string
}

const initialForm: FormData = {
  name: '',
  email: '',
  company: '',
  phone: '',
  teamSize: '',
  interest: '',
  message: '',
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.company) {
      setErrorMsg('Please fill in Name, Email, and Company.')
      return
    }
    setErrorMsg('')
    setStatus('loading')
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('API error')
      setStatus('success')
      setForm(initialForm)
    } catch {
      setStatus('error')
      setErrorMsg('Something went wrong. Please try again.')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-500/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left copy */}
          <div>
            <div className="section-label">
              <span className="w-2 h-2 rounded-full bg-green-400 inline-block animate-pulse" />
              Get Started Today
            </div>
            <h2 className="font-display font-700 text-4xl md:text-5xl text-white leading-tight mb-5">
              Book a Free{' '}
              <span className="gradient-text">Enterprise Demo</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Talk to our enterprise learning consultants. We'll walk you through a live demo,
              assess your team's needs, and propose a custom program—no commitment required.
            </p>

            {/* Perks */}
            <div className="flex flex-col gap-4">
              {[
                '30-minute live product walkthrough',
                'Custom curriculum recommendation',
                'ROI projection for your org size',
                'Dedicated account manager assigned',
              ].map((perk) => (
                <div key={perk} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">{perk}</span>
                </div>
              ))}
            </div>

            {/* Social proof */}
            <div className="mt-10 p-5 glass-card rounded-xl">
              <div className="text-slate-400 text-sm mb-1">Average response time</div>
              <div className="font-display font-700 text-white text-2xl">Under 4 hours</div>
              <div className="text-slate-500 text-xs mt-1">Mon–Fri, 9 AM–7 PM IST</div>
            </div>
          </div>

          {/* Form */}
          <div className="glass-card rounded-2xl p-8">
            {status === 'success' ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="font-display font-700 text-white text-2xl mb-2">You're in!</h3>
                <p className="text-slate-400">
                  We've received your request. Our enterprise consultant will reach out within 4 hours.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <h3 className="font-display font-700 text-white text-xl mb-2">Tell us about your team</h3>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-slate-400 text-sm mb-1 block">Full Name *</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Priya Sharma"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 text-sm mb-1 block">Work Email *</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="priya@company.com"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-slate-400 text-sm mb-1 block">Company *</label>
                    <input
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Acme Corp"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 text-sm mb-1 block">Phone</label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-slate-400 text-sm mb-1 block">Team Size</label>
                    <select name="teamSize" value={form.teamSize} onChange={handleChange} className="form-input">
                      <option value="">Select range</option>
                      <option>10–50</option>
                      <option>51–200</option>
                      <option>201–500</option>
                      <option>500+</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-slate-400 text-sm mb-1 block">Area of Interest</label>
                    <select name="interest" value={form.interest} onChange={handleChange} className="form-input">
                      <option value="">Select topic</option>
                      <option>AI & Data Science</option>
                      <option>Leadership</option>
                      <option>Product Management</option>
                      <option>Finance & Fintech</option>
                      <option>General Management</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-slate-400 text-sm mb-1 block">Message (optional)</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Tell us about your learning goals..."
                    className="form-input resize-none"
                  />
                </div>

                {errorMsg && (
                  <div className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3">
                    {errorMsg}
                  </div>
                )}

                <button
                  onClick={handleSubmit}
                  disabled={status === 'loading'}
                  className="btn-primary w-full justify-center mt-2 disabled:opacity-60"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Request a Demo
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-slate-500 text-xs text-center">
                  No spam. No commitment. We respect your privacy.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
