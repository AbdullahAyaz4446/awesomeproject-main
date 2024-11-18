import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Homeform = () => {
  const navigation = useNavigation();
  const [Addroute, setAddroute] = useState([]); 

  const Addnew = (newroute) => {
    setAddroute([...Addroute, newroute]); 
    console.log('New route added:', newroute);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <Button
          mode="contained"
          rippleColor="#D1C2E0"
          style={{ marginBottom: 20 }}
          onPress={() => navigation.navigate('Addroute', {Addnew})} 
        >
          New Route
        </Button>
        <Button
          mode="contained"
          rippleColor="#D1C2E0"
          style={{ marginBottom: 20 }}
          onPress={() => navigation.navigate('Serach',{Data:Addroute})}
        >
          Search
        </Button>
      </View>
    </View>
  );
};

export default Homeform;

const styles = StyleSheet.create({});
