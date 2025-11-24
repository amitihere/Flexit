import React,{useEffect,useState} from 'react'
import {View,Text,TextInput,Button,StyleSheet,ScrollView,ImageBackground,TouchableOpacity,Dimensions} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const {width,height} = Dimensions.get('window')
export default function LoginPage({setIsLoggedIn}){
    const [name,setName] = useState('')
    const [pass,setPass] = useState('')
    const [email,setEmail] = useState('')
    const [status,setStatus] = useState(true)

    useEffect(() => {
    const loadData = async () => {
        const storedName = await AsyncStorage.getItem("user")
        if (storedName){
            console.log("Already logged in",storedName)
            setIsLoggedIn(true)
        }
        else{
            console.log('not found')
        }
    }
    loadData()
  }, [])
    const sentData = {
            name:name,
            password:pass
        }
        const signData = {
            name:name,
            email:email,
            password:pass
        }
    const handleSave = async () => {
        const route = status ? "login": "signup";
        console.log(route)
        
        console.log(status ? sentData : signData)
        try {
            console.log("Sending request...");
            const response = await fetch(`http://localhost:3000/${route}`, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(status ? sentData : signData)
            });

            const res = await response.json();
            console.log("Response:", res);
            if (response.status === 200) {
                await AsyncStorage.setItem("user", JSON.stringify(name)); // store user details
                setIsLoggedIn(true);
            }
            else{
                alert(res.message);
            }

            } catch (err) {
            console.log("Fetch Error:", err);
            }
    }

    const handleSignUp = () => {
        setStatus(false)
        setEmail('')
        setName('')
        setPass('')
    }
  return (
    <ImageBackground source={require('../../assets/Gemini_Generated_Image_b2ecoib2ecoib2ec.png')} style={{flex:1,width:'100%',height:'100%'}} resizeMode='cover'>
        <View style={styles.container}>
            <View style={[styles.box,{height: status ? height*0.35 : height*0.40}]}>
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
                {!status && (<View><Text style={styles.initial}>
                    email:
                </Text>
                <TextInput 
                placeholder='Enter your email'
                style={styles.type}
                value={email}
                onChangeText={setEmail}
                /></View>)}
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
                <TouchableOpacity title={status?'Login':'Sign up'} onPress={handleSave} style={styles.touch}><Text>{status?"Login":"SignUp"}</Text></TouchableOpacity>
                {status   && <Text>Don't have a account? <Text style={{color:"blue"}} onPress={handleSignUp}>Sign up</Text></Text>}
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
    },
    box: {
        width: width*0.75,
        height: height*0.35,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
        backgroundColor: 'lightgrey',
        alignItems: 'center',
        paddingTop:20,
        overflow:'hidden'
    },
    type: {
        width:width*0.5,
        height:height*0.035,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: 'grey',
        marginVertical: 10,
        borderRadius:8
    },
    initial : {
        alignSelf:'center',
        fontSize:15,
        fontWeight:'bold'
    },
    touch: {
        width:width*0.5,
        height:40,
        backgroundColor:'#bdbf9aff',
        borderRadius:12,
        justifyContent:'center',
        alignItems:'center',
        margin:10
    }
})