import React,{useState,useContext} from 'react'
import {View,Text,ScrollView,StyleSheet,TextInput,Image,Dimensions} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import CompData from '../Data/CompData';
import { Search,Swords } from 'lucide-react-native';
import RenderComp, { CompContext } from '../storage/RenderComp';
import { LocationContext } from '../Extras/Location';
const { width } = Dimensions.get('window');

export default function Competition(){
  const {city} = useContext(LocationContext)
   const [name,setName] = useState('')
  const comp = CompData()
  const cityData = city ? comp.filter((t)=> t.state.toLowerCase().trim().includes(city.toLowerCase().trim())): comp
  const handleName = cityData.filter((t)=> t.title.toLowerCase().trim().includes(name.toLowerCase().trim()))
  
  return (
    <CompContext.Provider value={{name,setName,handleName}}>
      <LinearGradient
        colors={['#141515ff', '#343635ff']}
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
          <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
              <View style={styles.inputBox}>
                <Search size={24} color='black' style={styles.icon}/>
                <TextInput style={styles.input} placeholder='Search Sport...' onChangeText={setName}/>
              </View>
              <View style={styles.titleContainer}>
                <Text style={styles.titleText}>
                  ACE THE <Swords size={25} color="orange" /> GAME 
                </Text>
              </View>
              <View style={styles.listContainer}>
                <RenderComp />
              </View>
            </View>
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
    flex: 1, // <-- gives space to FlatList
  },
})