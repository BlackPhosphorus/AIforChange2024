import React, { useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import AboutAIScreen from './screens/AboutAIScreen';
import AboutPollutionScreen from './screens/AboutPollutionScreen';
import { Video } from 'expo-av';
import { View, StyleSheet } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  const videoRef = useRef(null);

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Video
          ref={videoRef}
          source={require('./assets/bg3.mp4')}
          rate={1.0}
          volume={1.0}
          isMuted={true}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={StyleSheet.absoluteFillObject}
        />
        <View style={styles.overlay}>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Search" component={SearchScreen} />
            <Stack.Screen name="AboutAI" component={AboutAIScreen} />
            <Stack.Screen name="AboutPollution" component={AboutPollutionScreen} />
          </Stack.Navigator>
        </View>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  backgroundVideo: {
    ...StyleSheet.absoluteFillObject,
  },
});

