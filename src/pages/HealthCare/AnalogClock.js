// https://github.com/allan852/RNAnalogClock/blob/master/App.js

import React, {Component} from "react"

import {
    View,
    Text,
    StyleSheet,
    Dimensions
} from "react-native"

export default class AnalogClock extends Component {
  render() {
    let screenWidth = Dimensions.get("window").width
    let clockWidth = (screenWidth - 180)
    let clockHeight = clockWidth
    let hourHandleWidth = 6
    let minitesHandleWidth = 4
    let secondHandleWidth = 2
    let hourHandleHeight = clockHeight/4
    let minitesHandleHeight = clockHeight/3
    let secondHandleHeight = clockHeight/2.3
    return (
        <View style={[styles.clockContainter, {width: clockWidth, height: clockHeight, borderRadius: clockWidth/2}]}>
          <View style={[styles.clockFace, {height: clockHeight}]}></View>
          <View style={[
            styles.clockHourHandle,
            {
              width: hourHandleWidth,
              height: hourHandleHeight,
              left: (clockWidth-hourHandleWidth)/2,
              top: (clockHeight/2 - hourHandleHeight),
            }
          ]}></View>
          <View style={[
            styles.clockMinitesHandle,
            {
              width: minitesHandleWidth,
              height: minitesHandleHeight,
              left: (clockWidth-minitesHandleWidth)/2,
              top: (clockHeight/2 - minitesHandleHeight),
              // transform:[{rotate: "40deg"}]
            }
          ]}></View>
          <View style={[
            styles.clockSecondHandle,
            {
              width: secondHandleWidth,
              height: secondHandleHeight,
              left: (clockWidth-secondHandleWidth)/2,
              top: (clockHeight/2 - secondHandleHeight),
              transform:[{translateX: -(clockWidth-secondHandleWidth)/2}, {rotate: "45deg"}, {translateX: (clockWidth-secondHandleWidth)/2}]
            }
          ]}>
          </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  clockContainter: {
    borderWidth: 2,
    borderColor: "#000",
    position: "relative"
    // alignItems: "center",
    // justifyContent: "center"
  },
  clockFace: {
    position: "absolute",
    left: 0,
    top: 0
  },
  clockHourHandle: {
    position: "absolute",
    width: 6,
    // height: 80,
    backgroundColor: "black"
  },
  clockMinitesHandle: {
    position: "absolute",
    width: 4,
    // height: 80,
    backgroundColor: "green"
  },
  clockSecondHandle: {
    position: "absolute",
    width: 2,
    // height: 80,
    backgroundColor: "red"
  },
})