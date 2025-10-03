import React,{useEffect,useState} from 'react'
import {View,Text,TextInput,Button,StyleSheet,ScrollView,ImageBackground,TouchableOpacity} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function LoginPage({setIsLoggedIn}){
    const [saved,setSaved] = useState('')
    const [name,setName] = useState('')
    const [pass,setPass] = useState('')
    const [status,setStatus] = useState(true)
    useEffect(()=>{
        let loader = async ()=>{
            let data = await AsyncStorage.getItem(name)
            if(data){
                setSaved(name)
                setStatus(true)
            }
        }
        loader()
    },[])
    const handleSave = async () => {
        console.log('vochindi royyy');
        
        if(name.trim().length===0 || pass.trim().length===0){
            alert("Please fill the detail")
        }
        else{
            await AsyncStorage.setItem("username",name)
            await AsyncStorage.setItem("password",pass)
            setSaved(name)
            setStatus(true)
            setIsLoggedIn(true)
            setPass('')
            setName('')
        }
        
    }
  return (
    <ImageBackground source={require('../../assets/Gemini_Generated_Image_b2ecoib2ecoib2ec.png')} style={{flex:1,width:'100%',height:'100%'}} resizeMode='cover'>
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={{margin:5,fontWeight:'bold',fontSize:20}}>
                    {status?'Login':`Sign Up`}
                </Text>
                <Text style={styles.initial}>
                    Username:
                </Text>
                <TextInput 
                placeholder='Enter your name'
                style={styles.type}
                value={name}
                onChangeText={setName}
                />
                <Text style={styles.initial}>
                    Password:
                </Text>
                <TextInput 
                placeholder='Password'
                style={styles.type}
                secureTextEntry={true}
                onChangeText={setPass}
                value={pass}
                />
                <Button title={status?'Login':'Sign up'} onPress={handleSave}/>
                {status   && <Text>Don't have a account? <Text style={{color:"blue"}} onPress={()=>{setStatus(false)}}>Sign up</Text></Text>}
            </View>
        </View>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        opacity: 0.5
    },
    box: {
        width: 280,
        height: 240,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
        backgroundColor: 'lightgrey',
        alignItems: 'center'
    },
    type: {
        width:200,
        height:29,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: 'grey',
        margin: 10,
        borderRadius:8
    },
    initial : {
        alignSelf:'flex-start',
        marginLeft:10
    },
})