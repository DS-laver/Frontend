import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import React, {useState} from 'react';

export default function JoinProfPage({navigation}: {navigation: any}) {

  const [nickName, setNickName] = useState('');
  const [intro, setIntro] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>함께 이야기를 나눠요 😎</Text>
        <Text style={styles.congHighText}>
          채팅과 정보 알리미에서 사용할
        </Text>
        <Text style={styles.congHighText}>나만의 프로필을 만들어보세요</Text>
      </View>

      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, {backgroundColor: '#FEB2B4'}]} />
        <View style={[styles.progressBar, {backgroundColor: '#FEB2B4'}]} />
        <View style={[styles.progressBar, {backgroundColor: '#FEB2B4'}]} />
        <View style={[styles.progressBar, {backgroundColor: '#FEB2B4'}]} />
      </View>


      <View style={styles.profileSettingContainer}>
        <Image
          style={styles.profileIcon}
          source={require('../../assets/LoginIcon/person.png')}
          />
          <TextInput
            style={styles.inputNickName}
            placeholder="닉네임"
            onChangeText={text => setNickName(text)}
            value={nickName}
            />
            <TextInput
              style={styles.inputIntro}
              placeholder="한 줄 소개를 적어주세요"
              onChangeText={text => setIntro(text)}
              value={intro}
              />
              <Text style={styles.inputIntro}>한 줄 소개는 채팅과 자유 게시판,</Text>
              <Text style={styles.inputIntro}>프로필에서 확인하실 수 있습니다.</Text>
      </View>


      <View style={styles.btnsContainer}>
        <TouchableOpacity
          style={[styles.btnContainer, {backgroundColor: '#FFE7E8'}]}
          onPress={() => navigation.navigate('JoinMediPage')}>
          <Text style={styles.btnText}>이전</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.btnContainer, {backgroundColor: '#FEB2B4'}]}
          onPress={() => navigation.navigate('JoinDonePage')}>
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
    fontSize: 33,
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

  profileIcon: {
    width: 100, 
    height: 100, 
    alignSelf: 'center',
    marginBottom: 20,
  },
  inputNickName: {
    fontSize: 25,
    fontFamily: 'SCDream5',
    color: '#000000',
  },
  inputIntro: {
    fontSize: 14,
    fontFamily: 'SCDream4',
    color: '#000000',
  },


  profileSettingContainer: {
    marginTop: 20,
    backgroundColor: '#ECECEC',
    margin: 20,
    padding: 30,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
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