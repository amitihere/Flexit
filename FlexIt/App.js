import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from './src/screens/Home'
import Competition from './src/screens/Competition'
import Sports from './src/screens/Sports'
import LoginPage from "./src/screens/LoginPage";
import About from "./src/screens/About"
import { Ionicons } from '@expo/vector-icons';
export default function App() {
  const Tab = createBottomTabNavigator();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const checkLogin = async () => {
  //     const user = await AsyncStorage.getItem("username");
  //     if (user) {
  //       setIsLoggedIn(true);
  //     }
  //   };
  //   checkLogin();
  // }, []);
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {isLoggedIn ? (
          <>

            <Tab.Screen name="home" component={Home} options={{
              title: 'FlexIt',
              tabBarLabel:'Home',
              tabBarIcon: () => (
                <Ionicons name="home-outline" color="black" size={20}/>
              ),
              headerStyle: {
                backgroundColor: '#f8f9fa',
              },
              headerTitleStyle: {
                fontSize:30,
                color:'maroon',
                fontWeight:'bold'
              },
            }}/>

            <Tab.Screen name="Competition" component={Competition} options={{
              title: 'FlexIt',
              tabBarLabel:'Competition',
              tabBarIcon: () => (
                <Ionicons name="" color="black" size={20}/>
              ),
              headerStyle: {
                backgroundColor: '#f8f9fa',
              },
              headerTitleStyle: {
                fontSize:30,
                color:'maroon',
                fontWeight:'bold'
              },
            }}/>
            <Tab.Screen name="Sports" component={Sports} options={{}}/>

            <Tab.Screen name="About" component={About} options={{
              tabBarLabel:'About',
              headerShown: false,
              tabBarIcon: () => (
                <Ionicons name="person" color="black" size={20}/>
              )
            }}/>

          </>
        ) : (
          <Tab.Screen name="." options={{
            headerShown: false,
            tabBarStyle: { display: 'none' }, }}>
            {() => <LoginPage setIsLoggedIn={setIsLoggedIn} />}
          </Tab.Screen>
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
