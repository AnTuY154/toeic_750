import { useMemo, useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { AppNav } from '@/components/AppNav';
import { allVocabulary, vocabularyDays, type VocabularyCard } from '@/content/vocabulary';

type Rating = 'known' | 'review';
type DayFilter = 'all' | number;
const STORAGE_KEY = 'toeic750.vocabulary.ratings.v1';

function readRatings(): Record<string, Rating> {
  if (typeof localStorage === 'undefined') return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Record<string, Rating>) : {};
  } catch {
    return {};
  }
}

function saveRatings(value: Record<string, Rating>) {
  if (typeof localStorage === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
}

export default function VocabularyScreen() {
  const [filter, setFilter] = useState<DayFilter>('all');
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [ratings, setRatings] = useState<Record<string, Rating>>(() => readRatings());

  const cards = useMemo(() => {
    if (filter === 'all') return allVocabulary;
    return vocabularyDays.find((item) => item.day === filter)?.cards ?? [];
  }, [filter]);

  const card: VocabularyCard | undefined = cards[index];
  const known = allVocabulary.filter((item) => ratings[item.id] === 'known').length;
  const review = allVocabulary.filter((item) => ratings[item.id] === 'review').length;

  function chooseFilter(next: DayFilter) {
    setFilter(next);
    setIndex(0);
    setRevealed(false);
  }

  function nextCard() {
    if (cards.length === 0) return;
    setIndex((value) => (value + 1) % cards.length);
    setRevealed(false);
  }

  function previousCard() {
    if (cards.length === 0) return;
    setIndex((value) => (value - 1 + cards.length) % cards.length);
    setRevealed(false);
  }

  function rate(value: Rating) {
    if (!card) return;
    const next = { ...ratings, [card.id]: value };
    setRatings(next);
    saveRatings(next);
    nextCard();
  }

  return (
    <SafeAreaView style={s.safe}>
      <View style={s.shell}>
        <ScrollView contentContainerStyle={s.c}>
          <Text style={s.eyebrow}>VOCABULARY</Text>
          <Text style={s.title}>Flashcards</Text>
          <Text style={s.body}>Từ vựng được lấy trực tiếp từ nội dung từng ngày đã có trong 750 Lab.</Text>

          <View style={s.stats}>
            <View style={s.stat}><Text style={s.statBig}>{allVocabulary.length}</Text><Text style={s.statLabel}>Words</Text></View>
            <View style={s.stat}><Text style={s.statBig}>{known}</Text><Text style={s.statLabel}>Known</Text></View>
            <View style={s.stat}><Text style={s.statBig}>{review}</Text><Text style={s.statLabel}>Review</Text></View>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={s.filters}>
            <Pressable onPress={() => chooseFilter('all')} style={[s.chip, filter === 'all' && s.chipActive]}>
              <Text style={[s.chipText, filter === 'all' && s.chipTextActive]}>All · {allVocabulary.length}</Text>
            </Pressable>
            {vocabularyDays.map((item) => (
              <Pressable key={item.day} onPress={() => chooseFilter(item.day)} style={[s.chip, filter === item.day && s.chipActive]}>
                <Text style={[s.chipText, filter === item.day && s.chipTextActive]}>D{item.day} · {item.cards.length}</Text>
              </Pressable>
            ))}
          </ScrollView>

          {card ? (
            <>
              <View style={s.deckMeta}>
                <Text style={s.deckDay}>DAY {card.day}</Text>
                <Text style={s.deckCount}>{index + 1} / {cards.length}</Text>
              </View>

              <Pressable style={[s.card, revealed && s.cardBack]} onPress={() => setRevealed((value) => !value)}>
                {!revealed ? (
                  <View style={s.cardCenter}>
                    <Text style={s.tap}>TAP TO REVEAL</Text>
                    <Text style={s.word}>{card.word}</Text>
                    <Text style={s.pos}>{card.pos}</Text>
                    <Text style={s.currentRating}>
                      {ratings[card.id] === 'known' ? '✓ Known' : ratings[card.id] === 'review' ? '↻ Review again' : 'Not rated'}
                    </Text>
                  </View>
                ) : (
                  <View style={s.answer}>
                    <Text style={s.backWord}>{card.word}</Text>
                    <Text style={s.meaning}>{card.meaning}</Text>
                    <View style={s.divider} />
                    <Text style={s.label}>CHUNKS</Text>
                    <Text style={s.detail}>{card.chunks.join(' · ')}</Text>
                    {'family' in card && card.family ? <><Text style={s.label}>WORD FAMILY</Text><Text style={s.detail}>{card.family}</Text></> : null}
                    <Text style={s.label}>EXAMPLE</Text>
                    <Text style={s.example}>{card.example}</Text>
                    {'note' in card && card.note ? <Text style={s.note}>{card.note}</Text> : null}
                    <Text style={s.tapBottom}>Tap card to see the word again</Text>
                  </View>
                )}
              </Pressable>

              <View style={s.navRow}>
                <Pressable style={s.secondaryButton} onPress={previousCard}><Text style={s.secondaryText}>← Previous</Text></Pressable>
                <Pressable style={s.secondaryButton} onPress={nextCard}><Text style={s.secondaryText}>Next →</Text></Pressable>
              </View>

              <View style={s.ratingRow}>
                <Pressable style={s.reviewButton} onPress={() => rate('review')}><Text style={s.reviewText}>↻ Review again</Text></Pressable>
                <Pressable style={s.knownButton} onPress={() => rate('known')}><Text style={s.knownText}>✓ Know it</Text></Pressable>
              </View>
            </>
          ) : (
            <View style={s.empty}>
              <Text style={s.emptyTitle}>Day {filter} chưa có vocabulary data</Text>
              <Text style={s.body}>Khi lesson của ngày này được gửi cho mình, từ vựng sẽ tự được thêm vào deck Day 1–7 mà không cần tạo page mới.</Text>
            </View>
          )}

          <View style={s.sourceNote}>
            <Text style={s.sourceTitle}>Coverage hiện tại</Text>
            {vocabularyDays.map((item) => (
              <View key={item.day} style={s.coverageRow}>
                <Text style={s.coverageDay}>Day {item.day}</Text>
                <Text style={item.status === 'ready' ? s.ready : s.waiting}>
                  {item.status === 'ready' ? `${item.cards.length} words · ready` : '0 words · waiting for lesson'}
                </Text>
              </View>
            ))}
          </View>
        </ScrollView>
        <AppNav />
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe:{flex:1,backgroundColor:'#F7F7F4'}, shell:{flex:1}, c:{padding:20,gap:15,paddingBottom:28},
  eyebrow:{fontSize:12,letterSpacing:1.3,fontWeight:'900',color:'#777'}, title:{fontSize:34,fontWeight:'900',color:'#171717'},
  body:{fontSize:14,lineHeight:21,color:'#60605A'}, stats:{flexDirection:'row',gap:8},
  stat:{flex:1,backgroundColor:'#FFF',borderRadius:15,padding:13,borderWidth:1,borderColor:'#E7E7E0'}, statBig:{fontSize:21,fontWeight:'900'}, statLabel:{fontSize:10,color:'#777',fontWeight:'800',marginTop:2},
  filters:{gap:7,paddingVertical:2}, chip:{paddingVertical:9,paddingHorizontal:12,borderRadius:99,backgroundColor:'#FFF',borderWidth:1,borderColor:'#DEDED7'},
  chipActive:{backgroundColor:'#171717',borderColor:'#171717'}, chipText:{fontSize:11,fontWeight:'800',color:'#555'}, chipTextActive:{color:'#FFF'},
  deckMeta:{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}, deckDay:{fontSize:11,letterSpacing:1,fontWeight:'900',color:'#777'}, deckCount:{fontSize:12,fontWeight:'900'},
  card:{minHeight:330,backgroundColor:'#171717',borderRadius:28,padding:24,justifyContent:'center'}, cardBack:{backgroundColor:'#FFF',borderWidth:1,borderColor:'#E2E2DB',justifyContent:'flex-start'},
  cardCenter:{alignItems:'center',gap:10}, tap:{fontSize:10,letterSpacing:1.4,color:'#888',fontWeight:'900'}, word:{fontSize:40,lineHeight:48,color:'#FFF',fontWeight:'900',textAlign:'center'}, pos:{fontSize:13,color:'#BDBDB6',fontWeight:'800'}, currentRating:{fontSize:11,color:'#8F8F88',marginTop:14,fontWeight:'700'},
  answer:{gap:9}, backWord:{fontSize:29,fontWeight:'900'}, meaning:{fontSize:19,lineHeight:27,fontWeight:'800'}, divider:{height:1,backgroundColor:'#E6E6DF',marginVertical:4},
  label:{fontSize:9,letterSpacing:1.2,fontWeight:'900',color:'#8A8A82',marginTop:3}, detail:{fontSize:14,lineHeight:20,fontWeight:'700',color:'#383833'}, example:{fontSize:14,lineHeight:21,fontStyle:'italic',color:'#555'},
  note:{fontSize:12,lineHeight:18,color:'#65572E',backgroundColor:'#FFF3CE',padding:10,borderRadius:10}, tapBottom:{fontSize:10,color:'#999',marginTop:8,textAlign:'center'},
  navRow:{flexDirection:'row',gap:8}, secondaryButton:{flex:1,padding:13,borderRadius:13,backgroundColor:'#ECECE6',alignItems:'center'}, secondaryText:{fontSize:12,fontWeight:'900'},
  ratingRow:{flexDirection:'row',gap:8}, reviewButton:{flex:1,padding:15,borderRadius:14,backgroundColor:'#FFF',borderWidth:1,borderColor:'#D6D6CF',alignItems:'center'}, reviewText:{fontSize:13,fontWeight:'900',color:'#555'},
  knownButton:{flex:1,padding:15,borderRadius:14,backgroundColor:'#171717',alignItems:'center'}, knownText:{fontSize:13,fontWeight:'900',color:'#FFF'},
  empty:{backgroundColor:'#FFF',borderRadius:22,padding:22,gap:8,borderWidth:1,borderColor:'#E5E5E0'}, emptyTitle:{fontSize:20,fontWeight:'900'},
  sourceNote:{backgroundColor:'#ECECE6',borderRadius:18,padding:16,gap:8}, sourceTitle:{fontSize:14,fontWeight:'900'}, coverageRow:{flexDirection:'row',justifyContent:'space-between',gap:10},
  coverageDay:{fontSize:12,fontWeight:'800'}, ready:{fontSize:11,fontWeight:'800',color:'#3D6C42'}, waiting:{fontSize:11,fontWeight:'800',color:'#8A7140'}
});
