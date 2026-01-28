
import React, { useState, useEffect } from 'react';
import { Course } from '../types';

interface ReservationSectionProps {
  courses: Course[];
  t: any;
  selectedCourseId: string | null;
}

const ReservationSection: React.FC<ReservationSectionProps> = ({ courses, t, selectedCourseId }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
    date: '',
    time: '',
    notes: ''
  });

  useEffect(() => {
    if (selectedCourseId) {
      setFormData(prev => ({ ...prev, course: selectedCourseId }));
    }
  }, [selectedCourseId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Reservation submitted successfully!');
    setFormData({ name: '', email: '', course: '', date: '', time: '', notes: '' });
  };

  return (
    <section id="reservation" className="py-24 bg-zinc-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl font-bold mb-4">{t.title}</h2>
          <p className="text-zinc-500">{t.subtitle}</p>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-zinc-100">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-bold text-zinc-700 mb-3">{t.form_name}</label>
                <input 
                  type="text" required
                  className="w-full px-5 py-4 border border-zinc-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-zinc-700 mb-3">{t.form_email}</label>
                <input 
                  type="email" required
                  className="w-full px-5 py-4 border border-zinc-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-zinc-700 mb-3">{t.form_course}</label>
              <select 
                className="w-full px-5 py-4 border border-zinc-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none appearance-none transition-all"
                value={formData.course}
                onChange={e => setFormData({...formData, course: e.target.value})}
              >
                <option value="">{t.form_course}</option>
                {courses.map(c => <option key={c.id} value={c.title}>{c.title}</option>)}
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-bold text-zinc-700 mb-3">{t.form_date}</label>
                <input 
                  type="date" required
                  className="w-full px-5 py-4 border border-zinc-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  value={formData.date}
                  onChange={e => setFormData({...formData, date: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-zinc-700 mb-3">{t.form_time}</label>
                <select 
                  required
                  className="w-full px-5 py-4 border border-zinc-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none appearance-none transition-all"
                  value={formData.time}
                  onChange={e => setFormData({...formData, time: e.target.value})}
                >
                  <option value="">Select Time</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="14:00">02:00 PM</option>
                  <option value="16:00">04:00 PM</option>
                  <option value="19:00">07:00 PM</option>
                </select>
              </div>
            </div>

            <button type="submit" className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg hover:bg-primary-dark transition-all shadow-lg hover:shadow-primary/40">
              {t.form_submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
