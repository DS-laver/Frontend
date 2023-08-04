import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

export default function AnalogClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getHourPosition = (length, degrees, center) => {
    const angle = (degrees - 90) * (Math.PI / 180);
    const x = center + length * 0.5 * Math.cos(angle); // Anchor the hand at 45% of its length from the center
    const y = center + length * 0.5 * Math.sin(angle);
    return {x, y};
  };

  const getMinutePosition = (length, degrees, center) => {
    const angle = (degrees - 90) * (Math.PI / 180);
    const x = center + length * 0.52 * Math.cos(angle); // Anchor the hand at 60% of its length from the center
    const y = center + length * 0.52 * Math.sin(angle);
    return {x, y};
  };

  const getSecondPosition = (length, degrees, center) => {
    const angle = (degrees - 90) * (Math.PI / 180);
    const x = center + length * 0.43 * Math.cos(angle); // Anchor the hand at 68% of its length from the center
    const y = center + length * 0.43 * Math.sin(angle);
    return {x, y};
  };

  const clockWidth = Dimensions.get('window').width - 180;
  // console.log(clockWidth)
  const center = clockWidth / 2;
  // console.log(center)

  const hour = time.getHours();
  const mins = time.getMinutes();
  const seconds = time.getSeconds();

  const hourLength = clockWidth / 4.5;
  const minsLength = clockWidth / 3.8;
  const secondsLength = clockWidth / 3.4;

  const hourDegrees = ((hour % 12) + mins / 60) * 30;
  const minsDegrees = (mins + seconds / 60) * 6;
  const secondsDegrees = seconds * 6;

  const hourPosition = getHourPosition(hourLength, hourDegrees, center);
  const minsPosition = getMinutePosition(minsLength, minsDegrees, center);
  const secondsPosition = getSecondPosition(
    secondsLength,
    secondsDegrees,
    center,
  );
  
  return (
    <View
    id='clockContainter'
      style={[
        styles.clockContainter,
        {width: clockWidth, height: clockWidth, borderRadius: clockWidth / 2},
      ]}
      >
      <View style={[styles.clockFace, {borderRadius: clockWidth / 2}]}></View>
      
      <View 
      style={[
          styles.centerFace, {left: center-8, top: center-6}]}
      />
          
      <View
        style={[
          styles.clockHourHandle,
          {
            width: 6,
            height: hourLength,
            left: hourPosition.x-6,
            top: hourPosition.y-23,
            transform: [{rotate: `${hourDegrees}deg`}],
          },
        ]}/>

      <View
        style={[
          styles.clockMinitesHandle,
          {
            width: 4,
            height: minsLength,
            left: minsPosition.x-6,
            top: minsPosition.y-27,
            transform: [{rotate: `${minsDegrees}deg`}],
          },
        ]}/>

      <View
        style={[
          styles.clockSecondHandle,
          {
            width: 2,
            height: secondsLength,
            left: secondsPosition.x-4,
            top: secondsPosition.y-30,
            transform: [{rotate: `${secondsDegrees}deg`}],
          },
        ]}/>
    </View>
  );
}

const styles = StyleSheet.create({
  clockContainter: {
    margin: 20,
    borderWidth: 2,
    borderColor: '#000',
    position: 'relative',
  },
  clockFace: {
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
  centerFace: {
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: '#8C7062',
    width: '5%',
    height: '5%',
    borderRadius: 50,
  },
  clockHourHandle: {
    position: 'absolute',
    backgroundColor: '#8C7062',
  },
  clockMinitesHandle: {
    position: 'absolute',
    backgroundColor: '#8C7062',
  },
  clockSecondHandle: {
    position: 'absolute',
    backgroundColor: '#8C7062',
  },
});
