import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

export default function SearchBar({term, onTermSubmit, onTermChange}) {
  return (
    <View style={styles.backgroundStyle}>
      <TextInput
        style={styles.inputStyle}
        placeholder="   Ara..."
        autoCapitalize="none"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {},
  inputStyle: {
    borderWidth: 1,
    borderRadius: 30,
    margin: 5,
    marginTop: 7,
    backgroundColor: 'lightgray',
  },
});