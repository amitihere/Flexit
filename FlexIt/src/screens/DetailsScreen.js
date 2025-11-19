import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet,TouchableOpacity,Dimensions } from 'react-native';
import { ArrowLeft,MapPin } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { sportIcons } from '../Data/Book';
const {width,height} = Dimensions.get('window')
export default function Details({ route }) {
  const { product } = route.params;
  const navigation = useNavigation();
  
  


  return (
    <LinearGradient
                colors={['#141515ff', '#343635ff']}
                style={styles.container}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
        >
    <SafeAreaView style={{ flex: 1}}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <ArrowLeft size={24} color="#fff" />
      </TouchableOpacity>
      
        <ScrollView showsVerticalScrollIndicator={false}>
            
            <Image source={product.images[0]} style={styles.image} />
            <Text style={styles.title}>{product.name}</Text>

            <View style={styles.location}>
              <MapPin size={25} color="#d3cbcbff" />
              <Text style={styles.text}> {product.Detaillocation}</Text>
            </View>

            <TouchableOpacity style={styles.button}>
              <Text>Open in Maps</Text>
            </TouchableOpacity>

            <View style={styles.divider}></View>

            <Text style={styles.title}>Available Sports</Text>
            <View style={styles.available}>
            {product.sports.map((sport, index) => (
              <View key={index} style={styles.avail}>
                <MaterialCommunityIcons
                  name={sportIcons[sport.toLowerCase()]}
                  size={30}
                  color="#96986dff"
                />
                <Text style={styles.sport}>{sport}</Text>
              </View>
            ))}
          </View>

          <View style={styles.divider}></View>
            
          <Text style={styles.title}>Amenities</Text>
          <View style={styles.available}>
            {product.Amenities.map((amenity, index) => (
              <View key={index} style={[styles.avail,{backgroundColor:'#494b4bff',borderRadius:8,padding:15,overflow:'hidden'}]}>
                <Text key={index} style={styles.text}>• {amenity}</Text>
              </View>
            ))}
          </View>

          <View style={styles.divider}></View>

          <Text style={styles.title}>About the Venue</Text>
          <Text style={styles.text}>{product.description}</Text>
          
          


        </ScrollView>
        <TouchableOpacity style={[styles.button,{alignSelf:'center'}]} onPress={()=> navigation.navigate('SlotBooking',{product})}>
          <Text style={styles.elig}>Book Your Slots</Text>
        </TouchableOpacity>
      </SafeAreaView>
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141515',
    padding: 16,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 10,
  },
  text: {
    fontSize: 17,
    color: '#ccc',
    marginBottom: 5,
    lineHeight: 24,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 10,
    zIndex: 1,
    backgroundColor: 'rgba(51, 49, 49, 0.5)',
    padding: 8,
    borderRadius: 20,
  },
  location: {
    flexDirection:'column',
    gap:10,
    textAlign: 'center',
    marginBottom: 5,
    marginTop:10,
  },
  button:{
    backgroundColor: '#96986dff',
    padding:10,
    borderRadius:8,
    alignItems:'center',
    marginVertical:10,
    width:'50%',
  },
  divider: {
  height: 2,
  backgroundColor: '#a09e9eff',
  width: '100%',
  alignSelf: 'center',
  marginVertical: 6,
  opacity: 0.8,
},
available:{
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: 15,
  marginTop: 10,
  marginBottom: 20,
},
avail:{
  backgroundColor: '#363c3cff',
  padding:20,
  opacity:0.9,
  alignItems:'center',
},
sport:{
  color:'#ddd8d6ff',
  marginTop:5,
  textAlign:'center',
},
elig: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: width * 0.040,
    letterSpacing: 0.5,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowRadius: 2,
  },
});
