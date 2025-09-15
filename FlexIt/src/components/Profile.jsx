import React, { useEffect, useState } from 'react'
import { View, Text, Image } from 'react-native'
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
    </View>
  )
}