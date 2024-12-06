import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Checkbox, RadioButton } from 'react-native-paper';

const Social = () => {
    return (
        <View style={styles.main}>
            <View style={styles.header}>
                <Text style={styles.headertext}>Social App</Text>
            </View>
            <View style={styles.body}>
                <Text>Regristration</Text>
                <View style={styles.inputContainer}>
                    <Ionicons name="person" size={20} style={styles.icon} />
                    <TextInput
                        placeholder="Name"
                        style={styles.input}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Ionicons name="mail-sharp" size={20} style={styles.icon} />
                    <TextInput
                        placeholder="Email"
                        style={styles.input}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <MaterialIcons name="password" size={20} style={styles.icon} />
                    <TextInput
                        placeholder="Password"
                        style={styles.input}
                    />
                </View>
                <View style={styles.radiobuttonconatiner}>
                    <View style={styles.radioview} >
                        <RadioButton /><Text>Male</Text>
                    </View>
                    <View style={styles.radioview} >
                        <RadioButton /><Text>Female</Text>
                    </View>
                </View>
                <View style={{ marginBottom: 10 }}>
                    <Text>Country</Text>
                    <TextInput placeholder='Enter Country' style={{ width: '50%', borderWidth: 1, borderRadius: 10 }} />
                </View>
                <View>
                    <Text>Your Interest</Text>
                    <View style={{ marginVertical: 10, justifyContent: 'flex-start', flexDirection: 'row' }}>
                        <View style={styles.radioview} >
                            <Checkbox /><Text>News</Text>
                        </View>
                        <View style={styles.radioview} >
                            <Checkbox /><Text>Sports</Text>
                        </View>
                        <View style={styles.radioview} >
                            <Checkbox /><Text>Politics</Text>
                        </View>
                    </View>
                    <View style={{ marginVertical: 10, justifyContent: 'flex-start', flexDirection: 'row' }}>
                        <View style={styles.radioview} >
                            <Checkbox /><Text>Cricket</Text>
                        </View>
                        <View style={styles.radioview} >
                            <Checkbox /><Text>Hockey</Text>
                        </View>
                        <View style={styles.radioview} >
                            <Checkbox /><Text>Football</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.button}>
                <Button title='Submit'   />
                </View>
             

            </View>



        </View>
    )
}

export default Social

const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    header: {
        backgroundColor: 'black',
        padding: 10
    },
    headertext: {
        color: 'white',
        fontSize: 20
    }, body: {
        margin: 10
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: '100%',
        marginVertical: 5
    },
    input: {
        flex: 1,
        fontSize: 16,
    },
    radiobuttonconatiner: {
        flexDirection: 'row'
    },
    radioview: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    button:{
        width:'50%'
    }
})