import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import ResultDetail from './ResultDetail';
import {useNavigation} from '@react-navigation/native';

export default function ResultsList({title, results}) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('ResultsShow', {id: item.id})}>
              <ResultDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 7,
    marginVertical: 5,
    marginTop: 3,
  },
  title: {
    color: '#4d0000',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 18,
    marginBottom: 4,
    textDecorationLine: 'underline',
  },
});