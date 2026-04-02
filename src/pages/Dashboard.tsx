import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  BookOpen, 
  Award, 
  Calendar,
  ArrowUpRight,
  MoreHorizontal,
  BellRing
} from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { cn } from '@/lib/utils';

const data = [
  { name: 'Mon', attendance: 92, performance: 84 },
  { name: 'Tue', attendance: 95, performance: 86 },
  { name: 'Wed', attendance: 88, performance: 82 },
  { name: 'Thu', attendance: 94, performance: 89 },
  { name: 'Fri', attendance: 97, performance: 91 },
  { name: 'Sat', attendance: 40, performance: 70 },
  { name: 'Sun', attendance: 30, performance: 65 },
];

const Dashboard: React.FC = () => {
  const stats = [
    { label: 'Total Students', value: '1,284', change: '+12%', icon: Users, color: 'text-amber-500' },
    { label: 'Active Classes', value: '42', change: '+3', icon: BookOpen, color: 'text-orange-400' },
    { label: 'Avg Attendance', value: '94.2%', change: '+5.4%', icon: TrendingUp, color: 'text-white' },
    { label: 'Excellence Awards', value: '89', change: '+22', icon: Award, color: 'text-yellow-400' },
  ];

  const campusImage = "https://storage.googleapis.com/dala-prod-public-storage/generated-images/d7ebcac7-0907-4597-a92f-5718a151250e/campus-view-8131aa76-1775118132186.webp";

  return (
    <div className="space-y-8">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-white">
            <span className="white-text-overlay">Mwatate School Portal</span>
          </h1>
          <p className="text-white/50 mt-1">
            <span className="white-text-overlay py-0.5">Comprehensive overview of academic excellence and student progress.</span>
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm font-medium px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white/80">
          <Calendar className="w-4 h-4 text-[#92400e]" />
          <span>Academic Year: 2024/2025</span>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <GlassCard className="lg:col-span-2 min-h-[400px] flex flex-col">
          <div className="flex items-center justify-between mb-8 text-white">
            <div>
              <h3 className="text-xl font-bold">
                <span className="white-text-overlay">Academic Performance Flow</span>
              </h3>
              <p className="text-white/40 text-sm mt-1">Attendance vs Performance metrics</p>
            </div>
            <select className="bg-black/40 border border-white/10 rounded-lg px-3 py-1.5 text-xs focus:outline-none focus:border-[#92400e] text-white">
              <option>Current Term</option>
              <option>Previous Term</option>
            </select>
          </div>
          
          <div className="flex-1 w-full h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorAtt" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#92400e" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#92400e" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorPerf" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ffffff" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#ffffff" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff05" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#ffffff40', fontSize: 12 }}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#140f0c', border: '1px solid #92400e30', borderRadius: '12px' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area type="monotone" dataKey="attendance" stroke="#92400e" fillOpacity={1} fill="url(#colorAtt)" strokeWidth={3} />
                <Area type="monotone" dataKey="performance" stroke="#ffffff" fillOpacity={1} fill="url(#colorPerf)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        <div className="space-y-6">
          <GlassCard className="relative h-full overflow-hidden flex flex-col justify-end p-0 border-[#92400e]/20">
             <img 
               src={campusImage} 
               className="absolute inset-0 w-full h-full object-cover opacity-60" 
               alt="Campus"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
             <div className="relative z-10 p-8">
               <h3 className="text-2xl font-bold mb-2 text-white">
                 <span className="white-text-overlay">Campus Main</span>
               </h3>
               <p className="text-white/70 text-sm mb-6">
                 <span className="white-text-overlay">Official view of the Mwatate Senior School grounds.</span>
               </p>
               <button className="w-full px-6 py-3 bg-[#92400e] text-white font-bold rounded-xl hover:bg-[#7c2d12] transition-colors shadow-lg">
                 View Campus Map
               </button>
             </div>
          </GlassCard>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <GlassCard key={i} delay={i * 0.1}>
            <div className="flex items-start justify-between">
              <div className={cn("p-2.5 rounded-xl bg-white/5 border border-white/10", stat.color)}>
                <stat.icon className="w-5 h-5" />
              </div>
              <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-full border border-emerald-400/20">
                <ArrowUpRight className="w-3 h-3" />
                {stat.change}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-white/40 text-sm font-medium">{stat.label}</p>
              <h4 className="text-3xl font-bold mt-1 text-white">
                <span className="white-text-overlay">{stat.value}</span>
              </h4>
            </div>
          </GlassCard>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <GlassCard className="lg:col-span-1 border-white/5">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-white">
              <span className="white-text-overlay">School Notices</span>
            </h3>
            <MoreHorizontal className="w-5 h-5 text-white/30" />
          </div>
          <div className="space-y-4">
            {[
              { title: "Parent-Teacher Meeting", desc: "Scheduled for Friday at 2:00 PM", type: "meeting" },
              { title: "Sports Day 2024", desc: "Preparations start this Monday", type: "event" },
              { title: "Term Exams", desc: "Timetable released for all forms", type: "exam" }
            ].map((notice, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#92400e]/30 transition-colors group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-[#92400e]/10 flex items-center justify-center shrink-0">
                  <BellRing className="w-5 h-5 text-[#92400e]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-[#92400e] transition-colors">{notice.title}</h4>
                  <p className="text-xs text-white/40">{notice.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="lg:col-span-2 overflow-hidden border-white/5">
           <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-white">
              <span className="white-text-overlay">Recent Achievements</span>
            </h3>
            <div className="flex -space-x-2">
              {[1,2,3,4,5].map(i => (
                <img key={i} src={`https://api.dicebear.com/7.x/avataaars/svg?seed=student${i}`} className="w-9 h-9 rounded-full border-2 border-[#0a0a0a] bg-zinc-800 shadow-xl" alt="student" />
              ))}
              <div className="w-9 h-9 rounded-full border-2 border-[#0a0a0a] bg-white/10 flex items-center justify-center text-[10px] font-bold text-white">+120</div>
            </div>
          </div>
          <div className="relative h-48 rounded-2xl overflow-hidden border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-r from-[#92400e]/80 to-[#451a03]/80 mix-blend-multiply z-10" />
            <img 
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800" 
              className="absolute inset-0 w-full h-full object-cover" 
              alt="Graduation"
            />
            <div className="absolute inset-0 z-20 flex items-end p-8">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#fcd34d] mb-1">Academic Milestone</p>
                <h4 className="text-xl font-bold text-white">
                  <span className="white-text-overlay px-4">100% Transition Rate to Higher Education</span>
                </h4>
                <p className="text-white/60 text-sm mt-1">
                  <span className="white-text-overlay py-0.5">Mwatate Senior School leading in regional academic results.</span>
                </p>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default Dashboard;