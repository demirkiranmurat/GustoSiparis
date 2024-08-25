import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default function ResultsShowScreen({route}) {
  const [result, setResult] = useState(null);
  const id = route.params.id;

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    console.log(response.data);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);
  if (!result) {
    return null;
  }

  return (
    <View>
      <Text style={styles.title}> {result.name} </Text>
      <Text style={styles.rating}> Restoran Puanı: {result.rating}/5</Text>
      <View style={styles.icon}>
        {result.is_closed ? (
          <Text style={styles.closed}>Restoran Durumu: Kapalı</Text>
        ) : (
          <Text style={styles.open}> Restoran Durumu: Açık</Text>
        )}
      </View>
      <FlatList
        data={result.photos}
        renderItem={({item}) => {
          return <Image style={styles.image} source={{uri: item}} />;
        }}
      />
      <Text style={styles.phone}> Phone:{result.phone} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 180,
    width: 393,
    marginTop: 8,
    marginRight:5,
    

  },
  title: {
    fontSize: 26,
    marginVertical: 5,
    alignSelf: 'center',
    color: '#f2f2f2',
    fontWeight: '800',
    backgroundColor: '#595959',
  },
  phone: {
    color: 'white',
    fontSize: 23,
    borderRadius: 6,
    fontWeight: '300',
    alignSelf: 'center',
    textDecorationLine: 'underline',
    backgroundColor: '#333333',
    marginTop: 11,
  },
  icon: {
    paddingTop: 10,
  },
  open: {
    color: 'black',
    fontSize: 16,
    backgroundColor: '#d9d9d9',
    fontWeight: '700',
    marginEnd: 207,
    marginStart: 5,
    borderRadius: 15,
  },
  rating: {
    color: 'black',
    fontSize: 16,
    backgroundColor: '#d9d9d9',
    fontWeight: '700',
    marginEnd: 207,
    marginStart: 5,
    marginTop: 10,
    borderRadius: 15,
  },
});