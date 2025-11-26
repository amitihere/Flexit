import React,{useState,useContext,useEffect} from 'react'
import {View,Text,ScrollView,StyleSheet,TextInput,Image,Dimensions,TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import CompData from '../Data/CompData';
import { Search,Swords } from 'lucide-react-native';
import RenderComp, { CompContext } from '../storage/RenderComp';
import { LocationContext } from '../Extras/Location';
import DropDown from '../Extras/DropDown';

const { width,height } = Dimensions.get('window');

export default function Competition(){
  const {city} = useContext(LocationContext)
  const [selectedCity, setSelectedCity] = useState(null);
  const [name,setName] = useState('')
  const [time,setTime] = useState(false)
  const comp = CompData()
  useEffect(()=>{
    const id = setTimeout(()=>{
      setTime(true)
    },2000)

    return () => clearTimeout(id)
  },[])
let filteredData;

if (selectedCity) {
  filteredData = comp.filter(t => 
    t.state.toLowerCase().includes(selectedCity.toLowerCase())
  );
} else if (city) {
  filteredData = comp.filter(t => 
    t.state.toLowerCase().includes(city.toLowerCase())
  );
} else {
  filteredData = comp;
}

const handleName = filteredData.filter(t =>
  t.title.toLowerCase().includes(name.toLowerCase())
);
  return (
    <CompContext.Provider value={{name,setName,handleName}}>
      <LinearGradient
        colors={['#141515ff', '#343635ff']}
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
          <SafeAreaView style={{flex:1}}>
           {time?( <View style={styles.container}>
              <View style={styles.inputBox}>
                <Search size={24} color='black' style={styles.icon}/>
                <TextInput style={styles.input} placeholder='Search Sport...' onChangeText={setName}/>
              </View>
              <View style={styles.titleContainer}>
                <Text style={styles.titleText}>
                  ACE THE <Swords size={25} color="orange" /> GAME 
                </Text>
              </View>
              <Text style={styles.elig}>Currect Location : {city}</Text>
              <DropDown value={selectedCity} setValue={setSelectedCity} />

              
              <View style={styles.listContainer}>
                <RenderComp />
              </View>
            </View>):(<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              <Text style={styles.titleText}>Sorry for the wait , we want to give you the best experience!</Text>
            </View>)}
          </SafeAreaView>
        </LinearGradient>
      </CompContext.Provider>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 9,
  },
  main:{
    backgroundColor:'#f0f0f0',
  },
row: {
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
},

textBlock: {
  flex: 1,
  paddingRight: 10,
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
  width: width * 0.9,
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
titleContainer: {
    alignItems: 'center',
    marginVertical: 15,
  },

  titleText: {
    color: '#96986dff',
    fontSize: 25,
    fontWeight: 'bold',
  },

  listContainer: {
    flex: 1,
  },
   elig: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: width * 0.040,
    letterSpacing: 0.5,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowRadius: 2,
    paddingTop: height * 0.02,
  },
})