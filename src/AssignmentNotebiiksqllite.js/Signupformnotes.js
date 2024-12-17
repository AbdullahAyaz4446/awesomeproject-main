import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RadioButton } from 'react-native-paper';
import { SelectList } from 'react-native-dropdown-select-list';
const SignUpnotepad = () => {
  const navigation = useNavigation();

  const [id, setid] = useState('');
  const [name, setName] = useState('');
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setcpassword] = useState('');
  const [message, setMessage] = useState('');
  const [color, setColor] = useState('');

  return (
    <View style={styles.main}>
    
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: 'absolute', top: 20, left: 20 }}>
    <Ionicons name="arrow-back-circle" size={45} />
</TouchableOpacity>


      {/* Lottie Animation */}
      <LottieView
        source={require('../animation/Animation - 1730561905049.json')}
        autoPlay
        loop
        style={styles.logo}
      />

      {/* Sign Up Title */}
      <Text style={styles.text}>Sign Up 🔏</Text>

      {/* Form */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ width: '100%' }}>
        {/* <View style={styles.inputContainer}>
          <Text style={{ textAlign: 'left', fontWeight: 'bold' }}>Enter ID</Text>
          <TextInput
            placeholder="ID"
            value={id}
            onChangeText={setid}
            style={styles.input}
          />
        </View> */}

        <View style={styles.inputContainer}>
          <Text style={{ textAlign: 'left', fontWeight: 'bold' }}>Enter name</Text>
          <TextInput
            placeholder="Name"
            value={name}
            onChangeText={setName}
            style={styles.input}
          />
        </View>

        {/* <View style={styles.inputContainer}>
          <Text style={{ textAlign: 'left', fontWeight: 'bold' }}>Enter Email</Text>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setemail}
            style={styles.input}
          />
        </View> */}

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
            onChangeText={setcpassword}
            secureTextEntry
            style={styles.input}
          />
        </View>
        <View style={styles.row}>
                <RadioButton />
                <Text>Male</Text>
                <RadioButton  />
                <Text>Female</Text>
            </View>
            <SelectList/>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default SignUpnotepad;

const styles = StyleSheet.create({
    main: {
      flex: 1,
      // justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      paddingHorizontal: 20
    
    },
    text: {
      fontSize: 30,
      padding: 30,
      fontWeight: 'bold',
     
    },
    inputContainer: {
      width: "100%",
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
      fontFamily: 'Arial'
    },
    logo: {
      width: 200,
      height: 150,
    },
    buttonlogo: {
      width: "100%",
      height: 60,
      borderRadius: 8,
      backgroundColor: '#F0F0F0',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    }
  });