import React, { useEffect, useState,useContext } from 'react'
import { View, Text, Image, TouchableOpacity,StyleSheet ,Dimensions} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { LocationContext } from '../Extras/Location'

const {width,height} = Dimensions.get('window')
export default function Profile() {
  const {city} = useContext(LocationContext)
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const storedUser = await AsyncStorage.getItem("user");
      if (storedUser) setUser(JSON.parse(storedUser));
    };

    fetchUser();
  }, []);

  return (
    <View style={styles.container}>
        <Image
        source={require("../../assets/istockphoto-1393750072-612x612.jpg")}
        style={{ width: 100, height: 100, borderRadius: 50 }}
      />
      <Text style={styles.elig}>
        {user ? `Name: ${user}` : "No Name Found"}
      </Text>
      <Text style={styles.elig}>Your Current Location: {city}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    alignItems:'center',
    gap:2
  },
  elig: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: width * 0.040,
    letterSpacing: 0.5,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowRadius: 2,
  },
})
