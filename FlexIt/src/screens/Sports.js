import React from 'react'
import {View,Text,ScrollView,StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Sports(){
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
            <Text style={styles.head}>
                Select the Date :)
            </Text>
            <ScrollView horizontal>
              <View style={styles.card}>
                <Text style={styles.text}>26</Text>
                <Text style={[styles.text,{fontSize:19,color:'maroon'}]}>Tue</Text>
              </View>
              <View style={styles.card}>
                <Text style={styles.text}>27</Text>
                <Text style={[styles.text,{fontSize:19,color:'maroon'}]}>Wed</Text>
              </View>
              <View style={styles.card}>
                <Text style={styles.text}>28</Text>
                <Text style={[styles.text,{fontSize:19,color:'maroon'}]}>Thu</Text>
              </View>
              <View style={styles.card}>
                <Text style={styles.text}>29</Text>
                <Text style={[styles.text,{fontSize:19,color:'maroon'}]}>Fri</Text>
              </View>
              <View style={styles.card}>
                <Text style={styles.text}>30</Text>
                <Text style={[styles.text,{fontSize:19,color:'maroon'}]}>Sat</Text>
              </View>
              <View style={styles.card}>
                <Text style={styles.text}>31</Text>
                <Text style={[styles.text,{fontSize:19,color:'maroon'}]}>Sun</Text>
              </View>
              <View style={styles.card}>
                <Text style={styles.text}>01</Text>
                <Text style={[styles.text,{fontSize:19,color:'maroon'}]}>Mon</Text>
              </View>
            </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  head: {
    fontSize:40,
    fontWeight: 'bold',
    marginLeft:15,
    marginBottom:20
  },
  card: {
    width:80,
    height:80,
    backgroundColor: 'lightgrey',
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    margin:5
  },
  text: {
    fontWeight:'bold'
  }
})
