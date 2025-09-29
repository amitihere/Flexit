import React,{useState,useEffect} from 'react'
import {View,Text,ScrollView,StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { generateDates } from '../storage/Date';

export default function SelectSlots(){
  const [slot,setSlot] = useState([])
  useEffect(()=> {
    let arr = generateDates(10)
    if(arr.length>0){
      setSlot(arr)
    }
    
  },[])
  return (
      <ScrollView>
        <View>
            <Text style={styles.head}>
                Select the Date :)
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {slot.map((data,index)=>(
                <View style={styles.card} key={index}>
                  <Text style={styles.text}>{data[0]}</Text>
                  <Text style={[styles.text,{fontSize:19,color:'maroon'}]}>{data[1]}</Text>
              </View>
              ))}
            </ScrollView>
        </View>
      </ScrollView>
  )
}
const styles = StyleSheet.create({
  head: {
    fontSize:40,
    fontWeight: 'bold',
    marginLeft:15,
    marginBottom:20
  },
  card: {
    width:80,
    height:80,
    backgroundColor: 'lightgrey',
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    margin:5
  },
  text: {
    fontWeight:'bold'
  }
})
