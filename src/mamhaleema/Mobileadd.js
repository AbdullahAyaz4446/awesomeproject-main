import { StyleSheet, Text, View ,TextInput, Alert} from 'react-native'
import React, { useState } from 'react'
import { SelectList } from 'react-native-dropdown-select-list'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import Showmobilestock from './Showmobilestock'

const Mobileadd = () => {
    const[mobilename,setmobilename]=useState('')
    const[caterogry,setcaterogry]=useState('')
    const[Price,setprice]=useState('')
    const[qality,setqality]=useState('')
    const[id,setid]=useState(0)
    const[Mobiledata,setmobiledata]=useState([])
    const navigation=useNavigation();
    const Mob=[{
        key:1, value:'Ios'
      },
      {
        key:'2', value:'Android'
      },
    ]
    const Adddata = () => {
        const Mobile = { id: id + 1, name: mobilename, caterogry: caterogry, qa: qality ,Price:Price};
        setmobiledata([...Mobiledata, Mobile]);
        setid(id + 1);
        Alert.alert('Data successfully added');
        console.log(Mobile);
        setmobilename('');
        setcaterogry('');
        setqality('');
        setprice('');
    };
    
  return (
    <View    style={{flex:1,padding:10}}>
  
   
     <Text style={{textAlign:'left'}}>Mobilename</Text>
     <TextInput placeholder='Enter Name' value={mobilename} onChangeText={setmobilename} style={{borderRadius:10,borderWidth:1,marginBottom:10}}/>
     <Text style={{textAlign:'left'}}>Catergory</Text>
     <SelectList
     data={Mob}
     setSelected={setcaterogry}
     placeholder='Select Mob'
     />
        <Text style={{textAlign:'left'}}>price</Text>
        <TextInput placeholder='Enter price' value={Price} onChangeText={setprice} style={{borderRadius:10,borderWidth:1,marginBottom:10}}/>
        <Text style={{textAlign:'left'}}>Qality</Text>
        <TextInput placeholder='Enter qality' value={qality} onChangeText={setqality} style={{borderRadius:10,borderWidth:1,marginBottom:10}}/>
        <View style={{flex:1,justifyContent:'flex-end'}}>
        <Button
          mode="contained"
          rippleColor="#D1C2E0"
          style={{ marginBottom: 5,borderRadius:5 }}
          onPress={Adddata}
        >
          ADD
        </Button>
        <Button
          mode="contained"
          rippleColor="#D1C2E0"
          style={{ marginBottom: 5,borderRadius:5 }}
          onPress={() => navigation.navigate('Showmobilestock', { Mobiledata: Mobiledata})}
        >
          Show Stock
        </Button>
        </View>
      
       
       
    </View>
  )
}

export default Mobileadd

const styles = StyleSheet.create({})