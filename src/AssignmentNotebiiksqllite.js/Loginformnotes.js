import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import SignUpnotepad from './Signupformnotes';


const LoginFormnotepad = () => {
    const nav = useNavigation();
    const [id, setid] = useState('');
    const [name, setName] = useState('');
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setcpassword] = useState('')
    const [gender, setgender] = useState('');
    const [active, setactive] = useState('');
    const [materital, setmaterital] = useState('');
    const [graduated, setGraduated] = useState('');
    const [data, setdata] = useState([]);
    const [message, setMessage] = useState("");
    const [color, setColor] = useState("");
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

                <TouchableOpacity onPress={()=>nav.navigate('Home')} style={styles.button}>
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