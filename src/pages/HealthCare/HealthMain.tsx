import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import AnalogClock from './AnalogClock';

const HealthMain = () => {

  const continuous = 0;

  var today = new Date();
  var todayMonth = today.getMonth()+1;
  var todyaDate = today.getDate();

  var medicineAllEat = false;
  var timing = '오전';
  var mustEat = '타이레놀';

  var todaySurveyDone = false;

  return (
    <View>
      <View style={styles.topContainer}>
        <TouchableOpacity style={styles.calendarContainer}>
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

      <View style={styles.healthSurveyContainer}>
        <TouchableOpacity
          onPress={() =>{navigation.navigate('HealthSurvey')}}
        >
          <Text style={styles.healthSurveyButton}>
            {todaySurveyDone ? '오늘의 건강 설문보기' : '오늘의 건강 설문하기'}
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default HealthMain;


const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignSelf: "stretch",
    alignItems: "center",
    // justifyContent: "center"
  },
  
  topContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 60,
  },

  continuousContainer: {
    marginLeft: 120,
    marginRight: 20,
    paddingTop: 13,
    paddingBottom: 13,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#E8E8E8",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  continuousInfo: {
    fontSize: 12,
  },
  continuousText: {
    fontSize: 15,
  },

  calendarContainer: {
    marginLeft: 30,
    // alignItems: "center",
    justifyContent: "center"
  },
  calendarImage: {
    // width: 60,
    // height: 60,
    width: 70,
    height: 70,
  },
  calendarText: {
    fontSize: 15
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
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  todayString: {
    fontSize: 20
  },
  todayDate: {
    fontSize: 30
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
    width: 15,
    height: 15,
    marginRight: 10,
  },
  infoText: {
    fontSize: 15
  },

  healthSurveyContainer: {
    marginTop: 30,
    marginLeft: '27.5%',
    paddingTop: 13,
    paddingBottom: 13,
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
  }
})