import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Brain, 
  Target, 
  Activity,
  ArrowUpRight,
  RefreshCcw,
  Sparkles,
  BookMarked,
  LineChart
} from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  ResponsiveContainer 
} from 'recharts';
import { cn } from '@/lib/utils';

const radarData = [
  { subject: 'Science', A: 120, B: 110, fullMark: 150 },
  { subject: 'Math', A: 98, B: 130, fullMark: 150 },
  { subject: 'English', A: 86, B: 130, fullMark: 150 },
  { subject: 'Humanities', A: 99, B: 100, fullMark: 150 },
  { subject: 'Sports', A: 85, B: 90, fullMark: 150 },
  { subject: 'Arts', A: 125, B: 85, fullMark: 150 },
];

const Insights: React.FC = () => {
  return (
    <div className="space-y-8">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
             <Sparkles className="w-4 h-4 text-[#92400e]" />
             <span className="text-[10px] font-bold uppercase tracking-widest text-[#92400e]">Academic Performance Matrix</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white">
            <span className="white-text-overlay">Performance Insights</span>
          </h1>
          <p className="text-white/50 mt-1">
            <span className="white-text-overlay py-0.5">Advanced analytics tracking Mwatate Senior School's excellence across all departments.</span>
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-medium hover:bg-white/10 transition-colors text-white">
          <RefreshCcw className="w-4 h-4" />
          Recalculate Averages
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <GlassCard className="min-h-[400px] flex flex-col">
          <h3 className="text-xl font-bold mb-6 text-white">
            <span className="white-text-overlay">Subject Distribution</span>
          </h3>
          <div className="flex-1 w-full h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                <PolarGrid stroke="#ffffff10" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#ffffff60', fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                <Radar
                  name="Mwatate High"
                  dataKey="A"
                  stroke="#92400e"
                  fill="#92400e"
                  fillOpacity={0.6}
                />
                <Radar
                  name="Regional Mean"
                  dataKey="B"
                  stroke="#ffffff"
                  fill="#ffffff"
                  fillOpacity={0.2}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-8 mt-4 text-xs font-bold uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-[#92400e]" />
              <span className="text-white/60">Mwatate Mean</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-white/40" />
              <span className="text-white/60">National Standard</span>
            </div>
          </div>
        </GlassCard>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GlassCard>
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-5 h-5 text-[#92400e]" />
                <span className="text-sm font-bold text-white">Academic Index</span>
              </div>
              <h4 className="text-3xl font-bold text-white">
                <span className="white-text-overlay">88.2</span>
              </h4>
              <p className="text-xs text-emerald-400 font-bold mt-1 flex items-center gap-1">
                <ArrowUpRight className="w-3 h-3" />
                +4.2% from Term 1
              </p>
            </GlassCard>
            <GlassCard>
              <div className="flex items-center gap-3 mb-4">
                <Activity className="w-5 h-5 text-amber-500" />
                <span className="text-sm font-bold text-white">Study Efficiency</span>
              </div>
              <h4 className="text-3xl font-bold text-white">
                <span className="white-text-overlay">91.1%</span>
              </h4>
              <p className="text-xs text-white/40 font-bold mt-1 uppercase tracking-wider">High engagement</p>
            </GlassCard>
          </div>

          <GlassCard className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Target className="w-5 h-5 text-amber-600" />
                <h3 className="font-bold text-white">
                  <span className="white-text-overlay">Development Goals</span>
                </h3>
              </div>
            </div>
            <div className="space-y-6">
              {[
                { label: 'Form 4 Pass Rate', current: 78, target: 95, color: 'bg-[#92400e]' },
                { label: 'Science Lab Completion', current: 64, target: 100, color: 'bg-amber-600' },
                { label: 'Attendance Average', current: 92, target: 98, color: 'bg-emerald-500' },
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-xs font-bold text-white">
                    <span className="text-white/60 uppercase tracking-wider">{item.label}</span>
                    <span>{item.current}% / {item.target}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden shadow-inner">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${item.current}%` }}
                      transition={{ duration: 1.5, delay: i * 0.2 }}
                      className={cn("h-full rounded-full", item.color)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>

      <GlassCard className="border-[#92400e]/30 bg-[#92400e]/5">
        <div className="flex flex-col md:flex-row items-center gap-8">
           <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#92400e] to-[#451a03] flex items-center justify-center shrink-0 shadow-2xl border border-white/10">
              <LineChart className="w-10 h-10 text-white" />
           </div>
           <div>
              <h3 className="text-2xl font-bold mb-2 uppercase tracking-tight text-white">
                <span className="white-text-overlay">Strategic Growth Report</span>
              </h3>
              <p className="text-white/60 max-w-2xl">
                <span className="white-text-overlay py-0.5">Projected academic results indicate a significant improvement in Science and Arts subjects. The new 'Everyone is an achiever' initiative has resulted in a 12% boost in student participation since launch.</span>
              </p>
           </div>
           <button className="md:ml-auto px-8 py-4 bg-white text-black font-black uppercase tracking-widest text-xs rounded-full hover:bg-amber-500 transition-colors shadow-lg">
              Download Full PDF
           </button>
        </div>
      </GlassCard>
    </div>
  );
};

export default Insights;