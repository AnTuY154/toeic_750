import type { DiagnosticAttempt } from '@/domain/diagnostic/types';

type StoredSession = {
  id: string;
  startedAt: string;
  completedAt?: string;
  coverage: 'reading_only';
};

const SESSIONS_KEY = 'toeic750.diagnostic.sessions';
const ATTEMPTS_KEY = 'toeic750.diagnostic.attempts';

function readJson<T>(key: string, fallback: T): T {
  if (typeof localStorage === 'undefined') return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function writeJson<T>(key: string, value: T) {
  if (typeof localStorage === 'undefined') return;
  localStorage.setItem(key, JSON.stringify(value));
}

export async function createDiagnosticSession(): Promise<string> {
  const id = 'diag-' + Date.now();
  const sessions = readJson<StoredSession[]>(SESSIONS_KEY, []);
  sessions.push({
    id,
    startedAt: new Date().toISOString(),
    coverage: 'reading_only',
  });
  writeJson(SESSIONS_KEY, sessions);
  return id;
}

export async function saveAttempt(sessionId: string, attempt: DiagnosticAttempt) {
  const attempts = readJson<Array<DiagnosticAttempt & { sessionId: string; attemptedAt: string }>>(
    ATTEMPTS_KEY,
    []
  );
  attempts.push({
    ...attempt,
    sessionId,
    attemptedAt: new Date().toISOString(),
  });
  writeJson(ATTEMPTS_KEY, attempts);
}

export async function completeDiagnosticSession(sessionId: string) {
  const sessions = readJson<StoredSession[]>(SESSIONS_KEY, []);
  const next = sessions.map((session) =>
    session.id === sessionId
      ? { ...session, completedAt: new Date().toISOString() }
      : session
  );
  writeJson(SESSIONS_KEY, next);
}
