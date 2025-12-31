import React from 'react';
import { Music, Wind, Bell, Droplets, Volume2, Waves, Play, Pause } from 'lucide-react';

export const MandalaScreen: React.FC = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  return (
    <div className="h-full flex flex-col items-center justify-between py-6 px-4 max-w-md mx-auto relative overflow-hidden">
      
      {/* Header */}
      <div className="text-center z-10 pt-4">
        <h3 className="text-primary text-xs font-bold tracking-[0.2em] mb-2 uppercase">Sacred Forest</h3>
        <h1 className="text-3xl font-display text-primary-dark drop-shadow-[0_0_15px_rgba(252,211,77,0.3)]">Sonic Mandala</h1>
      </div>

      {/* Mandala Graphic */}
      <div className="relative w-full aspect-square max-w-[340px] flex items-center justify-center my-4">
        
        {/* Central Glowing Core */}
        <div className={`absolute w-40 h-40 rounded-full border-[1px] border-primary/50 shadow-[0_0_40px_rgba(252,211,77,0.3)] flex items-center justify-center ${isPlaying ? 'animate-pulse-slow' : ''}`}>
           <div className="w-32 h-32 rounded-full border-[0.5px] border-primary/30"></div>
           <div className="absolute w-full h-full rounded-full border-t border-primary/60 animate-spin-slow"></div>
           <div className="absolute w-[90%] h-[90%] rounded-full border-b border-primary/40 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }}></div>
        </div>

        {/* Orbiting Icons */}
        {/* Harp - Top Right */}
        <MandalaNode icon={<Music size={20} />} label="Harp" position="top-right" />
        
        {/* Frequency - Right */}
        <MandalaNode icon={<Waves size={20} />} label="Frequency" position="right" />
        
        {/* Gong - Bottom Right */}
        <MandalaNode icon={<Bell size={20} />} label="Gong" position="bottom-right" />
        
        {/* Rain - Bottom Left */}
        <MandalaNode icon={<Droplets size={20} />} label="Rain" position="bottom-left" />
        
        {/* Volume - Left */}
        <MandalaNode icon={<Volume2 size={20} />} label="Volume" position="left" />
        
        {/* Harp - Top Left */}
        <MandalaNode icon={<Wind size={20} />} label="Flute" position="top-left" />

        {/* Central Geometric Pattern (SVG Simulation) */}
        <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full opacity-30 pointer-events-none animate-spin-slow" style={{ animationDuration: '60s' }}>
          <circle cx="100" cy="100" r="98" fill="none" stroke="url(#goldGradient)" strokeWidth="0.5" strokeDasharray="4 4" />
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FCD34D" stopOpacity="0" />
              <stop offset="50%" stopColor="#FCD34D" stopOpacity="1" />
              <stop offset="100%" stopColor="#FCD34D" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[...Array(12)].map((_, i) => (
             <ellipse key={i} cx="100" cy="100" rx="40" ry="90" fill="none" stroke="#D4AF37" strokeWidth="0.5" transform={`rotate(${i * 30} 100 100)`} opacity="0.4" />
          ))}
        </svg>

      </div>

      {/* Controls */}
      <div className="w-full space-y-8 px-4 z-10 mb-8">
        <Slider label="Orbit Speed" value={50} />
        <Slider label="Atmosphere" value={25} />

        <div className="flex justify-center pt-4">
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-20 h-20 rounded-full bg-gradient-to-b from-primary to-yellow-600 shadow-[0_0_30px_rgba(252,211,77,0.4)] flex items-center justify-center text-stone-900 hover:scale-105 active:scale-95 transition-all"
          >
            {isPlaying ? <Pause size={32} fill="currentColor" /> : <Play size={32} fill="currentColor" className="ml-1" />}
          </button>
        </div>
      </div>

    </div>
  );
};

const MandalaNode: React.FC<{ icon: React.ReactNode; label: string; position: string }> = ({ icon, label, position }) => {
  let positionClasses = "";
  
  // Simple radial positioning based on clock positions
  switch(position) {
    case 'top-right': positionClasses = "top-[10%] right-[20%]"; break;
    case 'right': positionClasses = "top-[40%] right-[5%]"; break;
    case 'bottom-right': positionClasses = "bottom-[15%] right-[20%]"; break;
    case 'bottom-left': positionClasses = "bottom-[15%] left-[20%]"; break;
    case 'left': positionClasses = "top-[40%] left-[5%]"; break;
    case 'top-left': positionClasses = "top-[10%] left-[20%]"; break;
  }

  return (
    <div className={`absolute ${positionClasses} flex flex-col items-center gap-2 animate-float`}>
      <div className="w-12 h-12 rounded-full border border-primary/60 bg-stone-900/50 backdrop-blur-sm flex items-center justify-center text-primary shadow-[0_0_15px_rgba(252,211,77,0.15)] hover:bg-primary hover:text-stone-900 transition-colors cursor-pointer">
        {icon}
      </div>
      <span className="text-[10px] uppercase tracking-wider text-primary/80 font-medium">{label}</span>
    </div>
  );
};

const Slider: React.FC<{ label: string; value: number }> = ({ label, value }) => (
  <div className="w-full">
    <div className="flex justify-between mb-2">
      <span className="text-primary-dark font-display font-medium text-lg">{label}</span>
      <span className="text-white/60 text-sm font-sans">{value}%</span>
    </div>
    <div className="relative h-1 w-full bg-white/10 rounded-full">
       <div className="absolute top-0 left-0 h-full bg-primary shadow-[0_0_10px_rgba(252,211,77,0.5)] rounded-full" style={{ width: `${value}%` }}></div>
       <div className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-stone-900 border-2 border-primary rounded-full shadow-[0_0_10px_rgba(252,211,77,0.8)] cursor-pointer hover:scale-110 transition-transform" style={{ left: `${value}%` }}>
         <div className="absolute inset-0 m-auto w-1.5 h-1.5 bg-primary rounded-full"></div>
       </div>
    </div>
  </div>
);
