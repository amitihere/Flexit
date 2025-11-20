import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet,ScrollView,Dimensions} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeft } from 'lucide-react-native'
import { useNavigation } from '@react-navigation/native'
const {width,height} = Dimensions.get('window')
export default function Payment({route}){
    const {info , payCourt , play, selectedTimes} = route.params
    const navigation = useNavigation()
    const court = payCourt.map(i => i + 1).join(', ');
    const time = selectedTimes.map(i => i).join(', ');
    const paid = info.buying[play] * selectedTimes.length
    const handleCancel = () =>{
        alert('Payment Cancelled')
        navigation.goBack()
    }
    const handleDone = () => {
    alert("Payment Done");
    navigation.navigate("MainTabs", { screen: "home" });
    };

  return (
    <LinearGradient
        colors={['#141515ff', '#343635ff']}
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
    >
        <SafeAreaView>
            <TouchableOpacity style={styles.backButton} onPress={handleCancel}>
                <ArrowLeft size={24} color="#fff" />
            </TouchableOpacity>
            <ScrollView>
                <View style={styles.box}>
                    <Text style={styles.title}>Booking Details</Text>
                    <View style={styles.divider}></View>
                    <Text style={styles.elig}>Sport Name: {play.toUpperCase()}</Text>
                    <Text style={styles.elig}>Courts Booked: {court}</Text>
                    <Text style={styles.elig}>Timings: {time}</Text>
                    <Text style={styles.elig}>Amount to be paid: {paid}</Text>
                    <Text></Text>
                </View>
                <TouchableOpacity
                    style={styles.block}
                    onPress={handleDone}
                    >
                    <Text style={styles.textSelect}>Proceed to Payment</Text>
                </TouchableOpacity>
                <View>
                    <Text style={[styles.title,{alignSelf:'flex-start',marginVertical:8}]}>{info.name}</Text>
                    <Text style={styles.text}>{info.description}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    </LinearGradient>
  )
}
const styles = StyleSheet.create({
    container: {
    flex: 1,
    paddingHorizontal: 19,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 10,
    zIndex: 1,
    backgroundColor: 'rgba(51, 49, 49, 0.5)',
    padding: 8,
    borderRadius: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 20,
    alignSelf:'center'
  },
  box:{
    width: width * 0.8,
    height: height * 0.23,
    backgroundColor:'#a0a78eff',
    marginVertical:25,
    borderRadius:12,
    padding:5,
    overflow:'hidden',
    alignSelf:'center'
  },
  divider: {
    height: 1,
    backgroundColor: '#eae8e8ff',
    width: '95%',
    alignSelf: 'center',
    marginVertical: height * 0.01,
    opacity: 0.7,
  },
  sportText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: width * 0.040,
    letterSpacing: 0.5,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowRadius: 2,
    paddingTop: height * 0.03,
  },
  title: {
    fontSize: width * 0.059,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 2,
    alignSelf:'center'
  },
  elig: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: width * 0.035,
    letterSpacing: 0.5,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowRadius: 2,
    margin:5
  },
  block: {
  backgroundColor: '#5e7860ff',
  width:width*0.60,
  height: height * 0.08,
  opacity:0.9,
  margin:10,
  borderRadius:12,
  alignSelf:'center',
  justifyContent:'center'
},
textSelect : {
    fontWeight:'bold',
    color:'white',
    justifyContent:'center',
    textAlign:'center'
  },
  text: {
    fontSize: 17,
    color: '#ccc',
    marginBottom: 5,
    lineHeight: 24,
  },
})