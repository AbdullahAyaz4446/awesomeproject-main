import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { SelectList } from 'react-native-dropdown-select-list';
import { Button } from 'react-native-paper';

const Addroute = ({ route }) => {
  const [Source, setSource] = useState('');
  const [dest, setdest] = useState('');
  const [Busno, setBusno] = useState('');
  const [Dtime, setDtime] = useState('');

  const {Addnew} = route.params; 

  const Destination = [
    { key: '1', value: 'Rawalpindi' },
    { key: '2', value: 'Islamabad' },
    { key: '3', value: 'Multan' },
    { key: '4', value: 'Quetta' }
  ];

  return (
    <View style={{ flex: 1 }}>
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
        />
        <SelectList
          data={Destination}
          setSelected={setdest}
          placeholder="Select Destination"
          search={false}
        />
      </View>

      <View style={{ flexDirection: 'row', padding: 5, justifyContent: 'space-around' }}>
        <Text>Bus Number</Text>
        <Text>Depart Time</Text>
      </View>

      <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'space-around' }}>
        <TextInput
          placeholder="Enter Bus Number"
          value={Busno}
          onChangeText={setBusno}
          style={{ borderWidth: 1, borderRadius: 10, width: '40%' }}
        />
        <TextInput
          placeholder="Enter Depart Time"
          value={Dtime}
          onChangeText={setDtime}
          style={{ borderWidth: 1, borderRadius: 10, width: '40%' }}
        />
      </View>

      <Button
        mode="contained"
        rippleColor="#D1C2E0"
        onPress={() => {
          if (Source === dest) {
            Alert.alert('Source and destination cannot be the same');
            return;
          }
          const newroute = {
            source: Source, 
            destination: dest, 
            busNo: Busno, 
            departTime: Dtime 
          };
          Addnew(newroute); 
          Alert.alert('Successfully Added');
          setSource('');
          setdest('');
          setBusno('');
          setDtime('');
        }}
      >
        ADD
      </Button>
    </View>
  );
};

export default Addroute;

const styles = StyleSheet.create({});
