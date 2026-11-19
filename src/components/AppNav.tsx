import { router, usePathname } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
const items = [{label:'Trang chủ',path:'/'},{label:'Kiến thức',path:'/learn'},{label:'Luyện tập',path:'/practice'},{label:'Từ mới',path:'/vocabulary'},{label:'Nghe',path:'/listening'}] as const;
export function AppNav() {
 const pathname=usePathname();
 return <View style={styles.nav}>{items.map(item=>{const active=pathname===item.path||(item.path==='/learn'&&pathname==='/lesson');return <Pressable key={item.path} style={styles.item} onPress={()=>router.replace(item.path)}><View style={[styles.dot,active&&styles.dotActive]}/><Text style={[styles.label,active&&styles.labelActive]}>{item.label}</Text></Pressable>;})}</View>;
}
const styles=StyleSheet.create({nav:{flexDirection:'row',backgroundColor:'#FFF',borderTopWidth:1,borderTopColor:'#E8E6DD',paddingTop:9,paddingBottom:9},item:{flex:1,alignItems:'center',gap:4},dot:{width:5,height:5,borderRadius:3,backgroundColor:'transparent'},dotActive:{backgroundColor:'#557052'},label:{fontSize:10,color:'#898B82',fontWeight:'700'},labelActive:{color:'#304A38',fontWeight:'900'}});