import React,{useState,useEffect, use} from 'react'
import {View,Text,ScrollView,StyleSheet, TouchableOpacity,Dimensions} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { generateDates } from '../storage/Date';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { sportIcons } from '../Data/Book';
const {width,height} = Dimensions.get('window')
export default function SelectSlots({info}){
  const navigation = useNavigation()

  const [slot,setSlot] = useState([])
  const [select,setSelect] = useState(null)
  const [sportSelect, setSportSelect] = useState(null)
  const [play,setPlay] = useState('')
  const [payCourt,setPayCourt] = useState([])
  const [selectedTimes, setSelectedTimes] = useState([]);
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
  const handleSports = (index,sport) => {
    console.log(index,sport)
    setSportSelect(index)
    setPlay(sport)
  }
  const handleCourts = (index) => {
  setPayCourt(prev => {
    if (prev.includes(index)) {
      return prev.filter(i => i !== index);
    }

    return [...prev, index];
  });
};
const handleTimeSelect = (time) => {
  setSelectedTimes(prev => {
    if (prev.includes(time)) {
      return prev.filter(t => t !== time);
    }
    return [...prev, time];
  });
};


  return (
    <ScrollView
    contentContainerStyle={{ paddingBottom: height * 0.25 }} // gives space for button
    showsVerticalScrollIndicator={false}
  >
          <View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {slot.map((data,index)=>(
                  <TouchableOpacity style={select===index? styles.cardSelect: styles.card} key={index} onPress={()=> handleSlots(index)}>
                    <Text style={select===index? styles.text: styles.textSelect}>{data[0]}</Text>
                    <Text style={select===index? styles.daySelect: styles.day}>{data[1]}</Text>
                </TouchableOpacity>
                ))}
              </ScrollView>
          </View>
          {select !== null && (
            <View style={styles.maintain}>
              <Text style={styles.sportText}>Please select the sport</Text>

              {info.sports.map((sport, index) => (
                <TouchableOpacity key={index} style={sportSelect==index?styles.avail:styles.availSelect} onPress={()=> handleSports(index,sport)}>
                  <MaterialCommunityIcons
                    name={sportIcons[sport.toLowerCase()]}
                    size={30}
                    color="#96986dff"
                  />
                  <Text style={styles.sport}>{sport}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
          {select !== null && sportSelect !== null && (
            <View>
              <View style={styles.divider}/>
              <Text style={styles.sportText}>select the courts</Text>
              <View style={styles.court}>
                {[...Array(info.courts[play])].map((data,index)=>(
                  <TouchableOpacity style={payCourt.includes(index)?styles.block:styles.blockSelect} onPress={()=> handleCourts(index)} key={index}>
                    <Text style={styles.textSelect}> {`${play} court `}{index+1}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          )}
        {payCourt.length > 0 && (
          <View>
            <View style={styles.divider}/>
            <Text style={styles.sportText}>Select Timings</Text>

            <View style={styles.court}>
              {info.timings[play]?.map((time, index) => (
                <TouchableOpacity
                  key={index}
                  style={selectedTimes.includes(time) ? styles.block : styles.blockSelect}
                  onPress={() => handleTimeSelect(time)}
                >
                  <Text style={styles.textSelect}>{time}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}
        {selectedTimes.length > 0 && (
          <View>
            <TouchableOpacity
              style={styles.payBtn}
              onPress={() =>
                navigation.navigate('Payment', {
                  info,
                  payCourt,
                  play,
                  selectedTimes
                })
              }
            >
              <Text style={styles.payText}>BOOK</Text>
            </TouchableOpacity>
          </View>
        )}


        </ScrollView>
        
      
  )
}const styles = StyleSheet.create({
  card: {
    width: width * 0.20,
    height: height * 0.11,
    backgroundColor: '#373836ff',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 6,
    marginVertical: 8,
  },
  cardSelect: {
    width: width * 0.20,
    height: height * 0.11,
    backgroundColor: '#a8ae8cff',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 6,
    marginVertical: 8,
  },
  text: {
    fontWeight: 'bold',
    fontSize: width * 0.04,
    color: 'white',
  },
  textSelect: {
    fontWeight: 'bold',
    fontSize: width * 0.04,
    color: 'white',
  },
  day: {
    fontWeight: 'bold',
    fontSize: width * 0.045,
    color: '#787a55ff',
  },
  daySelect: {
    fontWeight: 'bold',
    fontSize: width * 0.045,
    color: '#0a0a0aff',
  },
  sportText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: width * 0.045,
    paddingTop: height * 0.03,
    marginBottom: height * 0.01,
    letterSpacing: 0.4,
  },
  avail: {
    backgroundColor: '#363c3cff',
    width: width * 0.75,
    height: height * 0.085,
    marginVertical: 8,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  availSelect: {
    backgroundColor: '#0a0a0aff',
    width: width * 0.75,
    height: height * 0.085,
    marginVertical: 8,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  sport: {
    color: '#ddd8d6ff',
    marginTop: 5,
    fontSize: width * 0.04,
    textAlign: 'center',
  },
  maintain: {
    alignItems: 'center',
    width: '100%',
  },
  divider: {
    height: 1.2,
    backgroundColor: '#a09e9eff',
    width: '92%',
    alignSelf: 'center',
    marginVertical: height * 0.015,
    opacity: 0.6,
  },
  court: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: height * 0.01,
  },
  block: {
    backgroundColor: '#363c3cff',
    width: width * 0.42,
    height: height * 0.085,
    marginHorizontal: 8,
    marginVertical: 10,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
  },
  blockSelect: {
    backgroundColor: '#0a0a0aff',
    width: width * 0.42,
    height: height * 0.085,
    marginHorizontal: 8,
    marginVertical: 10,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
  },
  payBtn: {
    backgroundColor: '#a8ae8cff',
    width: width * 0.45,
    height: height * 0.085,
    marginVertical: height * 0.03,
    borderRadius: 15,
    alignSelf: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.35,
    shadowRadius: 4,
    elevation: 4,
  },
  payText: {
    color: 'white',
    fontSize: width * 0.045,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
