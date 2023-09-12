import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Modal,
  TextInput,
  Switch,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function SettingPage({navigation}: {navigation: any}) {
  const [name, setName] = useState('홍가윤');
  const [nickname, setNickname] = useState('예승');
  const [intro, setIntro] = useState('파주사는 10살 딸 엄마에요~^^');
  const [pushAlert, setPushAlert] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);

  
  const toggleSwitch = () => {
    setPushAlert(pushAlert => !pushAlert);
  };

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

      <View style={styles.statusMessage}>
        <View>
          <Text style={styles.setPropTitle}>상태 메시지</Text>
          <Text style={styles.setPropDetail}>{intro}</Text>
        </View>
        <TouchableOpacity
          style={styles.changeBtn}
          onPress={() => setIsModalVisible(!isModalVisible)}>
          <Text style={styles.changeText}>수정</Text>
        </TouchableOpacity>
        {isModalVisible === true ? (
          <Modal
            animationType={'slide'}
            transparent={true}
            visible={isModalVisible}>
            <View style={styles.messageModal}>
              <Text style={styles.modalTitle}>상태 메시지 변경</Text>
              <Text style={styles.subTitle}>변경 전</Text>
              <View style={styles.beforeView}>
                <Text style={styles.beforeMessage}>
                  파주 사는 10살 딸 엄마예요~!
                </Text>
              </View>
              <Text style={styles.subTitle}>변경 후</Text>
              <View style={styles.afterView}>
                <TextInput maxLength={100} />
              </View>
              <View style={styles.modalBtn}>
                <TouchableOpacity
                  style={styles.cancelBtn}
                  onPress={() => setIsModalVisible(!isModalVisible)}>
                  <Text style={styles.cancelText}>취소</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.saveBtn}
                  onPress={() => setIsModalVisible(!isModalVisible)}>
                  <Text style={styles.saveText}>완료</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        ) : (
          <></>
        )}
      </View>

      <View style={[styles.setPropContainer, { flexDirection: 'row' }]}>
        <View>
        <Text style={styles.setPropTitle}>푸시알람</Text>
        <Text style={styles.setPropInfo}>
          약 복용하는 시간에 맞춰 알람을 보내드립니다.
        </Text>
        </View>
        <View style={styles.mediEveryDayContainer}>
            <Switch
              trackColor={{false: '#767577', true: '#cecece'}}
              thumbColor={pushAlert ? '#FEB2B4' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={pushAlert}
            />
          </View>
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
    marginTop: 30,
    marginBottom: 30,
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

  statusMessage: {
    backgroundColor: '#ffffff',
    borderColor: '#C3C3C3',
    borderWidth: 1,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  changeBtn: {
    backgroundColor: '#FEC0C1',
    alignSelf: 'center',
    borderRadius: 50,
    padding: 6,
  },
  changeText: {
    fontFamily: 'SCDream5',
    fontSize: 20,
    color: '#ffffff',
  },
  messageModal: {
    backgroundColor: '#ffffff',
    borderColor: '#C3C3C3',
    borderWidth: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    width: '80%',
    padding: 10,
    borderRadius: 16,
  },
  modalTitle: {
    fontFamily: 'SCDream5',
    fontSize: 32,
    color: 'black',
    marginBottom: 10,
  },
  subTitle: {
    fontFamily: 'SCDream4',
    fontSize: 24,
    color: 'black',
    marginBottom: 5,
  },
  beforeView: {
    backgroundColor: '#FEC0C1',
    borderRadius: 10,
    padding: 5,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
  },
  beforeMessage: {
    fontFamily: 'SCDream4',
    fontSize: 18,
    color: 'black',
  },
  afterView: {
    backgroundColor: '#FEC0C1',
    borderColor: 'black',
    borderWidth: 1,
    fontFamily: 'SCDream4',
    fontSize: 18,
    borderRadius: 10,
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 12,
  },
  modalBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cancelBtn: {
    backgroundColor: '#FDD9D9',
    padding: 8,
    borderRadius: 18,
    marginRight: 16,
  },
  cancelText: {
    fontFamily: 'SCDream5',
    fontSize: 16,
    color: 'black',
  },
  saveBtn: {
    backgroundColor: '#FEC0C1',
    padding: 8,
    borderRadius: 18,
  },
  saveText: {
    fontFamily: 'SCDream5',
    fontSize: 16,
    color: 'black',
  },
  mediDayContainer: {
    marginTop: 40,
  },
  mediEveryDayContainer: {
    marginLeft: 40,
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'flex-end',
  },
  mediDayBtnContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mediDayBtn: {
    width: 37,
    height: 37,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  mediDayBtnText: {
    fontSize: 14,
    fontFamily: 'SCDream5',
    color: '#000000',
  },

});
