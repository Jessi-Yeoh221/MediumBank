
import React from 'react';
import { THEME_COLOR, BOOTH_NO, LOGO_DATA } from '../constants';

interface HomeProps {
  onStart: () => void;
}

const Home: React.FC<HomeProps> = ({ onStart }) => {
  return (
    <div className="h-full flex flex-col items-center justify-between py-12 text-center">
      <div className="w-full space-y-8 animate-in fade-in slide-in-from-top duration-1000">
        {/* Official Logo */}
        <div className="flex justify-center mb-4">
          <div className="bg-white/90 px-6 py-3 rounded-2xl shadow-xl backdrop-blur-sm flex items-center justify-center border border-white/50">
            <img src={LOGO_DATA} alt="MediumBank" className="h-10 object-contain" />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-orange-500 font-bold tracking-widest text-lg uppercase">Laboratory Personality Test</h2>
          <h1 className="text-4xl font-extrabold tracking-tighter leading-tight">
            测测你的<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              实验室人格
            </span>
          </h1>
        </div>

        <div className="relative inline-block px-8 py-3 glass-card rounded-full border-orange-500/30">
          <p className="text-orange-400 font-medium">迈邦展位号：<span className="font-bold text-white text-xl ml-1">{BOOTH_NO}</span></p>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full animate-ping"></div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center space-y-6 animate-in fade-in slide-in-from-bottom duration-1000">
        <div className="float">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke={THEME_COLOR} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-50">
            <path d="M4.5 16.5c-1.5 1.26-2 3.43-1.26 4.93s2.92 1.83 4.42 1.09L12 18.5l4.34 4.02c1.5.74 3.68.41 4.42-1.09s.24-3.67-1.26-4.93L15 12.5V2h-6v10.5l-4.5 4z" />
          </svg>
        </div>

        <button 
          onClick={onStart}
          className="w-full py-5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl font-bold text-xl shadow-2xl hover:scale-105 active:scale-95 transition-all orange-glow"
        >
          开始测试
        </button>
        
        <p className="text-slate-500 text-sm">MediumBank · 生物工艺介质领导者</p>
      </div>
    </div>
  );
};

export default Home;
