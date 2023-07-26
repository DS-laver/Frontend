import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";

export default function AddEatMedicine() {

    var today = new Date();
    var todayMonth = today.getMonth()+1 < 10 ? `0${today.getMonth()+1}` : today.getMonth()+1;
    var todyaDate = today.getDate();

    return (
        <View style={styles.timeContainer}>
            <View style={styles.todayDateContainer}>
                <Text style={styles.todayString}>Today | </Text>
                <Text style={styles.todayDate}>{`${todayMonth}월 ${todyaDate}일`}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      // flex: 1,
        alignSelf: "stretch",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#FFF3F1',
    },
    
    timeContainer: {
        marginTop: 40,
        // flex: 1,
        // alignSelf: "stretch",
        alignItems: "center",
        justifyContent: "center"
    }, 
    todayDateContainer: {
        marginBottom: 20,
        // flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    todayString: {
        fontSize: 20,
        fontFamily: 'SCDream6',
        color: '#000000'
    },
    todayDate: {
        fontSize: 30,
        fontFamily: 'SCDream6',
        color: '#000000'
    },
  
});