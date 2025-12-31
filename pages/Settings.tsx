import React, { useState } from 'react';
import { ChevronLeft, Edit2, ChevronRight, History, CreditCard, Bell, Music, Moon } from 'lucide-react';
import { USER_AVATAR } from '../constants';

export const SettingsScreen: React.FC = () => {
  return (
    <div className="max-w-md mx-auto px-4 py-6">
      <header className="flex items-center justify-between mb-8 pt-2">
        <button className="p-2 rounded-full hover:bg-white/10 transition-colors text-primary/80">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-xl font-medium tracking-wide text-white/90 drop-shadow-sm font-display">Settings</h1>
        <div className="w-10"></div>
      </header>

      {/* Profile Card */}
      <div className="mb-8 glass-panel rounded-2xl p-4 flex items-center space-x-4 shadow-[0_0_15px_-3px_rgba(252,211,77,0.15)] border-primary/20">
        <div className="relative">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/50 p-0.5">
            <img 
              src={USER_AVATAR} 
              alt="Profile" 
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <button className="absolute -bottom-1 -right-1 bg-primary text-stone-900 rounded-full p-1.5 border-2 border-stone-800 shadow-lg">
            <Edit2 size={12} strokeWidth={3} />
          </button>
        </div>
        <div>
          <h2 className="text-lg font-display font-medium text-white">Sarah Williams</h2>
          <p className="text-sm text-primary/80 font-medium tracking-wide">Premium Member</p>
        </div>
      </div>

      <div className="space-y-6 pb-24">
        {/* Subscription */}
        <section>
          <h3 className="text-xs font-bold text-white/60 uppercase tracking-widest mb-3 ml-1">Subscription Details</h3>
          <div className="glass-panel rounded-2xl p-5 border-primary/20">
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-xs text-white/50 mb-1 uppercase tracking-wider">Current Plan</p>
                <h4 className="text-2xl font-display text-white mb-2">Sacred Annual</h4>
                <div className="mt-4">
                  <p className="text-xs text-white/50 mb-1 uppercase tracking-wider">Next Renewal</p>
                  <p className="text-sm text-white/90 font-medium">October 24, 2024</p>
                  <p className="text-xs text-white/60">$59.99/year (Save 40%)</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full border border-primary/40 text-primary text-xs font-bold tracking-wider uppercase bg-primary/5">
                Active
              </span>
            </div>
            <div className="flex space-x-3 mt-4">
              <button className="flex-1 bg-primary hover:bg-yellow-400 text-stone-900 font-bold py-3 rounded-xl text-sm transition-all shadow-[0_0_15px_-3px_rgba(252,211,77,0.4)]">
                Upgrade Plan
              </button>
              <button className="flex-1 bg-transparent border border-white/20 hover:bg-white/10 text-white font-medium py-3 rounded-xl text-sm transition-colors">
                Cancel
              </button>
            </div>
          </div>
        </section>

        {/* Account */}
        <section>
          <h3 className="text-xs font-bold text-white/60 uppercase tracking-widest mb-3 ml-1">Account</h3>
          <div className="glass-panel rounded-2xl overflow-hidden">
            <SettingsRow icon={<History size={20} />} label="Billing History" />
            <div className="h-[1px] bg-white/5 mx-4" />
            <SettingsRow icon={<CreditCard size={20} />} label="Payment Methods" />
          </div>
        </section>

        {/* Sound Experience */}
        <section>
          <h3 className="text-xs font-bold text-white/60 uppercase tracking-widest mb-3 ml-1">Sound Experience</h3>
          <div className="glass-panel rounded-2xl p-4 space-y-6">
            <ToggleRow 
              label="High Fidelity Audio" 
              subLabel="Stream lossless quality when available" 
              defaultChecked 
            />
            <ToggleRow 
              label="Background Play" 
              subLabel="Continue audio when screen is off" 
              defaultChecked 
            />
            <ToggleRow 
              label="High Madaler Audio" 
              defaultChecked 
            />
            
            <div className="pt-2">
              <div className="flex justify-between items-center mb-3">
                <p className="text-white/90 font-medium text-sm">Crossfade Duration</p>
                <span className="text-primary font-bold text-sm">5s</span>
              </div>
              <div className="relative w-full h-1 bg-white/10 rounded-full">
                <div className="absolute h-1 bg-primary/80 rounded-full shadow-[0_0_8px_rgba(252,211,77,0.5)]" style={{ width: '40%' }}></div>
                <div className="absolute h-4 w-4 bg-primary rounded-full -top-1.5 shadow-[0_0_10px_rgba(252,211,77,0.6)] cursor-pointer hover:scale-110 transition-transform" style={{ left: '40%' }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* General */}
        <section>
          <h3 className="text-xs font-bold text-white/60 uppercase tracking-widest mb-3 ml-1">General</h3>
          <div className="glass-panel rounded-2xl p-4 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Bell size={20} className="text-primary/70" />
                <p className="text-white/90 font-medium text-sm">Notifications</p>
              </div>
              <Switch checked={false} />
            </div>
             <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                 <Music size={20} className="text-primary/70" />
                 <div>
                    <p className="text-white/90 font-medium text-sm">Background</p>
                    <p className="text-xs text-white/50 mt-0.5">Audio on lockscreen</p>
                 </div>
              </div>
              <Switch checked={true} />
            </div>
            
            <button className="w-full flex items-center justify-between pt-1 group">
              <div className="flex items-center space-x-3">
                <Moon size={20} className="text-primary/70 group-hover:text-primary transition-colors" />
                <span className="text-white/90 font-medium text-sm">Appearance</span>
              </div>
              <div className="flex items-center space-x-2 text-white/50">
                <span className="text-xs">System</span>
                <ChevronRight size={16} />
              </div>
            </button>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center mt-6 mb-4">
          <button className="text-primary font-semibold text-sm mb-4 hover:text-yellow-300 transition-colors">
             Log Out
          </button>
          <p className="text-[10px] text-white/30 leading-tight">
              Designed with intention for Sacred Forest Inc.<br/>
              © 2023 All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

const SettingsRow: React.FC<{ icon: React.ReactNode; label: string }> = ({ icon, label }) => (
  <button className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors group">
    <div className="flex items-center space-x-4">
      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-primary/70 group-hover:text-primary group-hover:shadow-[0_0_8px_rgba(252,211,77,0.3)] transition-all">
        {icon}
      </div>
      <span className="text-white/90 font-medium">{label}</span>
    </div>
    <ChevronRight size={18} className="text-white/30" />
  </button>
);

const ToggleRow: React.FC<{ label: string; subLabel?: string; defaultChecked?: boolean }> = ({ label, subLabel, defaultChecked = false }) => (
  <div className="flex items-center justify-between">
    <div className="pr-4">
      <p className="text-white/90 font-medium text-sm">{label}</p>
      {subLabel && <p className="text-xs text-white/50 mt-1">{subLabel}</p>}
    </div>
    <Switch checked={defaultChecked} />
  </div>
);

const Switch: React.FC<{ checked: boolean }> = ({ checked }) => (
  <div className={`w-11 h-6 rounded-full relative cursor-pointer transition-colors duration-300 ${checked ? 'bg-primary/90 shadow-[0_0_10px_rgba(252,211,77,0.4)]' : 'bg-white/10'}`}>
    <div className={`absolute top-[2px] left-[2px] w-5 h-5 bg-white rounded-full transition-transform duration-300 shadow-sm ${checked ? 'translate-x-5' : 'translate-x-0'}`} />
  </div>
);
