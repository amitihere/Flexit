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

            if(status == 'granted'){
                const userLocation = await Location.getCurrentPositionAsync({});
                console.log(userLocation)
                setLocation(userLocation)

                const cityLocation = await Location.reverseGeocodeAsync({
                    latitude: userLocation.coords.latitude,
                    longitude: userLocation.coords.longitude
                })
                setCity(cityLocation[0].city)

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