import React, {useState} from "react";
import { Calendar } from "react-native-calendars";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";

function CalendarView() {

  // 현재 날짜 표시
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const todayString = `${year}-${month < 10 ? `0${month}` : month}-${date < 10 ? `0${date}` : date}`.toString();
  
  const [selected, setSelected] = useState('');

  const [isSelectToday, setIsSelectToday] = useState(true);
  const [todaySurveyDone, setTodaySurveyDone] = useState(true);

  return (
    <View style={styles.calendarContainer}>
      
      <View style={styles.topContainer}>
        <TouchableOpacity 
          style={styles.calendarButtonContainer}
          // onPress={() =>{navigation.navigate('CalendarPage')}}
        >
          <Image
            style={styles.calendarImage}
            source={require('../../assets/HealthCareIcon/CalendarIcon.png')}
          />
          {/* <Text style={styles.calendarText}>달력보기</Text> */}
        </TouchableOpacity>
      </View>
      <View style={styles.calendarTitleContainer}>
        <Text style={styles.calendarTitle}>월별</Text>
      </View>
      <Calendar 
        style={styles.calendar} 
        // markedDates={{todayString: {marked: true}}}
        theme={{
          selectedDayBackgroundColor: '#FB3F4A',
          arrowColor: '#FB3F4A',
          dotColor: '#FB3F4A',
          todayTextColor: '#FB3F4A',
        }}
        onDayPress={day => {
          setSelected(day.dateString);
        }}
        markedDates={{
          [selected]: 
            {selected: true, 
            disableTouchEvent: true, }
        }}
      />

      <View style={styles.monthButtonsContainer}>
        <TouchableOpacity>
          <Text style={styles.monthButton}>
            복용한 약 확인
          </Text>
        </TouchableOpacity>
        {isSelectToday
          ? <TouchableOpacity>
            {todaySurveyDone 
            ? <Text style={styles.monthButton}>오늘의 건강 설문보기</Text> 
            : <Text style={styles.monthButton}>오늘의 건강 설문하기</Text>}
            </TouchableOpacity> 
          : <TouchableOpacity>
            <Text style={styles.monthButton}>
              지난 건강 설문 확인
            </Text>
          </TouchableOpacity>
        }
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  
  calendarContainer: {
    flex: 1,
    backgroundColor: '#FFF3F1',
  },

  topContainer: {
    flexDirection: "row",
    marginTop: 30,
  },
  calendarButtonContainer: {
    marginLeft: 30,
    // alignItems: "center",
    justifyContent: "center"
  },
  calendarImage: {
    // width: 60,
    // height: 60,
    width: 50,
    height: 50,
  },
  calendarText: {
    fontSize: 15,
  },

  calendarTitleContainer: {
    // marginTop: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  calendarTitle:{
    alignItems: 'center',
    fontSize: 40,
    fontFamily: 'SCDream6',
    color: '#000000'
  },
  
  calendar: {
    borderRadius: 30,
    margin: 20,
    marginTop: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    padding: 15,
  },

  
  monthButtonsContainer: {
    // marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: "row",
    // flex: 1,
  },
  monthButton: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: "center",
    textAlign: 'center',
    margin: 10,
    width: 165,
    fontFamily: 'SCDream6',
    color: '#000000',
    backgroundColor: '#FECCCD',
    borderRadius: 20,
    padding: 15,
  }
});

export default CalendarView;