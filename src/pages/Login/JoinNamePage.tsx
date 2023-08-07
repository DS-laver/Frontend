import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import React, {useState} from 'react';

export default function JoinNamePage({navigation}: {navigation: any}) {
  const [id, setId] = useState('');
  const [birth, setBirth] = useState('');

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
          placeholder={'아이디'}
          onChangeText={id => setId(id)}
          autoCapitalize="none"
          returnKeyType="next"
          blurOnSubmit={false}
        />
      </View>

      <View style={styles.inputContainer}>
        <Image
          style={styles.inputImage}
          source={require('../../assets/LoginIcon/calendar.png')}
        />
        <TextInput
          placeholder={'생년월일'}
          onChangeText={birth => setBirth(birth)}
          autoCapitalize="none"
          blurOnSubmit={false}
          style={styles.inputStyle}
          secureTextEntry={true}
        />
      </View>

      <View style={styles.btnsContainer}>
        <TouchableOpacity
          style={[styles.btnContainer, {backgroundColor: '#FFE7E8'}]}
          onPress={() => navigation.navigate('LoginPage')}>
          <Text style={styles.btnText}>이전</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.btnContainer, {backgroundColor: '#FEB2B4'}]}
          onPress={() => navigation.navigate('JoinIdPage')}>
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
