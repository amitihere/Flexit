import React,{useState,useEffect, useContext} from 'react'
import {View,Text,ScrollView,StyleSheet,Modal,Button,TextInput} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { generateDates } from '../storage/Date';
import SelectSlots from '../components/SelectSlots';
import { LinearGradient } from 'expo-linear-gradient';
import { BookingContext } from '../storage/Booking';
import {clubs} from '../Data/Book';
import Booking from '../storage/Booking';
import { Search,Swords } from 'lucide-react-native';
import { LocationContext } from '../Extras/Location';
export default function Sports(){
  console.log("successfulllyyy entered sports page")

  const [title,setTitle] = useState('')
  const {city} = useContext(LocationContext)

  const cityData = city ? clubs.filter((t)=>t.location.toLowerCase().trim().includes(city.toLowerCase().trim())) : clubs
  const handleTitle = cityData.filter((t)=> t.name.toLowerCase().trim().includes(title.toLowerCase().trim()))
  const [slot,setSlot] = useState([])
  useEffect(()=> {
    let arr = generateDates(10)
    if(arr.length>0){
      setSlot(arr)
    }
    
  },[])
  return (
    
    <LinearGradient
            colors={['#141515ff', '#343635ff']}
            style={styles.container}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
    >
      <BookingContext.Provider value={{title,setTitle,handleTitle}}>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            <View style={styles.inputBox}>
                <Search size={24} color='black' style={styles.icon}/>
                <TextInput style={styles.input} placeholder='Search Venues...' onChangeText={setTitle}/>
            </View>
            <Booking/>
          </View>
          
        </SafeAreaView>
      </BookingContext.Provider>
      </LinearGradient>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputBox: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#f2f2f2',
  borderWidth: 3,
  borderColor: '#96986dff',
  alignSelf: 'center',
  marginTop: 15,
  borderRadius: 10,
  paddingHorizontal: 10,
  height: 45,
  width: 400,
},

icon: {
  marginRight: 8,
},

input: {
  flex: 1,
  fontSize: 16,
  color: 'black',
  backgroundColor: '#f2f2f2',
},
})