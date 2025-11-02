import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home'
import Competition from './src/screens/Competition'
import Sports from './src/screens/Sports'
import LoginPage from "./src/screens/LoginPage";
import About from "./src/screens/About"
import { Ionicons } from '@expo/vector-icons';
import Admin from "./src/screens/Admin";
import AddVenue from "./src/Data/AddVenue";
import { House } from 'lucide-react-native';
import { Trophy } from 'lucide-react-native';
import { CalendarCheck } from 'lucide-react-native';
import { User } from 'lucide-react-native';
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();
function BottomTabs() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    const checkLogin = async () => {
      const user = await AsyncStorage.getItem("username");
      if (user) {
        setIsLoggedIn(true);
      }
    };
    checkLogin();
  }, []);
  return (
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 12 },
          tabBarActiveTintColor: "#6f6f58ff",
          tabBarInactiveTintColor: "#96986dff",
          tabBarStyle: {
            backgroundColor: "#111111ff",
          },
        }}
      >
        {isLoggedIn ? (
          <>

            <Tab.Screen name="home" component={Home} options={{
              title: 'FlexIt',
              tabBarLabel:'Home',
              tabBarIcon: () => (
                <House color="#96986dff" size={24} />
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
                <Trophy color="#96986dff" size={24} />
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
            <Tab.Screen name="Sports" component={Sports} options={{
              headerShown: false,
              tabBarIcon: () => (
                <CalendarCheck color="#96986dff" size={24} />
              )
            }}/>

            <Tab.Screen name="About" component={About} options={{
              tabBarLabel:'About',
              headerShown: false,
              tabBarIcon: () => (
                <User color="#96986dff" size={24}/>
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
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainTabs" component={BottomTabs} />
        <Stack.Screen name="Admin" component={Admin} />
        <Stack.Screen name="AddVenue" component={AddVenue} />
      </Stack.Navigator>
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
