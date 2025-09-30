import React,{useState,useEffect} from 'react'
import {View,Text,ScrollView,StyleSheet,TextInput,Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CompData from '../Data/CompData';
export default function Competition(){
  const [name,setName] = useState('')
  const comp = CompData()
  const handleName = comp.filter((t)=> t.title.toLowerCase().trim().includes(name.toLowerCase().trim()))
  return (
      <ScrollView>
        <View style={styles.container}>
          <TextInput style={styles.input} placeholder='Type the sport you wanna compete!!' onChangeText={setName}/>
          <View style={{flex:1,justifyContent:'center',alignItems:'center',marginTop:10}}>
            <Text>- Select the venue you are intrested in -</Text>
          </View>
          {name ? (
            handleName.map((data,index)=>(
              <View key={index}>
                  <View style={styles.cards}>
                    <View style={styles.comp}>
                      <Text style={styles.title}>
                        Title: {data.title}
                      </Text>
                      <Text style={styles.prize}>
                        Prize pool: <Text style={{fontSize:22,color:'green'}}>{data.prize}</Text>
                      </Text>

                      <Text style={styles.dead}>
                        apply before: ~ {data.apply}
                      </Text>

                      <Text style={styles.age}>Eligibility: <Text style={{color:'black',fontSize:14}}>
                        {data.eligibility}
                      </Text></Text>

                      <View style={{flex:1,justifyContent:'flex-end'}}>
                        <Text style={{textAlign:'center',justifyContent:'flex-end'}}>
                          Read terms and conditions
                        </Text>

                      </View>
                      
                    </View>
                  </View>
              </View>
            )
          ))
          :
          (comp.map((data,index)=>(
              <View key={index}>
                  <View style={styles.cards}>
                    <View style={styles.comp}>
                      <Text style={styles.title}>
                        Title: {data.title}
                      </Text>
                      <Text style={styles.prize}>
                        Prize pool: <Text style={{fontSize:22,color:'green'}}>{data.prize}</Text>
                      </Text>

                      <Text style={styles.dead}>
                        apply before: ~ {data.apply}
                      </Text>

                      <Text style={styles.age}>Eligibility: <Text style={{color:'black',fontSize:14}}>
                        {data.eligibility}
                      </Text></Text>

                      <View style={{flex:1,justifyContent:'flex-end'}}>
                        <Text style={{textAlign:'center',justifyContent:'flex-end'}}>
                          Read terms and conditions
                        </Text>

                      </View>
                      
                    </View>
                  </View>
              </View>
            )
          ))}
          
          
        </View>
      </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor:'#f8f9fa',
    height:'100%',
    width:'100%',
    gap:10
  },
  main:{
    backgroundColor:'#f0f0f0',
  },
  input: {
    width:350,
    height:40,
    borderWidth:2,
    borderColor:'lightgrey',
    backgroundColor:'#f0f0f0',
    textAlign:'center',
    alignSelf:'center',
    color:'maroon',
    borderRadius:10,
    marginTop:15
  },
  cards: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'space-evenly',
    gap:18,
    marginTop:15
  },
  comp: {
    flex:1,
    justifyContent: 'flex-start',
    alignContent:'center',
    borderWidth:1,
    borderColor:'#f0f0f0',
    height:200,
    width:'96%',
    borderRadius:30,
    backgroundColor:'#f0f0f0'
  },
  title: {
    textAlign:'center',
    fontSize: 20,
    fontWeight: 'bold',
    color:'maroon',
    opacity:0.7
  },
  prize:{
    fontSize:16,
    color:'grey',
    fontWeight:'bold',
    marginTop:16
  },
  dead:{
    fontSize:15,
    color:'grey',
    fontWeight:'bold',
    marginTop:15
  },
  age:{
    fontSize:18,
    color:'red',
    fontWeight:'bold',
    marginTop:18
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
})