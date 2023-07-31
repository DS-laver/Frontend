import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';

export default function SickData({
  index,
  date,
  sick,
  detail,
}: {
  index: number;
  date: string;
  sick: string[];
  detail: string;
}) {
  function formatDate(dateString) {
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${month}/${day}`;
  }

  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.iconContainer}>
            <Image
              style={styles.iconImage}
              source={require('../assets/HealthDataIcon/Bandage.png')}
            />
            <Text style={styles.sickDate}>{formatDate(date)}</Text>
          </View>
          <View>
            <Text style={styles.sickTitle}>{sick.join(', ')}</Text>
            <Text style={styles.sickDetail}>• {detail}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
    marginLeft: 40,
    marginRight: 40,
    flexDirection: 'row',
  },
  iconContainer:{
    justifyContent: 'center',
    alignContent: 'center',
  },
  iconImage: {
    width: 25,
    height: 25,
    marginRight: 15,
  },
  sickDate: {
    fontSize: 12,
    fontFamily: 'SCDream5',
    color: '#5F5F5F',
    marginTop: 5,
  },

  sickTitle: {
    fontSize: 22,
    fontFamily: 'SCDream6',
    color: '#5F5F5F',
  },
  sickDetail: {
    marginTop: 5,
    fontSize: 18,
    fontFamily: 'SCDream4',
    color: '#5F5F5F',
  },
});
