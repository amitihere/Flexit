import React from 'react'
import {View,Text,StyleSheet,FlatList,Image} from 'react-native'
import { ExploreComp } from '../Data/ExploreComp'
import LottieView from 'lottie-react-native';
export function HomeCompAttributes(){
    const Item = ({product}) => {
        return (
            <View style={styles.itemContainer}>
                <Image source={product.image} style={styles.image}/>
            </View>
        )
}
  return (
    <View style={styles.container}>
        <View style={styles.comphead}>
            <Text style={styles.comptext}>EXPLORE THE COMPETITIONS</Text>
            <View style={[styles.divider,{width:150}]}></View>
        </View>
        <View style={styles.flat}>
            <FlatList
            data = {ExploreComp}
            renderItem={({item})=> <Item product={item}/>}
            keyExtractor={item=>item.id}
            showsHorizontalScrollIndicator = {false}
            horizontal
            contentContainerStyle={{ alignItems: "center" }}
            />
        </View>
        <LottieView
        source={require('../../assets/animations/Football team players.json')}
        autoPlay
        loop
        style={{ width: 300, height: 200 ,alignSelf:'center'}}
      />
        <View style={styles.divider}></View>

        
    </View>
  )
}


export function HomeSportAttributes(){
    const Item = ({product}) => {
        return (
            <View style={styles.itemContainer}>
                <Image source={product.image} style={styles.image}/>
            </View>
        )
}
  return (
    <View style={styles.container}>
        <View style={styles.comphead}>
            <Text style={styles.comptext}>EXPLORE THE SPORTS</Text>
            <View style={[styles.divider,{width:150}]}></View>
        </View>
        <View style={styles.flat}>
            <FlatList
            data = {ExploreComp}
            renderItem={({item})=> <Item product={item}/>}
            keyExtractor={item=>item.id}
            showsHorizontalScrollIndicator = {false}
            horizontal
            contentContainerStyle={{ alignItems: "center" }}
            />
        </View>
        
        <View style={styles.divider}></View>

        
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
    },
    comptext: {
        color:'#c7c0c0ff',
        fontSize:12.5,
        marginRight:10
    },
    comphead:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical: 10,
        marginLeft:12,
        opacity:0.5,
    },
    divider: {
        height: 1,
        backgroundColor: '#f1ececff',
        width: '95%',
        alignSelf: 'center',
        marginVertical: 6,
        opacity: 0.7,
    },
    image: {
        width:170,
        height:210,
        borderRadius:12,
    },
    flat: {
        marginVertical:19,
        height: 250,
        borderWidth:0.5,
        borderColor:'#c1bdbdff',
        borderRadius:12,
        alignSelf:'center',
        overflow:'hidden'
    },
    itemContainer: {
        marginRight: 16,
        marginLeft:9
},
})