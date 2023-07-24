import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import BoardDetailCard from '../../components/BoardDetailCard';

export default function DetailBoardPage({navigation}: {navigation: any}) {
  
  const [comment, setComment] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.detailBoardView}>
        <TouchableOpacity
          style={styles.backArrowIcon}
          onPress={() => {navigation.navigate('CommunicationPage')}} >
          <Image source={require('../../assets/icons/arrow.png')} />
        </TouchableOpacity>
        <View style={styles.freeBoardView}>
          <Text style={styles.freeBoard}>자유 게시판</Text>
        </View>
      </View>
      <View style={styles.boardTitle}>
        <Text style={styles.title}>뜨개질 방법 공유</Text>
        <View style={styles.boardProfile}>
          <TouchableOpacity style={styles.viewProfile}>
            <Image
              source={require('../../assets/icons/writerProfile.png')}
              style={styles.writerProfile} />
            <Text style={styles.writerNickname}>user</Text>
          </TouchableOpacity>
          <Text style={styles.writerTime}>07/06 12:48</Text>
        </View>
      </View>
      <View style={styles.contentView}>
        <ScrollView>
          <Text style={styles.content}>이렇게 뜨개질 코를 늘려갑니다.</Text>
        </ScrollView>
      </View>
      <View style={styles.comment}>
        <Text style={styles.commentNum}>댓글 수</Text>
        <View style={styles.inputCommentView}>
          <TextInput
            style={styles.inputComment}
            onChangeText={(text) => {setComment(text)}}
            placeholder="댓글을 남겨보세요."
          />
          <TouchableOpacity style={styles.sendCommentIcon} onPress={() => Alert.alert('댓글을 달았습니다.')}>
            <Image
              source={require('../../assets/icons/sendComment.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <BoardDetailCard />
        <BoardDetailCard />
        <BoardDetailCard />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF3F1',
  },
  detailBoardView: {
    flexDirection: 'row',
    marginTop: 24,
  },
  backArrowIcon: {
    alignSelf: 'center',
    marginLeft: 20,
  },
  freeBoardView: {
    flex: 0.85,
    alignSelf: 'center',
  },
  freeBoard: {
    fontSize: 36,
    fontFamily: 'SCDream6',
    color: 'black',
    alignSelf: 'center',
  },
  boardTitle: {
    backgroundColor: '#ffffff',
    borderColor: '#C3C3C3',
    borderWidth: 1,
    marginTop: 24,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 10,
    paddingBottom: 10,
  },
  title: {
    fontFamily: 'SCDream4',
    fontSize: 26,
    color: 'black',
    marginBottom: 12,
  },
  boardProfile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewProfile: {
    flexDirection: 'row',
  },
  writerProfile: {
    borderRadius: 50,
    marginRight: 6,
  },
  writerNickname: {
    fontFamily: 'SCDream4',
    fontSize: 16,
    color: 'black',
    alignSelf: 'center',
  },
  writerTime: {
    fontFamily: 'SCDream4',
    fontSize: 14,
    color: 'black',
    alignSelf: 'center',
  },
  contentView: {
    backgroundColor: '#ffffff',
    borderColor: '#C3C3C3',
    borderWidth: 1,
    padding: 16,
    height: '30%',
  },
  content: {
    fontFamily: 'SCDream4',
    color: 'black',
    fontSize: 16,
  },
  comment: {
    backgroundColor: '#ffffff',
    borderColor: '#C3C3C3',
    borderWidth: 1,
  },
  commentNum: {
    fontFamily: 'SCDream4',
    color: 'black',
    fontSize: 16,
    marginLeft: 12,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  inputCommentView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 5,
  },
  inputComment: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 50,
    borderColor: '#C3C3C3',
    borderWidth: 1,
    height: '80%',
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    fontFamily: 'SCDream4',
    fontSize: 12,
    alignSelf: 'center',
  },
  sendCommentIcon: {
    marginRight: 10,
    alignSelf: 'center',
  },
})