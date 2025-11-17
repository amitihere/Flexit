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

          <ScrollView showsVerticalScrollIndicator={false}>
            <HomeHeader/>

              <View style={styles.container}>
                <View style={styles.mainWrap}>
                  <View style={styles.book}>

                    <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("Sports")}>
                      <Text>Book now</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.comp}>

                    <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("Competition")}>
                      <Text>Compete now</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.bookVenue}>

                    <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("Sports")}>
                      <Text>Book now</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.venue}>

                    <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("AddVenue")}>
                      <Text>Add Venue</Text>
                    </TouchableOpacity>
                  </View>
                </View>
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
  mainWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin:24
  },
  comp: {
    height: 150,
    width: 180,
    borderRadius: 12,
    marginBottom: 10,
    backgroundColor: 'grey',
  },
  book: {
    height: 150,
    width: 180,
    borderRadius: 12,
    marginBottom: 10,
    backgroundColor: 'yellow',
    overflow:'hidden'
  },
  venue:{
    height: 150,
    width: 180,
    borderRadius: 12,
    marginBottom: 10,
    backgroundColor: 'blue',
  },
  bookVenue:{
    height: 150,
    width: 180,
    borderRadius: 12,
    marginBottom: 10,
    backgroundColor: 'orange',
  },
  button: {
    width: '100%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
    borderRadius: 6,
    marginTop: 'auto',
    opacity:0.8
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