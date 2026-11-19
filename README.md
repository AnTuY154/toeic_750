# 750 Lab — TOEIC Learning Platform

A Vietnamese-first TOEIC Listening & Reading learning website built with Expo, React Native Web and Expo Router.

## Learning principles

Every lesson follows the same order:

1. **Knowledge first** — explain the grammar, vocabulary or test skill.
2. **Examples** — show how the rule appears in workplace English.
3. **Practice** — answer questions tied to the lesson just studied.
4. **Feedback** — show the correct answer and explain why each choice works or fails.
5. **Review** — revisit weak concepts and vocabulary.

## Learning roadmap

The site groups learning into five pedagogical stages. All 20 roadmap topics now have complete lesson content, examples, vocabulary and linked practice questions:

- 0–150: Foundation — sentence structure, parts of speech, basic workplace vocabulary.
- 151–300: Beginner — basic tenses, prepositions, question-response.
- 301–450: Elementary+ — word forms, passive voice, short conversations and text completion.
- 451–600: Intermediate — clauses, conjunctions, talks, collocations and linked information.
- 601–750: Upper intermediate — paraphrase, inference, distractors, multiple passages and timed practice.

These are learning milestones designed by 750 Lab, **not official ETS score bands**. The official TOEIC Listening & Reading score range is 10–990; Listening and Reading are reported separately.

## Main sections

- Home dashboard and learning roadmap
- Knowledge library, grouped by level, with all 20 lesson packs available across the five milestones
- Lesson view with theory, examples and vocabulary before its linked exercise
- Practice with answer feedback and score summary
- Vocabulary flashcards aggregated from lesson vocabulary, with meaning, part of speech, topic and example
- Listening studio with speaker-labelled scripts, questions, translation and vocabulary. Scripts are provided for the learner to convert to audio with their preferred text-to-speech tool.

## TOEIC format reference

The standard TOEIC Listening & Reading test has 200 multiple-choice questions:
- Listening: 100 questions, approximately 45 minutes (Parts 1–4)
- Reading: 100 questions, 75 minutes (Parts 5–7)

Reference: https://www.ets.org/toeic/about/listening-reading.html

All learning content and practice questions in this project are original study material and are not presented as official ETS questions. TOEIC is a registered trademark of ETS. This project is not affiliated with or endorsed by ETS.

## Development

Requires Node.js >= 22.13.

```bash
npm install
npm run typecheck
npm run lint
npm test
npm run build:web
```

The web export is configured for GitHub Pages at `/toeic_750`.
