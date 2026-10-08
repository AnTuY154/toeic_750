import { router } from 'expo-router';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { day1 } from '@/content/day1';
import { AppNav } from '@/components/AppNav';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.shell}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.topRow}>
            <View><Text style={styles.eyebrow}>750 LAB · TODAY</Text><Text style={styles.title}>Day {day1.day}</Text></View>
            <View style={styles.target}><Text style={styles.targetLabel}>TARGET</Text><Text style={styles.targetValue}>750</Text></View>
          </View>

          <View style={styles.hero}>
            <Text style={styles.heroLabel}>TODAY&apos;S FOCUS</Text>
            <Text style={styles.heroTitle}>{day1.title}</Text>
            <Text style={styles.body}>{day1.summary}</Text>
            <Pressable style={styles.button} onPress={() => router.push('/day-1')}><Text style={styles.buttonText}>Continue Day 1</Text></Pressable>
          </View>

          <Text style={styles.sectionTitle}>Today</Text>
          <View style={styles.grid}>
            <Pressable style={styles.actionCard} onPress={() => router.push('/day-1')}><Text style={styles.actionMeta}>LESSON</Text><Text style={styles.actionTitle}>7 concepts</Text><Text style={styles.note}>Structure → meaning → choices</Text></Pressable>
            <Pressable style={styles.actionCard} onPress={() => router.push('/day-1-practice')}><Text style={styles.actionMeta}>PRACTICE</Text><Text style={styles.actionTitle}>12 questions</Text><Text style={styles.note}>8 reading + 4 listening scripts</Text></Pressable>
            <Pressable style={styles.actionCard} onPress={() => router.push('/review')}><Text style={styles.actionMeta}>REVIEW</Text><Text style={styles.actionTitle}>{day1.reviewQueue.length} queues</Text><Text style={styles.note}>Errors + vocabulary retrieval</Text></Pressable>
            <Pressable style={styles.actionCard} onPress={() => router.push('/diagnostic')}><Text style={styles.actionMeta}>BASELINE</Text><Text style={styles.actionTitle}>Diagnostic</Text><Text style={styles.note}>Reading evidence from Day 0</Text></Pressable>
          </View>

          <Text style={styles.sectionTitle}>Day 1 evidence</Text>
          <View style={styles.stats}>
            <View style={styles.stat}><Text style={styles.statValue}>10/12</Text><Text style={styles.note}>Closed-choice</Text></View>
            <View style={styles.stat}><Text style={styles.statValue}>83.3%</Text><Text style={styles.note}>Accuracy</Text></View>
            <View style={styles.stat}><Text style={styles.statValue}>4</Text><Text style={styles.note}>Errors to track</Text></View>
          </View>

          <View style={styles.insight}><Text style={styles.insightTitle}>Learning hypothesis</Text><Text style={styles.body}>{day1.hypothesis}</Text></View>
          <Text style={styles.disclaimer}>This app is not affiliated with or endorsed by ETS. TOEIC is a trademark of ETS.</Text>
        </ScrollView>
        <AppNav />
      </View>
    </SafeAreaView>
  );
}

const styles=StyleSheet.create({
 safe:{flex:1,backgroundColor:'#F7F7F4'},shell:{flex:1},container:{padding:20,gap:18,paddingBottom:28},
 topRow:{flexDirection:'row',justifyContent:'space-between',alignItems:'center',gap:16,marginTop:8},
 eyebrow:{fontSize:12,letterSpacing:1.3,fontWeight:'800',color:'#686868'},title:{fontSize:38,fontWeight:'900',color:'#171717',marginTop:4},
 target:{backgroundColor:'#171717',borderRadius:18,paddingVertical:10,paddingHorizontal:16,alignItems:'center'},targetLabel:{fontSize:9,letterSpacing:1.2,color:'#CFCFC8',fontWeight:'800'},targetValue:{fontSize:22,color:'#FFF',fontWeight:'900'},
 hero:{backgroundColor:'#FFF',borderRadius:24,padding:20,gap:10,borderWidth:1,borderColor:'#E5E5E0'},heroLabel:{fontSize:11,letterSpacing:1.2,fontWeight:'800',color:'#78786F'},heroTitle:{fontSize:25,lineHeight:31,fontWeight:'900',color:'#171717'},
 body:{fontSize:15,lineHeight:23,color:'#484842'},button:{backgroundColor:'#171717',paddingVertical:15,borderRadius:14,alignItems:'center',marginTop:6},buttonText:{color:'#FFF',fontSize:15,fontWeight:'800'},
 sectionTitle:{fontSize:19,fontWeight:'900',color:'#171717'},grid:{flexDirection:'row',flexWrap:'wrap',gap:10},actionCard:{width:'48%',backgroundColor:'#FFF',borderRadius:18,padding:16,gap:6,borderWidth:1,borderColor:'#E7E7E0'},
 actionMeta:{fontSize:10,letterSpacing:1.1,fontWeight:'900',color:'#85857D'},actionTitle:{fontSize:17,fontWeight:'900',color:'#171717'},note:{fontSize:12,lineHeight:17,color:'#77776F'},
 stats:{flexDirection:'row',gap:8},stat:{flex:1,backgroundColor:'#FFF',borderRadius:15,padding:13},statValue:{fontSize:18,fontWeight:'900',color:'#171717'},
 insight:{backgroundColor:'#ECECE6',borderRadius:18,padding:17,gap:6},insightTitle:{fontSize:14,fontWeight:'900'},disclaimer:{fontSize:10,lineHeight:15,color:'#8A8A82'}
});
