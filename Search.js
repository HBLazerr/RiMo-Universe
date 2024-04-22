import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NavigationBar from './NavBar';

export default function SearchScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Search Screen</Text>
      <NavigationBar navigation={navigation} /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
