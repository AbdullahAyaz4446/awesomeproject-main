import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Allcontact = () => {
    return (
        <View style={styles.main}>
            <View>
                <Text>All Contacts</Text>
            </View>
        </View>
    )
}

export default Allcontact

const styles = StyleSheet.create({
    main: {
        flex: 1
    }
})