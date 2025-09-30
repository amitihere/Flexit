import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import {View,Text,ScrollView,StyleSheet,TouchableOpacity} from 'react-native';
import AdminRules from '../Data/AdminRules';
import { useNavigation } from '@react-navigation/native';

export default function Admin (){
    const rules = AdminRules()
    const navigation = useNavigation();
  return (
    <SafeAreaView>
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.head}>Welcome to the <Text style={{color:'maroon',fontSize:40}}>Admin</Text> ~page~</Text>
                <View style={styles.card}>
                    <Text style={styles.regis}>
                        *Process of Registration*
                    </Text>
                    {rules.map((data,index)=>(
                        <Text key={index} style={{margin:10,fontSize:16,textAlign:'center',fontWeight:'bold'}}>
                            * {data.rule}
                        </Text>
                    ))}
                </View>
                <TouchableOpacity style={styles.add} onPress={()=> navigation.navigate('AddVenue')}>
                    <Text style={[styles.regis]}>Add Venue</Text>
                </TouchableOpacity>
                <Text style={{margin:10,fontSize:20,textAlign:'center',fontWeight:'bold'}}>~After Adding the Venue, it will be verified and then added to the
                    main page for users to book slots and participate.~
                </Text>
            </View>
            
        </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:50
  },
  head: {
    fontSize:30,
    fontWeight: 'bold',
    textAlign:'center',
    marginBottom:20
  },
  card: {
    width:380,
    height:450,
    backgroundColor: 'lightgrey',
    borderRadius:10,
    alignItems:'center',
    marginTop:30
  },
  regis: {
    fontSize:20,
    textAlign:'center',
    margin:10,
    color:'maroon',
    fontWeight:'bold'
  },
  add: {
    width:150,
    height:50,
    backgroundColor:'grey',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    marginTop:20,
    borderWidth:2,
    borderColor:'black'
  }
})
