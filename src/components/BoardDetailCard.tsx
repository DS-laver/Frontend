import { View, Text, SafeAreaView, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

export default function BoardDetailCard() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.commentInform}>
          <View style={styles.commentProfile}>
            <Image
              source={require('../assets/icons/commentProfile.png')}
              style={styles.commentProfileImg} />
            <Text style={styles.commentNickname}>user</Text>
          </View>
          <View>
            <Text style={styles.commentDate}>07/06 13:02</Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.comment}>정말 좋은 꿀팁이네요.</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderColor: '#C3C3C3',
    borderWidth: 1,
  },
  commentInform: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
  },
  commentProfile: {
    flexDirection: 'row',
  },
  commentProfileImg: {
    borderRadius: 50,
    alignSelf: 'center',
    marginRight: 5,
  },
  commentNickname: {
    fontFamily: 'SCDream5',
    color: 'black',
    fontSize: 18,
  },
  commentDate: {
    fontFamily: 'SCDream4',
    color: 'black',
    fontSize: 14,
  },
  comment: {
    fontFamily: 'SCDream4',
    color: 'black',
    fontSize: 14,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
})