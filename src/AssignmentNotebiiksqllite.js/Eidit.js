import { Pressable, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { openDatabase } from 'react-native-sqlite-storage';

// Open database connection
const db = openDatabase({ name: 'NotepadDb.db' });

const Eidit = ({ route }) => {
  const nav = useNavigation();
  const { id } = route.params;
  const [tittle, settittle] = useState('');
  const [desc, setdesc] = useState('');

  // Fetch the existing data from Notepad table based on the provided id
  useEffect(() => {
    db.transaction((txn) => {
      txn.executeSql(
        'SELECT * FROM Notepad WHERE id = ?',
        [id],
        (txn, res) => {
          if (res.rows.length > 0) {
            const item = res.rows.item(0);
            settittle(item.title); // Set title to the TextInput
            setdesc(item.description); // Set description to the TextInput
          }
        },
        (error) => console.log('Error fetching data: ' + error.message)
      );
    });
  }, [id]);

  // Update data in the database
  const updateData = () => {
    if (!tittle || !desc) {
      console.log('All fields are required');
      return;
    }

    db.transaction((txn) => {
      txn.executeSql(
        'UPDATE Notepad SET title = ?, description = ? WHERE id = ?',
        [tittle, desc, id],
        (txn, res) => {
          console.log('Data updated successfully');
          nav.goBack(); // Go back to previous screen after update
        },
        (error) => console.log('Error updating data: ' + error.message)
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
        <Pressable onPress={updateData}>
          <Text style={{ fontSize: 15, color: 'white' }}>Edit</Text>
        </Pressable>
      </View>

      <View style={styles.body}>
        <TextInput
          placeholder="Enter Title"
          value={tittle}
          onChangeText={settittle}
          style={{ color: 'white', marginVertical: 10, borderColor: 'white', fontSize: 20 }}
          placeholderTextColor="gray"
        />
        <Text style={{ fontSize: 15, color: 'white' }}>___________________________________________________</Text>

        <TextInput
          placeholder="Write Here"
          value={desc}
          onChangeText={setdesc}
          style={{ color: 'white', marginVertical: 10, borderColor: 'white', fontSize: 20 }}
          multiline={true}
          placeholderTextColor="gray"
        />
      </View>
    </View>
  );
};

export default Eidit;

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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  radioconatiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
