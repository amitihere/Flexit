import React from 'react'
import {Image,View,Text,StyleSheet} from 'react-native'

export default function HomeHeader(){
    return (
        <View style={styles.container}>
            <Image 
            source={require('../../assets/Gemini_Generated_Image_npvui9npvui9npvu (1).png')}
            style={styles.logo}
            />
            <View style={{alignSelf:'center'}}>
                <Text style={styles.welcomeText}>Welcome to</Text>
                <Text style={styles.appName}>FlexIt</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
    logo: {
        height: 60,
        width: 60,
        borderRadius: 10,
    },
    welcomeText: {
        fontSize: 14,
        color: '#fff',
    },
    appName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#96986dff',
    }
})