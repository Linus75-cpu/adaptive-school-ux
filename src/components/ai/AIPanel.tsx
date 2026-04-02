import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Send, Sparkles, Brain, Zap, History, GraduationCap } from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

interface AIPanelProps {
  onClose: () => void;
}

const AIPanel: React.FC<AIPanelProps> = ({ onClose }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'assistant', text: "Jambo! I'm your Mwatate Academic Assistant. How can I help you manage the school today?" }
  ]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages([...messages, { role: 'user', text: input }]);
    setInput('');
    
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        text: "Processing your request... Based on current term performance, I recommend reviewing the Form 4 Physics results. Would you like me to generate a summary?" 
      }]);
      toast.success("Assistant updated the report");
    }, 1000);
  };

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className="fixed inset-y-0 right-0 w-full sm:w-[400px] glass-panel border-l border-white/10 z-[100] flex flex-col shadow-2xl bg-black/90 backdrop-blur-3xl"
    >
      <div className="p-6 border-b border-white/10 flex items-center justify-between bg-black/40">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#92400e] to-[#451a03] flex items-center justify-center shadow-lg border border-white/10">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="font-bold text-lg tracking-tight text-white">Portal Assistant</h2>
            <p className="text-[10px] text-[#92400e] font-bold uppercase tracking-widest">Mwatate Senior School</p>
          </div>
        </div>
        <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors">
          <X className="w-5 h-5 text-white/50" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
        {messages.map((msg, i) => (
          <div key={i} className={cn(
            "flex flex-col max-w-[85%]",
            msg.role === 'user' ? "ml-auto items-end" : "items-start"
          )}>
            <div className={cn(
              "px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-sm",
              msg.role === 'user' 
                ? "bg-[#92400e] text-white rounded-tr-none" 
                : "bg-white/10 text-white/90 border border-white/10 rounded-tl-none"
            )}>
              {msg.text}
            </div>
          </div>
        ))}
        
        <div className="grid grid-cols-2 gap-2 mt-8">
          {[
            { icon: Brain, label: 'Performance Analysis' },
            { icon: Zap, label: 'Auto-Timetable' },
            { icon: History, label: 'Academic Logs' },
            { icon: Sparkles, label: 'Generate Reports' }
          ].map((action, i) => (
            <button key={i} className="flex flex-col items-start gap-2 p-3 bg-white/5 border border-white/5 rounded-xl text-[10px] font-bold uppercase tracking-wider text-white/60 hover:bg-[#92400e]/10 hover:border-[#92400e]/30 transition-all hover:text-white">
              <action.icon className="w-4 h-4 text-[#92400e]" />
              {action.label}
            </button>
          ))}
        </div>
      </div>

      <div className="p-6 bg-black/40 border-t border-white/10">
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="How can I assist you today?"
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-5 pr-14 text-sm focus:outline-none focus:border-[#92400e]/50 transition-all text-white placeholder:text-white/20"
          />
          <button 
            onClick={handleSend}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-[#92400e] text-white rounded-xl hover:bg-[#7c2d12] transition-colors shadow-lg"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
        <p className="text-[10px] text-center text-white/30 mt-4 font-medium uppercase tracking-[0.2em]">
          Everyone is an achiever
        </p>
      </div>
    </motion.div>
  );
};

export default AIPanel;