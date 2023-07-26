import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';

export default function AddEatMedicine({navigation}: {navigation: any}) {
  var today = new Date();
  var todayYear = today.getFullYear();
  var todayMonth =
    today.getMonth() + 1 < 10
      ? `0${today.getMonth() + 1}`
      : today.getMonth() + 1;
  var todyaDate = today.getDate();

  return (
    <View style={styles.container}>

      <View style={styles.todayDateContainer}>
        <Text style={styles.todayDate}>
          {todayYear}.{todayMonth}.{todyaDate}
        </Text>
      </View>

      
      <View style={styles.submitButtonContaner}>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => {
              navigation.navigate('HealthCarePage');
            }}>
            <Text style={styles.submitButtonText}>취소</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => {
              // navigation.navigate('HealthSurveyResult');
            }}>
            <Text style={styles.submitButtonText}>저장</Text>
          </TouchableOpacity>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    backgroundColor: '#FFF3F1',
  },

  todayDateContainer: {
    marginTop: 40,
    marginBottom: 20,
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  todayDate: {
    fontSize: 35,
    fontFamily: 'SCDream6',
    color: '#000000',
  },
  
  submitButtonContaner: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: 10,
    marginTop: 0,
  },
  submitButton: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center',
    margin: 10,
    width: 80,
    fontFamily: 'SCDream6',
    color: '#000000',
    backgroundColor: '#FECCCD',
    borderRadius: 10,
    padding: 8,
  },
  submitButtonText: {
    fontSize: 20,
    fontFamily: 'SCDream5',
    color: '#000000',
  },
});
