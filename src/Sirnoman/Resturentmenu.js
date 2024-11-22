import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SelectList } from 'react-native-dropdown-select-list';

const Resturentmenu = () => {
    const [Source, setSource] = useState('');
    const [dest, setDest] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [show, setShow] = useState(false);
    const Foods = [
        
        { key: '1', value: 'Bayani', price: '1000' },
        { key: '2', value: 'pizza', price: '2000' },
        { key: '3', value: 'shavrmna', price: '3000' },
        { key: '4', value: 'Quetta cafe', price: '2500' }
    ];
    const price = [
        {
            key: '1', value: '1000'
        },
        {
            key: '2', value: '2000'
        },
        {
            key: '3', value: '3000'
        }


    ]


    const findRoutes = () => {
        console.log('filter Data\t' + Source)
        // const filtered =  Foods.filter(item=>item.value==Source)
        // console.log(filtered)
        // setFilteredData(filtered)
        // console.log('find route calling')
        if (Source&&dest) {
            console.log(Source)
            const filtered = Foods.filter(
                (item) => item.value === Source&&item.price===dest
            );
            console.log(filtered);
            setFilteredData([...filtered]);
            setShow(true);
        } else {
            setShow(false);
        }
    };

    const Show = ({ item }) => {
        return (
            <View style={styles.routeItem}>
                <Text style={styles.routeText}> {item.value} {item.price}</Text>
            </View>
        );
    };



    return (
        <View style={{ flex: 1, padding: 10 }}>
            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'space-around' }}>
                <Text>Select Category</Text>
                <Text>Select Price range</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <SelectList
                    data={Foods}
                    setSelected={setSource}
                    placeholder="Select category"
                    search={false}
                    onSelect={findRoutes}
                    save='value'
                />
                <SelectList
                    data={price}
                    setSelected={setDest}
                    placeholder="Select Price"
                    search={false}
                    save="value"
                    onSelect={findRoutes}
                />
            </View>

            {show && (
                <FlatList
                    data={filteredData}
                    renderItem={Show}
                />
            )}
        </View>
    )
}

export default Resturentmenu

const styles = StyleSheet.create({
    routeItem: {
        margin: 10,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#f9f9f9',
    },
    routeText: {
        fontSize: 16,
    },
});
