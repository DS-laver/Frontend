import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function DetailBoardPage({navigation}: {navigation: any}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.detailBoardView}>
        <TouchableOpacity
          style={styles.backArrowIcon}
          onPress={() => {navigation.navigate('Communication')}} >
          <Image source={require('../assets/icons/arrow.png')} />
        </TouchableOpacity>
        <View style={styles.freeBoardView}>
          <Text style={styles.freeBoard}>자유 게시판</Text>
        </View>
      </View>
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
    marginTop: 20,
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
})