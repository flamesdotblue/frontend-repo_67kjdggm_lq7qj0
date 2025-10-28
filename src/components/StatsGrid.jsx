import React from 'react';
import { Users, Stethoscope, BedDouble } from 'lucide-react';

const StatsGrid = () => {
  const stats = [
    { label: 'Specialist Doctors', value: '120+', icon: Stethoscope },
    { label: 'Patients Served', value: '250k+', icon: Users },
    { label: 'Beds Available', value: '800+', icon: BedDouble },
  ];

  return (
    <section className="bg-white py-14" aria-labelledby="stats-heading">
      <div className="mx-auto max-w-7xl px-6">
        <h2 id="stats-heading" className="sr-only">Hospital key statistics</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600">
                <s.icon className="h-6 w-6" />
              </div>
              <div>
                <div className="text-2xl font-semibold text-slate-900">{s.value}</div>
                <div className="text-sm text-slate-600">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsGrid;
