import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Appbar } from 'react-native-paper';
import { Share2 } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

export default function AddVenue() {
  const navigation = useNavigation()

  return (
    <LinearGradient
      colors={['#1D976C', '#93F9B9']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />

        <View style={styles.content}>
          <Text style={styles.heading}>🎉 Refer & Earn Rewards!</Text>

          <Text style={styles.infoText}>
            Invite your friends to join sports activities and unlock **exclusive discounts**, 
            early event access, and exciting offers!
          </Text>

          <View style={styles.benefitsBox}>
            <Text style={styles.benefitTitle}>🔥 What You Get:</Text>
            <Text style={styles.benefitItem}>• 10-20% discount on bookings</Text>
            <Text style={styles.benefitItem}>• Faster registration for tournaments</Text>
            <Text style={styles.benefitItem}>• Premium membership perks</Text>
            <Text style={styles.benefitItem}>• Extra benefits every time your friend books</Text>
          </View>

          <TouchableOpacity style={styles.button}>
            <Share2 color="white" size={20} />
            <Text style={styles.buttonLabel}>Share Invite Link</Text>
          </TouchableOpacity>

          <Text style={styles.footerNote}>
            *Rewards depend on successful signup and booking through your link.
          </Text>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 15,
  },
  infoText: {
    fontSize: 16,
    color: '#fafffa',
    marginBottom: 20,
    lineHeight: 22,
  },
  benefitsBox: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    padding: 15,
    borderRadius: 12,
    marginBottom: 25,
  },
  benefitTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
    marginBottom: 8,
  },
  benefitItem: {
    color: 'white',
    fontSize: 15,
    marginBottom: 5,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#0B5345',
    paddingVertical: 12,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10
  },
  buttonLabel: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerNote: {
    marginTop: 20,
    fontSize: 13,
    color: '#eaffea'
  }
});
