import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useDispatch } from 'react-redux';
import { updateName , updateNameBirth } from '../../reducers/userReducer';

export default function JoinNamePage({navigation}: {navigation: any}) {
  const [name, setName] = useState('');
  const [birth, setBirth] = useState('');
  const dispatch = useDispatch();

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: any) => {
    setBirth(date);
  };
  
  const handleInfoSubmit = async () => {
    console.log("Inside handleInfoSubmit");
    console.log("Name:", name);
    console.log("Birth:", birth);
    const userData = {
      name: name,
      birth: birth,
    };
    // console.log(name)
    // console.log(birth)
    // dispatch(updateName(name));
    // dispatch(updateNameBirth(name, birth));

    navigation.navigate('JoinIdPage');
  };


  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>안녕하세요 ✋</Text>
        <Text style={styles.congHighText}>
          정확한 건강 정보를 제공하기 위해
        </Text>
        <Text style={styles.congHighText}>이름과 나이를 입력해주세요</Text>
      </View>

      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, {backgroundColor: '#FEB2B4'}]} />
        <View style={[styles.progressBar, {backgroundColor: '#FFE5EC'}]} />
        <View style={[styles.progressBar, {backgroundColor: '#FFE5EC'}]} />
        <View style={[styles.progressBar, {backgroundColor: '#FFE5EC'}]} />
      </View>

      <View style={styles.inputContainer}>
        <Image
          style={styles.inputImage}
          source={require('../../assets/LoginIcon/user.png')}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder={'이름'}
          autoCapitalize="none"
          returnKeyType="next"
          blurOnSubmit={false}
          onChangeText={(text) => {setName(text)
          console.log("Name:", name)}}
        />
      
      </View>

      <TouchableOpacity 
        style={[styles.inputContainer, styles.birthSetContainer]}
        onPress={showDatePicker}
      >
        <Image
          style={styles.inputImage}
          source={require('../../assets/LoginIcon/calendar.png')}
        />
        <Text style={[styles.inputStyle, styles.birthText]}>
          {birth === '' ? '생년월일' : birth.toISOString().split('T')[0]}
        </Text>

        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </TouchableOpacity>

      <View style={styles.btnsContainer}>
        <TouchableOpacity
          style={[styles.btnContainer, {backgroundColor: '#FFE7E8'}]}
          onPress={() => navigation.navigate('LoginPage')}>
          <Text style={styles.btnText}>이전</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={[styles.btnContainer, { backgroundColor: '#FEB2B4' }]}
        onPress={handleInfoSubmit}>
          <Text style={styles.btnText}>다음</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  titleContainer: {
    marginTop: 40,
    marginLeft: 30,
  },
  titleText: {
    fontSize: 40,
    fontFamily: 'SCDream7',
    color: '#000000',
    marginBottom: 20,
  },
  congHighText: {
    fontSize: 22,
    fontFamily: 'SCDream5',
    color: '#000000',
    marginBottom: 5,
  },

  progressBarContainer: {
    marginTop: 25,
    marginLeft: 30,
    flexDirection: 'row',
  },
  progressBar: {
    width: 77,
    height: 6,
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 20,
  },

  inputContainer: {
    borderRadius: 10,
    backgroundColor: '#ECECEC',
    margin: 20,
    marginBottom: 0,
    padding: 7,
    flexDirection: 'row',
    alignItems: 'center',
  },
  birthSetContainer: {
    padding: 20, 
    paddingLeft: 5,
  },
  inputImage: {
    width: 25,
    height: 25,
    marginRight: 10,
    marginLeft: 10,
  },
  inputStyle: {
    fontSize: 16,
    fontFamily: 'SCDream5',
    color: '#989797',
  },
  birthText: {
    paddingLeft: 8,
  },

  btnsContainer: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
  },
  btnContainer: {
    borderRadius: 10,
    backgroundColor: '#FFE7E8',
    margin: 20,
    marginBottom: 10,
    marginTop: 10,
    padding: 12,
    alignItems: 'center',
  },
  btnText: {
    fontSize: 16,
    fontFamily: 'SCDream5',
    color: '#000000',
  },
});
