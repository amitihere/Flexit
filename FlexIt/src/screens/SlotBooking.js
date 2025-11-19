import React from 'react'
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { ArrowLeft} from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function SlotBooking(){
    const navigation = useNavigation()
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
            <Text>Came to slot booking page</Text>
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