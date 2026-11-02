import { day1 } from '@/content/day1';
import { day2 } from '@/content/day2';

export type VocabularyCard = {
  id: string;
  day: number;
  word: string;
  pos: string;
  meaning: string;
  chunks: readonly string[];
  example: string;
  family?: string;
  note?: string;
};

function fromDay(
  day: number,
  items: readonly {
    word: string;
    pos: string;
    meaning: string;
    chunks: readonly string[];
    example: string;
    family?: string;
    note?: string;
  }[]
): VocabularyCard[] {
  return items.map((item, index) => ({
    id: `d${day}-v-${String(index + 1).padStart(2, '0')}`,
    day,
    ...item,
  }));
}

const day1Vocabulary = fromDay(1, day1.vocabulary);
const day2Vocabulary = fromDay(2, day2.vocabulary);

export const vocabularyDays = [
  { day: 1, title: 'Scheduling', cards: day1Vocabulary, status: 'ready' as const },
  { day: 2, title: 'Office & Equipment', cards: day2Vocabulary, status: 'ready' as const },
  { day: 3, title: 'Waiting for source', cards: [] as VocabularyCard[], status: 'waiting' as const },
  { day: 4, title: 'Waiting for source', cards: [] as VocabularyCard[], status: 'waiting' as const },
  { day: 5, title: 'Waiting for source', cards: [] as VocabularyCard[], status: 'waiting' as const },
  { day: 6, title: 'Waiting for source', cards: [] as VocabularyCard[], status: 'waiting' as const },
  { day: 7, title: 'Waiting for source', cards: [] as VocabularyCard[], status: 'waiting' as const },
] as const;

export const allVocabulary = vocabularyDays.flatMap((item) => item.cards);
