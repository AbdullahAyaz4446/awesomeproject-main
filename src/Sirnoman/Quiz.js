import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import React, { useState } from 'react'
import { Button, RadioButton } from 'react-native-paper'


const Quiz = () => {
    const data = [{
        question: 'What is React Native',
        options: ['A backend framework for Node.js', 'A library for building web applications', 
        'A framework for building mobile apps using JavaScript and React', 'A design tool for creating user interfaces'],
        anser: 'A framework for building mobile apps using JavaScript and React'
    },
    {
        question: 'Which command is used to create a new React Native project',
        options: ['react-native create-app', 'npm create react-app','npx react-native init','npx react-native create'],
        anser: 'npx react-native init'
    },
    {
        question: 'Which component is used to create scrollable content in React Native',
        options: [' <FlatList />', '<ScrollView />','<View />',' <Text />'],
        anser: '<ScrollView />'
    },
    {
        question: 'Which component is used to display text in React Native',
        options: [' <TextInput />', '<Paragraph />','<Text />','<Label />'],
        anser: '<Text />'
    },
    {
        question: 'Which component is used for handling user input in React Native',
        options: ['<Text />', '<TextInput />','<View />','<Button />'],
        anser: '<TextInput />'
    }
    ]
    const [index, setindex] = useState(0);
    const currentquestion = data[index];
    const [chek, setchk] = useState('');
    const [number, setnumber] = useState(0);
    const [right, setright] = useState(0);
    const [wrong, setwrong] = useState(0);
    const totalQuestions = data.length;
    const [showres, setshowres] = useState(false)
    const Showradio = (title, id) => {
        return (
            <View key={id} style={{ flexDirection: 'row', alignItems: 'center' }}>

                <RadioButton status={chek == title ? 'checked' : 'unchecked'} onPress={() => setchk(title)} />

                <Text style={{fontWeight:'bold'}}>{title}</Text>
            </View>
        );
    }
    return (
        <View style={{flex:1}}>
             
            <View style={styles.header}>
                <Text style={styles.headertext}>Quiz</Text>
            </View>
            <ScrollView>
            <View style={{padding: 10}}>
                <View style={styles.questionview}>
                    <Text style={{ fontWeight: 'bold', fontSize: 30, }}>Question:{currentquestion.question}=?</Text>
                </View>
                <View style={[styles.optionview, {
                    backgroundColor: '#89CFF0', padding: 10,
                    marginVertical: 10
                }]}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Options:</Text>
                    {
                        currentquestion.options.map((val, id) => Showradio(val, id))
                    }
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Button mode='contained' rippleColor='#D1C2E0' style={{ width: '90%' }} labelStyle={{ color: 'yellow' }} onPress={() => {
                        if (chek == currentquestion.anser) {
                            setnumber(number + 10);
                            setright(right + 1);
                        }
                        setwrong(wrong + 1);
                        setindex(index + 1);
                        setchk('');
                    }}  >Next Question</Button>
                </View>
                <View style={{ alignItems: 'center', marginVertical: 10 }}>
                    <Button mode='contained' rippleColor='#D1C2E0' style={{ width: '90%' }} onPress={() => {
                        setshowres(!showres);
                    }}  >Finish</Button>
                </View>
               

                {showres && (
                    <View style={{ backgroundColor: '#AEE8A7', padding: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Summary</Text>
                        <Text style={{ fontSize: 15 }}>Total Questions: {totalQuestions}</Text>
                        <Text style={{ fontSize: 15 }}>Total Correct Answers: {right}</Text>
                        <Text style={{ fontSize: 15 }}>Total Score: {number}</Text>
                    </View>
                )}
               



            </View>
            </ScrollView>
        </View>
    )
}

export default Quiz

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'orange',
        padding: 15
    },
    headertext: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    questionview: {
        backgroundColor: '#D3D3D3', padding: 10
    }
})