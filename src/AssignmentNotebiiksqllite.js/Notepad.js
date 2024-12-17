import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { openDatabase } from 'react-native-sqlite-storage';

const db = openDatabase({ name: 'NotepadDb.db' });

const Notepad = ({route}) => {
  const nav = useNavigation();
  const [title, setTitle] = useState(''); 
  const [description, setDescription] = useState(''); 
  const { id } = route.params;

 
  const insertData = () => {
   
      db.transaction((txn) => {
        txn.executeSql(
          `INSERT INTO Notepad (title, description,person_id) VALUES (?, ?,?)`,
          [title, description,id],
          (txn, res) => {
            if (res.rowsAffected > 0) {
              console.log('Data inserted successfully');
              nav.goBack(); 
            } else {
              console.log('Failed to insert data');
            }
          },
          (error) => {
            console.log('Error inserting data: ' + error.message);
          }
        );
      });
    
  };

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => nav.goBack()}>
          <Ionicons name="arrow-back-circle" size={50} color="#fff" style={styles.icon} />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, color: 'white' }}>Note Pad</Text>
        <Pressable onPress={insertData}>
          <Text style={{ fontSize: 15, color: 'white' }}>Save</Text>
        </Pressable>
      </View>

      <View style={styles.body}>
        <TextInput
          placeholder="Enter Title"
          style={{ color: 'white', marginVertical: 10, borderColor: 'white', fontSize: 20 }}
          placeholderTextColor="gray"
          value={title}
          onChangeText={setTitle} 
        />
        <Text style={{ fontSize: 15, color: 'white' }}>___________________________________________________</Text>
        
        <TextInput
          placeholder="Write Here"
          style={{ color: 'white', marginVertical: 10, borderColor: 'white', fontSize: 20 }}
          multiline={true}
          placeholderTextColor="gray"
          value={description}
          onChangeText={setDescription} 
        />
      </View>
    </View>
  );
};

export default Notepad;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'green',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: 'green',
    justifyContent: 'space-between',
  },
  icon: {
    marginHorizontal: 5,
  },
  body: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  bodyText: {
    fontSize: 18,
    color: '#fff',
  },
});
