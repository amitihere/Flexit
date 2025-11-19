import React,{useContext} from 'react'
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { ArrowLeft} from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SelectSlots from '../components/SelectSlots';
import { CreateDate } from '../components/SelectSlots';
export default function SlotBooking({route}){
    const navigation = useNavigation()
    const { product } = route.params;
    const {select} = useContext(CreateDate)
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
            <View>
                <Text style={styles.title}>{product.name}</Text>
                <SelectSlots/>
            </View>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 20,
    alignSelf:'center'
  },
})