import { Zap, Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from 'lucide-react'

const footerLinks = {
  Platform: ['Features', 'Analytics Dashboard', 'Integrations', 'Security', 'Pricing'],
  Programs: ['AI & Machine Learning', 'Data Science', 'Leadership', 'Product Management', 'Finance'],
  Company: ['About Us', 'Careers', 'Blog', 'Press', 'Contact'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Refund Policy'],
}

export default function Footer() {
  return (
    <footer className="relative border-t border-[rgba(79,70,229,0.12)]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="font-display font-700 text-white text-lg">
                Accredian <span className="text-brand-500">Enterprise</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              India's most trusted enterprise learning platform. Upskill your workforce with
              programs from IITs, IIMs, and global universities.
            </p>
            {/* Contact details */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <Mail className="w-4 h-4 text-brand-500" />
                enterprise@accredian.com
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <Phone className="w-4 h-4 text-brand-500" />
                +91 98765 43210
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-brand-500" />
                Gurugram, Haryana, India
              </div>
            </div>
            {/* Social */}
            <div className="flex gap-3 mt-5">
              {[Linkedin, Twitter, Youtube].map((Icon, i) => (
                <button
                  key={i}
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-brand-500/50 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="md:col-span-1">
              <h4 className="font-display font-600 text-white text-sm mb-4">{heading}</h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-slate-400 text-sm hover:text-slate-200 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="divider mb-6" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Accredian Enterprise. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <span>Built with</span>
            <span className="text-red-400">♥</span>
            <span>in Gurugram, India</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
