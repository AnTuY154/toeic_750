import { router } from 'expo-router';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { day1 } from '@/content/day1';
import { day2 } from '@/content/day2';
import { AppNav } from '@/components/AppNav';

const days=[{day:day2,path:'/day-2' as const},{day:day1,path:'/day-1' as const}];
export default function LearnScreen(){
 return <SafeAreaView style={s.safe}><View style={s.shell}><ScrollView contentContainerStyle={s.c}>
  <Text style={s.eyebrow}>LEARN</Text><Text style={s.title}>Knowledge library</Text>
  {days.map(({day,path},idx)=><Pressable key={day.day} style={[s.hero,idx>0&&s.secondary]} onPress={()=>router.push(path)}><Text style={[s.kicker,idx>0&&s.dark]}>DAY {day.day}</Text><Text style={[s.cardTitle,idx>0&&s.dark]}>{day.title}</Text><Text style={[s.body,idx===0&&s.light]}>{day.summary}</Text><Text style={[s.link,idx>0&&s.dark]}>Open lesson →</Text></Pressable>)}
  <Text style={s.section}>Current Day 2 concepts</Text>
  {day2.concepts.map((x,i)=><View key={x.title} style={s.row}><Text style={s.num}>{String(i+1).padStart(2,'0')}</Text><View style={s.flex}><Text style={s.rowTitle}>{x.title}</Text><Text style={s.body}>{x.takeaway}</Text></View></View>)}
 </ScrollView><AppNav/></View></SafeAreaView>
}
const s=StyleSheet.create({safe:{flex:1,backgroundColor:'#F7F7F4'},shell:{flex:1},c:{padding:20,gap:14,paddingBottom:24},eyebrow:{fontSize:12,letterSpacing:1.3,fontWeight:'900',color:'#777'},title:{fontSize:32,fontWeight:'900'},hero:{backgroundColor:'#171717',borderRadius:22,padding:20,gap:8},secondary:{backgroundColor:'#FFF',borderWidth:1,borderColor:'#E5E5E0'},kicker:{fontSize:11,letterSpacing:1.1,color:'#BCBCB4',fontWeight:'900'},cardTitle:{fontSize:23,color:'#FFF',fontWeight:'900'},dark:{color:'#171717'},body:{fontSize:14,lineHeight:21,color:'#666'},light:{color:'#CFCFC8'},link:{color:'#FFF',fontWeight:'800',marginTop:5},section:{fontSize:18,fontWeight:'900',marginTop:4},row:{flexDirection:'row',gap:14,backgroundColor:'#FFF',padding:15,borderRadius:16,borderWidth:1,borderColor:'#E7E7E0'},num:{fontSize:12,fontWeight:'900',color:'#999'},flex:{flex:1,gap:4},rowTitle:{fontSize:16,fontWeight:'900'}});
