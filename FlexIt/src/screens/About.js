import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Profile from '../components/Profile';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function About({ setIsLoggedIn }) {
  const navigation = useNavigation();

  const handleLogOut = async () => {
    await AsyncStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        <Profile />

        <View style={styles.cards}>
          <TouchableOpacity style={styles.inside} onPress={() => navigation.navigate('Admin')}>
            <Text style={styles.text}>Admin</Text>
            <Text>Add Sports Club with us.</Text>
            <View style={styles.divider} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.inside} onPress={() => alert('Please contact 839405856')}>
            <Text style={styles.text}>Contact FlexIt</Text>
            <Text>Contact for any queries</Text>
            <View style={styles.divider} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.inside} onPress={() => navigation.navigate('AddVenue')}>
            <Text style={styles.text}>Invite & Earn</Text>
            <Text>Refer your friend and get discounts</Text>
            <View style={styles.divider} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.inside} onPress={handleLogOut}>
            <Text style={[styles.text, { paddingBottom: 10 }]}>Logout ~</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Text style={styles.footerText}>Developed with ❤️ by Amiti Aneesh</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff'
  },
  scrollContainer: {
    paddingVertical: 30,
    alignItems: 'center',
    gap: 30,
  },
  cards: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 15,
    paddingVertical: 25,
    alignItems: 'center',
    gap: 18,
    elevation: 4,
    shadowColor: '#0004'
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 5
  },
  inside: {
    alignItems: 'center',
  },
  divider: {
    height: 1,
    width: 230,
    backgroundColor: 'black',
    marginTop: 6
  },
  footerText: {
    fontWeight: 'bold',
    fontSize: 15,
    alignSelf: 'center',
    paddingVertical: 15,
    color: 'black'
  }
});
