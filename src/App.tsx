import React, { useState } from 'react';
import { Toaster } from 'sonner';
import Shell from './components/layout/Shell';
import Dashboard from './pages/Dashboard';
import Students from './pages/Students';
import Courses from './pages/Courses';
import Insights from './pages/Insights';
import './App.css';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <Dashboard />;
      case 'students': return <Students />;
      case 'courses': return <Courses />;
      case 'insights': return <Insights />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen checkered-pattern text-white selection:bg-[#92400e]/30 selection:text-white relative">
      {/* Reduced overlay opacity from 0.4 to 0.25 to make the checkered background more visible */}
      <div className="fixed inset-0 bg-black/25 backdrop-blur-[1px] pointer-events-none -z-[5]" />
      <Shell activeTab={activeTab} setActiveTab={setActiveTab}>
        {renderContent()}
      </Shell>
      <Toaster 
        position="top-right" 
        theme="dark" 
        richColors 
        toastOptions={{
          style: {
            background: 'rgba(20, 15, 12, 0.95)',
            border: '1px solid rgba(146, 64, 14, 0.2)',
            color: '#fff',
          }
        }}
      />
    </div>
  );
};

export default App;