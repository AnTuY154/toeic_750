import * as SQLite from 'expo-sqlite';
import { migration001 } from './migrations/001_initial';
import type { DiagnosticAttempt } from '@/domain/diagnostic/types';

const DB_NAME = 'toeic750.db';

export async function openDatabase() {
  const db = await SQLite.openDatabaseAsync(DB_NAME);
  await db.execAsync(migration001);
  return db;
}

export async function createDiagnosticSession(): Promise<string> {
  const db = await openDatabase();
  const id = `diag-${Date.now()}`;
  await db.runAsync(
    'INSERT INTO diagnostic_session (id, started_at, coverage) VALUES (?, ?, ?)',
    id,
    new Date().toISOString(),
    'reading_only'
  );
  return id;
}

export async function saveAttempt(sessionId: string, attempt: DiagnosticAttempt) {
  const db = await openDatabase();
  await db.runAsync(
    `INSERT INTO question_attempt
      (id, session_id, question_id, domain, skill, selected_answer, correct_answer, confidence, response_time_ms, attempted_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    `attempt-${sessionId}-${attempt.questionId}`,
    sessionId,
    attempt.questionId,
    attempt.domain,
    attempt.skill,
    attempt.selectedAnswer,
    attempt.correctAnswer,
    attempt.confidence,
    attempt.responseTimeMs,
    new Date().toISOString()
  );
}

export async function completeDiagnosticSession(sessionId: string) {
  const db = await openDatabase();
  await db.runAsync(
    'UPDATE diagnostic_session SET completed_at = ? WHERE id = ?',
    new Date().toISOString(),
    sessionId
  );
}