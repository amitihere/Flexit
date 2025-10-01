import React,{useState,useEffect} from 'react'
import {View,Text,ScrollView,StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { generateDates } from '../storage/Date';
import SelectSlots from '../components/SelectSlots';
import { LinearGradient } from 'expo-linear-gradient';

export default function Sports(){
  const [slot,setSlot] = useState([])
  useEffect(()=> {
    let arr = generateDates(10)
    if(arr.length>0){
      setSlot(arr)
    }
    
  },[])
  return (
    <LinearGradient
        colors={['#1D976C', '#93F9B9']}
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
      <SafeAreaView>
        <SelectSlots/>
      </SafeAreaView>
      </LinearGradient>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})