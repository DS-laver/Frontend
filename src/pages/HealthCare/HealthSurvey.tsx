import { Text, StyleSheet, View, ScrollView } from 'react-native';
import React, {useState} from 'react';
// import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';
// import { RadioButton } from 'react-native-paper';/

const HealthSurvey= () => {

  var settingDate = new Date();
  var settingDateYear = settingDate.getFullYear();
  var settingDateMonth = settingDate.getMonth()+1;
  var settingDateDate = settingDate.getDate();

  return (
    <View>
      <View style={styles.settingDateContainer}>
        <Text style={styles.settingDateText}>
          {settingDateYear}.0{settingDateMonth}.{settingDateDate} 기록
        </Text>
      </View>

      <View style={styles.surveyTitleContainer}>
        <Text style={styles.surveyTitleText}>
          오늘의 자가진단 체크리스트
        </Text>
      </View>

      <ScrollView>
        <View>
            {/* <YesOrNo question={'발열이 있었나요?'}/>
            <YesOrNo question={'충분한 수면을 취했나요?'}/>
            <YesOrNo question={'배고픈가요?'} />
            <YesOrNo question={'배고픈가요?'} />
            <YesOrNo question={'배고픈가요?'} />
            <YesOrNo question={'배고픈가요?'} />
            <YesOrNo question={'배고픈가요?'} /> */}
        </View>
      </ScrollView>
    </View>
  )
}

export default HealthSurvey;

// function YesOrNo ({question}) {
//   const [checked, setChecked] = React.useState('yes');

//   return (
//     <View style={styles.questionContainer}>
//       <Text style={styles.questionTitle}> Q. {question} </Text>
//       <View style={styles.radioButtonStyle}>
//         <RadioButton
//           value="yes"
//           status={ checked === 'yes' ? 'checked' : 'unchecked' }
//           onPress={() => setChecked('yes')}
//         />      
//         <Text>예</Text>                        
//       </View>
//       <View  style={styles.radioButtonStyle}>
//         <RadioButton
//           value="no"
//           status={ checked === 'no' ? 'checked' : 'unchecked' }
//           onPress={() => setChecked('no')}
//         />
//         <Text>아니오</Text>                        
//       </View>

//     </View>
//   );
// };



const styles = StyleSheet.create({
  settingDateContainer:{
    marginTop: 45,
    marginLeft: 20,
    justifyContent: "center"
  },
  settingDateText: {
    fontSize: 40,
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
  },

  radioButtonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 20,
  },
  questionContainer: {
    padding: 20,
    margin: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
  },
  questionTitle: {
    fontSize: 20,
  },
})