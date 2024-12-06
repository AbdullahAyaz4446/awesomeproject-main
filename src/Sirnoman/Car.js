import { Button, StyleSheet, Text, TextInput, View, FlatList } from 'react-native';
import React, { useState } from 'react';

const Car = () => {
    const [startAmount, setStartAmount] = useState('');
    const [endAmount, setEndAmount] = useState('');
    const [filteredData, setFilteredData] = useState(data);

    const data = [
        { company: "Toyota", series: "Corolla", model: "2023", price: 3000000, mileage: "16 km/l" },
        { company: "Honda", series: "Civic", model: "2023", price: 4500000, mileage: "15 km/l" },
        { company: "Suzuki", series: "Swift", model: "2022", price: 2800000, mileage: "18 km/l" },
        { company: "Hyundai", series: "Elantra", model: "2023", price: 4000000, mileage: "14 km/l" },
        { company: "Kia", series: "Sportage", model: "2023", price: 6500000, mileage: "12 km/l" },
        { company: "Toyota", series: "Fortuner", model: "2023", price: 11000000, mileage: "10 km/l" },
        { company: "MG", series: "HS", model: "2023", price: 5500000, mileage: "14 km/l" },
        { company: "Nissan", series: "Sunny", model: "2021", price: 3200000, mileage: "17 km/l" },
        { company: "BMW", series: "X1", model: "2023", price: 15000000, mileage: "11 km/l" },
        { company: "Mercedes", series: "C-Class", model: "2023", price: 20000000, mileage: "10 km/l" },
    ];

    const handleSearch = () => {
        const start = parseInt(startAmount) || 0;
        const end = parseInt(endAmount) || Number.MAX_VALUE;

        const filtered = data.filter(item => item.price >= start && item.price <= end);
        setFilteredData(filtered);
        
    };

    const renderCarItem = ({ item }) => (
        <View style={styles.carItem}>
            <Text>{item.company} {item.series} ({item.model})</Text>
            <Text>Price: {item.price} PKR</Text>
            <Text>Mileage: {item.mileage}</Text>
        </View>
    );

    return (
        <View style={styles.main}>
            <View style={styles.header}>
                <Text style={styles.headertext}>Car Shop</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.text}>Provide Amount Range</Text>
                <View style={styles.inputContainer}>
                    <View style={styles.textInput}>
                        <Text style={{ fontSize: 15 }}>Start</Text>
                        <TextInput
                            style={styles.textInputStyle}
                            placeholder="Start Amount"
                            keyboardType="numeric"
                            value={startAmount}
                            onChangeText={setStartAmount}
                        />
                    </View>
                    <View style={styles.textInput}>
                        <Text style={{ fontSize: 15 }}>End</Text>
                        <TextInput
                            style={styles.textInputStyle}
                            placeholder="End Amount"
                            keyboardType="numeric"
                            value={endAmount}
                            onChangeText={setEndAmount}
                        />
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <Button title="Search" onPress={handleSearch} />
                </View>
                <FlatList
                    data={filteredData}
                    renderItem={renderCarItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </View>
    );
};

export default Car;

const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    header: {
        padding: 20,
        backgroundColor: 'black'
    },
    headertext: {
        fontSize: 20,
        color: 'white'
    },
    body: {
        margin: 10
    },
    text: {
        fontSize: 20
    },
    inputContainer: {
        flexDirection: 'row',
        marginVertical: 10
    },
    textInput: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        paddingHorizontal: 10
    },
    textInputStyle: {
        borderRadius: 10,
        borderWidth: 1,
        flex: 1,
        marginLeft: 10,
        paddingHorizontal: 8
    },
    buttonContainer: {
        marginVertical: 10,
        width: '50%'
    },
    carItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ddd'
    }
});
