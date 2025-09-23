import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Profile() {
  const [name, setName] = useState('')
  const [pass, setPass] = useState('')

  useEffect(() => {
    const loadData = async () => {
        const storedName = await AsyncStorage.getItem("username")
        const storedPass = await AsyncStorage.getItem("password")
        if (storedName){
            setName(storedName)
        }
        if (storedPass){ 
            setPass(storedPass)
        }else{
            console.log('not found')
        }
    }
    loadData()
  }, [])

  return (
    <View>
        <Image
        source={require("./istockphoto-1393750072-612x612.jpg")}
        style={{ width: 100, height: 100, borderRadius: 50 }}
      />
      <Text>
        {name ? `Name: ${name}` : "No Name Found"}
      </Text>
      <Text style={{ fontSize: 16, color: 'grey' }}>
        {pass ? `Password: ${pass}` : "No Password Found"}
      </Text>
    </View>
  )
}