import test from 'node:test';
import assert from 'node:assert/strict';
import { allVocabulary, lessonLibrary, listeningScripts, practiceQuestions, starterLesson, toeicLevels, vocabularySeed } from '../src/content/toeicCurriculum.ts';

test('roadmap covers five progressive learning milestones from 0 to 750', () => {
  assert.equal(toeicLevels.length, 5);
  assert.deepEqual(toeicLevels.map((level) => level.range), ['0–150', '151–300', '301–450', '451–600', '601–750']);
  for (const level of toeicLevels) {
    assert.ok(level.lessons.length >= 4);
    assert.ok(level.outcomes.length >= 3);
  }
  assert.equal(lessonLibrary.length, 5);
  for (const level of toeicLevels) {
    assert.ok(level.lessons.some((lesson) => lessonLibrary.some((content) => content.id === lesson.id)), `missing lesson content for ${level.range}`);
  }
});

test('starter lesson presents knowledge and examples before linked practice', () => {
  assert.ok(starterLesson.sections.length >= 3);
  assert.ok(starterLesson.sections.every((section) => section.body.length > 20 && section.examples.length > 0));
  assert.ok(starterLesson.questions.length >= 3);
  assert.equal(practiceQuestions.length, starterLesson.questions.length);
});

test('vocabulary and listening scripts include learner support', () => {
  assert.ok(vocabularySeed.length >= 8);
  assert.ok(allVocabulary.length > vocabularySeed.length);
  assert.ok(allVocabulary.every((item) => item.topic && item.word && item.meaning));
  assert.ok(vocabularySeed.every((item) => item.word && item.meaning && item.pos && item.example));
  assert.ok(listeningScripts.length >= 2);
  assert.ok(listeningScripts.every((item) => item.script && item.translation && item.vocabulary.length > 0));
});
