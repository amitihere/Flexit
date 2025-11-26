import React,{useState,useEffect,createContext} from 'react';
import {View,Text,StyleSheet} from 'react-native'
import * as Location from 'expo-location';

export const LocationContext = createContext()
export default function LocationScreen({children}){

    const [location,setLocation] = useState(null)
    const [city,setCity] = useState(null)

    useEffect(()=>{
        const getCurrectLocation = async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status == 'granted'){
            const userLocation = await Location.getCurrentPositionAsync({});
                console.log(userLocation)
                setLocation(userLocation)

            const cityLocation = await Location.reverseGeocodeAsync({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude
            })
            console.log(cityLocation[0])
            setCity(cityLocation[0].region)
        }
    }
        getCurrectLocation()
    },[])


    return (
        <LocationContext.Provider value={{city}}>
            {children}
        </LocationContext.Provider>
    )
}
const styles = StyleSheet.create({
    text: {
        fontSize:15,
        color: 'white',
        fontWeight:'bold',
        textShadowRadius: 2
    }
})