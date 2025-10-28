import React from 'react';
import Spline from '@splinetool/react-spline';
import { Calendar, Phone } from 'lucide-react';

const HeroCover = () => {
  return (
    <section id="home" className="relative h-[80vh] md:h-[85vh] w-full overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/60 to-slate-900/10" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl text-white">
          <div className="mb-4 inline-flex items-center rounded-full bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-300 ring-1 ring-inset ring-sky-400/30">
            Pune, India • 24/7 Emergency Care
          </div>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            VitalPulse
            <span className="block text-sky-300">Redefining Healthcare Management</span>
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-200 md:text-lg">
            VitalPulse is dedicated to redefining healthcare management through digital innovation. We provide
            seamless, technology-driven medical services that ensure timely care, transparency, and trust.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#appointments" className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400">
              <Calendar className="h-4 w-4" /> Book Appointment
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-sky-300">
              <Phone className="h-4 w-4" /> Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCover;
