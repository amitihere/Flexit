import React from 'react';
import {View,Text,StyleSheet, TouchableOpacity,ScrollView} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { ArrowLeft } from 'lucide-react-native';
export default function EnrolComp({route}){
    const { product } = route.params;
    const navigation = useNavigation();
    return (
        <LinearGradient
            colors={['#141515ff', '#343635ff']}
            style={styles.container}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            <SafeAreaView>
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
            </SafeAreaView>
        </LinearGradient>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 9,
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
})