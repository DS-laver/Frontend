import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput, Alert } from 'react-native'
import React from 'react'

export default function ChatingPage({navigation}: {navigation: any}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.chatingTop}>
        <TouchableOpacity
          style={styles.backArrowIcon}
          onPress={() => {navigation.navigate('TalkPage')}}>
          <Image source={require('../../assets/icons/arrow.png')} />
        </TouchableOpacity>
        <View style={styles.nicknameView}>
          <Text style={styles.nickname}>바니바니당근당근</Text>
        </View>
      </View>
      <ScrollView style={styles.chatingView}>

      </ScrollView>
      <View style={styles.inputChatingView}>
        <TextInput
          style={styles.talkInput}
          multiline={true}
          placeholder="메시지를 입력해주세요." />
        <TouchableOpacity style={styles.sendChat} onPress={() => Alert.alert('메시지를 전송했습니다.')}>
          <View>
            <Text style={styles.sendText}>전송</Text>
          </View>
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
  chatingTop: {
    flexDirection: 'row',
    flex: 0.15,
  },
  backArrowIcon: {
    alignSelf: 'center',
    marginLeft: 20,
  },
  nicknameView: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    flex: 0.85,
  },
  nickname: {
    alignSelf: 'center',
    fontFamily: 'SCDream5',
    fontSize: 24,
    color: 'black',
  },
  chatingView: {
    backgroundColor: '#ffffff'
  },
  inputChatingView: {
    backgroundColor: '#FFF3F1',
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  talkInput: {
    backgroundColor: '#ffffff',
    width: '80%',
    borderColor: '#C3C3C3',
    borderWidth: 1,
    borderRadius: 16,
    padding: 10,
    height: '70%',
    fontFamily: 'SCDream4',
    fontSize: 14,
    alignSelf: 'center',
    color: 'black',
    marginLeft: 10,
  },
  sendChat: {
    backgroundColor: '#FEC0C1',
    padding: 10,
    borderRadius: 16,
    marginRight: 10,
  },
  sendText: {
    fontFamily: 'SCDream4',
    color: 'black',
  },
})