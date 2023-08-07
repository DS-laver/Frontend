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
import SickData from '../../components/SickData';

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
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
    propsForLabels: {
      fontSize: 10,
      fontFamily: 'SCDream4',
      color: '#000000',
    },
  };

  return (
    <View style={styles.container}>
      <View style={styles.chatBotContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ChatBotPage');
          }}>
          <Image
            style={styles.chatbotImage}
            source={require('../../assets/HealthDataIcon/ChatBotIcon.png')}
          />
          <Text style={styles.chatBotText}>약 알리미</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.dataShowContainer}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} pagingEnabled={true}>
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

      <ScrollView>
        <YearAndMonth Year={2023} Month={7} Data={julData}/>
        <YearAndMonth Year={2023} Month={6} Data={junData}/>
      </ScrollView>
      
    </View>
  );
}

const julData = [
  {
    idx : 1,
    date: '2023-07-01',
    sick: ['두통', '근육통'],
    detail: '3일간 호소'
  },
]

const junData = [
  {
    idx : 2,
    date: '2023-06-02',
    sick: ['요통', '근육통'],
    detail: '무리한 집안일'
  },
  {
    idx : 3,
    date: '2023-06-07',
    sick: ['두통'],
    detail: '스트레스성'
  },
  {
    idx : 4,
    date: '2023-06-10',
    sick: ['근육통'],
    detail: '무리한 등산'
  },
  {
    idx : 5,
    date: '2023-06-18',
    sick: ['복통'],
    detail: '생리통'
  },
]

function YearAndMonth({Year, Month, Data} : {Year: number, Month: number, Data: any}) {
  return (
    <View>
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>{Year}년 {Month}월</Text>
        <View style={styles.horizontalLine} />
      </View>
      {Data.map((item) => {
        return (
          <SickData
            index={item.idx}
            date={item.date}
            sick={item.sick}
            detail={item.detail}
          />
        );
      })}
    </View>
  );
}

let screenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF3F1',
  },

  dataShowContainer: {
    height: 360,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  chatBotContainer: {
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
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  dateContainer: {
    marginLeft: 30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
    borderRightWidth: 2,
    borderRightColor: 'gray',
    marginTop: 20,
    marginBottom: 10,
  },
  dateText: {
    fontSize: 18,
    fontFamily: 'SCDream6',
    color: '#5F5F5F',
  },
  horizontalLine: {
    flex: 1,
    height: 2,
    backgroundColor: '#989898',
    marginLeft: 10,
    marginRight: 30,
  },
});
