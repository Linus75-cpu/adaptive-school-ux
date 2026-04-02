import React, { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  LineChart, 
  Settings, 
  Search, 
  Bell,
  Zap,
  Menu,
  X
} from 'lucide-react';
import { cn } from '@/lib/utils';
import AIPanel from '../ai/AIPanel';

interface ShellProps {
  children: ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Shell: React.FC<ShellProps> = ({ children, activeTab, setActiveTab }) => {
  const [isAiOpen, setIsAiOpen] = React.useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'students', label: 'Students', icon: Users },
    { id: 'courses', label: 'Academic Modules', icon: BookOpen },
    { id: 'insights', label: 'Performance', icon: LineChart },
  ];

  const schoolLogo = "https://storage.googleapis.com/dala-prod-public-storage/generated-images/d7ebcac7-0907-4597-a92f-5718a151250e/school-crest-4c660050-1775118137531.webp";

  return (
    <div className="flex h-screen w-full overflow-hidden text-white font-sans">
      {/* SVG Wave Filter Definitions */}
      <svg className="wavy-svg-container" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="wavy-filter">
            <feTurbulence type="fractalNoise" baseFrequency="0.005 0.01" numOctaves="2" result="turbulence">
              <animate attributeName="baseFrequency" values="0.005 0.01;0.01 0.015;0.005 0.01" dur="30s" repeatCount="indefinite" />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="40" />
          </filter>
        </defs>
      </svg>

      {/* Dynamic Sidebar */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 border-r border-white/10 bg-black/90 backdrop-blur-3xl transition-transform duration-300 transform md:relative md:translate-x-0 flex flex-col",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-6 flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#92400e] to-[#451a03] flex items-center justify-center neo-glow overflow-hidden shadow-lg border border-white/10">
            <img src={schoolLogo} alt="MSS Logo" className="w-10 h-10 object-contain brightness-110 contrast-125" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg leading-tight tracking-tight text-white">
               <span className="white-text-overlay px-1">MWATATE</span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#92400e] font-semibold">
              Senior School
            </span>
          </div>
        </div>

        <nav className="flex-1 px-3 space-y-1.5 mt-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setIsSidebarOpen(false);
              }}
              className={cn(
                "w-full flex items-center gap-3.5 px-4 py-3 rounded-xl transition-all duration-300 group relative overflow-hidden",
                activeTab === item.id 
                  ? "bg-[#92400e]/10 text-white border border-[#92400e]/20 shadow-[0_0_15px_rgba(146,64,14,0.1)]" 
                  : "text-white/40 hover:text-white/80 hover:bg-white/5"
              )}
            >
              {activeTab === item.id && (
                <motion.div 
                  layoutId="activeNav"
                  className="absolute inset-0 bg-gradient-to-r from-[#92400e]/20 to-transparent -z-10"
                />
              )}
              <item.icon className={cn(
                "w-5 h-5 transition-transform duration-300",
                activeTab === item.id ? "scale-110 text-[#92400e]" : "group-hover:scale-110"
              )} />
              <span className="font-medium text-sm">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-6">
          <div className="p-4 rounded-2xl bg-[#92400e]/5 border border-[#92400e]/10">
            <p className="text-[10px] text-[#92400e] font-bold uppercase tracking-wider mb-2">School Motto</p>
            <p className="text-sm font-medium italic text-white/80 leading-relaxed">
              <span className="white-text-overlay py-0.5">"Everyone is an achiever"</span>
            </p>
          </div>
        </div>

        <div className="p-4 border-t border-white/5">
          <button className="flex items-center gap-4 px-4 py-3 rounded-xl text-white/40 hover:text-white hover:bg-white/5 transition-all w-full">
            <Settings className="w-5 h-5" />
            <span className="font-medium text-sm">Settings</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative overflow-hidden">
        {/* Top Bar */}
        <header className="h-20 border-b border-white/10 bg-black/60 backdrop-blur-xl flex items-center justify-between px-6 md:px-10 z-40">
          <div className="flex items-center gap-4 flex-1">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="md:hidden p-2 rounded-lg bg-white/5 text-white"
            >
              {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <div className="relative group max-w-md w-full hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 group-focus-within:text-[#92400e] transition-colors" />
              <input 
                type="text" 
                placeholder="Search students, records..." 
                className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-[#92400e]/50 transition-all placeholder:text-white/20"
              />
            </div>
          </div>

          <div className="flex items-center gap-4 md:gap-6">
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-[#92400e]/10 border border-[#92400e]/20 rounded-full">
              <div className="w-2 h-2 rounded-full bg-[#92400e] animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#92400e]">Academic Year 2024</span>
            </div>
            
            <button className="relative text-white/60 hover:text-white transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-amber-600 rounded-full" />
            </button>

            <button 
              onClick={() => setIsAiOpen(!isAiOpen)}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#92400e] to-[#451a03] rounded-full text-sm font-semibold hover:shadow-[0_0_20px_rgba(146,64,14,0.4)] transition-all active:scale-95 border border-white/10"
            >
              <Zap className="w-4 h-4 fill-white" />
              <span className="hidden sm:inline">Portal AI</span>
            </button>

            <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center overflow-hidden cursor-pointer hover:border-[#92400e] transition-colors">
               <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin" alt="Admin" className="w-full h-full object-cover" />
            </div>
          </div>
        </header>

        {/* Dynamic Viewport */}
        <div className="flex-1 overflow-y-auto custom-scrollbar relative">
          <div className="p-6 md:p-10 max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {children}
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Wavy Background Elements */}
          <div className="wave-container">
            <div className="wave wave-1" />
            <div className="wave wave-2" />
            <div className="wave wave-3" />
          </div>

          {/* Background Ambient Effects - Layered over the checkered pattern */}
          <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#92400e]/15 blur-[120px] rounded-full animate-blob" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#451a03]/15 blur-[120px] rounded-full animate-blob-delayed" />
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/carbon-fibre.png')` }} />
          </div>
        </div>
      </main>

      {/* AI Assistant Side Panel */}
      <AnimatePresence>
        {isAiOpen && (
          <AIPanel onClose={() => setIsAiOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Shell;