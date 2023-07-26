import {
  Image,
  Text,
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button';

const HealthSurveyInput = ({navigation}: {navigation: any}) => {
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
        {/* <TouchableOpacity
          style={styles.backArrowIcon}
          onPress={() => {navigation.navigate('HealthCarePage')}} >
          <Image source={require('../../assets/icons/arrow.png')} />
        </TouchableOpacity> */}
        <Text style={styles.settingDateText}>
          {settingDateYear}.{settingDateMonth}.{settingDateDate}
        </Text>
      </View>

      <View style={styles.surveyTitleContainer}>
        <Text style={styles.surveyTitleText}>오늘의 자가진단 체크리스트</Text>
      </View>

      <ScrollView style={styles.ScrollViewContainer}>
        <View>
          <YesOrNo question={'발열이 있었나요?'} />
          <YesOrNo question={'충분한 수면을 취했나요?'} />
          <YesOrNo question={'두통이 있었나요?'} />
          <YesOrNo question={'요통이 있었나요?'} />
          <YesOrNo question={'복통이 있었나요?'} />
          <ExplainQuestion question={'오늘 아팠던 곳이 있나요?'} />
          <ExplainQuestion question={'오늘 아팠던 곳이 있나요?'} />
          <ExplainQuestion question={'오늘 아팠던 곳이 있나요?'} />
          <ExplainQuestion question={'오늘 아팠던 곳이 있나요?'} />
          <ExplainQuestion question={'오늘 아팠던 곳이 있나요?'} />
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
              navigation.navigate('HealthSurveyResult');
            }}>
            <Text style={styles.submitButtonText}>저장</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* <View style={styles.submitButtonContaner}>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => {navigation.navigate('HealthCarePage')}} >
          <Text style={styles.submitButtonText}>취소</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => {navigation.navigate('HealthSurveyResult')}} >
          <Text style={styles.submitButtonText}>저장</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default HealthSurveyInput;

const SHADOW_STYLES = {
  shadowColor: '#000',
  shadowOffset: {width: 2, height: 2},
  shadowOpacity: 0.85,
  shadowRadius: 3.84,
  elevation: 7, // Only for Android
};

function YesOrNo({question}: {question: string}) {
  const [checked, setChecked] = useState('예');

  return (
    <View style={[styles.questionContainer, SHADOW_STYLES]}>
      <Text style={styles.questionTitle}> Q. {question} </Text>
      <View style={styles.radioButtonStyle}>
        <RadioGroup
          style={{flexDirection: 'row'}}
          size={22}
          thickness={2}
          color="#000000"
          selectedIndex={1}>
          <RadioButton
            style={{marginLeft: 20, marginTop: 5}}
            value="first"
            status={checked === 'first' ? 'checked' : 'uncheked'}
            onPress={() => setChecked('first')}>
            <Text style={styles.firstRadioButtonValue}>예</Text>
          </RadioButton>
          <RadioButton
            style={{marginLeft: 50, marginTop: 5}}
            value="second"
            status={checked === 'first' ? 'checked' : 'uncheked'}
            onPress={() => setChecked('second')}>
            <Text style={styles.secondRadioButtonValue}>아니오</Text>
          </RadioButton>
        </RadioGroup>
      </View>
    </View>
  );
}

function ExplainQuestion({question}: {question: string}) {
  return (
    <View style={[styles.questionContainer, SHADOW_STYLES]}>
      <Text style={styles.questionTitle}> Q. {question} </Text>
      <TextInput returnKeyType="done" style={styles.textInputStyle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF3F1',
  },
  backArrowIcon: {
    alignSelf: 'center',
  },
  settingDateContainer: {
    marginTop: 45,
    // justifyContent: "center",
    flexDirection: 'row',
  },
  settingDateText: {
    fontSize: 37,
    marginLeft: 20,
    marginRight: 13,
    fontFamily: 'SCDream6',
    color: '#000000',
  },

  surveyTitleContainer: {
    marginTop: 23,
    margin: 20,
    padding: 10,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#FEC0C1',
    borderRadius: 15,
  },
  surveyTitleText: {
    alignContent: 'center',
    justifyContent: 'center',
    fontSize: 19,
    fontFamily: 'SCDream5',
    color: '#000000',
    textAlign: 'center',
  },

  ScrollViewContainer: {
    height: 400,
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
    color: '#000000',
  },
  firstRadioButtonValue: {
    fontSize: 15,
    fontFamily: 'SCDream5',
    color: '#000000',
  },
  secondRadioButtonValue: {
    fontSize: 15,
    fontFamily: 'SCDream5',
    color: '#000000',
  },

  textInputStyle: {
    height: 40,
    marginTop: 10,
    // marginLeft: 10,
    // marginRight: 10,
    borderColor: '#DEDEDE',
    borderRadius: 10,
    borderWidth: 1,
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
