import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from './src/screens/Home'
import Competition from './src/screens/Competition'
import Sports from './src/screens/Sports'
import LoginPage from "./src/screens/LoginPage";
import About from "./src/screens/About"

export default function App() {
  const Tab = createBottomTabNavigator();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

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
            <Tab.Screen name="Home" component={Home} options={{headerShown:false}}/>
            <Tab.Screen name="Competition" component={Competition} />
            <Tab.Screen name="Sports" component={Sports} />
            <Tab.Screen name="About" component={About} />
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
