import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet,TouchableOpacity } from 'react-native';
import { ArrowLeft } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function Details({ route }) {
  const { product } = route.params;
  const navigation = useNavigation();
  return (
    
        <ScrollView style={styles.container}>
            <SafeAreaView>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <ArrowLeft size={24} color="#fff" />
            </TouchableOpacity>
            {product.images?.map((imgSrc, index) => (
                <Image key={index} source={imgSrc} style={styles.image} />
            ))}

            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.text}> {product.location}</Text>
            <Text style={styles.text}> {product.rating} ({product.reviews})</Text>
            <Text style={styles.text}> ₹{product.price}</Text>
            <Text style={styles.text}>Discount: {product.discount}% OFF</Text>
        </SafeAreaView>
        </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141515',
    padding: 16,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    color: '#ccc',
    marginBottom: 5,
  },
});
