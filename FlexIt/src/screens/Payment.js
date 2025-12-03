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
}const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width * 0.045,
  },

  backButton: {
    position: 'absolute',
    top: height * 0.045,
    left: width * 0.02,
    zIndex: 1,
    backgroundColor: 'rgba(51, 49, 49, 0.5)',
    padding: width * 0.025,
    borderRadius: width * 0.07,
  },

  title: {
    fontSize: width * 0.065,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: height * 0.02,
    alignSelf: 'center',
  },

  box: {
    width: width * 0.88,
    minHeight: height * 0.25,
    backgroundColor: '#a0a78eff',
    marginVertical: height * 0.03,
    borderRadius: width * 0.035,
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.03,
    alignSelf: 'center',
  },

  divider: {
    height: 1,
    backgroundColor: '#eae8e8ff',
    width: '95%',
    alignSelf: 'center',
    marginVertical: height * 0.015,
    opacity: 0.7,
  },

  elig: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: width * 0.043,
    letterSpacing: 0.3,
    marginVertical: height * 0.005,
  },

  block: {
    backgroundColor: '#5e7860ff',
    width: width * 0.60,
    height: height * 0.075,
    marginVertical: height * 0.02,
    borderRadius: width * 0.035,
    alignSelf: 'center',
    justifyContent: 'center',
  },

  textSelect: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    fontSize: width * 0.045,
  },

  text: {
    fontSize: width * 0.041,
    color: '#ccc',
    marginBottom: height * 0.01,
    lineHeight: height * 0.030,
  },
});
