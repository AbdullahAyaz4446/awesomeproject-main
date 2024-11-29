import { StyleSheet, Text, View,FlatList } from 'react-native'
import React, { useState } from 'react'
import { TextInput, RadioButton, Button } from 'react-native-paper'


const ParkingApp = () => {
    const [num, senum] = useState("");
    const [vehicle, setvehicle] = useState('Bike');
    const[data,setdata]=useState([])

    const Show = ({ item }) => {
        return (
            <View style={styles.routeItem}>
                <Text style={styles.routeText}> {item.value} {item.price}</Text>
                <Button  mode='contained'  style={styles.button}>Park Out</Button>
            </View>
        );
    };


    return (
        <View style={styles.main}>
            <Text style={styles.header}>Car Parking System</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter vehicle number"
                value={num}
                onChangeText={senum}
            />
            <View style={styles.row}>
                <View style={styles.radioGroup}>
                <RadioButton onPress={() => setGender('Bike')} status={vehicle === 'Bike' ? 'checked' : 'unchecked'} />
                <Text>Bike</Text>
                <RadioButton onPress={() => setGender('Car')} status={vehicle === 'Car' ? 'checked' : 'unchecked'} />
                <Text>Car</Text>
                    
                </View>
                <Button style={[styles.button,{backgroundColor:'white'}]}>Park In</Button>
            </View>
            <View style={styles.row}>
               
                <Button  mode='contained'  style={styles.button}>ALL</Button>
                <Button mode='contained'   style={styles.button}>Bike</Button>
                <Button mode='contained'  style={styles.button}>Cars</Button>
                <Button  mode='contained'   style={styles.button}>Parking out</Button>
            </View>
            <View style={styles.row}>
               
         <Text>Total  Parking In:2</Text>
         <Text>Total  Earning:1</Text>
           </View>
           <FlatList
           data={data}
           renderItem={Show}
           
           />
           
        </View>
    )
}

export default ParkingApp

const styles = StyleSheet.create({
    main: {
        flex: 1,
        padding: 10,
    },
    header: {
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: 'purple',
        color: '#fff',
        padding: 20,
        marginBottom: 10,
    },
    input: {
        margin: 10,
        backgroundColor: '#fff',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', 
        marginVertical: 5,
    },
    radioGroup: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        alignSelf: 'flex-end', 
        backgroundColor: "gray"
  
    },
    routeItem: {
        margin: 10,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#f9f9f9',
        flexDirection:'row',
        justifyContent:'space-between'
    }
});
