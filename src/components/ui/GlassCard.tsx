import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hoverEffect?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className, 
  delay = 0, 
  hoverEffect = true 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.5, 
        delay, 
        ease: [0.23, 1, 0.32, 1] 
      }}
      whileHover={hoverEffect ? { 
        y: -5,
        scale: 1.01,
        transition: { duration: 0.2 }
      } : undefined}
      className={cn(
        "glass-panel rounded-3xl p-6 relative group overflow-hidden border border-white/5 bg-white/[0.02]",
        className
      )}
    >
      {/* Decorative brown gradient light */}
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#92400e]/10 blur-3xl rounded-full group-hover:bg-[#92400e]/20 transition-colors duration-500" />
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default GlassCard;