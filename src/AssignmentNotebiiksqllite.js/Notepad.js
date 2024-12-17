import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
const Notepad = () => {
    const nav = useNavigation();
  return (
    <View style={styles.main}>
   
      <View style={styles.header}>
        <TouchableOpacity onPress={() => nav.goBack()}>
        <Ionicons name="arrow-back-circle" size={50} color="#fff" style={styles.icon} />
        </TouchableOpacity>
       
        <Text style={{fontSize:20,color:'white'}} >Note Pad</Text>
       <Pressable><Text  style={{fontSize:15,color:'white'}}>Save</Text></Pressable>
      </View>
      <View style={styles.body}>
        <TextInput placeholder='Enter Tittle' style={{color:'white',marginVertical:10,borderColor:'white',fontSize:20}}  placeholderTextColor="gray" />
        <Text style={{fontSize:15,color:'white'}} >___________________________________________________</Text>
        
        <TextInput placeholder='Write Here' style={{color:'white',marginVertical:10,borderColor:'white',fontSize:20}} multiline={true} placeholderTextColor="gray" />
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
    justifyContent:'space-between',
    
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
},radioconatiner:{
    flexDirection:'row',justifyContent:'space-between'
}
});
