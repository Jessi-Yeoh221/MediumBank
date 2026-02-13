
import React, { useState, useCallback, useMemo } from 'react';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Result from './components/Result';
import { AppState, ElementType, ZodiacInfo } from './types';
import { QUESTIONS, ZODIACS } from './constants';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<AppState>('HOME');
  const [answers, setAnswers] = useState<ElementType[]>([]);
  const [resultZodiac, setResultZodiac] = useState<ZodiacInfo | null>(null);

  const startQuiz = useCallback(() => {
    setAnswers([]);
    setResultZodiac(null);
    setCurrentStep('QUIZ');
  }, []);

  const handleAnswer = useCallback((element: ElementType) => {
    setAnswers((prev) => {
      const newAnswers = [...prev, element];
      if (newAnswers.length === QUESTIONS.length) {
        // Calculate result
        const counts: Record<string, number> = {
          [ElementType.FIRE]: 0,
          [ElementType.EARTH]: 0,
          [ElementType.AIR]: 0,
          [ElementType.WATER]: 0,
        };
        newAnswers.forEach(e => counts[e]++);
        
        let dominantElement = ElementType.FIRE;
        let maxCount = -1;
        
        Object.keys(counts).forEach(e => {
          if (counts[e] > maxCount) {
            maxCount = counts[e];
            dominantElement = e as ElementType;
          }
        });

        // Random zodiac from the dominant group
        const group = ZODIACS[dominantElement];
        const randomZodiac = group[Math.floor(Math.random() * group.length)];
        
        setResultZodiac(randomZodiac);
        setCurrentStep('RESULT');
      }
      return newAnswers;
    });
  }, []);

  const restart = useCallback(() => {
    setCurrentStep('HOME');
  }, []);

  return (
    <div className="min-h-screen biotech-bg text-white overflow-hidden flex flex-col items-center justify-center">
      {/* Decorative background elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-orange-600/10 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-orange-600/10 blur-[100px] rounded-full"></div>
      </div>

      <main className="relative z-10 w-full max-w-md h-screen overflow-y-auto px-6 py-8">
        {currentStep === 'HOME' && <Home onStart={startQuiz} />}
        {currentStep === 'QUIZ' && (
          <Quiz 
            currentQuestionIndex={answers.length} 
            onSelect={handleAnswer} 
          />
        )}
        {currentStep === 'RESULT' && resultZodiac && (
          <Result zodiac={resultZodiac} onRestart={restart} />
        )}
      </main>
    </div>
  );
};

export default App;
