import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function boardCard({navigation}: {navigation: any}) {
  return (
    <TouchableOpacity
      style={styles.post}
      onPress={()=> navigation.navigate('DetailBoardPage')} >
      <View style={styles.postTitleView}>
        <Text style={styles.postTitle}>게시글 제목</Text>
        <Text style={styles.postDate}>03/04 05:06</Text>
      </View>
      <View style={styles.profileView}>
        <Image source={require('../../assets/icons/profile.png')} style={styles.profilePhoto} />
        <Text style={styles.nickname}>user</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  post: {
    backgroundColor: '#FFFFFF',
    borderColor: '#C3C3C3',
    borderWidth: 1,
    paddingTop: 12,
  },
  postTitleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 14,
  },
  postTitle: {
    fontSize: 28,
    fontFamily: 'SCDream5',
    color: '#000000',
  },
  postDate: {
    fontSize: 16,
    alignSelf: 'center',
    fontFamily: 'SCDream4',
    color: '#000000',
  },
  profileView: {
    flexDirection: 'row',
    paddingBottom: 12,
    marginLeft: 18,
  },
  profilePhoto: {
    borderRadius: 50,
  },
  nickname: {
    fontFamily: 'SCDream4',
    marginLeft: 10,
    fontSize: 16,
    color: '#000000',
  }
})