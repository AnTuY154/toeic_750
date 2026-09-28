# 750 Lab — Adaptive TOEIC Learning

A local-first React Native / Expo project for building a personal TOEIC learning system over time.

> This app is not affiliated with or endorsed by ETS. TOEIC is a trademark of ETS.

## Current milestone: Day 0 baseline diagnostic

The repository starts with diagnostic infrastructure only. **Today is not treated as a Daily Knowledge Day**, so the app does not create a Daily Learning Pack or end-of-day knowledge summary yet.

Implemented in this foundation:

- Expo Router + TypeScript strict mode
- Expo SQLite persistence
- original Reading baseline questions across Parts 5, 6 and 7
- answer + confidence + response-time capture
- skill-level evidence aggregation
- explicit `insufficient_evidence` state
- no fake raw-to-scaled TOEIC conversion
- CI skeleton and EAS profiles

Listening is deliberately not inferred from Reading performance. A later diagnostic update will add real-audio input and targeted listening error probes. Until then, the app reports the baseline as `reading_only` rather than claiming an overall TOEIC level.

## Stack

- Expo SDK 57
- React Native 0.86
- React 19.2
- Expo Router
- Expo SQLite
- TypeScript strict
- ESLint
- Node built-in unit tests

## Run locally

```bash
npm install
npm run typecheck
npm run lint
npm test
npx expo start
```

## Android preview build

```bash
npx eas build --platform android --profile preview
```

The `preview` profile outputs an APK suitable for direct installation when EAS credentials/project configuration are available.

## Development model

Day 0: baseline diagnostic only.

From the first knowledge file onward, each learning day will be layered onto this same repository and database with migrations, Daily Packs, retrieval practice, review scheduling, error history and regression protection.
