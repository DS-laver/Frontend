import React, {useState, useEffect} from 'react';
import {Calendar} from 'react-native-calendars';
import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';

function CalendarView({navigation}: {navigation: any}) {
  const [selected, setSelected] = useState('');

  const [isSelectToday, setIsSelectToday] = useState(false);
  const [todaySurveyDone, setTodaySurveyDone] = useState(false);

  // 현재 날짜를 기준으로 오늘인지 아닌지를 판단하는 함수
  const checkIsToday = (selectedDate: string) => {
    const currentDate = new Date().toISOString().split('T')[0];
    setIsSelectToday(selectedDate === currentDate);
  };

  useEffect(() => {
    console.log(isSelectToday);
  }, [isSelectToday]);

  return (
    <View style={styles.calendarContainer}>
      <View style={styles.topContainer}>
        <TouchableOpacity
          style={styles.calendarButtonContainer}
          onPress={() => {
            navigation.navigate('HealthCarePage');
          }}>
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
          checkIsToday(day.dateString);
        }}
        markedDates={{
          [selected]: {selected: true, disableTouchEvent: true},
        }}
      />

      <View style={styles.monthButtonsContainer}>
        <TouchableOpacity>
          <Text style={styles.monthButton}>복용한 약 확인</Text>
        </TouchableOpacity>

        {isSelectToday ? (
          todaySurveyDone ? (
            <TouchableOpacity>
              <Text style={styles.monthButton}>오늘의 건강 설문보기</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity>
              <Text style={styles.monthButton}>오늘의 건강 설문하기</Text>
            </TouchableOpacity>
          )
        ) : (
          <TouchableOpacity>
            <Text style={styles.monthButton}>지난 건강 설문 확인</Text>
          </TouchableOpacity>
        )}
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
    flexDirection: 'row',
    marginTop: 30,
  },
  calendarButtonContainer: {
    marginLeft: 30,
    // alignItems: "center",
    justifyContent: 'center',
  },
  calendarImage: {
    width: 60,
    height: 60,
  },
  calendarText: {
    fontSize: 15,
  },

  calendarTitleContainer: {
    // marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  calendarTitle: {
    marginTop: -20,
    alignItems: 'center',
    fontSize: 40,
    fontFamily: 'SCDream6',
    color: '#000000',
  },

  calendar: {
    borderRadius: 30,
    margin: 20,
    marginTop: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    padding: 15,
  },

  monthButtonsContainer: {
    // marginBottom: 30,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    // flex: 1,
  },
  monthButton: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center',
    margin: 10,
    width: 165,
    fontFamily: 'SCDream6',
    color: '#000000',
    backgroundColor: '#FECCCD',
    borderRadius: 20,
    padding: 8,
  },
});

export default CalendarView;
