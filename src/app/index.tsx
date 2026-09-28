import { router } from 'expo-router';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.eyebrow}>DAY 0 · BASELINE</Text>
        <Text style={styles.title}>Find your starting point first.</Text>
        <Text style={styles.body}>
          Today is diagnostic-only. No Daily Learning Pack or end-of-day knowledge summary will be created.
        </Text>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Reading baseline</Text>
          <Text style={styles.body}>16 original items across Parts 5, 6 and 7.</Text>
          <Text style={styles.note}>No unofficial TOEIC score conversion. Results are evidence by skill, accuracy, confidence and time.</Text>
        </View>
        <Pressable style={styles.button} onPress={() => router.push('/diagnostic')}>
          <Text style={styles.buttonText}>Start diagnostic</Text>
        </Pressable>
        <Text style={styles.disclaimer}>This app is not affiliated with or endorsed by ETS. TOEIC is a trademark of ETS.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F7F7F4' },
  container: { flex: 1, padding: 24, justifyContent: 'center', gap: 20 },
  eyebrow: { fontSize: 12, letterSpacing: 1.4, fontWeight: '800', color: '#666' },
  title: { fontSize: 34, lineHeight: 40, fontWeight: '800', color: '#171717' },
  body: { fontSize: 16, lineHeight: 24, color: '#444' },
  card: { backgroundColor: '#FFFFFF', borderRadius: 18, padding: 18, gap: 8, borderWidth: 1, borderColor: '#E5E5E0' },
  cardTitle: { fontSize: 20, fontWeight: '700', color: '#171717' },
  note: { fontSize: 14, lineHeight: 20, color: '#666' },
  button: { backgroundColor: '#171717', paddingVertical: 16, borderRadius: 14, alignItems: 'center' },
  buttonText: { color: '#FFF', fontSize: 16, fontWeight: '800' },
  disclaimer: { fontSize: 11, lineHeight: 16, color: '#777' },
});