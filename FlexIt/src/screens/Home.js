import React from 'react'
import {View,Text,StyleSheet,Image,Button,ScrollView,TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import CompButton from '../Extras/CompButton';
import { Ionicons } from '@expo/vector-icons';
export default function Home(){

  const navigation = useNavigation()
  const handleSlot = () => {
    navigation.navigate('Sports')
  }
  const handleComp = () => {
    navigation.navigate('Competition')
  }

  return (

    <ScrollView>
        <View style={styles.container}>
          
          <TouchableOpacity  onPress={handleSlot}>
            <View style={[styles.comp]}>
                <Image source={require('../../assets/image copy.png')} style={{ width: 200, height: 200, borderRadius: 10 }}/>
                <Image source={require('../../assets/image.png')} style={{ width: 200, height: 200, borderRadius: 10 }}/>
            </View>
          </TouchableOpacity>

          <View style={styles.row}>

            <View style={styles.book}>
                <CompButton/>
                <TouchableOpacity onPress={handleComp}>
                  <Ionicons name="arrow-forward-outline" color="black" size={60}/>
                </TouchableOpacity>
                <Image source={require('../../assets/image copy 2.png')} style={{ width: 180, height: 150, borderRadius: 10 }}/>
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
    
  )
}




const styles = StyleSheet.create({
  container: {
    backgroundColor:'#f8f9fa',
    height:'100%',
    width:'100%',
    alignItems:'center'
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
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    borderWidth:1,
    borderColor:'#f0f0f0',
    height:200,
    width:400,
    borderRadius:30,
    marginTop:30,
    backgroundColor:'#f0f0f0'
  },
  book: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#f0f0f0',
    height: 400,
    width: 180,
    borderRadius: 30,
    marginTop: 30,
    backgroundColor: 'white',
  },
  button: {
    width:150,
    height: 50,
    backgroundColor:'grey',
    justifyContent:'center',
    borderRadius:10
    
  },
  text: {
    color:'maroon',
    fontWeight:'bold',
    textAlign:'center',
    justifyContent:'center',
    fontSize:20
  }
})