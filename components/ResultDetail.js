import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

export default function ResultDetail({ result }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={result.image_url ? { uri: result.image_url } : null}
      />
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.rating}>
        {result.rating} Yıldızlı Restoran, {result.review_count} Değerlendirme
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginLeft: 12,
    backgroundColor: '#e6e6e6',
    borderRadius: 15,
  },
  image: {
    width: 280,
    height: 128,
    borderRadius: 10,
  },
  name: {
    fontSize: 17,
    color: 'black',
    marginLeft: 4,
    textDecorationLine: 'underline',
  },
  endName: {
    color: 'brown',
    fontSize: 13,
    marginBottom: 5,
    marginLeft: 3,
  },
  rating:{
    marginLeft:5
  }
});