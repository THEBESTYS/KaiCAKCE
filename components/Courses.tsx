
import React from 'react';
import { Course } from '../types';

interface CoursesProps {
  courses: Course[];
  t: any;
  onSelectCourse: (id: string) => void;
}

const Courses: React.FC<CoursesProps> = ({ courses, t, onSelectCourse }) => {
  return (
    <section id="courses" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold mb-4">{t.title}</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg">{t.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.map((course) => (
            <div key={course.id} className="group bg-white rounded-2xl overflow-hidden border border-zinc-100 hover:border-primary/20 hover:shadow-2xl transition-all">
              <div className="relative h-64 overflow-hidden">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                {course.tag && (
                  <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                    {course.tag}
                  </div>
                )}
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-xl text-zinc-900 group-hover:text-primary transition-colors">{course.title}</h3>
                  <span className="text-primary font-bold text-lg">{course.price}</span>
                </div>
                <p className="text-zinc-500 text-sm mb-6 leading-relaxed">{course.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs font-semibold text-zinc-400 gap-1.5">
                    <iconify-icon icon="mdi:clock-outline"></iconify-icon>
                    {course.duration}
                  </div>
                  <button 
                    onClick={() => onSelectCourse(course.title)}
                    className="bg-zinc-900 text-white px-5 py-2.5 rounded-full text-xs font-bold hover:bg-primary transition-all uppercase tracking-wider"
                  >
                    {t.reserve}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
