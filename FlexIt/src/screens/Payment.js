import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet,Alert} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeft } from 'lucide-react-native'
import { useNavigation } from '@react-navigation/native'
export default function Payment({route}){
    const {info , payCourt , play} = route.params
    const navigation = useNavigation()
    const handleCancel = async () =>{
        Alert.alert(
            'Want to Cancel the Payment',[
                {
                    text:'No',
                    style:'cancel'
                },
                {
                    text: 'Yes',
                    onPress: () => navigation.goBack()
                }
            ]
        )
    }
  return (
    <LinearGradient
        colors={['#141515ff', '#343635ff']}
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
    >
        <SafeAreaView>
            <TouchableOpacity style={styles.backButton} onPress={handleCancel}>
                <ArrowLeft size={24} color="#fff" />
            </TouchableOpacity>
            <View>
                <Text></Text>
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