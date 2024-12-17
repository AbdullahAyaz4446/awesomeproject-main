import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RadioButton } from 'react-native-paper';
import { SelectList } from 'react-native-dropdown-select-list';
import { openDatabase } from 'react-native-sqlite-storage';

const db = openDatabase({ name: 'NotepadDb.db' });

const SignUpnotepad = () => {
  const navigation = useNavigation();
  const [id, setId] = useState(0);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [gender, setGender] = useState('');
  const [city, setCity] = useState('');
  const [message, setMessage] = useState('');
  const [color, setColor] = useState('');




  const createTable = () => {
    db.transaction((txn) => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS Person (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            Name TEXT NOT NULL UNIQUE,
            Password TEXT NOT NULL,
            Gender TEXT NOT NULL,
            City TEXT NOT NULL
          )`,
        [],
        (txn, res) => console.log('Person table created successfully with unique Name'),
        (error) => console.log('Error creating Person table: ' + error.message)
      );
    });
  };



  const insertData = () => {
    if (!name || !password || !cpassword || !gender || !city) {
      setMessage('All fields are required');
      setColor('red');
      return;
    }

    if (password !== cpassword) {
      setMessage('Passwords do not match');
      setColor('red');
      return;
    }

    db.transaction((txn) => {
      txn.executeSql(
        'INSERT INTO Person (Name, Password, Gender, City) VALUES (?, ?, ?, ?)',
        [name, password, gender, city],
        (txn, res) => {
          console.log('Data inserted successfully');
          console.log(name, password, gender, city)
          navigation.navigate('Login')
        },
        (error) => {
          console.log('Error inserting data: ' + error.message);
          setMessage('Failed to sign up');
          setColor('red');
        }
      );
    });
  };

  useEffect(() => {
    createTable();
  }, []);

  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: 'absolute', top: 20, left: 20 }}>
        <Ionicons name="arrow-back-circle" size={45} />
      </TouchableOpacity>


      <LottieView
        source={require('../animation/Animation - 1730561905049.json')}
        autoPlay
        loop
        style={styles.logo}
      />

      {/* Sign Up Title */}
      <Text style={styles.text}>Sign Up 🔏</Text>


      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ width: '100%' }}>
        <View style={styles.inputContainer}>
          <Text style={{ textAlign: 'left', fontWeight: 'bold' }}>Enter name</Text>
          <TextInput
            placeholder="Name"
            value={name}
            onChangeText={setName}
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={{ textAlign: 'left', fontWeight: 'bold' }}>Enter Password</Text>
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={{ textAlign: 'left', fontWeight: 'bold' }}>Enter Confirm Password</Text>
          <TextInput
            placeholder="Confirm Password"
            value={cpassword}
            onChangeText={setCpassword}
            secureTextEntry
            style={styles.input}
          />
        </View>


        <View style={styles.row}>
          <RadioButton
            value="Male"
            status={gender === 'Male' ? 'checked' : 'unchecked'}
            onPress={() => setGender('Male')}
          />
          <Text>Male</Text>
          <RadioButton
            value="Female"
            status={gender === 'Female' ? 'checked' : 'unchecked'}
            onPress={() => setGender('Female')}
          />
          <Text>Female</Text>
        </View>


        <View style={styles.inputContainer}>
          <Text style={{ textAlign: 'left', fontWeight: 'bold' }}>Enter City</Text>
          <TextInput
            placeholder="City"
            value={city}
            onChangeText={setCity}
            style={styles.input}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={insertData}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        {message ? (
          <Text style={{ color: color, marginTop: 20 }}>{message}</Text>
        ) : null}
      </ScrollView>
    </View>
  );
};

export default SignUpnotepad;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 30,
    padding: 30,
    fontWeight: 'bold',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 5,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  button: {
    height: 60,
    borderRadius: 8,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  logo: {
    width: 200,
    height: 150,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
});
