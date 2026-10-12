import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { day2 } from '@/content/day2';
import { AppNav } from '@/components/AppNav';
export default function ReviewScreen(){return <SafeAreaView style={s.safe}><View style={s.shell}><ScrollView contentContainerStyle={s.c}>
<Text style={s.eyebrow}>REVIEW</Text><Text style={s.title}>Day 3–4 queue</Text><Text style={s.body}>Ba lỗi grammar Day 1 đã retrieval đúng ở Day 2, nên chuyển sang Improving chứ chưa Resolved.</Text>
{day2.reviewQueue.map((x,i)=><View key={x} style={s.row}><Text style={s.num}>{i+1}</Text><Text style={s.rowText}>{x}</Text></View>)}
<Text style={s.section}>Transfer evidence</Text>{day2.reviewEvidence.map(x=><View key={x.skill} style={s.evidence}><Text style={s.eTitle}>{x.skill} · {x.status}</Text><Text style={s.small}>{x.previous}</Text><Text style={s.small}>{x.newEvidence}</Text></View>)}
</ScrollView><AppNav/></View></SafeAreaView>}
const s=StyleSheet.create({safe:{flex:1,backgroundColor:'#F7F7F4'},shell:{flex:1},c:{padding:20,gap:12,paddingBottom:24},eyebrow:{fontSize:12,letterSpacing:1.2,fontWeight:'900',color:'#777'},title:{fontSize:32,fontWeight:'900'},body:{fontSize:15,lineHeight:23,color:'#555'},row:{flexDirection:'row',gap:12,alignItems:'center',backgroundColor:'#FFF',padding:15,borderRadius:15,borderWidth:1,borderColor:'#E5E5E0'},num:{width:28,height:28,textAlign:'center',paddingTop:5,borderRadius:14,backgroundColor:'#171717',color:'#FFF',fontWeight:'900'},rowText:{flex:1,fontSize:14,fontWeight:'800'},section:{fontSize:18,fontWeight:'900',marginTop:8},evidence:{backgroundColor:'#ECECE6',padding:14,borderRadius:14,gap:4},eTitle:{fontSize:14,fontWeight:'900'},small:{fontSize:12,lineHeight:18,color:'#555'}});
