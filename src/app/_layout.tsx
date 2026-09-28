import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerTitleStyle: { fontWeight: '700' }, headerBackTitle: 'Back' }}>
      <Stack.Screen name="index" options={{ title: '750 Lab' }} />
      <Stack.Screen name="diagnostic" options={{ title: 'Baseline Diagnostic' }} />
    </Stack>
  );
}