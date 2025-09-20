import React from 'react'
import {View,Text,StyleSheet,Image,Button,ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Profile from '../components/Profile';
export default function Home(){
  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.icon}>FlexIt</Text>
        {/* <Profile/> */}
        <View style={styles.container}>
          <View style={[styles.comp]}>
              <Text>Add a image and write you are the right spot and etc</Text>
              <Image/>
          </View>
          <View style={styles.row}>
            <View style={styles.book}>
              <View>
                <Text>Compete in competitions</Text>
              </View>
            </View>
            <View style={styles.book}>
            <View>
                <Text>Book your slots for your favourite game</Text>
              </View>
            </View>
          </View>
          <View style={styles.book}>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
    
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor:'#f8f9fa',
    height:'100%',
    width:'100%',
  },
  icon: {
    fontSize:40,
    color:'green',
    fontWeight:'bold'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-evenly',
    marginTop: 5,
    gap:10,
    margin:10,
    marginRight:10
  },
  comp: {
    justifyContent:'center',
    alignSelf:'center',
    borderWidth:1,
    borderColor:'#f0f0f0',
    height:200,
    width:'90%',
    borderRadius:30,
    marginTop:30,
    backgroundColor:'#f0f0f0'
  },
  book:{

    borderWidth:1,
    borderColor:'#f0f0f0',
    height:400,
    width:'45%',
    borderRadius:30,
    marginTop:5,
    backgroundColor:'#f0f0f0',
    marginTop:30,
  }
})