import React,{useState} from 'react'
import {View,Text,ScrollView,StyleSheet,TextInput,Image,FlatList} from 'react-native';
import CompData from '../Data/CompData' 
export const CompContext = React.createContext();
export default function RenderComp(){
    const DATA = CompData();
    const {name,setName,handleName} = React.useContext(CompContext);
    

  return (
        <FlatList
        data={name ? handleName : DATA}
        renderItem={({item})=> <Item product = {item}/>}
        keyExtractor={(item)=>item.id}
        showsVerticalScrollIndicator={false}
        />
  )
}
const Item = ({product})=> {
  const images = {
      badminton: require('../../assets/Badminton-pana.webp'),
    };
    return (
        <View style={styles.cards} key={product.id}>
             <View style={styles.comp}>
                
              <Image source={require('../../assets/abstract-background-waves-banner-medium-600nw-2407191051.webp')} style={styles.image} />
              <View style={styles.overlay}>
                <Image source={images[product.src]} style={{height:100,width:200}}/>
              </View>
            </View>
        </View>

  )}
const styles = StyleSheet.create({
    cards: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'space-evenly',
    marginBottom:10,
    marginTop:15
  },
  comp: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 200,
    width: 400,
    borderRadius: 26,
    backgroundColor: '#f0f0f0',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 26,
  },
  overlay: {
    position: 'absolute',
    left: 10,
    top: '20%',

    alignItems: 'flex-start',
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

{/* <Text style={styles.title}>
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
    
                </View> */}