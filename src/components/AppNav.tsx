import { router, usePathname } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const items = [
  { label: 'Today', path: '/' },
  { label: 'Learn', path: '/learn' },
  { label: 'Review', path: '/review' },
  { label: 'Mistakes', path: '/mistakes' },
  { label: 'Progress', path: '/progress' }
] as const;

export function AppNav() {
  const pathname = usePathname();
  return (
    <View style={styles.nav}>
      {items.map((item) => {
        const active = pathname === item.path;
        return (
          <Pressable key={item.path} style={styles.item} onPress={() => router.replace(item.path)}>
            <View style={[styles.dot, active && styles.dotActive]} />
            <Text style={[styles.label, active && styles.labelActive]}>{item.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  nav:{flexDirection:'row',backgroundColor:'#FFF',borderTopWidth:1,borderTopColor:'#E7E7E0',paddingTop:9,paddingBottom:8},
  item:{flex:1,alignItems:'center',gap:4},
  dot:{width:5,height:5,borderRadius:3,backgroundColor:'transparent'},
  dotActive:{backgroundColor:'#171717'},
  label:{fontSize:10,color:'#85857D',fontWeight:'700'},
  labelActive:{color:'#171717'}
});
