import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

export default function LoginPage({navigation}: {navigation: any}) {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.loginAlertContainer}>
        <Text style={styles.loginAlertText}>로그인</Text>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>갱메이트</Text>
        <View style={styles.informContainer}>
          <Text style={styles.congHighText}>갱메이트</Text>
          <Text style={styles.congText}>에 오신 걸 진심으로 환영해요!</Text>
        </View>
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
          source={require('../../assets/LoginIcon/lock.png')}
        />
        <TextInput
          placeholder={'비밀번호'}
          onChangeText={password => setPassword(password)}
          autoCapitalize="none"
          blurOnSubmit={false}
          style={styles.inputStyle}
          secureTextEntry={true}
        />
      </View>

      <View style={styles.btnsContainer}>
        <TouchableOpacity
          style={[styles.btnContainer, {backgroundColor: '#FFE7E8'}]}>
          <Text style={styles.btnText}>로그인하기</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.btnContainer, {backgroundColor: '#FEB2B4'}]}
          onPress={() => navigation.navigate('JoinNamePage')}
          >
          <Text style={styles.btnText}>회원가입</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infContainer}>
        <Text style={styles.infText}>아직 계정이 없다면 </Text>
        <Text style={styles.infHighText}>회원가입</Text>
        <Text style={styles.infText}>을 해주세요</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  loginAlertContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  loginAlertText: {
    fontSize: 20,
    fontFamily: 'SCDream5',
    color: '#000000',
  },

  titleContainer: {
    marginTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 40,
    fontFamily: 'SCDream7',
    color: '#FF686E',
  },
  informContainer: {
    marginTop: 25,
    flexDirection: 'row',
  },
  congHighText: {
    fontSize: 16,
    fontFamily: 'SCDream6',
    color: '#FF8FAB',
  },
  congText: {
    fontSize: 16,
    fontFamily: 'SCDream6',
    color: '#000000',
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
    marginTop: 20,
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

  infContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  infHighText: {
    fontSize: 14,
    fontFamily: 'SCDream5',
    color: '#FF8FAB',
  },
  infText: {
    fontSize: 14,
    fontFamily: 'SCDream5',
    color: '#949494',
    marginBottom: 20,
  },
});
