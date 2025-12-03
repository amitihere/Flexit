import React,{useState,useEffect,createContext} from 'react';
import {View,Text,ActivityIndicator,StyleSheet,Linking, Platform } from 'react-native'
import * as Location from 'expo-location';

export const LocationContext = createContext();

export default function LocationScreen({ children }) {
  const [city, setCity] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCurrentLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== "granted") {
        alert("Location permission is required. Please enable it in Settings.");

        if (Platform.OS === "ios") {
            Linking.openURL("app-settings:");
        } else {
            IntentLauncher.startActivityAsync(
            IntentLauncher.ActivityAction.LOCATION_SOURCE_SETTINGS
            );
        }
        return;
        }
      const userLocation = await Location.getCurrentPositionAsync({});
      const cityLocation = await Location.reverseGeocodeAsync({
        latitude: userLocation.coords.latitude,
        longitude: userLocation.coords.longitude
      });

      setCity(cityLocation[0].region);
      setLoading(false);
    };

    getCurrentLocation();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="black" />
        <Text style={{marginTop:10}}>Requesting Location Permission...</Text>
      </View>
    );
  }

  return (
    <LocationContext.Provider value={{ city }}>
      {children}
    </LocationContext.Provider>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
