import { StyleSheet, Text, TextInput, View ,Button,Alert} from 'react-native'
import React, { useState } from 'react'
import { RadioButton } from 'react-native-paper';

const Billcalcultor = () => {
    const [unit, setunit] = useState();
    const [payable,setpayable]=useState("______");
 const [radio,setradio]=useState('HouseHolder')
 const Calculation=()=>{
    if(!unit){
        Alert.alert("Plz Enter Units");
    }
    if(radio=="HouseHolder"){
        if(unit<=100){
            var total=unit*2.5;
            setpayable(total.toString());
setunit('')

            return;
        }
        var remaningunit=unit-100;
        var first100unit=unit-remaningunit;
        var remaningunit=remaningunit*5;
        var first100unit=first100unit*2.5;
        var totalunit=remaningunit+first100unit;
        setpayable(totalunit.toString());
        setunit("");
    }
    if(radio=="Commerical"){
        if(unit<=100){
            var total=unit*5;
            setpayable(total.toString());
            setunit('')
            return;
        }
        var remaningunit=unit-100;
        var first100unit=unit-remaningunit;
        var remaningunit=remaningunit*10;
        var first100unit=first100unit*5;
        var totalunit=remaningunit+first100unit;
        setpayable(totalunit.toString());
        setunit("");
    }


 }
    return (
        <View style={styles.main}>
            <View style={styles.header} >
                <Text style={styles.headertext}>Electricity Bill Calculator</Text>
            </View>
            <View style={styles.body}>
                <TextInput style={styles.placeholder} placeholder='Enter Unit Consumed' value={unit} onChangeText={setunit} />
                <View style={styles.radioview}>
                    <Text style={styles.radioheader}>Meter Type</Text>
                    <View style={styles.radiobutton}>
                        <RadioButton onPress={()=>setradio('HouseHolder')} status={radio==='HouseHolder'?'checked':'unchecked'}/>
                        <Text>HouseHold</Text>
                    </View>
                    <View style={styles.radiobutton}>
                        <RadioButton onPress={()=>setradio('Commerical')} status={radio==='Commerical'?'checked':'unchecked'}/>
                        <Text>Commerical</Text>
                    </View>

                </View>
                <View style={styles.buttoncontiner}>
                <Button title='Calculate' onPress={() => { Calculation(); }} />

                </View>
                <Text>Payable Amount:{payable}</Text>
      
            </View>

        </View>

    )
}

export default Billcalcultor

const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    header: {
        backgroundColor: 'green',
        padding: 30,
    }, headertext: {
        textAlign: 'center',
        fontSize: 20
    },
    body: {
        margin: 10
    },
    placeholder: {
        borderWidth: 2,
        borderRadius: 10
    },
    radioview: {
        margin: 5
    },
    radioheader:{
        fontSize:20
    },
    radiobutton:{
        flexDirection:'row',
        alignItems:'center'
    },
    buttoncontiner:{
        width:100
    }
})