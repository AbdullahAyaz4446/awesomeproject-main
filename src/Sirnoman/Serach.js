import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SelectList } from 'react-native-dropdown-select-list';
import { useNavigation } from '@react-navigation/native';
import Ticket from './Ticket';
import Stations from './Stations';

const Serach = ({ route }) => {
  const { Data } = route.params;
  const [Source, setSource] = useState('');
  const [dest, setDest] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [show, setShow] = useState(false);
const navigation=useNavigation();
  const Destination = [
    { key: '1', value: 'Rawalpindi' },
    { key: '2', value: 'Islamabad' },
    { key: '3', value: 'Multan' },
    { key: '4', value: 'Quetta' },
  ];



 
  const findRoutes = () => {
    if (Source && dest) {
      const filtered = Data.filter(
        (item) => item.source === Source && item.destination === dest
      );
      console.log(filtered);
      setFilteredData(filtered);
      setShow(true);
    } else {
      setShow(false);
    }
  };

 
  const Show = ({ item }) => {
    return (
      <View style={styles.routeItem}>
      <TouchableOpacity onPress={()=>navigation.navigate(Stations)}>
        <Text style={styles.routeText}>Bus No: {item.busNo}</Text>
        <Text style={styles.routeText}>Departure Time: {item.departTime}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'space-around' }}>
        <Text>Source</Text>
        <Text>Destination</Text>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <SelectList
          data={Destination}
          setSelected={setSource}
          placeholder="Select Source"
          search={false}
          onSelect={findRoutes} 
        />
        <SelectList
          data={Destination}
          setSelected={setDest}
          placeholder="Select Destination"
          search={false}
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
  );
};

export default Serach;

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
