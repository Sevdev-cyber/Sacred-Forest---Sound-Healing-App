import React from 'react';
import { Tab } from '../types';
import { Grid, Wind, CircleDot, Settings, User } from 'lucide-react';
import { BACKGROUND_MIST } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, activeTab, onTabChange }) => {
  return (
    <div className="relative min-h-screen w-full bg-sacred-dark text-white overflow-hidden">
      {/* Background Layer */}
      <div className="fixed inset-0 z-0">
        <img 
          src={BACKGROUND_MIST} 
          alt="Mist Background" 
          className="w-full h-full object-cover opacity-40 mix-blend-overlay filter brightness-75 contrast-125 saturate-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/40 to-stone-950/90"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-[calc(100vh-80px)] overflow-y-auto no-scrollbar pb-20">
        {children}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 w-full z-50 glass-panel-heavy">
        <div className="flex justify-around items-center h-20 px-4 max-w-md mx-auto">
          <NavButton 
            icon={<Grid size={24} />} 
            label="Gallery" 
            isActive={activeTab === Tab.GALLERY} 
            onClick={() => onTabChange(Tab.GALLERY)} 
          />
          <NavButton 
            icon={<Wind size={24} />} 
            label="Tools" 
            isActive={activeTab === Tab.TOOLS} 
            onClick={() => onTabChange(Tab.TOOLS)} 
          />
          <div className="-mt-8">
             <button 
              onClick={() => onTabChange(Tab.MANDALA)}
              className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 shadow-lg ${activeTab === Tab.MANDALA ? 'bg-primary text-stone-900 scale-110 shadow-primary/40' : 'bg-stone-800 border border-primary/30 text-primary'}`}
             >
               <CircleDot size={32} strokeWidth={activeTab === Tab.MANDALA ? 2.5 : 1.5} />
             </button>
          </div>
          <NavButton 
            icon={<Settings size={24} />} 
            label="Settings" 
            isActive={activeTab === Tab.SETTINGS} 
            onClick={() => onTabChange(Tab.SETTINGS)} 
          />
           <NavButton 
            icon={<User size={24} />} 
            label="Profile" 
            isActive={false} 
            onClick={() => {}} // Placeholder
          />
        </div>
      </div>
    </div>
  );
};

const NavButton: React.FC<{
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ icon, label, isActive, onClick }) => (
  <button 
    onClick={onClick}
    className={`flex flex-col items-center justify-center gap-1 transition-colors duration-300 ${isActive ? 'text-primary' : 'text-stone-400 hover:text-stone-200'}`}
  >
    <div className={`transition-all duration-300 ${isActive ? 'scale-110 drop-shadow-[0_0_8px_rgba(252,211,77,0.5)]' : ''}`}>
      {icon}
    </div>
    <span className={`text-[10px] font-medium tracking-wide ${isActive ? 'opacity-100' : 'opacity-70'}`}>
      {label}
    </span>
  </button>
);
