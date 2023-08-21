import { View, Text, TouchableOpacity, Image, StyleSheet, Modal, TextInput, SafeAreaView, Platform } from 'react-native'
import React, { useState } from 'react'
import {launchImageLibrary} from 'react-native-image-picker';

export default function SettingPage({navigation}: {navigation: any}) {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [gallery, setGallery] = useState('')

  const onSelectImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        maxWidth: 512,
        maxHeight: 512,
        includeBase64: Platform.OS === 'ios' ? false : true,
      },
      res => {
        if (res.didCancel) {
          return;
        }
        const imageUri = res.assets[0].uri
        setGallery(imageUri)
      }
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.settingTop}>
        <TouchableOpacity
          style={styles.arrowIcon}
          onPress={() => {navigation.navigate('CommunicationPage')}}>
          <Image source={require('../../assets/icons/arrow.png')} />
        </TouchableOpacity>
        <Text style={styles.settingText}>설정</Text>
      </View>
      <View style={styles.profileView}>
        {gallery ? (
          <Image source={{ uri: 'file://' + gallery }} style={styles.bigProfile} />) : (
          <Image source={require('../../assets/icons/settingProfile.png')} style={styles.bigProfile} />
        )}
        <TouchableOpacity onPress={onSelectImage}>
          <Text style={styles.changeProfile}>프로필 사진 수정</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.nicknameView}>
        <Text style={styles.title}>닉네임</Text>
        <Text style={styles.content}>홍가윤</Text>
      </View>
      <View style={styles.statusMessage}>
        <View>
          <Text style={styles.title}>상태 메시지</Text>
          <Text style={styles.content}>파주 사는 10살 딸 엄마예요~!</Text>
        </View>
        <TouchableOpacity style={styles.changeBtn} onPress={() => setIsModalVisible(!isModalVisible)}>
          <Text style={styles.changeText}>수정</Text>
        </TouchableOpacity>
        {isModalVisible === true ? 
        <Modal
          animationType={"slide"}
          transparent={true}
          visible={isModalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.messageModal}>
              <Text style={styles.modalTitle}>상태 메시지 변경</Text>
              <Text style={styles.subTitle}>변경 전</Text>
              <View style={styles.beforeView}>
                <Text style={styles.beforeMessage}>파주 사는 10살 딸 엄마예요~!</Text>
              </View>
              <Text style={styles.subTitle}>변경 후</Text>
              <View style={styles.afterView}>
                <TextInput maxLength={100} />
              </View>
              <View style={styles.modalBtn}>
                <TouchableOpacity style={styles.cancelBtn} onPress={() => setIsModalVisible(!isModalVisible)}>
                  <Text style={styles.cancelText}>취소</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.saveBtn} onPress={() => setIsModalVisible(!isModalVisible)}>
                  <Text style={styles.saveText}>완료</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal> :
        <></>
      }
      </View>
      <View style={styles.okView}>
        <TouchableOpacity style={styles.okBtn} onPress={() => {navigation.navigate('CommunicationPage')}}>
          <Text style={styles.okText}>확인</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
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
    alignItems: 'center',
    padding: 36,
  },
  bigProfile: {
    borderRadius: 100,
    width: 150,
    height: 150,
  },
  changeProfile: {
    fontSize: 24,
    color: 'black',
    marginTop: 24,
  },
  nicknameView: {
    backgroundColor: '#ffffff',
    borderColor: '#C3C3C3',
    borderWidth: 1,
    padding: 16,
  },
  title: {
    fontFamily: 'SCDream5',
    fontSize: 28,
    color: 'black',
    marginBottom: 10,
  },
  content: {
    fontFamily: 'SCDream4',
    fontSize: 20,
    color: 'black',
  },
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
  okView: {
    marginTop: 32,
  },
  okBtn: {
    backgroundColor: '#FEC0C1',
    alignSelf: 'center',
    borderRadius: 50,
    padding: 10,
  },
  okText: {
    fontFamily: 'SCDream5',
    fontSize: 20,
    color: '#000000',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
})