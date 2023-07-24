import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function SettingPage({navigation}: {navigation: any}) {
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
        <Image source={require('../../assets/icons/settingProfile.png')} style={styles.bigProfile}  />
        <TouchableOpacity>
          <Text style={styles.changeProfile}>프로필 사진 수정</Text>
        </TouchableOpacity>
      </View>
      <View></View>
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
    // backgroundColor: '#ff0000',
    alignItems: 'center',
    padding: 36,
  },
  bigProfile: {
    borderRadius: 100,
  },
  changeProfile: {
    fontSize: 24,
    color: 'black',
    marginTop: 24,
  },
})