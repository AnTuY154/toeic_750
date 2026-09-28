import { useMemo, useRef, useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { baselineQuestions } from '@/domain/diagnostic/questions';
import { evaluateDiagnostic } from '@/domain/diagnostic/evaluate';
import type { Confidence, DiagnosticAttempt } from '@/domain/diagnostic/types';
import { completeDiagnosticSession, createDiagnosticSession, saveAttempt } from '@/database/db';

export default function DiagnosticScreen() {
  const [index, setIndex] = useState(0);
  const [choice, setChoice] = useState<number | null>(null);
  const [confidence, setConfidence] = useState<Confidence>('unsure');
  const [attempts, setAttempts] = useState<DiagnosticAttempt[]>([]);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [finished, setFinished] = useState(false);
  const startedAt = useRef(Date.now());
  const question = baselineQuestions[index];
  useMemo(() => evaluateDiagnostic(attempts), [attempts]);

  async function ensureSession() {
    if (sessionId) return sessionId;
    const id = await createDiagnosticSession();
    setSessionId(id);
    return id;
  }

  async function submit() {
    if (choice === null || !question) return;
    const id = await ensureSession();
    const attempt: DiagnosticAttempt = {
      questionId: question.id, domain: question.domain, skill: question.skill,
      selectedAnswer: choice, correctAnswer: question.correctAnswer,
      confidence, responseTimeMs: Date.now() - startedAt.current,
    };
    await saveAttempt(id, attempt);
    const nextAttempts = [...attempts, attempt];
    setAttempts(nextAttempts);
    if (index === baselineQuestions.length - 1) {
      await completeDiagnosticSession(id);
      setFinished(true);
      return;
    }
    setIndex((v) => v + 1);
    setChoice(null);
    setConfidence('unsure');
    startedAt.current = Date.now();
  }

  if (finished) {
    const result = evaluateDiagnostic(attempts);
    return (
      <SafeAreaView style={styles.safe}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.eyebrow}>BASELINE SAVED</Text>
          <Text style={styles.title}>Reading evidence: {result.correct}/{result.total}</Text>
          <Text style={styles.body}>Accuracy: {Math.round(result.accuracy * 100)}%</Text>
          <Text style={styles.warning}>This is not a TOEIC scaled score. Listening has not been measured yet, so an overall TOEIC level would be unsupported.</Text>
          <Text style={styles.sectionTitle}>Skill evidence</Text>
          {result.skillEvidence.map((item) => (
            <View key={item.skill} style={styles.skillRow}>
              <Text style={styles.skillName}>{item.skill.replaceAll('_', ' ')}</Text>
              <Text style={styles.skillMeta}>{item.correctCount}/{item.evidenceCount} · {item.status.replaceAll('_', ' ')}</Text>
            </View>
          ))}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Confidence signals</Text>
            <Text style={styles.body}>Correct but unsure/guess: {result.lowConfidenceCorrect}</Text>
            <Text style={styles.body}>Incorrect while sure: {result.highConfidenceIncorrect}</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.eyebrow}>QUESTION {index + 1} / {baselineQuestions.length} · PART {question.part}</Text>
        <Text style={styles.title}>{question.prompt}</Text>
        <View style={styles.choices}>
          {question.choices.map((item, i) => (
            <Pressable key={item} onPress={() => setChoice(i)} style={[styles.choice, choice === i && styles.choiceSelected]}>
              <Text style={[styles.choiceText, choice === i && styles.choiceTextSelected]}>{String.fromCharCode(65 + i)}. {item}</Text>
            </Pressable>
          ))}
        </View>
        <Text style={styles.sectionTitle}>How confident are you?</Text>
        <View style={styles.confidenceRow}>
          {(['sure','unsure','guess'] as const).map((value) => (
            <Pressable key={value} onPress={() => setConfidence(value)} style={[styles.confidence, confidence === value && styles.confidenceSelected]}>
              <Text style={styles.confidenceText}>{value}</Text>
            </Pressable>
          ))}
        </View>
        <Pressable disabled={choice === null} onPress={submit} style={[styles.button, choice === null && styles.buttonDisabled]}>
          <Text style={styles.buttonText}>{index === baselineQuestions.length - 1 ? 'Finish baseline' : 'Next'}</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe:{flex:1,backgroundColor:'#F7F7F4'}, container:{padding:22,gap:18},
  eyebrow:{fontSize:12,letterSpacing:1.2,fontWeight:'800',color:'#666'},
  title:{fontSize:27,lineHeight:35,fontWeight:'800',color:'#171717'},
  body:{fontSize:16,lineHeight:24,color:'#444'},
  warning:{fontSize:14,lineHeight:21,color:'#555',backgroundColor:'#FFF4D6',padding:14,borderRadius:12},
  choices:{gap:10}, choice:{padding:16,borderRadius:14,borderWidth:1,borderColor:'#DADAD3',backgroundColor:'#FFF'},
  choiceSelected:{backgroundColor:'#171717',borderColor:'#171717'},
  choiceText:{fontSize:15,lineHeight:22,color:'#222'}, choiceTextSelected:{color:'#FFF'},
  sectionTitle:{fontSize:18,fontWeight:'800',color:'#171717',marginTop:4},
  confidenceRow:{flexDirection:'row',gap:8}, confidence:{flex:1,padding:12,borderWidth:1,borderColor:'#DADAD3',borderRadius:12,alignItems:'center'},
  confidenceSelected:{borderColor:'#171717',backgroundColor:'#ECECE6'}, confidenceText:{fontSize:14,fontWeight:'700'},
  button:{padding:16,borderRadius:14,alignItems:'center',backgroundColor:'#171717',marginTop:8}, buttonDisabled:{opacity:0.35},
  buttonText:{color:'#FFF',fontSize:16,fontWeight:'800'}, skillRow:{backgroundColor:'#FFF',borderRadius:12,padding:14,gap:4},
  skillName:{fontSize:15,fontWeight:'700',textTransform:'capitalize'}, skillMeta:{fontSize:13,color:'#666',textTransform:'capitalize'},
  card:{backgroundColor:'#FFF',borderRadius:14,padding:16,gap:6}, cardTitle:{fontSize:17,fontWeight:'800'}
});
