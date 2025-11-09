import React,{useContext} from 'react'
import {View,Text,FlatList,Modal,StyleSheet,Image,ScrollView, TouchableOpacity} from 'react-native';
import {clubs} from '../Data/Book';
import { MapPin } from 'lucide-react-native';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

export const BookingContext = React.createContext();
export default function Booking(){

  const {title,setTitle,handleTitle} = useContext(BookingContext)
  return (
    <View >
        <FlatList
            data={title? handleTitle : clubs}
            renderItem={({item})=> <Item product = {item}/>}
            keyExtractor={(item)=>item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 100 }}
        />
    </View>
  )
}
const Item = ({product})=> {
  const navigation = useNavigation();
    return (
      
        <View style={styles.cards} key={product.id}>
          <View style={product.rating>4? [styles.comp,{backgroundColor:'#6d7036ff'}]:styles.comp}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.imageScroll} pagingEnabled >
            {product.images?.map((imgSrc, index) => (
              <Image
                key={index}
                source={imgSrc}
                style={styles.productImage}
              />
            ))}
          </ScrollView>
          <TouchableOpacity onPress={() => navigation.navigate('Details', { product })}>
            <View style={styles.main}>
                <Text style={product.rating>4? [styles.name,{color:'black'}]:styles.name}>{product.name}</Text>
                <View style={styles.inputBox}>
                  <View style={styles.locationContainer}>
                    <MapPin size={20} color="#d3cbcbff" />
                    <Text style={product.rating>4?[styles.location,{color:'white'}]:styles.location}>{product.location}</Text>
                  </View>
                  <View style={styles.rate}>
                    <Text>{product.rating} ({product.reviews})</Text>
                  </View>
                  
                </View>

            </View>
              <View style={styles.divider}></View>

              <View style={styles.bottomRow}>
                <Text style={styles.discount}>Upto {product.discount}% OFF</Text>
                <Text style={styles.price}><Text style={{fontWeight:'bold',fontSize:15,color:'white'}}>INR {product.price}</Text> Onwards </Text>
              </View>
          </TouchableOpacity>
          </View>
          

        </View>

  )}

const styles = StyleSheet.create({
  cards: {
    alignItems: 'center',
    marginVertical: 15,
  },
  comp: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: 335,
    width: width * 0.95,
    borderRadius: 26,
    backgroundColor: '#040404ff',
    padding: 10,
    overflow: 'hidden',
  },
  productImage: {
    width: width * 0.9,
    height: 180,
    borderRadius: 15,
  },
  imageScroll: {
    width: '100%',
    overflow: 'hidden',
  },
  name: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#b9bd75ff',
    
  },
  price: {
    fontSize: 13,
    color: '#aaaaaa',
    paddingLeft: 10,
    paddingButton: 4,

  },
  discount: {
    fontSize: 14,
    fontFamily: 'Arial',
    color: '#ddd8d6ff',
    paddingBottom: 4,
    paddingLeft: 10,
  },
  location: {
    fontSize: 16,
    color: '#aaaaaa',
    paddingLeft: 5,
    marginTop: 4, 
    flexShrink: 1,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,

  },

  main:{
    paddingLeft: 10,
    marginBottom: 20,
  },

  inputBox: {
  flexDirection: 'row',
  alignItems: 'center',
  borderRadius: 10,
  marginTop: 8,
  justifyContent: 'space-between',
},
divider: {
  height: 1,
  backgroundColor: '#a09e9eff',
  width: '95%',
  alignSelf: 'center',
  marginVertical: 6,
  opacity: 0.7,
},
rate: {
  height: 25,
  width: 75,
  backgroundColor: '#caceaaff',
  borderRadius: 10,
  justifyContent: 'center',
  alignItems: 'center',
  marginButton: 10,
  overflow: 'hidden',
},
locationContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  gap: 6,
},
});