import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions, ActivityIndicator, ScrollView, Button, TouchableOpacity } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import axios from 'axios';
import { IP_ADDRESS } from '../config.js';
import { commonStyles } from '../styles.js';

const MyLineChart = ({ navigation, route }) => {
  const { lat, lng } = route.params;
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentGraphIndex, setCurrentGraphIndex] = useState(0);
  const [currentSeaLevelIndex, setCurrentSeaLevelIndex] = useState(0);

  const seaLevelDataKeys = ['Sea Level', 'U Wind', 'Surface Temperature', 'Water Content'];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const bodyFormData = new FormData();
      bodyFormData.append('LonLatData', JSON.stringify([lng, lat]));

      const response = await axios.post(`http://${IP_ADDRESS}/data`, bodyFormData, {
        headers: { 'Content-Type': 'multipart/form-data' },
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
    if (currentGraphIndex < chartData['Air Temperature'][0].length - 1) {
      setCurrentGraphIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentGraphIndex > 0) {
      setCurrentGraphIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNextSeaLevel = () => {
    if (currentSeaLevelIndex < seaLevelDataKeys.length - 1) {
      setCurrentSeaLevelIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePreviousSeaLevel = () => {
    if (currentSeaLevelIndex > 0) {
      setCurrentSeaLevelIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{ flex: 1 }}>
        <Text style={styles.headerText}>Air Pressure by Level</Text>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : chartData ? (
          <>
            <LineChart
              data={{
                labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [
                  {
                    data: chartData['Air Temperature']
                      .map((subarray) => subarray[currentGraphIndex] / 10000)
                      .filter((_, index) => (index + 1) % 10 === 0),
                    strokeWidth: 2,
                    color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
                  },
                ],
              }}
              width={Dimensions.get('window').width - 16}
              height={500}
              chartConfig={chartConfig}
              style={styles.chart}
            />

            <View style={styles.buttonContainer}>
              <Button title="Previous" onPress={handlePrevious} disabled={currentGraphIndex === 0} />
              <Button
                title="Next"
                onPress={handleNext}
                disabled={currentGraphIndex === chartData['Air Temperature'][0].length - 1}
              />
            </View>
            <View style={styles.levelTextContainer}>
              <Text style={styles.levelText}>Current Level: {currentGraphIndex + 1}</Text>
            </View>

            <Text style={styles.headerText}>{seaLevelDataKeys[currentSeaLevelIndex]}</Text>
            <LineChart
              data={{
                labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [
                  {
                    data: chartData[seaLevelDataKeys[currentSeaLevelIndex]].filter((_, index) => (index + 1) % 10 === 0),
                    strokeWidth: 2,
                    color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
                  },
                ],
              }}
              width={Dimensions.get('window').width - 16}
              height={300}
              chartConfig={chartConfig}
              style={styles.chart}
            />

            <View style={styles.buttonContainer}>
              <Button title="Previous" onPress={handlePreviousSeaLevel} disabled={currentSeaLevelIndex === 0} />
              <Button
                title="Next"
                onPress={handleNextSeaLevel}
                disabled={currentSeaLevelIndex === seaLevelDataKeys.length - 1}
              />
            </View>
            <View style={styles.levelTextContainer}>
              <Text style={styles.levelText}>Current Dataset: {seaLevelDataKeys[currentSeaLevelIndex]}</Text>
            </View>

            <Text style={styles.footerText}>
              Using metrics and information from the relative humidity, sea level pressure, surface pressure, tropopause
              temperature, wind, water content, and air pressure in your area, we find that
            </Text>
          </>
        ) : null}
      </View>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = {
  headerText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 20,
    color: '#f00000',
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
    marginLeft: 6,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  levelTextContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  levelText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 20,
    color: '#0000ff',
  },
  backButton: {
    backgroundColor: '#F9A825',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginLeft: 40,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Poppins_600SemiBold',
  },
};

const chartConfig = {
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
};

export default MyLineChart;