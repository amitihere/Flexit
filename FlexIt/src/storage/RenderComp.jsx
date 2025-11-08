import React,{useState} from 'react'
import {View,Text,ScrollView,StyleSheet,TextInput,Image,FlatList,Button} from 'react-native';
import CompData from '../Data/CompData' 
export const CompContext = React.createContext();
export default function RenderComp(){
    const DATA = CompData();
    const {name,setName,handleName} = React.useContext(CompContext);
    

  return (
        <FlatList
        data={name ? handleName : DATA}
        renderItem={({item})=> <Item product = {item}/>}
        keyExtractor={(item)=>item.id}
        showsVerticalScrollIndicator={false}
        />
  )
}
const Item = ({product})=> {
  const images = {
      badminton: require('../../assets/paralympic badminton-cuate (1) (1).png'),
      tabletennis: require('../../assets/paralympic table tennis-cuate (1).png'),
      basketball: require('../../assets/Basketball-cuate (1).png'),
    };
    return (
        <View style={styles.cards} key={product.id}>
             <View style={styles.comp}>
                
              <Image source={require('../../assets/abstract-background-waves-banner-medium-600nw-2407191051.webp')} style={styles.image} />
              <View style={styles.overlay}>
                <View style={styles.productRow}>
                  <Image source={images[product.src]} style={styles.productImage} />

                  <View style={styles.info}>
                    <Text style={styles.title}>{product.title}</Text>
                    <Text style={styles.price}>₹{product.prize}</Text>
                    <Button title='ENROLL'/>
                  </View>
                </View>
              </View>
            </View>
        </View>

  )}
const styles = StyleSheet.create({
    cards: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 15,
  },

  comp: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    width: 400,
    borderRadius: 26,
    backgroundColor: '#f0f0f0',
    overflow: 'hidden',
    position: 'relative',
  },

  image: {
    width: '100%',
    height: '100%',
    borderRadius: 26,
  },

  overlay: {
    position: 'absolute',
    left: 15,
    top: '25%',
    right: 15,
  },

  productRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 15,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
  },

  productImage: {
    height: 120,
    width: 180,
    borderRadius: 15,
    marginRight: 15,
  },

  info: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 6,
  },

  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffd700',
  },
})

{/* <Text style={styles.title}>
                    Title: {product.title}
                </Text>
                <Text style={styles.prize}>
                    Prize pool: <Text style={{fontSize:22,color:'green'}}>{product.prize}</Text>
                </Text>
    
                <Text style={styles.dead}>
                    apply before: ~ {product.apply}
                </Text>
                <Text style={styles.age}>Eligibility: <Text style={{color:'black',fontSize:14}}>
                    {product.eligibility}
                    </Text>
                </Text>
    
                <View style={{flex:1,justifyContent:'flex-end'}}>
                    <Text style={{textAlign:'center',justifyContent:'flex-end'}}>
                        Read terms and conditions
                    </Text>
    
                </View> */}