import React,{useState} from 'react'
import {View,Text,ScrollView,StyleSheet,TextInput,Image,FlatList} from 'react-native';
import CompData from '../Data/CompData' 
export const CompContext = React.createContext();
export default function RenderComp(){
    const DATA = CompData();
    const {name,setName,handleName} = React.useContext(CompContext);
    console.log(name);
  return (
        <FlatList
        data={name ? handleName : DATA}
        renderItem={({item})=> <Item product = {item}/>}
        keyExtractor={(item)=>item.id}
        />
  )
}
const Item = ({product})=> (
    <View key={product.id}>
        <View style={styles.cards}>
             <View style={styles.comp}>
                <Text style={styles.title}>
                    Title: {product.title}
                </Text>
                <Text style={styles.prize}>
                    Prize pool: <Text style={{fontSize:22,color:'green'}}>{product.prize}</Text>
                </Text>
    
                <Text style={styles.dead}>
                    apply before: ~ {product.apply}
                </Text>
                <Text style={styles.age}>Eligibility: <Text style={{color:'black',fontSize:14}}>
                    {product.eligibility}
                    </Text>
                </Text>
    
                <View style={{flex:1,justifyContent:'flex-end'}}>
                    <Text style={{textAlign:'center',justifyContent:'flex-end'}}>
                        Read terms and conditions
                    </Text>
    
                </View>
                          
            </View>
        </View>
    </View>

)
const styles = StyleSheet.create({
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
})