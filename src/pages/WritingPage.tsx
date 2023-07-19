import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

export default function WritingPage({navigation}: {navigation: any}) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>게시물 작성하기</Text>
      </View>
      <View style={styles.inputTitle} >
        <TextInput
          style={styles.writeTitle}
          multiline={true}
          maxLength={100}
          placeholder="제목을 입력해주세요." />
      </View>
      <View style={styles.inputContent}>
        <TextInput
          style={styles.writeContent}
          multiline={true}
          maxLength={1000}
          placeholder="내용을 입력해주세요." />
      </View>
      <View style={styles.btnView}>
        <TouchableOpacity onPress={() => {navigation.navigate('Communication')}}>
          <View style={styles.cancelBtn}>
            <Text style={styles.cancelText}>취소</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate('Communication')}}>
          <View style={styles.sendBtn}>
            <Text style={styles.sendText}>확인</Text>
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
  title: {
    fontSize: 36,
    color: 'black',
    alignSelf: 'center',
    marginTop: 36,
    marginBottom: 36,
    fontFamily: 'SCDream6',
  },
  inputTitle: {
    backgroundColor: 'white',
    borderColor: '#C3C3C3',
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
  writeTitle: {
    fontSize: 18,
    fontFamily: 'SCDream4',
  },
  inputContent: {
    backgroundColor: 'white',
    borderColor: '#C3C3C3',
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    height: '65%',
  },
  writeContent: {
    fontSize: 16,
    fontFamily: 'SCDream4',
  },
  btnView: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  cancelBtn: {
    backgroundColor: '#FDD9D9',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 50,
    marginRight: 10,
  },
  cancelText: {
    fontFamily: 'SCDream4',
    fontSize: 15,
  },
  sendBtn: {
    backgroundColor: '#FEC0C1',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 50,
    marginRight: 12,
  },
  sendText: {
    fontFamily: 'SCDream4',
    fontSize: 15,
  },
})