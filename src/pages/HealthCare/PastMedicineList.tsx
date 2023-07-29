import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';

export default function PastMedicineList({navigation}: {navigation: any}) {
  var settingDate = new Date();
  var settingDateYear = settingDate.getFullYear();
  var settingDateMonth =
    settingDate.getMonth() + 1 < 10
      ? `0${settingDate.getMonth() + 1}`
      : settingDate.getMonth() + 1;
  var settingDateDate = settingDate.getDate();

  return (
    <View style={styles.container}>

      <View style={styles.settingDateContainer}>
        <TouchableOpacity
          style={styles.backArrowIcon}
          onPress={() => {navigation.navigate('HealthCarePage')}} >
          <Image source={require('../../assets/icons/arrow.png')} />
        </TouchableOpacity>
        <Text style={styles.settingDateText}>
          {settingDateYear}.{settingDateMonth}.{settingDateDate}
        </Text>
      </View>


      <View style={styles.timeSettingContainer}>
        <TouchableOpacity
          style={styles.timeSettingButton}
          // onPress
        >
          <Text style={styles.timeSettingText}>아침</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.timeSettingButton}
        >
          <Text style={styles.timeSettingText}>점심</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.timeSettingButton}
        >
          <Text style={styles.timeSettingText}>저녁</Text>
        </TouchableOpacity>
      </View>



    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF3F1',
  },
  settingDateContainer: {
    marginTop: 45,
    justifyContent: "center",
    flexDirection: 'row',
  },
  backArrowIcon: {
    // to the left
    position: 'absolute',
    left: 20,
    alignSelf: 'center',
  },
  settingDateText: {
    // justifyContent: "center",
    fontSize: 37,
    marginLeft: 20,
    marginRight: 13,
    fontFamily: 'SCDream6',
    color: '#000000',
  },

  timeSettingContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#FFF3F1',
  },
  timeSettingButton : {
    padding: 20,
    margin: 10,
  },
  timeSettingText: {
    fontSize: 20,
    fontFamily: 'SCDream6',
    color: '#000000',
  }
});
