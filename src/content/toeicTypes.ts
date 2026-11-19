export type LessonQuestion = { prompt: string; choices: string[]; answer: number; explanation: string };
export type LessonContent = { id: string; title: string; level: string; objective: string; sections: { heading: string; body: string; examples: string[] }[]; vocabulary: { word: string; meaning: string; pos: string; example: string }[]; questions: LessonQuestion[] };
