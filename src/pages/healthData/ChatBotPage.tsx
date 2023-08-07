import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const ChatBotPage = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.contianer}>
      <TouchableOpacity
        style={styles.backArrowIcon}
        onPress={() => {
          navigation.navigate('HealthDataPage');
        }}>
        <Image source={require('../../assets/icons/arrow.png')} />
      </TouchableOpacity>
      <Text>ChatBotPage</Text>
    </View>
  )
}

export default ChatBotPage

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF3F1',
  },
  backArrowIcon: {
    marginTop: 20,
    position: 'absolute',
    left: 20,
    alignSelf: 'center',
  },
})