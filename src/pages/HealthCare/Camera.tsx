import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker'

export default function Camera({navigation}: {navigation: any}) {
  return (
    <View>
        <TouchableOpacity
          style={styles.backArrowIcon}
          onPress={() => {
            navigation.navigate('HealthCarePage');
          }}>
          <Image source={require('../../assets/icons/arrow.png')} />
        </TouchableOpacity>
      <Text>Camera</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF3F1',
  },
  backArrowIcon: {
    alignSelf: 'center',
  },
})