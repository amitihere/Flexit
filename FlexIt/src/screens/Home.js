import React from 'react'
import {View,Text,StyleSheet,Image,Button,ScrollView,TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import CompButton from '../Extras/CompButton';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import HomeHeader from '../Extras/HomeHeader';
import {HomeCompAttributes, HomeSportAttributes} from '../storage/HomeAttributes';
export default function Home() {


  const navigation = useNavigation()
  const handleSlot = () => {
    navigation.navigate('Sports')
  }
  const handleComp = () => {
    navigation.navigate('Competition')
  }

  return (
    
      <LinearGradient
                colors={['#141515ff', '#343635ff']}
                style={styles.container}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                
        >
        <SafeAreaView>

          <ScrollView>
            <HomeHeader/>

              <View style={styles.container}>
                
                <TouchableOpacity  onPress={handleSlot}>
                  <View style={[styles.comp]}>
                      <Image source={require('../../assets/image copy.png')} style={{ width: 200, height: 200, borderRadius: 10 }}/>
                      <Image source={require('../../assets/image.png')} style={{ width: 200, height: 200, borderRadius: 10 }}/>
                  </View>
                </TouchableOpacity>
                <HomeCompAttributes/>
                <HomeSportAttributes/>
              </View>
          </ScrollView>
        </SafeAreaView>

      </LinearGradient>
    
  )
}




const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    paddingTop:10

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
    margin:30,
    backgroundColor:'#f0f0f0'
  },
  book: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#f0f0f0',
    height: 330,
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
  },
  divider: {
  height: 1,
  backgroundColor: '#a09e9eff',
  width: '95%',
  alignSelf: 'center',
  marginVertical: 10,
  opacity: 0.7,
},
})