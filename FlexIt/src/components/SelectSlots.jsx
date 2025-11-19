import React,{useState,useEffect} from 'react'
import {View,Text,ScrollView,StyleSheet, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { generateDates } from '../storage/Date';
export const CreateDate = React.createContext()
export default function SelectSlots(){
  const [slot,setSlot] = useState([])
  const [select,setSelect] = useState(false)
  useEffect(()=> {
    let arr = generateDates(10)
    if(arr.length>0){
      setSlot(arr)
    }
    
  },[])
  const handleSlots = (index) => {
    console.log(index)
    setSelect(index)
  }
  return (
    <CreateDate.Provider value={{select}}>
        <ScrollView>
          <View>
              <Text style={styles.head}>
                  Select the Date :)
              </Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {slot.map((data,index)=>(
                  <TouchableOpacity style={select===index? styles.cardSelect: styles.card} key={index} onPress={()=> handleSlots(index)}>
                    <Text style={select===index? styles.text: styles.textSelect}>{data[0]}</Text>
                    <Text style={select===index? styles.daySelect: styles.day}>{data[1]}</Text>
                </TouchableOpacity>
                ))}
              </ScrollView>
          </View>
        </ScrollView>
      </CreateDate.Provider>
  )
}
const styles = StyleSheet.create({
  head: {
    color:'white',
    fontSize:40,
    fontWeight: 'bold',
    marginLeft:15,
    marginBottom:20
  },
  card: {
    width:80,
    height:80,
    backgroundColor: '#373836ff',
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    margin:5
  },
  cardSelect:{
    width:80,
    height:80,
    backgroundColor: '#a8ae8cff',
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    margin:5
  },
  text: {
    fontWeight:'bold'
  },
  textSelect : {
    fontWeight:'bold',
    color:'white'
  },
  day: {
    fontWeight:'bold',
    fontSize:20,
    color:'#787a55ff'
  },
  daySelect: {
    fontWeight:'bold',
    fontSize:20,
    color:'#0a0a0aff'
  }
})
