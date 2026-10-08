import { useState } from 'react';
import { router } from 'expo-router';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { day1Practice } from '@/content/day1';

export default function PracticeScreen(){
 const [i,setI]=useState(0); const [selected,setSelected]=useState<number|null>(null); const [checked,setChecked]=useState(false); const [score,setScore]=useState(0);
 const q=day1Practice[i]; const done=i===day1Practice.length-1;
 function check(){if(selected===null)return;setChecked(true);if(selected===q.correctAnswer)setScore(v=>v+1)}
 function next(){if(done){router.replace('/review');return}setI(v=>v+1);setSelected(null);setChecked(false)}
 return <SafeAreaView style={s.safe}><ScrollView contentContainerStyle={s.c}>
  <Pressable onPress={()=>router.back()}><Text style={s.back}>← Back</Text></Pressable>
  <View style={s.top}><Text style={s.eyebrow}>{q.mode==='listening'?'LISTENING SCRIPT':'READING'} · {i+1}/{day1Practice.length}</Text><Text style={s.score}>Score {score}</Text></View>
  {q.mode==='listening'?<View style={s.audio}><Text style={s.audioLabel}>AUDIO SCRIPT · dành để bạn tạo audio</Text><Text style={s.audioText}>{q.audioScript}</Text><Text style={s.audioHint}>Khi đã có file audio, transcript này sẽ được ẩn khỏi chế độ làm bài.</Text></View>:null}
  <Text style={s.title}>{q.prompt}</Text>
  <View style={s.choices}>{q.choices.map((x,n)=>{const active=selected===n;const good=checked&&n===q.correctAnswer;const bad=checked&&active&&n!==q.correctAnswer;return <Pressable disabled={checked} key={x} onPress={()=>setSelected(n)} style={[s.choice,active&&s.active,good&&s.good,bad&&s.bad]}><Text style={[s.choiceText,active&&!checked&&s.activeText]}>{String.fromCharCode(65+n)}. {x}</Text></Pressable>})}</View>
  {checked?<View style={s.explain}><Text style={s.explainTitle}>{selected===q.correctAnswer?'Correct':'Review this'}</Text><Text style={s.body}>{q.explanation}</Text></View>:null}
  {!checked?<Pressable disabled={selected===null} onPress={check} style={[s.button,selected===null&&s.disabled]}><Text style={s.buttonText}>Check answer</Text></Pressable>:<Pressable onPress={next} style={s.button}><Text style={s.buttonText}>{done?'Go to review':'Next question'}</Text></Pressable>}
 </ScrollView></SafeAreaView>
}
const s=StyleSheet.create({safe:{flex:1,backgroundColor:'#F7F7F4'},c:{padding:20,gap:16,paddingBottom:40},back:{fontWeight:'800',color:'#555'},top:{flexDirection:'row',justifyContent:'space-between'},eyebrow:{fontSize:11,letterSpacing:1.1,fontWeight:'900',color:'#777'},score:{fontSize:12,fontWeight:'900'},audio:{backgroundColor:'#171717',borderRadius:18,padding:16,gap:7},audioLabel:{fontSize:10,letterSpacing:1,color:'#AAA',fontWeight:'900'},audioText:{fontSize:20,lineHeight:28,color:'#FFF',fontWeight:'800'},audioHint:{fontSize:11,lineHeight:16,color:'#BBB'},title:{fontSize:26,lineHeight:34,fontWeight:'900'},choices:{gap:10},choice:{backgroundColor:'#FFF',borderWidth:1,borderColor:'#DDDCD5',padding:15,borderRadius:14},active:{backgroundColor:'#171717',borderColor:'#171717'},activeText:{color:'#FFF'},good:{backgroundColor:'#E9F5EA',borderColor:'#5E8A63'},bad:{backgroundColor:'#FCEAEA',borderColor:'#A66'},choiceText:{fontSize:15,lineHeight:21},explain:{backgroundColor:'#FFF4D6',padding:15,borderRadius:14,gap:5},explainTitle:{fontSize:15,fontWeight:'900'},body:{fontSize:14,lineHeight:21,color:'#555'},button:{backgroundColor:'#171717',padding:16,borderRadius:14,alignItems:'center'},disabled:{opacity:.35},buttonText:{color:'#FFF',fontWeight:'900'}});
