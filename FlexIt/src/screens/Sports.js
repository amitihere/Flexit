import React,{useState,useEffect} from 'react'
import {View,Text,ScrollView,StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { generateDates } from '../storage/Date';
import SelectSlots from '../components/SelectSlots';

export default function Sports(){
  const [slot,setSlot] = useState([])
  useEffect(()=> {
    let arr = generateDates(10)
    if(arr.length>0){
      setSlot(arr)
    }
    
  },[])
  return (
    <SafeAreaView>
      <SelectSlots/>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
})
