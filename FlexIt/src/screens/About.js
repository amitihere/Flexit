import React from 'react'
import {View,Text,ScrollView,StyleSheet,TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Profile from '../components/Profile';
import { useNavigation } from '@react-navigation/native';

export default function About(){
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView>
        
        <View style={styles.container}>
          <Profile/>
          

          <View style={styles.cards}>
            <TouchableOpacity style={styles.inside} onPress={()=> navigation.navigate('Admin')}>
                <Text style={styles.text}>Admin</Text>
                <Text>Add Sports Club with us.</Text>
                <View style={{height: 1,width: 250,backgroundColor: 'black',marginVertical: 5}} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.inside} onPress={()=>alert('Please contact 839405856')}>
                <Text style={styles.text}>Contact FlexIt</Text>
                <Text>Contact for any queries</Text>
                <View style={{height: 1,width: 250,backgroundColor: 'black',marginVertical: 10}} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.inside}>
                <Text style={styles.text} onPress={()=>navigation.navigate('AddVenue')}>Invite & Earn</Text>
                <Text>Refer your friend and get discounts </Text>
                <View style={{height: 1,width: 250,backgroundColor: 'black',marginVertical: 5}} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.inside}>
                <Text style={[styles.text,{paddingBottom:10}]}>logout ~ </Text>
            </TouchableOpacity>
          </View>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    height:'100%',
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    gap:30,
  },
  cards: {
    width:370,
    height:400,
    flexDirection:'column',
    backgroundColor:'white',
    borderRadius:15,
    justifyContent:'space-evenly',
    alignItems:'center',
    gap:10
  },
  text: {
    fontSize:20,
    textAlign:'center',
    marginBottom:5
  },
  inside: {
    justifyContent:'center',
    alignItems:'center',
  }
})