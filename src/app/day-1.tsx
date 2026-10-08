import { router } from 'expo-router';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { day1 } from '@/content/day1';

export default function Day1Screen(){
 return <SafeAreaView style={s.safe}><ScrollView contentContainerStyle={s.c}>
  <Pressable onPress={()=>router.back()}><Text style={s.back}>← Back</Text></Pressable>
  <Text style={s.eyebrow}>DAY 1 · LESSON</Text><Text style={s.title}>{day1.title}</Text><Text style={s.lead}>{day1.summary}</Text>
  {day1.concepts.map((x,i)=><View key={x.title} style={s.card}>
   <Text style={s.index}>{String(i+1).padStart(2,'0')}</Text><Text style={s.cardTitle}>{x.title}</Text><Text style={s.takeaway}>{x.takeaway}</Text><Text style={s.body}>{x.detail}</Text>
   {x.examples.map(e=><View key={e} style={s.example}><Text style={s.exampleText}>{e}</Text></View>)}
  </View>)}
  <Text style={s.section}>Vocabulary · 8</Text>
  {day1.vocabulary.map(v=><View key={v.word} style={s.word}><View style={s.wordTop}><Text style={s.wordText}>{v.word}</Text><Text style={s.pos}>{v.pos}</Text></View><Text style={s.body}>{v.meaning}</Text><Text style={s.chunk}>{v.chunks.join(' · ')}</Text><Text style={s.exampleLine}>{v.example}</Text>{'note' in v&&v.note?<Text style={s.note}>{v.note}</Text>:null}</View>)}
  <Pressable style={s.button} onPress={()=>router.push('/day-1-practice')}><Text style={s.buttonText}>Practice Day 1</Text></Pressable>
 </ScrollView></SafeAreaView>
}
const s=StyleSheet.create({safe:{flex:1,backgroundColor:'#F7F7F4'},c:{padding:20,gap:14,paddingBottom:40},back:{fontWeight:'800',color:'#555'},eyebrow:{fontSize:11,letterSpacing:1.2,fontWeight:'900',color:'#777',marginTop:5},title:{fontSize:32,lineHeight:38,fontWeight:'900'},lead:{fontSize:16,lineHeight:24,color:'#555'},card:{backgroundColor:'#FFF',borderRadius:20,padding:18,gap:8,borderWidth:1,borderColor:'#E5E5E0'},index:{fontSize:10,fontWeight:'900',color:'#AAA'},cardTitle:{fontSize:20,fontWeight:'900'},takeaway:{fontSize:15,fontWeight:'800',lineHeight:21},body:{fontSize:14,lineHeight:21,color:'#555'},example:{backgroundColor:'#F3F3EE',borderRadius:12,padding:12},exampleText:{fontSize:13,lineHeight:19,color:'#333'},section:{fontSize:20,fontWeight:'900',marginTop:8},word:{backgroundColor:'#FFF',borderRadius:18,padding:16,gap:6,borderWidth:1,borderColor:'#E5E5E0'},wordTop:{flexDirection:'row',justifyContent:'space-between',gap:12},wordText:{fontSize:20,fontWeight:'900'},pos:{fontSize:11,color:'#777',fontWeight:'800'},chunk:{fontSize:13,fontWeight:'800',color:'#333'},exampleLine:{fontSize:13,fontStyle:'italic',color:'#666'},note:{fontSize:12,lineHeight:18,color:'#6A5B32',backgroundColor:'#FFF4D6',padding:10,borderRadius:10},button:{backgroundColor:'#171717',padding:16,borderRadius:14,alignItems:'center',marginTop:8},buttonText:{color:'#FFF',fontWeight:'900'}});
