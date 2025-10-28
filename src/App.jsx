import React from 'react';
import { Hospital, Menu, Phone, Shield, Stethoscope } from 'lucide-react';
import HeroCover from './components/HeroCover';
import StatsGrid from './components/StatsGrid';
import DoctorsSection from './components/DoctorsSection';
import AppointmentForm from './components/AppointmentForm';

function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="min-h-screen scroll-smooth bg-white text-slate-900">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#home" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-600 text-white">
              <Hospital className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <div className="text-base font-semibold">VitalPulse</div>
              <div className="text-[11px] text-slate-500">Pune, India</div>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 sm:flex">
            <a href="#doctors" className="hover:text-sky-700">Doctors</a>
            <a href="#appointments" className="hover:text-sky-700">Appointments</a>
            <a href="#contact" className="hover:text-sky-700">Contact</a>
            <a href="#admin" className="hover:text-sky-700">Admin</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden items-center gap-2 rounded-lg bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-700 sm:inline-flex">
              <Phone className="h-4 w-4" /> Emergency 108
            </a>
            <button className="inline-flex items-center rounded-lg border border-slate-300 p-2 text-slate-700 sm:hidden" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
        {open && (
          <div className="sm:hidden">
            <div className="mx-3 mb-3 grid gap-2 rounded-lg border border-slate-200 bg-white p-3 text-sm">
              <a href="#doctors" className="rounded px-2 py-1 hover:bg-slate-50">Doctors</a>
              <a href="#appointments" className="rounded px-2 py-1 hover:bg-slate-50">Appointments</a>
              <a href="#contact" className="rounded px-2 py-1 hover:bg-slate-50">Contact</a>
              <a href="#admin" className="rounded px-2 py-1 hover:bg-slate-50">Admin</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero with Spline cover */}
      <HeroCover />

      {/* Stats */}
      <StatsGrid />

      {/* Doctors */}
      <DoctorsSection />

      {/* Appointment Form */}
      <AppointmentForm />

      {/* Contact + Admin CTA */}
      <section id="contact" className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-3xl font-semibold">Contact Us</h3>
              <p className="mt-2 text-slate-300">For inquiries and support, reach out to our helpdesk or use the live chat for real-time assistance.</p>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-slate-800 p-4 ring-1 ring-white/10">
                  <div className="text-sm text-slate-400">Emergency Helpline</div>
                  <div className="mt-1 text-xl font-semibold text-white">108</div>
                </div>
                <div className="rounded-xl bg-slate-800 p-4 ring-1 ring-white/10">
                  <div className="text-sm text-slate-400">Phone</div>
                  <div className="mt-1 text-xl font-semibold text-white">+91 20 1234 5678</div>
                </div>
                <div className="rounded-xl bg-slate-800 p-4 ring-1 ring-white/10">
                  <div className="text-sm text-slate-400">Email</div>
                  <div className="mt-1 text-xl font-semibold text-white">support@vitalpulse.in</div>
                </div>
                <div className="rounded-xl bg-slate-800 p-4 ring-1 ring-white/10">
                  <div className="text-sm text-slate-400">Address</div>
                  <div className="mt-1 text-xl font-semibold text-white">Shivajinagar, Pune, Maharashtra</div>
                </div>
              </div>

              <div className="mt-6 rounded-xl bg-slate-800 p-4 ring-1 ring-white/10">
                <div className="text-sm text-slate-400">Live Chat</div>
                <p className="mt-1 text-slate-300">Start a conversation with our support team. (Interactive chat coming soon.)</p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <iframe
                title="VitalPulse Pune Location"
                className="h-72 w-full rounded-xl border-0 md:h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.323485080581!2d73.842!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c06d50a8!2sShivajinagar%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000"
              />

              <form className="grid grid-cols-1 gap-3 rounded-xl bg-slate-800 p-4 ring-1 ring-white/10">
                <input className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20" placeholder="Your Name" />
                <input className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20" placeholder="Email" />
                <textarea rows="3" className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20" placeholder="Message" />
                <button className="inline-flex items-center justify-center rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-700">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Admin CTA */}
      <section id="admin" className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:grid-cols-[1fr_auto]">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900">Admin Dashboard</h3>
              <p className="mt-1 text-slate-600">Secure login for staff to manage appointments, patient records, and real-time hospital statistics.</p>
              <div className="mt-3 inline-flex items-center gap-2 rounded-md bg-sky-50 px-3 py-1 text-sky-700 ring-1 ring-sky-100">
                <Shield className="h-4 w-4" /> Hospital-grade data privacy
              </div>
            </div>
            <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-black">
              <Stethoscope className="h-4 w-4" /> Staff Login
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white py-6 text-sm text-slate-600">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <p>© {new Date().getFullYear()} VitalPulse. All rights reserved.</p>
          <p>Made for modern, trustworthy healthcare.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
