import {StyleSheet, Text, View, Image, ScrollView, Dimensions} from 'react-native';
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
  function formatDate({dateString} : {dateString: string}) {
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${month}/${day}`;
  }

  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          <Image
            style={styles.iconImage}
            source={require('../assets/HealthDataIcon/Bandage.png')}
          />
          <View>
            <Text style={styles.sickTitle}>{sick.join(', ')}</Text>
            {/* <View style={styles.detailTimeContainer}> */}
              <Text style={styles.sickDetail}>• {detail}</Text>
            {/* </View> */}
          </View>
              <Text style={styles.sickDate}>{formatDate(date)}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

let screenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    margin: 15,
    marginLeft: 40,
    marginRight: 40,
    flexDirection: 'row',
  },
  iconImage: {
    width: 25,
    height: 25,
    marginRight: 15,
  },

  sickTitle: {
    fontSize: 18,
    fontFamily: 'SCDream6',
    color: '#5F5F5F',
  },

  detailTimeContainer: {
    alignContent: 'center',
    flexDirection: 'row',
    marginRight: 20,
    width: screenWidth,
  },
  sickDetail: {
    marginTop: 5,
    fontSize: 14,
    fontFamily: 'SCDream4',
    color: '#5F5F5F',
    // justifyContent: 'flex-start',
  },
  sickDate: {
    fontSize: 12,
    fontFamily: 'SCDream5',
    color: '#5F5F5F',
    marginTop: 5,
    marginLeft: 10,
    position: 'absolute',
    right: 0,
  },
});
