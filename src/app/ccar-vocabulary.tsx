import { useMemo, useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { router } from 'expo-router';
import { ccarDomains, ccarVocabulary } from '@/content/ccarVocabulary';

type DomainFilter = 'all' | 1 | 2 | 3 | 4 | 5;

export default function CcarVocabularyScreen() {
  const [domain, setDomain] = useState<DomainFilter>('all');
  const [query, setQuery] = useState('');
  const [kind, setKind] = useState<'all' | 'core' | 'trap'>('all');

  const items = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ccarVocabulary.filter((item) => {
      if (domain !== 'all' && item.domain !== domain) return false;
      if (kind !== 'all' && item.kind !== kind) return false;
      if (!q) return true;
      return [item.term, item.meaning, item.examNote, item.task].some((value) => value.toLowerCase().includes(q));
    });
  }, [domain, query, kind]);

  return (
    <SafeAreaView style={s.safe}>
      <ScrollView contentContainerStyle={s.c}>
        <Pressable onPress={() => router.back()}><Text style={s.back}>← Back</Text></Pressable>
        <Text style={s.eyebrow}>CCAR-F · EXAM VOCABULARY</Text>
        <Text style={s.title}>Claude Architecture Glossary</Text>
        <Text style={s.body}>Thuật ngữ được tổng hợp từ 5 Domain / 30 Task Statements trên claudecertificationguide.com/learn.</Text>

        <View style={s.stats}>
          <View style={s.stat}><Text style={s.statBig}>{ccarVocabulary.length}</Text><Text style={s.statLabel}>Terms</Text></View>
          <View style={s.stat}><Text style={s.statBig}>5</Text><Text style={s.statLabel}>Domains</Text></View>
          <View style={s.stat}><Text style={s.statBig}>{ccarVocabulary.filter(x=>x.kind==='trap').length}</Text><Text style={s.statLabel}>Exam traps</Text></View>
        </View>

        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="Search: stop_reason, MCP, calibration..."
          placeholderTextColor="#999"
          style={s.search}
          autoCapitalize="none"
          autoCorrect={false}
        />

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={s.filters}>
          <Pressable onPress={()=>setDomain('all')} style={[s.chip,domain==='all'&&s.chipActive]}><Text style={[s.chipText,domain==='all'&&s.chipTextActive]}>All</Text></Pressable>
          {ccarDomains.map(d=><Pressable key={d.domain} onPress={()=>setDomain(d.domain)} style={[s.chip,domain===d.domain&&s.chipActive]}><Text style={[s.chipText,domain===d.domain&&s.chipTextActive]}>D{d.domain}</Text></Pressable>)}
        </ScrollView>

        <View style={s.kindRow}>
          {(['all','core','trap'] as const).map(value=><Pressable key={value} onPress={()=>setKind(value)} style={[s.kindChip,kind===value&&s.kindActive]}><Text style={[s.kindText,kind===value&&s.kindTextActive]}>{value==='all'?'All terms':value==='core'?'Core':'Exam traps'}</Text></Pressable>)}
        </View>

        <View style={s.resultMeta}>
          <Text style={s.resultText}>{items.length} terms</Text>
          <Text style={s.resultText}>{domain==='all'?'Domain 1–5':`Domain ${domain}`}</Text>
        </View>

        {items.map((item) => (
          <View key={item.id} style={s.card}>
            <View style={s.top}>
              <View style={s.taskBadge}><Text style={s.taskText}>D{item.domain} · {item.task}</Text></View>
              <View style={[s.kindBadge,item.kind==='trap'&&s.trapBadge]}><Text style={[s.kindBadgeText,item.kind==='trap'&&s.trapText]}>{item.kind==='trap'?'EXAM TRAP':'CORE'}</Text></View>
            </View>
            <Text style={s.term}>{item.term}</Text>
            <Text style={s.meaning}>{item.meaning}</Text>
            <View style={s.divider} />
            <Text style={s.noteLabel}>EXAM NOTE</Text>
            <Text style={s.note}>{item.examNote}</Text>
          </View>
        ))}

        {items.length===0?<View style={s.empty}><Text style={s.emptyTitle}>Không tìm thấy thuật ngữ</Text><Text style={s.body}>Thử đổi Domain, loại term hoặc từ khóa tìm kiếm.</Text></View>:null}

        <View style={s.source}>
          <Text style={s.sourceTitle}>Source scope</Text>
          <Text style={s.sourceText}>claudecertificationguide.com/learn · Domain 1–5 · Task 1.1 → 5.6</Text>
          <Text style={s.sourceText}>Definitions trong app được rút gọn/paraphrase để học thi; không thêm terminology ngoài các bài nguồn.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const s=StyleSheet.create({
  safe:{flex:1,backgroundColor:'#F7F7F4'},c:{padding:20,gap:14,paddingBottom:40},back:{fontSize:13,fontWeight:'800',color:'#555'},
  eyebrow:{fontSize:11,letterSpacing:1.2,fontWeight:'900',color:'#777',marginTop:3},title:{fontSize:31,lineHeight:37,fontWeight:'900',color:'#171717'},
  body:{fontSize:14,lineHeight:21,color:'#60605A'},stats:{flexDirection:'row',gap:8},stat:{flex:1,backgroundColor:'#FFF',borderWidth:1,borderColor:'#E5E5E0',borderRadius:15,padding:13},
  statBig:{fontSize:21,fontWeight:'900'},statLabel:{fontSize:10,fontWeight:'800',color:'#777',marginTop:2},search:{backgroundColor:'#FFF',borderWidth:1,borderColor:'#DADAD3',borderRadius:15,paddingHorizontal:15,paddingVertical:13,fontSize:14,color:'#171717'},
  filters:{gap:7},chip:{paddingVertical:9,paddingHorizontal:14,borderRadius:99,backgroundColor:'#FFF',borderWidth:1,borderColor:'#DEDED7'},chipActive:{backgroundColor:'#171717',borderColor:'#171717'},
  chipText:{fontSize:12,fontWeight:'900',color:'#555'},chipTextActive:{color:'#FFF'},kindRow:{flexDirection:'row',gap:7},kindChip:{paddingVertical:8,paddingHorizontal:12,borderRadius:10,backgroundColor:'#ECECE6'},kindActive:{backgroundColor:'#DCDCEB'},
  kindText:{fontSize:11,fontWeight:'800',color:'#666'},kindTextActive:{color:'#24243A'},resultMeta:{flexDirection:'row',justifyContent:'space-between'},resultText:{fontSize:11,fontWeight:'800',color:'#777'},
  card:{backgroundColor:'#FFF',borderRadius:19,padding:17,gap:7,borderWidth:1,borderColor:'#E5E5E0'},top:{flexDirection:'row',justifyContent:'space-between',alignItems:'center'},
  taskBadge:{backgroundColor:'#ECECE6',borderRadius:8,paddingHorizontal:8,paddingVertical:5},taskText:{fontSize:10,fontWeight:'900',color:'#555'},
  kindBadge:{backgroundColor:'#E8F1E8',borderRadius:8,paddingHorizontal:8,paddingVertical:5},trapBadge:{backgroundColor:'#FFF0D6'},kindBadgeText:{fontSize:9,fontWeight:'900',color:'#426B47'},trapText:{color:'#7A5B20'},
  term:{fontSize:20,lineHeight:26,fontWeight:'900',color:'#171717'},meaning:{fontSize:14,lineHeight:21,fontWeight:'700',color:'#444'},divider:{height:1,backgroundColor:'#ECECE6',marginVertical:2},
  noteLabel:{fontSize:9,letterSpacing:1.1,fontWeight:'900',color:'#8B8B84'},note:{fontSize:13,lineHeight:20,color:'#555'},empty:{backgroundColor:'#FFF',borderRadius:18,padding:18,gap:5},emptyTitle:{fontSize:17,fontWeight:'900'},
  source:{backgroundColor:'#ECECE6',borderRadius:17,padding:15,gap:5,marginTop:4},sourceTitle:{fontSize:13,fontWeight:'900'},sourceText:{fontSize:11,lineHeight:17,color:'#666'}
});
