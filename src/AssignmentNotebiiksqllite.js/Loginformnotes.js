import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import SignUpnotepad from './Signupformnotes';
import { openDatabase } from 'react-native-sqlite-storage';

const db = openDatabase({ name: 'NotepadDb.db' });
const LoginFormnotepad = () => {

    const nav = useNavigation();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [color, setColor] = useState('');
  
    const Serachdata = () => {
        if (!name || !password) {
          setMessage('All fields are required');
          setColor('red');
          return;
        }
      
        db.transaction((txn) => {
          txn.executeSql(
            `SELECT * FROM Person WHERE Name = ? AND Password = ?`,
            [name, password],
            (txn, res) => {
              if (res.rows.length > 0) {
                console.log(res.rows.item(0))
                const dbId=(res.rows.item(0).ID);
                const dbname=(res.rows.item(0).Name);
            
                console.log(name)
                console.log(dbId)
              
                if (name == dbname) {
                  setName('');
                  setPassword('');
                  nav.navigate('Home', { id: dbId });  
                } else {
                  setMessage('Please sign up, no data found');
                  setColor('red');
                }
              } else {
                setMessage('No data found');
                setColor('red');
              }
            },
            (error) => console.log('Error searching data: ' + error.message)
          );
        });
      };
      

    return (
        <View style={styles.main}>
            {/* <Image source={require('/Users/macbookpro/awesomeproject/Content/images/undraw_Login_re_4vu2-2-removebg-preview.png')} style={styles.logo} /> */}

            <LottieView source={require('../animation/Animation - 1730560043027.json')} autoPlay loop style={styles.logo} />
            <Text style={styles.text}>Login 🔓</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.inputContainer}>
                    <Text style={{ textAlign: 'left', fontWeight: 'bold' }}>Enter name</Text>
                    <TextInput
                        placeholder="name"
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
                    <Text style={{ color: color, textAlign: 'right' }}>{message}</Text>
                </View>

                <TouchableOpacity onPress={Serachdata} style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>nav.navigate('Signup')} style={styles.button}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
                 
            </ScrollView>

        </View>

    );
};

export default LoginFormnotepad;

const styles = StyleSheet.create({
    main: {
        flex: 1,
       
        alignItems: 'center',
        backgroundColor: 'white',
        paddingTop: 20,
        paddingHorizontal: 20


    },
    text: {
        fontSize: 30,
        marginVertical: 10,
        fontWeight: 'bold',

    },
    inputContainer: {
        width: "100%",
        marginBottom: 15,

    },
    input: {
        width: '100%',
        height: 50,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 5,
        backgroundColor: '#fff',
        fontSize: 16,
    },
    button: {
        width: "100%",
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
        fontFamily: 'Arial'
    },
    logo: {
        width: 300,
        height: 280,
    },

});