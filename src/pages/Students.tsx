import React from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  BadgeCheck, 
  GraduationCap
} from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

const students = [
  { id: '1', name: 'James Mwangi', role: 'Form 4 East', status: 'Enrolled', progress: 88, avatar: 'James' },
  { id: '2', name: 'Sarah Atieno', role: 'Form 3 North', status: 'Active', progress: 94, avatar: 'Sarah' },
  { id: '3', name: 'Kevin Mutua', role: 'Form 2 South', status: 'Probation', progress: 42, avatar: 'Kevin' },
  { id: '4', name: 'Grace Wambui', role: 'Form 4 West', status: 'Enrolled', progress: 76, avatar: 'Grace' },
  { id: '5', name: 'David Otieno', role: 'Form 1 North', status: 'Active', progress: 100, avatar: 'David' },
];

const Students: React.FC = () => {
  return (
    <div className="space-y-8">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-white">
            <span className="white-text-overlay">Student Directory</span>
          </h1>
          <p className="text-white/50 mt-1">
            <span className="white-text-overlay py-0.5">Manage and monitor student academic progress at Mwatate Senior School.</span>
          </p>
        </div>
        <button 
          onClick={() => toast.success("Opening admission portal...")}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-2xl hover:bg-[#fcd34d] active:scale-95 transition-all"
        >
          <Plus className="w-5 h-5" />
          Enroll New Student
        </button>
      </header>

      <GlassCard className="bg-gradient-to-r from-[#92400e]/10 to-transparent border-[#92400e]/20 p-5">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#92400e]/20 flex items-center justify-center shrink-0">
            <GraduationCap className="w-6 h-6 text-[#92400e]" />
          </div>
          <div className="flex-1">
            <p className="text-xs font-bold uppercase tracking-wider text-[#92400e]">Principal's Note</p>
            <p className="text-sm text-white/80">
              <span className="white-text-overlay py-0.5">Mwatate Senior School: 'Everyone is an achiever'. 3 students in Form 2 South require additional support in Mathematics.</span>
            </p>
          </div>
          <button className="text-sm font-bold text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl transition-colors">
            Generate Report
          </button>
        </div>
      </GlassCard>

      <div className="flex items-center gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
          <input 
            type="text" 
            placeholder="Search students by name, ADM No, or class..." 
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 focus:outline-none focus:border-[#92400e]/50 text-white placeholder:text-white/20"
          />
        </div>
        <button className="p-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors text-white/60">
          <Filter className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {students.map((student, i) => (
          <motion.div
            key={student.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <GlassCard className="p-4 hover:border-[#92400e]/30 transition-all cursor-pointer group">
              <div className="flex items-center gap-6">
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden border border-white/10">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${student.avatar}`} alt="Avatar" className="w-full h-full object-cover bg-black/40" />
                  </div>
                  {student.progress === 100 && (
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center border-2 border-[#0a0a0a]">
                      <BadgeCheck className="w-3 h-3 text-white" />
                    </div>
                  )}
                </div>

                <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                  <div>
                    <h4 className="font-bold text-white group-hover:text-[#92400e] transition-colors">
                      <span className="white-text-overlay px-2">{student.name}</span>
                    </h4>
                    <p className="text-xs text-white/40 font-medium">ADM-{202400 + i}</p>
                  </div>
                  
                  <div className="hidden md:block">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-white/30">Current Class</p>
                    <p className="text-sm font-medium text-white/80">{student.role}</p>
                  </div>

                  <div className="hidden md:block">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-white/30">Average Performance</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${student.progress}%` }}
                          transition={{ duration: 1, delay: i * 0.1 }}
                          className={cn(
                            "h-full rounded-full shadow-[0_0_8px_rgba(0,0,0,0.5)]",
                            student.progress > 80 ? "bg-emerald-500" : student.progress > 50 ? "bg-[#92400e]" : "bg-rose-500"
                          )}
                        />
                      </div>
                      <span className="text-xs font-bold text-white/60">{student.progress}%</span>
                    </div>
                  </div>

                  <div className="flex justify-end gap-4 items-center">
                    <span className={cn(
                      "text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border shadow-sm",
                      student.status === 'Active' ? "border-emerald-500/30 text-emerald-400 bg-emerald-500/5" : 
                      student.status === 'Enrolled' ? "border-[#92400e]/30 text-[#92400e] bg-[#92400e]/5" :
                      "border-rose-500/30 text-rose-400 bg-rose-500/5"
                    )}>
                      {student.status}
                    </span>
                    <button className="p-2 hover:bg-white/5 rounded-xl transition-colors text-white/30 hover:text-white">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Students;