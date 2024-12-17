import { Pressable, StyleSheet, Text, TouchableOpacity, View, FlatList ,Alert} from 'react-native';
import React, { useState, useEffect } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { openDatabase } from 'react-native-sqlite-storage';

const db = openDatabase({ name: 'NotepadDb.db' });

const Homescreen = ({ route }) => {
  const nav = useNavigation();
  const [data, setData] = useState([]);

  const { id } = route.params;

  const createTable = () => {
    db.transaction((txn) => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS Notepad (
          id INTEGER PRIMARY KEY, 
          title TEXT,                           
          description TEXT,                    
          person_id INTEGER,                   
          FOREIGN KEY (person_id) REFERENCES Person(ID) ON DELETE CASCADE
        );`,
        [],
        (txn, res) => console.log('Table Successfully opened'),
        (error) => console.log('Error creating table: ' + error.message)
      );
    });
  };

  const getAllData = () => {
    db.transaction((txn) => {
      txn.executeSql(
        `SELECT * FROM Notepad WHERE person_id = ?`,
        [id],
        (txn, res) => {
          const tempArr = [];
          for (let i = 0; i < res.rows.length; i++) {
            const p = res.rows.item(i);
            tempArr.push(p);
          }
          setData([...tempArr]);

        },
        (error) => console.log('Error Getting all data: ' + error.message)
      );
    });
  };


  useEffect(() => {
    getAllData();
    
  }, [data]);
  const deleteItem = (id) => {
    db.transaction((txn) => {
      txn.executeSql(
        'DELETE FROM Notepad WHERE id = ?',
        [id],
        (txn, res) => {
          console.log('Item deleted');
          setData((prevData) => prevData.filter(item => item.id !== id)); 
        },
        (error) => console.log('Error deleting data: ' + error.message)
      );
    });
  };
  const handleLongPress = (id) => {
    Alert.alert(
      'Delete Note',
      'Are you sure you want to delete this note?',
      [
        { text: 'Cancel'},
        { text: 'Delete', onPress: () => deleteItem(id) },
      ]
    );
  };

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => nav.goBack()}>
          <Ionicons name="arrow-back-circle" size={50} color="#fff" style={styles.icon} />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, color: 'white' }}>Notes</Text>
        <TouchableOpacity onPress={() => nav.navigate('Notepad', { id: id })}>
          <AntDesign name="plus" size={30} color="#fff" style={styles.icon} />
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
        {/* <View style={styles.radioconatiner}>
          <View style={styles.row}>
            <RadioButton
              
            />
            <Text style={{ fontSize: 20, color: 'white' }}>Pdf</Text>
          </View>
          <View style={styles.row}>
            <RadioButton
           
            />
            <Text style={{ fontSize: 20, color: 'white' }}>Text</Text>
          </View>
          <View style={styles.row}>
            <RadioButton
          
            />
            <Text style={{ fontSize: 20, color: 'white' }}>Ppt</Text>
          </View>
        </View> */}

        <View style={styles.notesbody}>
          {data.length === 0 ? (
            <Text style={{ fontSize: 20, color: 'white', textAlign: 'center' }}>No Notes Yet</Text>
          ) : (
            <FlatList
              data={data}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View style={styles.noteItem}>
                  <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => nav.navigate('Eidit', { id: item.id })}  onLongPress={() => handleLongPress(item.id)}>
                      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                      <AntDesign name="filetext1" size={40} color="#fff" style={styles.icon} />
                        <Text style={styles.noteTitle}>{item.title}</Text>

                      </View>
                    </TouchableOpacity>
                  </View>

                </View>
              )}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default Homescreen;

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
  notesbody: {
    flex: 1,
    marginTop: 20,
  },
  noteItem: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  noteTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  noteDescription: {
    fontSize: 16,
    color: '#ccc',
  },
});
