import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

export default function EmptyPill({navigation}: {navigation: any}) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('AddEatMedicine');
      }}>
      <View style={styles.eatMedicineContainer}>
        <Image
          style={styles.pillImage}
          source={require('../assets/HealthCareIcon/EmptyPill.png')}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  eatMedicineContainer: {
    width: 30,
    height: 30,
  },
  pillImage: {
    width: 30.5,
    height: 30,
  },
});
