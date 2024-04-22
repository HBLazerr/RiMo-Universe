import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function NavigationBar({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.replace('Search')}>
        <Text style={styles.text}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.replace('Randomizer')}>
        <Text style={styles.text}>Randomizer</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.replace('Trivia')}>
        <Text style={styles.text}>Trivia</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.replace('Favorites')}>
        <Text style={styles.text}>Favorites</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'green',
    height: 70,
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});