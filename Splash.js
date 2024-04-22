import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Video } from 'expo-av';

export default function SplashScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Video
        source={require('./assets/portal-footage.mp4')}
        style={styles.video}
        resizeMode="cover"
        shouldPlay
        isLooping
      />
      <Button title="[ Get Started ]" onPress={() => navigation.replace('Search')} />
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
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
