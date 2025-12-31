import React from 'react';
import { ArrowLeft, SlidersHorizontal, Diamond, ArrowRight } from 'lucide-react';
import { INSTRUMENTS } from '../constants';

export const GalleryScreen: React.FC = () => {
  return (
    <div className="min-h-screen pb-24">
      <header className="px-6 py-6 flex items-center justify-between sticky top-0 z-20 bg-gradient-to-b from-stone-900 via-stone-900/90 to-transparent">
        <button className="text-primary hover:text-white transition-colors">
          <ArrowLeft size={28} />
        </button>
        <h1 className="font-display text-2xl tracking-wide text-gold-gradient drop-shadow-md">Gallery of Souls</h1>
        <button className="text-primary hover:text-white transition-colors">
          <SlidersHorizontal size={24} />
        </button>
      </header>

      <main className="px-5">
        <div className="text-center my-6 px-4">
          <p className="font-serif italic text-lg leading-relaxed text-primary/90 drop-shadow-md">
            “Choose an instrument to awaken its spirit within the sacred forest.”
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 max-w-2xl mx-auto">
          {INSTRUMENTS.map((instrument) => (
            <div key={instrument.id} className="flex flex-col items-center group">
              <div className="relative w-full aspect-[4/3] mb-4 rounded-3xl overflow-hidden border border-primary/30 shadow-[0_0_20px_rgba(212,175,55,0.15)] group-hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-500">
                {instrument.isPremium && (
                   <div className="absolute top-3 left-3 z-10 bg-gradient-to-r from-yellow-600 to-yellow-400 px-2 py-0.5 rounded flex items-center gap-1 shadow-lg">
                    <Diamond size={10} className="text-black fill-black" />
                    <span className="text-[10px] font-bold tracking-wider text-black">PREMIUM</span>
                  </div>
                )}
                <img 
                  src={instrument.imageUrl} 
                  alt={instrument.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent"></div>
              </div>
              
              <h3 className="font-display text-xl text-primary-dark mb-1 drop-shadow-md group-hover:text-primary transition-colors">{instrument.name}</h3>
              <p className="text-xs uppercase tracking-widest text-stone-300 font-light mb-4">{instrument.description}</p>
              
              <button className={`
                relative overflow-hidden rounded-full px-8 py-2.5 text-sm font-semibold tracking-wide flex items-center gap-1 transition-all duration-300
                ${instrument.price 
                  ? 'bg-transparent border border-primary/60 text-primary hover:bg-primary/10' 
                  : 'bg-stone-900/40 border border-primary text-primary shadow-[0_0_12px_rgba(212,175,55,0.2)] hover:shadow-[0_0_15px_rgba(212,175,55,0.4)]'}
              `}>
                {instrument.price ? `Unlock ${instrument.price}` : (
                  <>
                    Play Sample <ArrowRight size={14} className="ml-1" />
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
