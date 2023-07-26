import { Image, Text, StyleSheet, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';

const HealthSurveyResult= ({navigation}: {navigation: any}) => {

  var settingDate = new Date();
  var settingDateYear = settingDate.getFullYear();
  var settingDateMonth = settingDate.getMonth()+1 < 10 ? `0${settingDate.getMonth()+1}` : settingDate.getMonth()+1;
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
          {settingDateYear}.{settingDateMonth}.{settingDateDate} 기록
        </Text>
      </View>

      <View style={styles.surveyTitleContainer}>
        <Text style={styles.surveyTitleText}>
          오늘의 자가진단 체크리스트
        </Text>
      </View>

      <ScrollView>
        <View>
            <YesOrNo question={'발열이 있었나요?'}/>
            <YesOrNo question={'충분한 수면을 취했나요?'}/>
            <YesOrNo question={'두통이 있었나요?'} />
            <YesOrNo question={'요통이 있었나요?'} />
            <YesOrNo question={'복통이 있었나요?'} />
            <ExplainQuestion question={'오늘 아팠던 곳이 있나요?'} />
            <ExplainQuestion question={'오늘 아팠던 곳이 있나요?'} />
            <ExplainQuestion question={'오늘 아팠던 곳이 있나요?'} />
            <ExplainQuestion question={'오늘 아팠던 곳이 있나요?'} />
            <ExplainQuestion question={'오늘 아팠던 곳이 있나요?'} />
        </View>
      </ScrollView>
    </View>
  )
}

export default HealthSurveyResult;

function YesOrNo({question}: {question: string}) {
  const [checked, setChecked] = useState('예');

  return(
    <View style={styles.questionContainer}>
      <Text style={styles.questionTitle}> Q. {question} </Text>
      <View style={styles.radioButtonStyle}>
        <RadioGroup
          style={{flexDirection: 'row'}}
          size={22}
          thickness={2}
          color="#000000"
          selectedIndex={1}
        >
          <RadioButton
            style={{marginLeft: 20, marginTop: 5}}
            value="first" 
            status={checked === "first" ? "checked" : "uncheked"} 
            onPress={() => setChecked("first")}
          >
            <Text style={styles.firstRadioButtonValue}>예</Text>
          </RadioButton>
          <RadioButton
            style={{marginLeft: 50, marginTop: 5}}
            value="second" 
            status={checked === "first" ? "checked" : "uncheked"} 
            onPress={() => setChecked("second")}
          >
            <Text style={styles.secondRadioButtonValue}>아니오</Text>
          </RadioButton>
        </RadioGroup>
      </View>
    </View>
  )
}

function ExplainQuestion({question}) {

  return(
    <View style={styles.questionContainer}>
      <Text style={styles.questionTitle}> Q. {question} </Text>
      <TextInput
        returnKeyType='done'
        style={styles.textInputStyle}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF3F1',
  },
  backArrowIcon: {
    alignSelf: 'center',
  },
  settingDateContainer:{
    marginTop: 45,
    justifyContent: "center",
    flexDirection: "row",
  },
  settingDateText: {
    fontSize: 40,
    marginLeft: 10,
    marginRight: 13,
    fontFamily: 'SCDream6',
    color: "#000000",
  },

  surveyTitleContainer: {
    marginTop: 30,
    margin: 20,
    padding: 10,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: "#FEC0C1",
    borderRadius: 20,
  },
  surveyTitleText: {
    alignContent: 'center',
    justifyContent: 'center',
    fontSize: 20,
    fontFamily: 'SCDream5',
    color: "#000000",
  },

  radioButtonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 20,
  },
  questionContainer: {
    padding: 20,
    margin: 20,
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
  },
  questionTitle: {
    fontSize: 20,
    fontFamily: 'SCDream5',
    color: "#000000",
  },
  firstRadioButtonValue:{
    fontSize: 15,
    fontFamily: 'SCDream5',
    color: "#000000",
  },
  secondRadioButtonValue:{
    fontSize: 15,
    fontFamily: 'SCDream5',
    color: "#000000",
  },

  textInputStyle: {
    height: 40, 
    marginTop: 10,
    // marginLeft: 10,
    // marginRight: 10,
    borderColor: '#DEDEDE',
    borderRadius: 10,
    borderWidth: 1,
  }
})