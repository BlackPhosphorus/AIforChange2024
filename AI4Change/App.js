import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function App() {
  const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('http://10.0.0.156:5000/data')
            .then(response => {
                setData(response.data);
                console.log(response.data);
            })
            .catch(error => {
              if (error.response) {
                // The server responded with a status code outside the 2xx range
                console.log('Error response:', error.response);
              } else if (error.request) {
                // The request was made but no response was received
                console.log('Error request:', error.request);
              } else {
                // Something happened in setting up the request that triggered an error
                console.log('Error message:', error.message);
              }
            });
    }, []);
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
