import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import AboutAIScreen from './screens/AboutAIScreen';
import AboutPollutionScreen from './screens/AboutPollutionScreen';
import LoadingScreen from './components/LoadingScreen';
import MyLineChart from './screens/AnalyticsScreen';
import { Video } from 'expo-av';
import { View, StyleSheet } from 'react-native';
import axios from 'axios';
import { IP_ADDRESS } from './config';

const Stack = createStackNavigator();

const App = () => {
 
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="AboutAI" component={AboutAIScreen} />
        <Stack.Screen name="AboutPollution" component={AboutPollutionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
