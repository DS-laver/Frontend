import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import AddMoreMedicine from './AddMoreMedicine'

export default function EmptyPill({navigation}) {

    return (
        <TouchableOpacity
            onPress={() => { <AddMoreMedicine />}}
        >
            <View style={styles.eatMedicineContainer}>
                <Image
                    style={styles.pillImage}
                    source={require('../assets/HealthCareIcon/EmptyPill.png')}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    eatMedicineContainer: {

    }, 
    pillImage: {
        width: 30,
        height: 30,
    }
})