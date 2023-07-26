import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React, {useState} from 'react';

import HealthSurveyInput from './HealthSurveyInput';
import AnalogClock from './AnalogClock';
import EmptyPill from '../../components/EmptyPill';
import FullPill from '../../components/FullPill';

export default function HealthCarePage({navigation}: {navigation: any}) {

  const [continuous, setContinous] = useState(0);

  var today = new Date();
  var todayMonth = today.getMonth()+1 < 10 ? `0${today.getMonth()+1}` : today.getMonth()+1;
  var todyaDate = today.getDate();

  var medicineAllEat = false;
  const [timing, setTiming] = useState('오전');
  const [mustEat, setMustEat] = useState(['타이레놀', '비타민C']);

  const [todaySurveyDone, setTodaySurveyDone] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity 
          style={styles.calendarButtonContainer}
          onPress={() =>{navigation.navigate('CalendarPage')}}
        >
          <Image
            style={styles.calendarImage}
            source={require('../../assets/HealthCareIcon/CalendarIcon.png')}
          />
          {/* <Text style={styles.calendarText}>달력보기</Text> */}
        </TouchableOpacity>
        <View style={styles.continuousContainer}>
          <Text style={styles.continuousInfo}>복용 연속</Text>
          <Text style={styles.continuousText}>{`${continuous}일차`}</Text>
        </View>
      </View>
      
      <View style={styles.timeContainer}>
        <View style={styles.todayDateContainer}>
          <Text style={styles.todayString}>Today | </Text>
          <Text style={styles.todayDate}>{`${todayMonth}월 ${todyaDate}일`}</Text>
        </View>
        <AnalogClock />
      </View>

      <View style={styles.medicineInfoContainer}>
        <Image
          style={styles.infoIcon}
          source={require('../../assets/HealthCareIcon/Warning.png')}
        />
        <Text style={styles.infoText}>
          { medicineAllEat
            ? `오늘 ${timing} 약을 모두 먹었습니다.`
            : `${timing}에 ${mustEat}을(를) 안 드셨어요!`
          }
        </Text>
      </View>

      {/* <EmptyPill navigation={navigation}/>
      <FullPill navigation={navigation} /> */}

      <View style={styles.healthSurveyContainer}>
        <TouchableOpacity
          onPress={() =>{navigation.navigate('HealthSurveyInput')}}
        >
          <Text style={styles.healthSurveyButton}>
            {todaySurveyDone ? '오늘의 건강 설문보기' : '오늘의 건강 설문하기'}
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#FFF3F1',
  },
  
  topContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  
  calendarButtonContainer: {
    // marginLeft: 0,
    justifyContent: "center"
  },
  calendarImage: {
    width: 70,
    height: 70,
  },
  calendarText: {
    fontSize: 15,
  },

  continuousContainer: {
    height: 55,
    marginLeft: 160,
    // marginRight: 0,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#E8E8E8",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  continuousInfo: {
    fontSize: 14,
    fontFamily: 'SCDream5',
    color: '#000000'
    
  },
  continuousText: {
    fontSize: 18,
    fontFamily: 'SCDream6',
    color: '#000000'
  },

  timeContainer: {
    marginTop: 40,
    // flex: 1,
    // alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center"
  }, 
  todayDateContainer: {
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  todayString: {
    fontSize: 20,
    fontFamily: 'SCDream5',
    color: '#000000'
  },
  todayDate: {
    fontSize: 34,
    fontFamily: 'SCDream6',
    color: '#000000'
  },

  medicineInfoContainer: {
    marginTop: 40,
    // flex: 1,
    // alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  }, 
  infoIcon: {
    width: 18,
    height: 18,
    marginRight: 10,
  },
  infoText: {
    fontSize: 16,
    fontFamily: 'SCDream5',
    color: '#000000'
  },

  healthSurveyContainer: {
    marginTop: 30,
    marginBottom: 30,
    // marginLeft: '27.5%',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 20,
    paddingRight: 20,
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FECCCD',
    borderRadius: 20,
    // flex: 1,
  },
  healthSurveyButton: {
    alignContent: "center",
    fontFamily: 'SCDream6',
    color: '#000000'
  }
})