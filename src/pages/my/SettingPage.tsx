import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function SettingPage({navigation}: {navigation: any}) {
  const [name, setName] = useState('홍가윤');
  const [nickname, setNickname] = useState('예승');
  const [intro, setIntro] = useState('파주사는 10살 딸 엄마에요~^^');
  const [pushAlert, setPushAlert] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.settingTop}>
        <TouchableOpacity
          style={styles.arrowIcon}
          onPress={() => {
            navigation.navigate('MyPage');
          }}>
          <Image source={require('../../assets/icons/arrow.png')} />
        </TouchableOpacity>
        <Text style={styles.settingText}>설정</Text>
      </View>

      <View style={styles.setPropContainer}>
        <Text style={styles.setPropTitle}>이름</Text>
        <Text style={styles.setPropDetail}>{name}</Text>
      </View>

      <View style={styles.setPropContainer}>
        <Text style={styles.setPropTitle}>닉네임</Text>
        <Text style={styles.setPropDetail}>{nickname}</Text>
      </View>

      <View style={styles.setPropContainer}>
        <Text style={styles.setPropTitle}>상태메시지</Text>
        <Text style={styles.setPropDetail}>{intro}</Text>
      </View>

      <View style={styles.setPropContainer}>
        <Text style={styles.setPropTitle}>푸시알람</Text>
        <Text style={styles.setPropInfo}>
          약 복용하는 시간에 맞춰 알람을 보내드립니다.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF3F1',
  },
  settingTop: {
    flexDirection: 'row',
    marginTop: 50,
    marginLeft: 20,
    marginBottom: 40,
  },
  arrowIcon: {
    alignSelf: 'center',
  },
  settingText: {
    alignSelf: 'center',
    fontSize: 28,
    fontFamily: 'SCDream6',
    color: 'black',
    marginLeft: 10,
  },
  profileView: {
    // backgroundColor: '#ff0000',
    alignItems: 'center',
    padding: 36,
  },
  bigProfile: {
    borderRadius: 100,
  },
  changeProfile: {
    fontSize: 24,
    color: 'black',
    marginTop: 24,
  },

  setPropContainer: {
    backgroundColor: '#ffffff',
    borderColor: '#C3C3C3',
    borderWidth: 1,
    padding: 16,
  },
  setPropTitle: {
    fontSize: 28,
    fontFamily: 'SCDream5',
    color: 'black',
    marginBottom: 10,
  },
  setPropDetail: {
    fontSize: 20,
    fontFamily: 'SCDream4',
    color: 'black',
  },
  setPropInfo: {},
});
