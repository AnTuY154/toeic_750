export const migration001 = `
PRAGMA journal_mode = WAL;

CREATE TABLE IF NOT EXISTS diagnostic_session (
  id TEXT PRIMARY KEY NOT NULL,
  started_at TEXT NOT NULL,
  completed_at TEXT,
  coverage TEXT NOT NULL DEFAULT 'reading_only'
);

CREATE TABLE IF NOT EXISTS question_attempt (
  id TEXT PRIMARY KEY NOT NULL,
  session_id TEXT NOT NULL,
  question_id TEXT NOT NULL,
  domain TEXT NOT NULL,
  skill TEXT NOT NULL,
  selected_answer INTEGER NOT NULL,
  correct_answer INTEGER NOT NULL,
  confidence TEXT NOT NULL,
  response_time_ms INTEGER NOT NULL,
  attempted_at TEXT NOT NULL,
  FOREIGN KEY(session_id) REFERENCES diagnostic_session(id)
);

CREATE INDEX IF NOT EXISTS idx_attempt_session ON question_attempt(session_id);
CREATE INDEX IF NOT EXISTS idx_attempt_skill ON question_attempt(skill);
`;