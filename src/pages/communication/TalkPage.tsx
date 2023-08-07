import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import ChatCard from '../../components/communication/ChatCard'

export default function TalkPage({navigation}: {navigation: any}) {

  return (
    <SafeAreaView style={styles.talkContainer}>
      <View style={styles.talkTop}>
        <TouchableOpacity
          style={styles.backArrowIcon}
          onPress={() => {navigation.navigate('CommunicationPage')}} >
          <Image source={require('../../assets/icons/arrow.png')} />
        </TouchableOpacity>
        <View style={styles.chatingView}>
          <Text style={styles.chatingText}>채팅</Text>
        </View>
      </View>
      <ScrollView style={styles.talkMain}>
        <ChatCard navigation={navigation} />
        <ChatCard navigation={navigation} />
        <ChatCard navigation={navigation} />
        <ChatCard navigation={navigation} />
        <ChatCard navigation={navigation} />
        <ChatCard navigation={navigation} />
        <ChatCard navigation={navigation} />
        <ChatCard navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  talkContainer: {
    flex: 1,
    backgroundColor: '#FFF3F1',
  },
  talkTop: {
    flex: 0.15,
    backgroundColor: '#FFF3F1',
    flexDirection: 'row',
    display: 'flex',
    borderColor: '#C3C3C3',
    borderWidth: 1,
  },
  talkMain: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  backArrowIcon: {
    alignSelf: 'center',
    marginLeft: 20,
  },
  chatingView: {
    display: 'flex',
    flex: 0.85,
    justifyContent: 'center',
    flexDirection: 'row',
    textAlign: 'center',
  },
  chatingText: {
    alignSelf: 'center',
    fontFamily: 'SCDream6',
    fontSize: 36,
    color: 'black',
  },
})