
import React, { useRef, useState } from 'react';
import { ZodiacInfo } from '../types';
import { BOOTH_NO, QR_CODE_DATA, LOGO_DATA } from '../constants';

interface ResultProps {
  zodiac: ZodiacInfo;
  onRestart: () => void;
}

const Result: React.FC<ResultProps> = ({ zodiac, onRestart }) => {
  const posterRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const savePoster = async () => {
    if (!posterRef.current) return;
    setIsGenerating(true);
    try {
      // @ts-ignore
      const canvas = await html2canvas(posterRef.current, {
        useCORS: true,
        scale: 2,
        backgroundColor: '#020617',
        logging: false
      });
      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `MediumBank_Laboratory_Personality_${zodiac.name}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Failed to generate poster', err);
      alert('海报生成失败，请长按屏幕截屏保存');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="h-full flex flex-col space-y-6">
      <div className="text-center space-y-2 mb-2">
        <h2 className="text-orange-500 font-bold uppercase tracking-widest text-xs">Personality Report</h2>
        <p className="text-slate-400 text-sm">你的实验室人格已生成</p>
      </div>

      {/* Poster Area */}
      <div 
        ref={posterRef}
        className="w-full aspect-[2/3] glass-card rounded-3xl overflow-hidden flex flex-col relative border-orange-500/20 shadow-2xl animate-in zoom-in duration-700"
      >
        {/* Poster Header */}
        <div className="p-6 pb-0 flex justify-between items-start">
          <div className="space-y-1">
            <h3 className="text-3xl font-black text-white">{zodiac.name}</h3>
            <div className="flex gap-2">
              {zodiac.keywords.map((kw, i) => (
                <span key={i} className="text-[10px] px-2 py-0.5 rounded-full border border-orange-500/50 text-orange-400 bg-orange-500/5">
                  #{kw}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white/95 px-3 py-1.5 rounded-xl shadow-md flex items-center justify-center">
            <img src={LOGO_DATA} alt="MB" className="h-6 object-contain" />
          </div>
        </div>

        {/* Poster Content / Image */}
        <div className="flex-1 flex flex-col items-center justify-center p-6 space-y-4">
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden group border border-white/5">
            <img 
              src={zodiac.placeholderImg} 
              alt={zodiac.name}
              className="w-full h-full object-cover"
              crossOrigin="anonymous"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent flex items-end p-4">
              <p className="text-sm text-slate-100 leading-relaxed font-bold tracking-wide">
                “{zodiac.description}”
              </p>
            </div>
          </div>
        </div>

        {/* Poster Footer */}
        <div className="p-6 pt-0 bg-slate-900/60 flex items-center justify-between border-t border-white/5 backdrop-blur-md">
          <div className="space-y-1">
            <p className="text-orange-500 font-black text-xl italic tracking-tighter">展位号：{BOOTH_NO}</p>
            <p className="text-[10px] text-slate-400 font-medium">长按识别 · 关注迈邦官方平台</p>
            <p className="text-[9px] text-slate-600 uppercase tracking-tighter font-bold">Bio-Processing Solution Leader</p>
          </div>
          <div className="w-20 h-20 bg-white p-1 rounded-xl shadow-xl border border-white/20">
             <img 
               src={QR_CODE_DATA} 
               alt="MediumBank Official QR" 
               className="w-full h-full object-contain"
             />
          </div>
        </div>

        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-orange-500/10 rounded-bl-full border-b border-l border-orange-500/20 pointer-events-none"></div>
      </div>

      <div className="space-y-4 pb-8">
        <button 
          onClick={savePoster}
          disabled={isGenerating}
          className="w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 disabled:from-slate-700 disabled:to-slate-800 rounded-2xl font-bold text-lg shadow-xl shadow-orange-900/40 transition-all active:scale-95 flex items-center justify-center gap-2"
        >
          {isGenerating ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              实验室报告处理中...
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              保存海报分享至圈内
            </>
          )}
        </button>

        <button 
          onClick={onRestart}
          className="w-full py-4 bg-slate-900/50 border border-slate-700 hover:border-slate-500 hover:bg-slate-800 rounded-2xl font-bold text-slate-400 transition-all active:scale-95"
        >
          重新探索自我
        </button>

        <p className="text-center text-[10px] text-slate-600 font-bold tracking-[0.2em] uppercase opacity-40">
          Powered by MediumBank Laboratory Insights
        </p>
      </div>
    </div>
  );
};

export default Result;
