
export enum ElementType {
  FIRE = '火',
  EARTH = '土',
  AIR = '风',
  WATER = '水'
}

export interface Option {
  id: string;
  text: string;
  element: ElementType;
}

export interface Question {
  id: number;
  title: string;
  options: Option[];
}

export interface ZodiacInfo {
  name: string;
  element: ElementType;
  keywords: string[];
  description: string;
  placeholderImg: string;
}

export type AppState = 'HOME' | 'QUIZ' | 'RESULT';
