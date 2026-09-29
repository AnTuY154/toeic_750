/// <reference types="node" />
import assert from 'node:assert/strict';
import test from 'node:test';
import { evaluateDiagnostic } from '../src/domain/diagnostic/evaluate.ts';
import type { DiagnosticAttempt } from '../src/domain/diagnostic/types.ts';

const attempts: DiagnosticAttempt[] = [
  { questionId: '1', domain: 'reading', skill: 'grammar', selectedAnswer: 0, correctAnswer: 0, confidence: 'sure', responseTimeMs: 1200 },
  { questionId: '2', domain: 'reading', skill: 'grammar', selectedAnswer: 1, correctAnswer: 1, confidence: 'guess', responseTimeMs: 2400 },
  { questionId: '3', domain: 'reading', skill: 'vocabulary', selectedAnswer: 2, correctAnswer: 1, confidence: 'sure', responseTimeMs: 1800 },
];

test('evaluates accuracy without inventing a TOEIC scaled score', () => {
  const result = evaluateDiagnostic(attempts);
  assert.equal(result.total, 3);
  assert.equal(result.correct, 2);
  assert.equal(result.accuracy, 2 / 3);
  assert.equal(result.coverage, 'reading_only');
  assert.equal('toeicScore' in result, false);
});

test('captures confidence mismatch signals', () => {
  const result = evaluateDiagnostic(attempts);
  assert.equal(result.lowConfidenceCorrect, 1);
  assert.equal(result.highConfidenceIncorrect, 1);
});

test('requires repeated evidence before assigning a skill status', () => {
  const result = evaluateDiagnostic(attempts);
  const vocabulary = result.skillEvidence.find((item) => item.skill === 'vocabulary');
  const grammar = result.skillEvidence.find((item) => item.skill === 'grammar');
  assert.equal(vocabulary?.status, 'insufficient_evidence');
  assert.equal(grammar?.status, 'strong');
});