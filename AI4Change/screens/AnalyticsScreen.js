import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions, ActivityIndicator, ScrollView, Button } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import axios from 'axios';
import { IP_ADDRESS } from '../config.js';

const MyLineChart = ({navigation, route}) => {
  const { lat, lng } = route.params;
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentGraphIndex, setCurrentGraphIndex] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const bodyFormData = new FormData();
      bodyFormData.append('LonLatData', JSON.stringify([lng, lat]));

      const response = await axios.post(`http://${IP_ADDRESS}/data`, bodyFormData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const data = response.data;
      setChartData(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  const handleNext = () => {
    if (currentGraphIndex < chartData["Air Temperature"][0].length - 1) {
      setCurrentGraphIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentGraphIndex > 0) {
      setCurrentGraphIndex((prevIndex) => prevIndex - 1);
    }
  };

  const levelColors = [
    'rgba(255, 0, 0, 0.8)',
    'rgba(0, 0, 255, 0.8)',
    'rgba(123, 0, 123, 0.8)',
    'rgba(213, 125, 255, 0.8)',
    'rgba(78, 43, 255, 0.8)',
    'rgba(23, 2, 12, 0.8)',
    'rgba(34, 23, 45, 0.8)',
    'rgba(78, 98, 113, 0.8)',
    'rgba(12, 234, 21, 0.8)',
    'rgba(0, 33, 33, 0.8)',
  ];

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{ flex: 1 }}>
          <Text style={{ 
                  textAlign: 'center', 
                  fontSize: 24, 
                  fontWeight: 'bold', 
                  paddingVertical: 20, 
                  color: '#f00000' 
            }}>
          Air Pressure by Level
        </Text>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : chartData ? (
          <>
            <LineChart
              data={{
                labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', "May", 'Jun'],
                datasets: [
                  {
                    data: chartData["Air Temperature"].map(
                      (subarray) => subarray[currentGraphIndex] / 10000
                    ).filter((_, index) => (index + 1) % 10 === 0),
                    strokeWidth: 2,
                    color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
                  },
                ],
              }}
              width={Dimensions.get('window').width - 16}
              height={500}
              chartConfig={{
                backgroundColor: '#e26a00',
                backgroundGradientFrom: '#fb8c00',
                backgroundGradientTo: '#ffa726',
                decimalPlaces: 2,
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: '6',
                  strokeWidth: '2',
                  stroke: '#ffa726',
                },
              }}
              style={{
                marginVertical: 8,
                borderRadius: 16,
                marginLeft: 6,
              }}
            />
            
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
              <Button title="Previous" onPress={handlePrevious} disabled={currentGraphIndex === 0} />
              <Button
                title="Next"
                onPress={handleNext}
                disabled={currentGraphIndex === chartData["Air Temperature"][0].length - 1}
              />
            </View>
            <View style={{ alignItems: 'center', marginTop: 20 }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                Current Level: {currentGraphIndex + 1}
              </Text>
            </View>
            <Text style={{ 
              textAlign: 'center', 
              fontSize: 24, 
              fontWeight: 'bold', 
              paddingVertical: 20, 
              color: '#0000ff' 
            }}>
              Water Content
            </Text>
            <LineChart
            data={{
              labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', "May", 'Jun'],
              datasets: [
                {
                  data: chartData["Water Content"].filter((_, index) => (index + 1) % 10 === 0),
                  strokeWidth: 2,
                  color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`, // Red color for Level 1
                },
              ],
            }}
            width={Dimensions.get('window').width - 16} // Adjust the width as needed
            height={300}
            chartConfig={{
              backgroundColor: '#e26a00',
              backgroundGradientFrom: '#fb8c00',
              backgroundGradientTo: '#ffa726',
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#ffa726',
              },
            }}
            style={{
              marginVertical: 8,
              borderRadius: 16,
              paddingTop : 30,
              marginLeft: 6,
            }}
          />
          
          </>
        ) : null}
      </View>
    </ScrollView>
  );
};

export default MyLineChart;