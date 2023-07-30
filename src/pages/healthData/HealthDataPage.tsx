import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
// https://github.com/indiespirit/react-native-chart-kit
import {PieChart} from 'react-native-chart-kit';

export default function HealthDataPage({navigation}: {navigation: any}) {
  const [humanData, setHumanData] = useState({
    height: 165,
    weight: 60,
  });

  const chartData = [
    {
      name: '두통',
      population: 7,
      color: '#E56262',
      legendFontColor: '#E56262',
      legendFontSize: 15,
    },
    {
      name: '복통',
      population: 5,
      color: '#818ADE',
      legendFontColor: '#818ADE',
      legendFontSize: 15,
    },
    {
      name: '근육통',
      population: 2,
      color: '#63BD61',
      legendFontColor: '#63BD61',
      legendFontSize: 15,
    },
    {
      name: '요통',
      population: 9,
      color: '#FFC93E',
      legendFontColor: '#FFC93E',
      legendFontSize: 15,
    },
  ];

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
    propsForLabels : {
      fontSize: 10,
      fontFamily: 'SCDream4',
      color: '#000000',
    }
    
  };

  return (
    <View style={styles.container}>
      <View style={styles.chatBotContainer}>
        <TouchableOpacity
          onPress={() => {navigation.navigate('ChatBotPage')}}
        >
          <Image
            style={styles.chatbotImage}
            source={require('../../assets/HealthDataIcon/ChatBotIcon.png')}
          />
          <Text style={styles.chatBotText}>약 알리미</Text>
        </TouchableOpacity>
      </View>
      <View>
        <ScrollView horizontal={true} pagingEnabled={true}>
          <View style={styles.humanDataContainer}>
            <Image
              style={styles.humanImage}
              source={require('../../assets/HealthDataIcon/HumanIcon.png')}
            />
            <Text style={styles.humanDataText}>
              {humanData.height}cm / {humanData.weight}kg
            </Text>
          </View>
          <View style={styles.circleDataContainer}>
            <PieChart
              data={chartData}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
              accessor={'population'}
              backgroundColor={'transparent'}
              paddingLeft={'15'}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

let screenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF3F1',
  },

  chatBotContainer: {
    // always on top left
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 1,

    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginRight: 30,
  },
  chatbotImage: {
    width: 50,
    height: 50,
  },
  chatBotText: {
    fontSize: 14,
    fontFamily: 'SCDream4',
    color: '#000000',
  },

  humanDataContainer: {
    zIndex: 0,
    flex: 1,
    width: screenWidth,
    alignItems: 'center',
    marginTop: 40,
  },
  humanImage: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  humanDataText: {
    fontSize: 22,
    fontFamily: 'SCDream6',
    color: '#000000',
  },

  circleDataContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
});
