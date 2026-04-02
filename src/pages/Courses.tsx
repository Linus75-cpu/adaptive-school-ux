import React from 'react';
import { motion } from 'framer-motion';
import { 
  Play, 
  Clock, 
  Users, 
  Star, 
  ChevronRight,
  BookOpen
} from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import { cn } from '@/lib/utils';

const courses = [
  { id: 1, title: 'Advanced Mathematics', category: 'Science', students: '320', rating: 4.9, time: 'Form 4', image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=400' },
  { id: 2, title: 'Creative Arts & Design', category: 'Arts', students: '240', rating: 4.7, time: 'Form 1-4', image: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?auto=format&fit=crop&q=80&w=400' },
  { id: 3, title: 'English Literature', category: 'Languages', students: '410', rating: 5.0, time: 'Form 3', image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=400' },
  { id: 4, title: 'Physical Education', category: 'Sports', students: '1.2k', rating: 4.5, time: 'All Levels', image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=400' },
];

const Courses: React.FC = () => {
  return (
    <div className="space-y-8">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-white">
            <span className="white-text-overlay">School Curriculum</span>
          </h1>
          <p className="text-white/50 mt-1">
            <span className="white-text-overlay py-0.5">Comprehensive subject list and study modules at Mwatate Senior School.</span>
          </p>
        </div>
        <div className="flex gap-2">
          {['All', 'Science', 'Arts', 'Languages', 'Sports'].map((cat, i) => (
            <button 
              key={i}
              className={cn(
                "px-4 py-2 rounded-xl text-xs font-bold transition-all border",
                i === 0 ? "bg-[#92400e] text-white border-[#92400e]" : "bg-white/5 text-white/60 border-white/10 hover:border-white/20 hover:text-white hover:bg-white/10"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course, i) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            <GlassCard className="p-0 flex flex-col h-full group border-white/5">
              <div className="relative h-48 w-full overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <button className="absolute bottom-4 right-4 w-10 h-10 bg-[#92400e] text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300 shadow-xl">
                  <Play className="w-5 h-5 fill-white" />
                </button>
                <div className="absolute top-4 left-4">
                   <span className="bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-lg uppercase tracking-wider border border-white/10">
                     {course.category}
                   </span>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-bold text-lg leading-tight mb-4 group-hover:text-[#92400e] transition-colors text-white">
                  <span className="white-text-overlay px-2">{course.title}</span>
                </h3>
                
                <div className="mt-auto space-y-4">
                  <div className="flex items-center justify-between text-white/40 text-xs">
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5" />
                      <span>{course.students} Enrolled</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{course.time}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                      <span className="text-sm font-bold text-white/90">{course.rating}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      <GlassCard className="overflow-hidden p-0 h-[300px] relative border-white/5 bg-[#92400e]/5">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          <div className="p-10 flex flex-col justify-center relative z-20">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-amber-500" />
              <span className="text-[10px] font-bold text-amber-500 uppercase tracking-[0.3em]">E-Learning Portal</span>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-white">
              <span className="white-text-overlay">Digital Library & Resources</span>
            </h2>
            <p className="text-white/60 mb-8 max-w-md">
              <span className="white-text-overlay py-0.5">Access thousands of digital books, research papers, and educational videos through our student portal.</span>
            </p>
            <button className="w-fit px-8 py-3 bg-white text-black rounded-2xl font-bold hover:bg-amber-500 transition-all shadow-xl">
              Explore Resources
            </button>
          </div>
          <div className="relative hidden md:block overflow-hidden">
             <img 
               src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=800" 
               className="absolute inset-0 w-full h-full object-cover opacity-30 shadow-2xl" 
               alt="Library"
             />
             <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0a0a0a]" />
          </div>
        </div>
      </GlassCard>
    </div>
  );
};

export default Courses;