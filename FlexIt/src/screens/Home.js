import React from 'react'
import {View,Text,StyleSheet,Image,Button,ScrollView,TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import CompButton from '../Extras/CompButton';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import HomeHeader from '../Extras/HomeHeader';
import {HomeCompAttributes, HomeSportAttributes} from '../storage/HomeAttributes';
import LottieView from 'lottie-react-native';
import {faqData} from '../Data/ExploreComp'
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
                    
                    <Image
                      source={require('../../assets/Cricket-bro (1).png')}
                      style={{height:100,width:150,alignSelf:'center',marginBottom:'auto'}}
                    />
                    <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("Sports")}>
                      <Text style={styles.text}>Book now</Text>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.comp}>
                    <LottieView
                      source={require('../../assets/animations/Trophy.json')}
                      autoPlay
                      loop
                      style={{ width: 150, height: 100 ,alignSelf:'center',marginBottom:'auto'}}
                    />
                    <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("Competition")}>
                      <Text style={styles.text}>Competitions</Text>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.bookVenue}>
                    <Image
                      source={require('../../assets/Location review-cuate (1).png')}
                      style={{height:100,width:150,alignSelf:'center',marginBottom:'auto'}}
                    />
                    <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("Sports")}>
                      <Text style={styles.text}>Venues</Text>
                    </TouchableOpacity>
                  </View>


                  <View style={styles.venue}>
                    <Image
                      source={require('../../assets/Live collaboration-rafiki (1).png')}
                      style={{height:100,width:150,alignSelf:'center',marginBottom:'auto'}}
                    />
                    <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("AddVenue")}>
                      <Text style={styles.text}>Add Venue</Text>
                    </TouchableOpacity>
                  </View>

                </View>
                <HomeCompAttributes/>
                <HomeSportAttributes/>
                <View style={styles.divider}></View>
                <View style={styles.faqContainer}>
                  <Text style={styles.faqTitle}>FAQs (Frequently Asked Questions)</Text>

                  {faqData.map((item, index) => (
                    <TouchableOpacity key={index} style={styles.faqItem}>
                      <Text style={styles.faqQuestion}>{item.question}</Text>
                      <Text style={styles.faqAnswer}>{item.answer}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
                


              </View>
              <View >
                  <Text style={{color:'white',fontWeight:'bold',fontSize:15,alignSelf:'center',paddingVertical:15}}>Developed with ❤️ by Amiti Aneesh</Text>
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
    margin:24,
  },
  comp: {
    height: 130,
    width: 150,
    borderRadius: 12,
    marginBottom: 10,
    backgroundColor: '#96986dff',
  },
  text:{
    fontSize:17,
    fontWeight:'bold',
    color: 'white'
  },
  book: {
    height: 130,
    width: 150,
    borderRadius: 12,
    marginBottom: 10,
    backgroundColor: '#4d614eff',
    overflow:'hidden'
  },
  venue:{
    height: 130,
    width: 150,
    borderRadius: 12,
    marginBottom: 10,
    backgroundColor: '#8789a5ff',
  },
  bookVenue:{
    height: 130,
    width: 150,
    borderRadius: 12,
    marginBottom: 10,
    backgroundColor: 'orange',
  },
  button: {
    width: '100%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 6,
    marginTop: 'auto',
    opacity:0.8
  },
  divider: {
  height: 1,
  backgroundColor: '#a09e9eff',
  width: '95%',
  alignSelf: 'center',
  marginVertical: 10,
  opacity: 0.7,
},
faqContainer: {
    marginTop: 30,
    padding: 15,
    backgroundColor: "#dcdfc8c5",
    borderRadius: 10,
    elevation: 3,
  },

  faqTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },

  faqItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },

  faqQuestion: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },

  faqAnswer: {
    fontSize: 14,
    marginTop: 5,
    color: "#555",
    lineHeight: 20,
  },
})