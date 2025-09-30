import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import {View,Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function AddVenue () {
    const navigation = useNavigation();
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={() => navigation.navigate('Admin')} />
        <Appbar.Content title="Add Venue" />
    </Appbar.Header>
  )
}
