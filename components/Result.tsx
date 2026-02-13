
import React, { useRef, useState } from 'react';
import { ZodiacInfo } from '../types';
import { BOOTH_NO, THEME_COLOR } from '../constants';

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
        backgroundColor: '#020617'
      });
      const link = document.createElement('a');
      link.download = `MediumBank_Laboratory_Personality_${zodiac.name}.png`;
      link.href = canvas.toDataURL('image/png');
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
          <div className="bg-white/90 px-2 py-1 rounded text-[10px] text-slate-900 font-bold">MediumBank</div>
        </div>

        {/* Poster Content / Image */}
        <div className="flex-1 flex flex-col items-center justify-center p-6 space-y-4">
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden group">
            <img 
              src={zodiac.placeholderImg} 
              alt={zodiac.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex items-end p-4">
              <p className="text-sm text-slate-200 leading-relaxed italic">
                "{zodiac.description}"
              </p>
            </div>
          </div>
        </div>

        {/* Poster Footer */}
        <div className="p-6 pt-0 bg-slate-900/30 flex items-center justify-between border-t border-white/5">
          <div className="space-y-1">
            <p className="text-orange-400 font-bold text-lg">展位号：{BOOTH_NO}</p>
            <p className="text-[10px] text-slate-500">关注公众号获取更多福利</p>
          </div>
          <div className="w-16 h-16 bg-white p-1 rounded-lg">
             {/* QR Code Placeholder */}
             <div className="w-full h-full bg-slate-100 flex items-center justify-center border border-slate-300">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-400 w-8 h-8">
                 <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
               </svg>
             </div>
          </div>
        </div>

        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-orange-500/10 rounded-bl-full border-b border-l border-orange-500/20"></div>
      </div>

      <div className="space-y-4 pb-8">
        <button 
          onClick={savePoster}
          disabled={isGenerating}
          className="w-full py-4 bg-orange-500 hover:bg-orange-600 disabled:bg-slate-700 rounded-2xl font-bold text-lg shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2"
        >
          {isGenerating ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              海报生成中...
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              保存海报
            </>
          )}
        </button>

        <button 
          onClick={onRestart}
          className="w-full py-4 bg-transparent border border-slate-700 hover:border-slate-500 rounded-2xl font-bold text-slate-300 transition-all active:scale-95"
        >
          重新测试
        </button>

        <p className="text-center text-[10px] text-slate-600 tracking-widest uppercase">
          MediumBank · 赋能生物制药工艺 · Bio-Processing Solution
        </p>
      </div>
    </div>
  );
};

export default Result;
