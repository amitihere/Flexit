import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import { ArrowLeft } from 'lucide-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get('window');

export default function LoginPage({ setIsLoggedIn }) {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(true); // true = login, false = signup

  useEffect(() => {
    const loadData = async () => {
      const storedUser = await AsyncStorage.getItem("user");
      if (storedUser) {
        console.log("Already logged in", storedUser);
        setIsLoggedIn(true);
      }
    };
    loadData();
  }, []);

  const loginData = {
    email: email,
    password: pass
  };

  const signupData = {
    name: name,
    email: email,
    password: pass
  };

  const handleSave = async () => {
    const route = status ? "login" : "signup";

    if (!email.includes("@") || email.lastIndexOf(".") < email.indexOf("@")) {
      return alert("Invalid email format");
    }

    try {
      console.log("Sending request...");
      const response = await fetch(`http://Amitis-MacBook-Pro.local:3000/${route}`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(status ? loginData : signupData)
      });

      const res = await response.json();
      console.log("Response:", res);

      if (response.status === 200) {
        await AsyncStorage.setItem("user", JSON.stringify(email)); // Save email
        setIsLoggedIn(true);
      } else {
        alert(res.message);
      }
    } catch (err) {
      console.log("Error", err);
    }
  };

  const switchToSignup = () => {
    setStatus(false);
    setEmail('');
    setName('');
    setPass('');
  };

  return (
    <ImageBackground
      source={require('../../assets/Gemini_Generated_Image_b2ecoib2ecoib2ec.png')}
      style={{ flex: 1, width: '100%', height: '100%' }}
      resizeMode='cover'
    >
      <View style={styles.container}>
        {!status && (
          <TouchableOpacity style={styles.backButton} onPress={() => setStatus(true)}>
            <ArrowLeft size={24} color="#fff" />
          </TouchableOpacity>
        )}

        <View style={[styles.box, { height: status ? height * 0.34 : height * 0.43 }]}>
          <Text style={styles.heading}>{status ? "Login" : "Sign Up"}</Text>

          {/* LOGIN EMAIL + PASSWORD */}
          {status ? (
            <>
              <Text style={styles.initial}>Email:</Text>
              <TextInput
                placeholder='Enter your email'
                style={styles.type}
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
            </>
          ) : (
            /* SIGNUP NAME + EMAIL */
            <>
              <Text style={styles.initial}>Name:</Text>
              <TextInput
                placeholder='Enter your name'
                style={styles.type}
                value={name}
                onChangeText={setName}
              />

              <Text style={styles.initial}>Email:</Text>
              <TextInput
                placeholder='Enter your email'
                style={styles.type}
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
            </>
          )}

          {/* COMMON PASSWORD INPUT */}
          <Text style={styles.initial}>Password:</Text>
          <TextInput
            placeholder='Password'
            secureTextEntry
            style={styles.type}
            value={pass}
            onChangeText={setPass}
          />

          <TouchableOpacity onPress={handleSave} style={styles.touch}>
            <Text>{status ? "Login" : "Sign Up"}</Text>
          </TouchableOpacity>

          {status && (
            <Text>
              Don't have an account?{" "}
              <Text style={{ color: "blue" }} onPress={switchToSignup}>Sign up</Text>
            </Text>
          )}
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  box: {
    width: width * 0.75,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    paddingTop: 20,
    overflow: 'hidden'
  },
  heading: {
    margin: 5,
    fontWeight: 'bold',
    fontSize: 20
  },
  type: {
    width: width * 0.5,
    height: height * 0.040,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    marginVertical: 10,
    borderRadius: 8
  },
  initial: {
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: 'bold'
  },
  touch: {
    width: width * 0.5,
    height: 40,
    backgroundColor: '#bdbf9aff',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  backButton: {
    position: 'absolute',
    top: width * 0.23,
    left: width * 0.1,
    zIndex: 1,
    backgroundColor: 'rgba(51, 49, 49, 0.5)',
    padding: 10,
    borderRadius: 20,
  }
});
