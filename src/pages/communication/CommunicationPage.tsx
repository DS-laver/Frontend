import React, { useCallback, useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, TextInput, ScrollView, Alert, Button } from 'react-native'  // FCM
// import BoardCard from '../components/BoardCard';
import BoardCard from '../../components/communication/BoardCard';
import messaging from '@react-native-firebase/messaging';  // FCM

// @ts-ignore
export default function CommunicationPage({navigation}) {

  const [textInput, setTextInput] = useState('');

  // FCM 
  const getFcmToken = useCallback(async () =>{
    const fcmToken = await messaging().getToken();
    await Alert.alert(fcmToken);
    console.log(fcmToken);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
        {/* 제목, 설정, 메신저 */}
        <View style={styles.titleView}>
          <TouchableOpacity
            style={styles.settingIcon}
            onPress={() => {navigation.navigate('SettingPage')}}>
            <Image source={require('../../assets/icons/setting.png')} />
          </TouchableOpacity>
          <Text style={styles.titleText}>자유 게시판</Text>
          <TouchableOpacity
            style={styles.speechBubbleIcon}
            onPress={() => {navigation.navigate('TalkPage')}} >
            <Image source={require('../../assets/icons/speechBubble.png')} />
          </TouchableOpacity>
        </View>
        {/* search */}
        <View style={styles.searchView}>
          <TextInput
            style={styles.searchBox}
            onChangeText={(text) => {setTextInput(text)}}
            placeholder="키워드를 입력해주세요."
          />
          <TouchableOpacity style={styles.magnifierIcon}>
            <Image source={require('../../assets/icons/magnifier.png')} />
          </TouchableOpacity>
        </View>
          {/* 게시글이 하나도 없을 때랑 있을 때 조건 필요                                    아래의 Button은 FCM 토큰을 얻기 위함임.*/}
        <ScrollView style={styles.board}>
          <Button title="get Token!!" onPress={getFcmToken}/>
          <BoardCard navigation={navigation} />
          <BoardCard navigation={navigation} />
          <BoardCard navigation={navigation} />
          <BoardCard navigation={navigation} />
          <BoardCard navigation={navigation} />
          <BoardCard navigation={navigation} />
          <BoardCard navigation={navigation} />
          <BoardCard navigation={navigation} />
        </ScrollView>
        <View style={styles.boardBottom}>
          <View style={styles.paginationView}>
            <Text style={styles.pageNum}>1</Text>
            <Text style={styles.pageNum}>2</Text>
            <Text style={styles.pageNum}>3</Text>
            <Text style={styles.pageNum}>4</Text>
            <Text style={styles.pageNum}>5</Text>
          </View>
          <View style={styles.writeBoardBtn}>
            <TouchableOpacity onPress={() => {navigation.navigate('WritingPage')}}>
              <View style={styles.writeBoard}>
                <Text style={styles.writeBtn}>글 작성</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topView: {
    backgroundColor: '#FFF3F1',
    flex: 1,
  },
  titleView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 36,
    color: 'black',
    alignSelf: 'center',
    marginTop: 28,
    fontFamily: 'SCDream6',
  },
  settingIcon: {
    marginTop: 36,
    marginRight: 52,
  },
  speechBubbleIcon: {
    marginTop: 36,
    marginLeft: 52,
  },
  searchView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  searchBox: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderColor: '#C3C3C3',
    borderWidth: 1.5,
    width: '80%',
    padding: 10,
  },
  magnifierIcon: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  board: {
    marginTop: 15,
  },
  boardBottom: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  paginationView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
    marginLeft: 75,
  },
  pageNum: {
    marginRight: 10,
    marginLeft: 10,
    marginTop: 5,
    marginBottom: 5,
    fontFamily: 'SCDream5',
    fontSize: 16,
  },
  writeBoardBtn: {
    alignSelf: 'center',
    justifyContent: 'flex-end',
  },
  writeBoard: {
    backgroundColor: '#FEC0C1',
    padding: 10,
    borderRadius: 50,
    marginRight: 10,
  },
  writeBtn: {
    fontFamily: 'SCDream5',
  },
})