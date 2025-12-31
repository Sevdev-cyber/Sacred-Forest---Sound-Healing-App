import React from 'react';
import { ArrowLeft, Filter, Plus, Play, SkipForward, PlusCircle } from 'lucide-react';
import { ALL_TOOLS } from '../constants';
import { Instrument } from '../types';

export const ToolsScreen: React.FC = () => {
  return (
    <div className="min-h-screen pb-32">
       {/* App Bar */}
      <div className="sticky top-0 z-50 flex items-center justify-between px-4 py-4 backdrop-blur-md bg-stone-900/80 border-b border-white/5">
        <button className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-white hover:bg-white/10 transition active:scale-95">
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-xl font-display font-semibold tracking-tight text-white drop-shadow-[0_0_10px_rgba(252,211,77,0.3)]">Sacred Tools</h1>
        <button className="flex items-center justify-center px-4 h-10 rounded-full bg-white/5 text-[#cbc190] text-sm font-bold tracking-wide hover:bg-white/10 transition font-sans">
          Filter
        </button>
      </div>

      {/* Filter Chips */}
      <div className="flex gap-3 px-4 py-6 overflow-x-auto no-scrollbar">
        {['All', 'Wind', 'Percussion', 'Synth', 'Chimes'].map((filter, i) => (
          <button 
            key={filter}
            className={`
              flex items-center justify-center h-9 px-6 rounded-full font-bold text-xs uppercase tracking-wide shrink-0 transition transform active:scale-95
              ${i === 0 
                ? 'bg-primary text-stone-900 shadow-[0_0_15px_rgba(252,211,77,0.3)]' 
                : 'bg-white/5 border border-white/10 text-white/70 hover:bg-white/10'}
            `}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Masonry Grid (Simulated with columns) */}
      <div className="px-4 columns-2 gap-4 space-y-4">
        {ALL_TOOLS.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>

      {/* Floating Player */}
      <div className="fixed bottom-24 left-0 right-0 z-50 px-4">
        <div className="mx-auto max-w-md w-full rounded-2xl bg-[#1e1c15]/95 backdrop-blur-xl border border-white/10 p-3 shadow-2xl flex items-center gap-4">
          <div className="relative shrink-0">
            <div 
              className="w-12 h-12 rounded-lg bg-cover bg-center shadow-lg border border-white/10" 
              style={{ backgroundImage: `url(https://lh3.googleusercontent.com/aida-public/AB6AXuAH9n5Z2_mMflv2wSnFrNiMKk3JwxAH5HJXxMWxv3zwwKARTQvKrzeuVxaFJ4aRZLBJr9Y1JHDq_3itGBcu0PNdZAXLEE7X_D_BKWSpM81VU46OJCr2ke30SYd07BCtd7IGdQrReQk-HrzEkOIEGTLWk7HHEc4f_gV86h8Yyq5ADbf4i-QVkEhAH5vVmwvoLZtn2kQkIdHwVNu2CBSxhBysvBnzv-UKhtDxaq0y7glLWECkvKdFFEGbvDCeP2_drqt9v0xdZbmL2MY)` }}
            ></div>
            <div className="absolute -bottom-1 -right-1 flex gap-0.5 items-end justify-center w-5 h-5 bg-stone-900 rounded-full border border-white/10 p-1">
              <div className="w-0.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
              <div className="w-0.5 h-2.5 bg-primary rounded-full animate-pulse delay-75"></div>
              <div className="w-0.5 h-1.5 bg-primary rounded-full animate-pulse delay-150"></div>
            </div>
          </div>
          <div className="flex-1 min-w-0 flex flex-col justify-center">
            <p className="text-white text-sm font-bold leading-tight truncate font-display">Current Mandala</p>
            <p className="text-primary/70 text-xs font-normal leading-normal truncate font-sans">3 Instruments Active</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 flex items-center justify-center rounded-full text-white/50 hover:text-white transition">
              <SkipForward size={20} fill="currentColor" />
            </button>
            <button className="w-10 h-10 flex shrink-0 items-center justify-center rounded-full bg-primary text-stone-900 shadow-[0_0_15px_rgba(252,211,77,0.5)] hover:scale-105 transition active:scale-95">
              <Play size={20} fill="currentColor" className="ml-0.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ToolCard: React.FC<{ tool: Instrument }> = ({ tool }) => {
  // Randomize aspect ratio slightly for masonry feel
  const isTall = Math.random() > 0.5;

  return (
    <div className="break-inside-avoid flex flex-col gap-3 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-3 group hover:bg-white/10 transition duration-300">
      <div className={`relative w-full ${isTall ? 'aspect-[3/4]' : 'aspect-square'} rounded-xl overflow-hidden`}>
        <div 
          className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-110" 
          style={{ backgroundImage: `url(${tool.imageUrl})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        {(tool.chakra || tool.element || tool.frequency) && (
          <div className="absolute bottom-2 left-2 right-2">
            <span className="inline-block px-2 py-0.5 rounded-md bg-black/40 backdrop-blur-md text-[10px] font-bold text-primary uppercase tracking-wider border border-white/10">
              {tool.chakra || tool.element || 'Sound'}
            </span>
          </div>
        )}
      </div>
      
      <div>
        <h3 className="text-base font-display font-bold leading-tight text-white mb-0.5">{tool.name}</h3>
        <p className="text-[#cbc190] text-[10px] font-sans leading-tight opacity-80">{tool.description}</p>
      </div>

      <button className={`
        w-full py-2.5 rounded-lg font-bold text-[10px] uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all
        ${tool.chakra || tool.element 
          ? 'bg-primary text-stone-900 shadow-[0_0_10px_rgba(252,211,77,0.2)] hover:shadow-[0_0_15px_rgba(252,211,77,0.4)]' 
          : 'bg-white/5 border border-primary/30 text-primary hover:bg-white/10'}
      `}>
        {tool.chakra || tool.element ? <PlusCircle size={14} /> : <Plus size={14} />}
        {tool.chakra || tool.element ? 'Add to Mandala' : 'Add'}
      </button>
    </div>
  );
};
