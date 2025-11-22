import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { ArrowLeft, MapPin } from 'lucide-react-native';
import * as Linking from 'expo-linking';

export default function EnrolComp({ route }) {

  const images = {
    badminton: require('../../assets/paralympic badminton-cuate (1) (1).png'),
    tabletennis: require('../../assets/paralympic table tennis-cuate (1).png'),
    basketball: require('../../assets/Basketball-cuate (1).png'),
  };

  const { product } = route.params;
  const navigation = useNavigation();
  const handleEnrol = () => {
    alert(`Please contact ${product.contact}`)
  }
  const openMap = () => {
    const address = product.venue;
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  
    Linking.openURL(url).catch(err => console.error("Error opening map:", err));
  };

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
          <View style={styles.mainBox}>
            
            <Image source={images[product.src]} style={styles.productImage} />

            <Text style={styles.title}>{product.title}</Text>

            <View style={styles.locationRow}>
              <MapPin size={25} color="#d3cbcbff" />
              <Text style={styles.locationText}>{product.venue}</Text>
            </View>

            <TouchableOpacity style={styles.mapsButton} onPress={openMap}>
              <Text style={styles.mapsText}>Open in Maps</Text>
            </TouchableOpacity>
            <Text style={[styles.title,{color:'#eae30fe5'}]}>Prize Pool -  INR {product.prize}</Text>


          </View>
          <Text style={[styles.title,{padding:10}]}>Insights</Text>
          <View style={styles.infoBox}>

            <Text style={styles.infoText}>
              1 . The event is titled <Text style={styles.highlight}>{product.title}</Text>.
            </Text>

            <Text style={styles.infoText}>
              2 . This competition features the sport of <Text style={styles.highlight}>{product.sports}</Text>.
            </Text>

            <Text style={styles.infoText}>
              3 . Participants must meet the eligibility criteria: 
              <Text style={styles.highlight}> {product.eligibility}</Text>.
            </Text>

            <Text style={styles.infoText}>
              4 . The event will be held in the state of <Text style={styles.highlight}>{product.state}</Text>.
            </Text>

            <Text style={styles.infoText}>
              5 . The venue for the competition is 
              <Text style={styles.highlight}> {product.venue}</Text>.
            </Text>

            <Text style={styles.infoText}>
              6 . Registration closes on <Text style={styles.highlight}>{product.apply}</Text>.
            </Text>

            <Text style={styles.infoText}>
              7 . The competition officially starts on 
              <Text style={styles.highlight}> {product.competitionStart}</Text>.
            </Text>

            <Text style={styles.infoText}>
              8 . The entry fee for the event is 
              <Text style={styles.highlight}> ₹{product.entry}</Text>.
            </Text>
            <Text style={styles.infoText}>
              9 . For more Details contact the officials
              <Text style={styles.highlight}> {product.contact}</Text>.
            </Text>

          </View>
          <TouchableOpacity style={styles.enroll} onPress={handleEnrol}>
            <Text style={styles.enrolText}>Enroll</Text>
          </TouchableOpacity>
        </ScrollView>

      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
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

  mainBox: {
    alignItems: 'center',
    marginTop: 20,
  },

  productImage: {
    width: '78%',
    height: 200,
    borderRadius: 15,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 15,
    marginBottom: 10,
  },

  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 20,
  },

  locationText: {
    fontSize: 16,
    color: '#aaaaaa',
    paddingLeft: 5,
  },

  mapsButton: {
    height: 45,
    width: '70%',
    backgroundColor: '#caceaaff',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  mapsText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  infoBox: {
  marginTop: 10,
  paddingHorizontal: 15,
  gap: 8,
  
},

infoText: {
  fontSize: 18,
  color: '#d1d1d1',
  lineHeight: 22,
  paddingVertical:5,
},

highlight: {
  color: '#ffffff',
  fontWeight: '600',
},
enroll:{
  width:250,
  height:50,
  backgroundColor:'#9c9f62ff',
  borderRadius:15,
  borderWidth:2,
  borderColor:'white',
  alignSelf:'center',
  overflow:'hidden',
  marginVertical:15,
},
enrolText: {
  color: 'white',
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: 19,
  letterSpacing: 0.9,
  textShadowColor: 'rgba(0, 0, 0, 0.5)',  
  textShadowRadius: 2,
  paddingVertical:13
},
});
