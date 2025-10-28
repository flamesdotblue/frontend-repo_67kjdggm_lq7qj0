import React, { useMemo, useState } from 'react';
import { CalendarDays, User, Mail, Phone, Clock, Stethoscope } from 'lucide-react';

const doctors = [
  'Cardiology - Dr. Aisha Mehta',
  'Orthopedics - Dr. Rohan Patil',
  'Pediatrics - Dr. Neha Kulkarni',
  'Neurology - Dr. Vivek Shah',
  'Dermatology - Dr. Priya Nair',
  'General Medicine - Dr. Arjun Deshmukh',
];

const initialState = { name: '', age: '', phone: '', email: '', date: '', time: '', doctor: doctors[0] };

const AppointmentForm = () => {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const isValid = useMemo(() => {
    if (!form.name || !form.phone || !form.date || !form.time) return false;
    if (!/^[0-9]{10}$/.test(form.phone)) return false;
    if (form.email && !/.+@.+\..+/.test(form.email)) return false;
    return true;
  }, [form]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setForm(initialState);
  };

  return (
    <section id="appointments" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 max-w-2xl">
          <h2 className="text-3xl font-semibold text-slate-900">Online Appointment Booking</h2>
          <p className="mt-1 text-slate-600">Register as a patient and book your appointment by selecting your preferred date, time, and doctor.</p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:grid-cols-2">
          <div className="col-span-1">
            <label className="mb-1 block text-sm font-medium text-slate-700">Full Name</label>
            <div className="relative">
              <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input name="name" value={form.name} onChange={handleChange} placeholder="Enter your full name" className="w-full rounded-lg border border-slate-300 bg-white py-2 pl-9 pr-3 text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200" />
            </div>
          </div>
          <div className="col-span-1">
            <label className="mb-1 block text-sm font-medium text-slate-700">Age</label>
            <input name="age" value={form.age} onChange={handleChange} type="number" min="0" placeholder="Age" className="w-full rounded-lg border border-slate-300 bg-white py-2 px-3 text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200" />
          </div>

          <div className="col-span-1">
            <label className="mb-1 block text-sm font-medium text-slate-700">Phone</label>
            <div className="relative">
              <Phone className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input name="phone" value={form.phone} onChange={handleChange} placeholder="10-digit mobile number" className="w-full rounded-lg border border-slate-300 bg-white py-2 pl-9 pr-3 text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200" />
            </div>
          </div>
          <div className="col-span-1">
            <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
            <div className="relative">
              <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input name="email" value={form.email} onChange={handleChange} placeholder="email@example.com" className="w-full rounded-lg border border-slate-300 bg-white py-2 pl-9 pr-3 text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200" />
            </div>
          </div>

          <div className="col-span-1">
            <label className="mb-1 block text-sm font-medium text-slate-700">Preferred Date</label>
            <div className="relative">
              <CalendarDays className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input name="date" value={form.date} onChange={handleChange} type="date" className="w-full rounded-lg border border-slate-300 bg-white py-2 pl-9 pr-3 text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200" />
            </div>
          </div>
          <div className="col-span-1">
            <label className="mb-1 block text-sm font-medium text-slate-700">Preferred Time</label>
            <div className="relative">
              <Clock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input name="time" value={form.time} onChange={handleChange} type="time" className="w-full rounded-lg border border-slate-300 bg-white py-2 pl-9 pr-3 text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200" />
            </div>
          </div>

          <div className="col-span-1 sm:col-span-2">
            <label className="mb-1 block text-sm font-medium text-slate-700">Select Doctor</label>
            <div className="relative">
              <Stethoscope className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <select name="doctor" value={form.doctor} onChange={handleChange} className="w-full appearance-none rounded-lg border border-slate-300 bg-white py-2 pl-9 pr-10 text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200">
                {doctors.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="col-span-1 sm:col-span-2 mt-2 flex items-center justify-between">
            <button type="submit" disabled={!isValid} className="inline-flex items-center rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400 disabled:cursor-not-allowed disabled:opacity-60">
              Book Appointment
            </button>
            {submitted && (
              <span className="text-sm font-medium text-emerald-600">Appointment request submitted! You will receive a confirmation shortly.</span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default AppointmentForm;
