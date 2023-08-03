import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import React, {useState} from 'react';

export default function JoinDonePage({navigation}: {navigation: any}) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.checkImage}
        source={require('../../assets/LoginIcon/check.png')}
      />

      
<View style={styles.informContainer}>
          <Text style={styles.congHighText}>가입</Text>
          <Text style={styles.congText}>이 </Text>
          <Text style={styles.congHighText}>완료</Text>
          <Text style={styles.congText}>되었어요</Text>
        </View>

        
      <View style={styles.btnsContainer}>
        <TouchableOpacity
          style={[styles.btnContainer, {backgroundColor: '#FEB2B4'}]}
          onPress={() => navigation.navigate('LoginPage')}>
          <Text style={styles.btnText}>완료</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  checkImage: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginTop: -50,
  },
  informContainer: {
    marginTop: 25,
    flexDirection: 'row',
  },
  congHighText: {
    fontSize: 22,
    fontFamily: 'SCDream6',
    color: '#FF686E',
  },
  congText: {
    fontSize: 22,
    fontFamily: 'SCDream6',
    color: '#000000',
    marginBottom: 20,
  },
  
  btnsContainer: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
  },
  btnContainer: {
    borderRadius: 10,
    backgroundColor: '#FFE7E8',
    margin: 20,
    marginBottom: 10,
    marginTop: 10,
    padding: 12,
    alignItems: 'center',
  },
  btnText: {
    fontSize: 16,
    fontFamily: 'SCDream5',
    color: '#000000',
  },
});
