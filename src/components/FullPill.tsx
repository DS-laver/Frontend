import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function FullPill() {

    return (
        <TouchableOpacity>
            <View style={styles.eatMedicineContainer}>
                <Image
                    style={styles.pillImage}
                    source={require('../assets/HealthCareIcon/FullPill.png')}
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