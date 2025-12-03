import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import AdminRules from '../Data/AdminRules';
import { useNavigation } from '@react-navigation/native';
import { Appbar } from 'react-native-paper';

export default function Admin() {
  const rules = AdminRules();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.screen}>
      <Appbar.BackAction onPress={() => navigation.goBack()} />

      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <Text style={styles.head}>
          Welcome to the <Text style={{ color: 'maroon', fontSize: 40 }}>Admin</Text> ~page~
        </Text>

        <View style={styles.card}>
          <Text style={styles.regis}>*Process of Registration*</Text>

          {rules.map((data, index) => (
            <Text key={index} style={styles.ruleText}>
              • {data.rule}
            </Text>
          ))}
        </View>

        <TouchableOpacity style={styles.add} onPress={() => alert('Please contact 78199902934')}>
          <Text style={styles.regis}>Add Venue</Text>
        </TouchableOpacity>

        <Text style={styles.footer}>
          ~After Adding the Venue, it will be verified and then added to the main page for users to
          book slots and participate.~
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff'
  },
  scrollContainer: {
    paddingVertical: 20,
    paddingHorizontal: 14,
    alignItems: 'center',
    gap: 25
  },
  head: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  card: {
    width: '92%',
    backgroundColor: 'lightgrey',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 12,
    alignItems: 'center',
    gap: 12
  },
  regis: {
    fontSize: 20,
    textAlign: 'center',
    color: 'maroon',
    fontWeight: 'bold'
  },
  ruleText: {
    marginVertical: 6,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  add: {
    width: 160,
    height: 50,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
    borderWidth: 2,
    borderColor: 'black'
  },
  footer: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingHorizontal: 10,
    marginBottom: 20
  }
});
