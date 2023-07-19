import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function chatCard() {
  return (
    <View style={styles.profileView}>
      <Image source={require('../assets/icons/chatProfile.png')} style={styles.profile} />
      <View style={styles.chating}>
        <Text style={styles.nickname}>길음동 멋쟁이</Text>
        <Text style={styles.chatContent} numberOfLines={1} ellipsizeMode="tail">안녕하세요. 팀 laver입니다.</Text>
      </View>
      <View style={styles.chatNumView}>
        {/* 읽었는지 안 읽었는지에 따라 숫자 유무 판단 */}
        <Text style={styles.chatNum}>40</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  profileView: {
    borderColor: '#C3C3C3',
    borderWidth: 1,
    flexDirection: 'row',
  },
  profile: {
    borderRadius: 50,
    margin: 20,
  },
  chating: {
    flex: 1,
    alignSelf: 'center',
    marginRight: 20,
  },
  nickname: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'SCDream5',
    marginBottom: 5,
  },
  chatContent: {
    fontFamily: 'SCDream4',
    fontSize: 14,
  },
  chatNumView: {
    flex: 0.2,
    backgroundColor: '#FEC0C1',
    borderRadius: 50,
    alignSelf: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  chatNum: {
    fontFamily: 'SCDream5',
    color: 'black',
    fontSize: 20,
  },
})