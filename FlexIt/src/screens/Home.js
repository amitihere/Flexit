import React from 'react'
import {View,Text,StyleSheet} from 'react-native';
import Profile from '../components/Profile';
export default function Home(){
  return (
    <View>
      <Text>home lo unnav</Text>
      <Profile/>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})