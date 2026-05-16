import { Link } from 'react-router-dom'
import { ArrowRight, Award, TrendingUp, Users, Bell, BookOpen, Target } from 'lucide-react'
import Hero from '../components/Hero'
import NewsSection from '../components/NewsSection'

const PILLARS = [
  { icon: Award,     title: 'Academic Excellence', desc: '94.5% matric pass rate in 2025, with 451 subject distinctions across all grades.' },
  { icon: Target,    title: 'Sport & Athletics',   desc: 'Competitive teams in soccer, netball, athletics, and rugby at district and provincial level.' },
  { icon: BookOpen,  title: 'Arts & Culture',      desc: 'Award-winning choir, drama, debating and spelling bee programmes that celebrate our heritage.' },
  { icon: Users,     title: 'Community Values',    desc: 'A school rooted in respect, discipline, and pride — where every learner belongs.' },
]

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <NewsSection />

      {/* Notice banners */}
      <section className="section-pad" style={{ background: '#fff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                badge: 'Admissions 2027',
                title: 'General applications are open',
                body:  'Submit your general admission application for the 2027 academic year online.',
                to:    '/admissions',
                label: 'Apply now',
              },
              {
                badge: 'Boarding 2027',
                title: 'Boarding applications are open',
                body:  'Hostel accommodation applications for the 2027 year are now being accepted.',
                to:    '/boarding',
                label: 'Apply for boarding',
              },
            ].map(({ badge, title, body, to, label }) => (
              <div key={to} className="card flex gap-4 items-start"
                style={{ borderLeft: '4px solid #C8A400' }}>
                <div className="p-2.5 rounded-xl shrink-0" style={{ background: 'rgba(200,164,0,0.12)', color: '#166534' }}>
                  <Bell size={20} />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded-full mb-2 inline-block"
                    style={{ background: 'rgba(200,164,0,0.12)', color: '#92740a' }}>
                    {badge}
                  </span>
                  <h3 className="font-display font-bold text-lg mb-1" style={{ color: '#166534' }}>{title}</h3>
                  <p className="text-sm mb-3" style={{ color: '#4b5563' }}>{body}</p>
                  <Link to={to} className="text-sm font-semibold flex items-center gap-1" style={{ color: '#C8A400' }}>
                    {label} <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="section-pad" style={{ background: '#f0fdf4' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="gold-bar mx-auto" />
            <h2 className="section-title">Why Lupindo SSS?</h2>
            <p className="mt-3 max-w-xl mx-auto text-sm" style={{ color: '#4b5563' }}>
              A school where every learner is seen, valued, and challenged to reach their full potential.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card text-center">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: 'rgba(200,164,0,0.12)', color: '#166534' }}>
                  <Icon size={24} />
                </div>
                <h3 className="font-display font-bold mb-2" style={{ color: '#166534' }}>{title}</h3>
                <p className="text-sm" style={{ color: '#4b5563' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Motto CTA */}
      <section style={{ background: '#166534', borderTop: '4px solid #C8A400', borderBottom: '4px solid #C8A400' }}>
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <p className="font-display font-black text-3xl sm:text-4xl mb-4" style={{ color: '#C8A400' }}>
            "Amidst difficulties we rise."
          </p>
          <p className="text-base mb-8" style={{ color: 'rgba(200,164,0,0.7)' }}>
            Join the Lupindo SSS family and discover what you're truly capable of.
          </p>
          <Link to="/admissions" className="btn-primary text-base px-8 py-3">
            Start Your Application <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  )
}
