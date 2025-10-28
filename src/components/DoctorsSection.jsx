import React, { useMemo, useState } from 'react';
import { Search, Shield, Clock } from 'lucide-react';

const DOCTORS = [
  { id: 1, name: 'Dr. Aisha Mehta', specialty: 'Cardiology', qualification: 'MD, DM (Cardiology)', availability: 'Mon-Fri, 9am-2pm' },
  { id: 2, name: 'Dr. Rohan Patil', specialty: 'Orthopedics', qualification: 'MS (Ortho)', availability: 'Tue-Sat, 11am-6pm' },
  { id: 3, name: 'Dr. Neha Kulkarni', specialty: 'Pediatrics', qualification: 'MD (Pediatrics)', availability: 'Mon-Sat, 10am-4pm' },
  { id: 4, name: 'Dr. Vivek Shah', specialty: 'Neurology', qualification: 'MD, DM (Neuro)', availability: 'Mon, Wed, Fri, 1pm-6pm' },
  { id: 5, name: 'Dr. Priya Nair', specialty: 'Dermatology', qualification: 'MD (Dermatology)', availability: 'Mon-Sat, 12pm-5pm' },
  { id: 6, name: 'Dr. Arjun Deshmukh', specialty: 'General Medicine', qualification: 'MD (Internal Medicine)', availability: 'Mon-Sat, 9am-5pm' },
];

const DoctorsSection = () => {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('All');

  const specialties = useMemo(() => ['All', ...Array.from(new Set(DOCTORS.map(d => d.specialty)))], []);

  const filtered = useMemo(() => {
    return DOCTORS.filter(d => {
      const q = query.toLowerCase();
      const matchesQuery = d.name.toLowerCase().includes(q) || d.specialty.toLowerCase().includes(q);
      const matchesFilter = filter === 'All' || d.specialty === filter;
      return matchesQuery && matchesFilter;
    });
  }, [query, filter]);

  return (
    <section id="doctors" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900">Our Doctors</h2>
            <p className="mt-1 text-slate-600">Explore specialists by department and availability.</p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <div className="relative w-full sm:w-72">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name or specialty"
                className="w-full rounded-lg border border-slate-300 bg-white py-2 pl-9 pr-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
              />
            </div>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200 sm:w-48"
            >
              {specialties.map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((d) => (
            <div key={d.id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-500/10 text-sky-600 text-base font-semibold">
                  {d.name.split(' ').map(w => w[0]).slice(0,2).join('')}
                </div>
                <div className="min-w-0">
                  <h3 className="truncate text-lg font-semibold text-slate-900">{d.name}</h3>
                  <p className="truncate text-sm text-slate-600">{d.qualification}</p>
                  <div className="mt-3 flex items-center gap-3 text-sm text-slate-700">
                    <span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2 py-1 text-emerald-700 ring-1 ring-emerald-100">
                      <Shield className="h-3.5 w-3.5" /> {d.specialty}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-md bg-sky-50 px-2 py-1 text-sky-700 ring-1 ring-sky-100">
                      <Clock className="h-3.5 w-3.5" /> {d.availability}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
