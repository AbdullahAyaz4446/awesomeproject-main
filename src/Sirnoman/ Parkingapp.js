import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState } from 'react'
import { TextInput, RadioButton, Button } from 'react-native-paper'

const ParkingApp = () => {
    const [num, senum] = useState("");
    const [vehicle, setvehicle] = useState('Bike');
    const [data, setdata] = useState([]);
    const [filterdata, setfilterdata] = useState([]);
    const [count, setcount] = useState(0);
    const [earning, setearning] = useState(0);
    const [arkout, setparkout] = useState([]);
  
    const Show = ({ item }) => {
        return (
            <View style={styles.routeItem} > 
                <Text style={{color:'Black'}}> {item.number} {item.type}</Text>
                {data.includes(item) && (
                    <Button mode='contained' onPress={() => parkout(item.number)} style={styles.button}>
                        Park Out
                    </Button>
                )}
            </View>
        );
    };

    const addvichles = () => {
        const newdata = { 'number': num, 'type': vehicle };
        setdata([...data, newdata]);
        setfilterdata([...data, newdata]);
        setcount(count + 1);
        senum("");
    };

    const showall = () => {
        setfilterdata(data);
    };

    const showbikes = () => {
        const fil = data.filter(item => item.type === "Bike");
        setfilterdata(fil);
    };

    const showcar = () => {
        const fil = data.filter(item => item.type === "Car");
        setfilterdata(fil);
    };

   
    const parkout = (num) => {
     
        const parkoutdata = data.filter(item => item.number != num);
        setdata(parkoutdata);
        setfilterdata(parkoutdata);

 
        const park = data.find(item => item.number == num); 

        
        if (park) {
            setparkout([...arkout, park]);  
        }

        setcount(count - 1);
        setearning(earning + 10);
    };

    const show = () => {
        setfilterdata(arkout); 
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
                    <RadioButton
                        onPress={() => setvehicle('Bike')}
                        status={vehicle === 'Bike' ? 'checked' : 'unchecked'}
                    />
                    <Text>Bike</Text>
                    <RadioButton
                        onPress={() => setvehicle('Car')}
                        status={vehicle === 'Car' ? 'checked' : 'unchecked'}
                    />
                    <Text>Car</Text>
                </View>
                <Button style={[styles.button, { backgroundColor: 'white' }]} onPress={addvichles}>
                    Park In
                </Button>
            </View>
            <View style={styles.row}>
                <Button mode='contained' onPress={showall} style={styles.button}>ALL</Button>
                <Button mode='contained' onPress={showbikes} style={styles.button}>Bike</Button>
                <Button mode='contained' onPress={showcar} style={styles.button}>Cars</Button>
                <Button mode='contained' onPress={show} style={styles.button}>Parking out</Button>
            </View>
            <View style={styles.row}>
                <Text>Total Parking In: {count}</Text>
                <Text>Total Earning: {earning}</Text>
            </View>
            <FlatList
                data={filterdata}
                renderItem={Show}
            />
        </View>
    );
}

export default ParkingApp;

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
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});
