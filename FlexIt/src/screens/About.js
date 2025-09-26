import React from 'react'
import {View,Text,ScrollView,StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Profile from '../components/Profile';

export default function About(){
  return (
    <SafeAreaView>
      <ScrollView>
        
        <View style={styles.container}>
          <Profile/>
          <View style={styles.cards}>

            <View style={styles.inside}>
              <Text style={styles.text}>My Bookings</Text>
              <Text>View Transactions & Receipts</Text>
              <View style={{height: 1,width: 250,backgroundColor: 'black',marginVertical: 10}} />
            </View>

            <View style={styles.inside}>
              <Text style={styles.text}>Preferences & Privacy</Text>
              <Text>Sports Rules, Notifications, Loactions, etc..</Text>
              <View style={{height: 1,width: 250,backgroundColor: 'black',marginVertical: 10}} />
            </View>

            <View style={styles.inside}>
              <Text style={styles.text}>Competitions Rule</Text>
              <Text>Competition Rules, Regulations, Permissions</Text>
              <View style={{height: 1,width: 250,backgroundColor: 'black',marginVertical: 10}} />
            </View>
          </View>

          <View style={styles.cards}>
            <View style={styles.inside}>
                <Text style={styles.text}>Contact FlexIt</Text>
                <Text>Add Sports Club with us.</Text>
                <View style={{height: 1,width: 250,backgroundColor: 'black',marginVertical: 10}} />
            </View>
            <View style={styles.inside}>
                <Text style={styles.text}>Discounts %</Text>
                <Text>Check the discounts for the sports</Text>
                <View style={{height: 1,width: 250,backgroundColor: 'black',marginVertical: 10}} />
            </View>
            <View style={styles.inside}>
                <Text style={styles.text}>Invite & Earn</Text>
                <Text>Refer your friend and get discounts </Text>
                <View style={{height: 1,width: 250,backgroundColor: 'black',marginVertical: 10}} />
            </View>
            <View style={styles.inside}>
                <Text style={styles.text}>logout ~ </Text>
            </View>
          </View>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    height:'100%',
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    gap:30,
  },
  cards: {
    width:370,
    height:400,
    flexDirection:'column',
    backgroundColor:'white',
    borderRadius:15,
    justifyContent:'space-evenly',
    alignItems:'center',
    gap:10
  },
  text: {
    fontSize:24
  },
  inside: {
    justifyContent:'center',
    alignItems:'center',
  }
})