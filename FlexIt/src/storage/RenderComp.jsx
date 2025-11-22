import React,{useContext, useState} from 'react'
import {View,Text,ScrollView,StyleSheet,TextInput,Image,FlatList,Button, TouchableOpacity, Dimensions} from 'react-native';
import CompData from '../Data/CompData' 
import { MapPin } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { LocationContext } from '../Extras/Location';
export const CompContext = React.createContext();
const { width, height } = Dimensions.get('window');
export default function RenderComp(){
    const DATA = CompData();
    const {city} = useContext(LocationContext)
    const cityData = DATA.filter((t)=> t.state.toLowerCase().trim().includes(city.toLowerCase().trim()))
    const {name,setName,handleName} = React.useContext(CompContext);
    

  return (
        <FlatList
        data={name ? handleName : cityData}
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
                    <Text style={styles.location} numberOfLines={2}>{product.venue} {product.state}</Text>
                  </View>

                  <Text style={styles.elig}>{product.eligibility}</Text>
                  <View style={styles.divider}></View>
                  <TouchableOpacity style={styles.enrollButton} onPress={() => navigation.navigate('EnrolComp', { product })}>
                    <View style={styles.enrollCenter}>
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
export const styles = StyleSheet.create({
  cards: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: height * 0.015,
    marginTop: height * 0.02,
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

  comp: {
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.45,
    width: width * 0.92,
    borderRadius: 30,
    backgroundColor: '#f0f0f0',
    overflow: 'hidden',
    position: 'relative',
  },

  mainInfo: {
    backgroundColor: '#000',
    justifyContent: 'center',
    height: '55%',
    width: '100%',
    paddingHorizontal: width * 0.05,
    paddingTop: height * 0.015,
  },

  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },

  productRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(4, 4, 4, 0.6)',
    height: '45%',
    padding: width * 0.03,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
    marginBottom: 'auto',
  },

  productImage: {
    height: height * 0.15,
    width: width * 0.38,
    borderRadius: 15,
    marginRight: width * 0.04,
  },

  info: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    fontSize: width * 0.045,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 6,
  },

  priceLine: {
    fontSize: width * 0.040,
    fontWeight: '600',
    color: 'white',
    letterSpacing: 0.5,
  },

  priceAmount: {
    fontSize: width * 0.055,
    fontWeight: '700',
    color: '#FFD700',
    letterSpacing: 1,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },

  location: {
    fontSize: width * 0.040,
    color: '#aaa',
    paddingLeft: 5,
    marginTop: 4,
    flexShrink: 1,
  },

  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: height * 0.01,
    gap: 6,
  },

  divider: {
    height: 1,
    backgroundColor: '#a09e9eff',
    width: '95%',
    alignSelf: 'center',
    marginVertical: height * 0.01,
    opacity: 0.7,
  },

  enrollButton: {
    marginTop: 'auto',
    paddingVertical: height * 0.012,
    paddingHorizontal: width * 0.03,
  },

  enrollCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  registrationText: {
    color: 'rgba(187, 184, 184, 0.7)',
    fontSize: width * 0.028,
    fontWeight: '500',
    letterSpacing: 0.3,
  },

  enrollText: {
    color: 'white',
    fontSize: width * 0.050,
    fontWeight: 'bold',
    paddingBottom: 5,
    textAlign: 'right',
  },
});