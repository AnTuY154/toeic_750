import type { DiagnosticAttempt, DiagnosticResult, SkillEvidence } from './types';

export function evaluateDiagnostic(attempts: readonly DiagnosticAttempt[]): DiagnosticResult {
  const total = attempts.length;
  const correct = attempts.filter((a) => a.selectedAnswer === a.correctAnswer).length;
  const domains = new Set(attempts.map((a) => a.domain));
  const coverage = domains.has('reading') && domains.has('listening')
    ? 'reading_and_listening'
    : domains.has('listening') ? 'listening_only' : 'reading_only';

  const grouped = new Map<string, DiagnosticAttempt[]>();
  for (const attempt of attempts) {
    grouped.set(attempt.skill, [...(grouped.get(attempt.skill) ?? []), attempt]);
  }

  const skillEvidence: SkillEvidence[] = [...grouped.entries()].map(([skill, items]) => {
    const itemCorrect = items.filter((a) => a.selectedAnswer === a.correctAnswer).length;
    const accuracy = items.length === 0 ? 0 : itemCorrect / items.length;
    const status: SkillEvidence['status'] = items.length < 2
      ? 'insufficient_evidence'
      : accuracy >= 0.8 ? 'strong'
      : accuracy >= 0.6 ? 'improving'
      : 'weak';
    return {
      skill,
      evidenceCount: items.length,
      correctCount: itemCorrect,
      incorrectCount: items.length - itemCorrect,
      accuracy,
      status,
    };
  });

  return {
    total,
    correct,
    accuracy: total === 0 ? 0 : correct / total,
    coverage,
    skillEvidence,
    lowConfidenceCorrect: attempts.filter(
      (a) => a.selectedAnswer === a.correctAnswer && a.confidence !== 'sure'
    ).length,
    highConfidenceIncorrect: attempts.filter(
      (a) => a.selectedAnswer !== a.correctAnswer && a.confidence === 'sure'
    ).length,
  };
}