import React,{useState} from 'react'
import {View,Text,ScrollView,StyleSheet,TextInput,Image,FlatList,Button, TouchableOpacity} from 'react-native';
import CompData from '../Data/CompData' 
import { MapPin } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
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
  const navigation = useNavigation()
  const images = {
      badminton: require('../../assets/paralympic badminton-cuate (1) (1).png'),
      tabletennis: require('../../assets/paralympic table tennis-cuate (1).png'),
      basketball: require('../../assets/Basketball-cuate (1).png'),
    };
    return (
        <View style={styles.cards} key={product.id}>
             <View style={styles.comp}>
                <View style={styles.productRow}>
                  <Image source={images[product.src]} style={styles.productImage} />

                  <View style={styles.info}>
                    <Text style={styles.title}>{product.title}</Text>
                  </View>
                </View>
                <View style={styles.mainInfo}>
                  <Text style={styles.priceLine}>
                    Win cash  -
                    <Text style={[styles.priceAmount]}> INR {product.prize}</Text>
                  </Text>
                  <View style={styles.locationContainer}>
                    <MapPin size={20} color="#d3cbcbff" />
                    <Text style={styles.location}>{product.venue}</Text>
                  </View>

                  <Text style={styles.elig}>{product.eligibility}</Text>
                  <View style={styles.divider}></View>
                  <TouchableOpacity 
                    onPress={() => navigation.navigate('EnrolComp', { product })}
                    style={styles.enrollButton}
                  >
                    <View style={styles.row}>
                      <Text style={styles.registrationText}>
                        Registrations closes by {product.competitionStart}
                      </Text>

                      <Text style={styles.enrollText}>Enroll</Text>
                    </View>
                  </TouchableOpacity>

                </View>
            </View>
        </View>

  )}
const styles = StyleSheet.create({
    cards: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 15,
  },
  elig: {
  color: 'white',
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: 19,
  letterSpacing: 0.5,
  textShadowColor: 'rgba(0, 0, 0, 0.5)',  
  textShadowRadius: 2,
  paddingVertical:13
},

  comp: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 320,
    width: 400,
    borderRadius: 26,
    backgroundColor: '#f0f0f0',
    overflow: 'hidden',
    position: 'relative',
  },
  mainInfo:{
    backgroundColor:'#000000',
    justifyContent:'center',
    height:'55%',
    width:'100%',
    paddingHorizontal:20,
    paddingTop:14
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 26,
  },


  productRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(4, 4, 4, 0.6)',
    height:'45%',
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
    marginBottom:'auto'
  },

  productImage: {
    height: 120,
    width: 180,
    borderRadius: 15,
    marginRight: 15,
  },

  info: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 6,
  },

  priceLine: {
  fontSize: 16,
  fontWeight: '600',
  color:'white',
  letterSpacing: 0.5,
},

priceAmount: {
  fontSize: 20,
  fontWeight: '700',
  color: '#FFD700',
  letterSpacing: 1,
  textShadowColor: 'rgba(0,0,0,0.5)',
  textShadowOffset: { width: 1, height: 1 },
  textShadowRadius: 3,
},


  location: {
    fontSize: 16,
    color: '#aaaaaa',
    paddingLeft: 5,
    marginTop: 4, 
    flexShrink: 1,
  },
  locationContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  paddingTop:8,
  gap: 6,
},
divider: {
  height: 1,
  backgroundColor: '#a09e9eff',
  width: '95%',
  alignSelf: 'center',
  marginVertical: 6,
  opacity: 0.7,
},
enrollButton: {
  marginTop: 'auto',
  paddingVertical: 8,
  paddingHorizontal: 10,
},

row: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
},

registrationText: {
  color: 'rgba(187, 184, 184, 0.7)',
  fontSize: 13,
  fontWeight: '500',
  letterSpacing: 0.3,
},

enrollText: {
  color: 'white',
  fontSize: 20,
  fontWeight: 'bold',
  paddingBottom: 5,
  textAlign: 'right',
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