import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import {View,Text,StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
export default function AddVenue () {
    const navigation = useNavigation();
  return (
    <LinearGradient
        colors={['#1D976C', '#93F9B9']}
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
      <SafeAreaView>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
          <Text>hello add venue</Text>
      </SafeAreaView>
      </LinearGradient>
    
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})