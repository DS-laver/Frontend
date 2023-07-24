import React from "react";
import { Calendar } from "react-native-calendars";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";

function CalendarView() {

  // 현재 날짜 표시
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const todayString = `${year}-${month < 10 ? `0${month}` : month}-${date < 10 ? `0${date}` : date}`.toString();
  

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
        <Text style={styles.calendarTitle}>복용 달력</Text>
      </View>
      <Calendar 
        style={styles.calendar} 
        markedDates={{todayString: {marked: true}}}
        theme={{
          selectedDayBackgroundColor: '#009688',
          arrowColor: '#009688',
          dotColor: '#009688',
          todayTextColor: '#009688',
        }}
      />
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
    width: 70,
    height: 70,
  },
  calendarText: {
    fontSize: 15,
  },

  calendarTitle:{
    alignItems: 'center',
    fontSize: 30,
    fontFamily: 'SCDream5',
    color: '#000000'
  },
  calendar: {
    borderRadius: 30,
    margin: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  }
});

export default CalendarView;