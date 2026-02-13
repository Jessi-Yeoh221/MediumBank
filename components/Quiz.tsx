
import React, { useState, useEffect } from 'react';
import { QUESTIONS, THEME_COLOR } from '../constants';
import { ElementType } from '../types';

interface QuizProps {
  currentQuestionIndex: number;
  onSelect: (element: ElementType) => void;
}

const Quiz: React.FC<QuizProps> = ({ currentQuestionIndex, onSelect }) => {
  const [animationClass, setAnimationClass] = useState('fade-in slide-in-from-right');
  const question = QUESTIONS[currentQuestionIndex];

  // Simple animation trigger when question changes
  useEffect(() => {
    setAnimationClass('fade-in slide-in-from-right duration-500');
    const timer = setTimeout(() => setAnimationClass(''), 500);
    return () => clearTimeout(timer);
  }, [currentQuestionIndex]);

  const handleOptionClick = (element: ElementType) => {
    onSelect(element);
  };

  if (!question) return null;

  const progress = ((currentQuestionIndex + 1) / QUESTIONS.length) * 100;

  return (
    <div className={`h-full flex flex-col justify-between py-6 ${animationClass} animate-in`}>
      <div className="space-y-6">
        {/* Progress Bar */}
        <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-orange-500 transition-all duration-300 shadow-[0_0_10px_#ED7700]" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-orange-500 font-mono text-sm tracking-widest">STEP {currentQuestionIndex + 1} / {QUESTIONS.length}</span>
          <div className="text-slate-500 text-xs">MediumBank IQ TEST</div>
        </div>

        <h2 className="text-2xl font-bold leading-snug mt-4">
          {question.title}
        </h2>
      </div>

      <div className="flex-1 flex flex-col justify-center space-y-4 mt-8">
        {question.options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleOptionClick(option.element)}
            className="w-full text-left p-5 glass-card rounded-2xl hover:bg-orange-500/10 border-transparent hover:border-orange-500/50 transition-all active:scale-[0.98] flex items-start gap-4"
          >
            <span className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center shrink-0 text-orange-500 font-bold text-sm">
              {option.id}
            </span>
            <span className="text-slate-200 font-medium pt-1">{option.text}</span>
          </button>
        ))}
      </div>

      <div className="mt-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900/50 rounded-full border border-slate-800">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-[10px] text-slate-500 uppercase tracking-widest">Biotech Processing...</span>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
