export type Domain = 'reading' | 'listening';
export type Confidence = 'sure' | 'unsure' | 'guess';

export type DiagnosticQuestion = {
  id: string;
  domain: Domain;
  part: 5 | 6 | 7;
  skill: string;
  prompt: string;
  choices: readonly string[];
  correctAnswer: number;
  explanation: string;
};

export type DiagnosticAttempt = {
  questionId: string;
  domain: Domain;
  skill: string;
  selectedAnswer: number;
  correctAnswer: number;
  confidence: Confidence;
  responseTimeMs: number;
};

export type SkillEvidence = {
  skill: string;
  evidenceCount: number;
  correctCount: number;
  incorrectCount: number;
  accuracy: number;
  status: 'strong' | 'improving' | 'weak' | 'insufficient_evidence';
};

export type DiagnosticResult = {
  total: number;
  correct: number;
  accuracy: number;
  coverage: 'reading_only' | 'listening_only' | 'reading_and_listening';
  skillEvidence: SkillEvidence[];
  lowConfidenceCorrect: number;
  highConfidenceIncorrect: number;
};