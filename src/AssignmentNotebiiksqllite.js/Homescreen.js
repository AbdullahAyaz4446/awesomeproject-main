import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
const Homescreen = () => {
    const nav = useNavigation();
  return (
    <View style={styles.main}>
   
      <View style={styles.header}>
        <TouchableOpacity onPress={() => nav.goBack()}>
        <Ionicons name="arrow-back-circle" size={50} color="#fff" style={styles.icon} />
        </TouchableOpacity>
        <Text style={{fontSize:20,color:'white'}} >Notes</Text>
        <TouchableOpacity onPress={() => nav.navigate('Notepad')}>
        <AntDesign name="plus" size={30} color="#fff" style={styles.icon} />
        </TouchableOpacity>
        
      </View>
      <View style={styles.body}>
      <View style={styles.radioconatiner}>
        <View  style={styles.row}>
        <RadioButton></RadioButton>
        <Text  style={{fontSize:20,color:'white'}}>Audios</Text>
        </View>
        <View  style={styles.row}>
        <RadioButton></RadioButton>
        <Text  style={{fontSize:20,color:'white'}}>Audios</Text>
        </View>
        <View  style={styles.row}>
        <RadioButton></RadioButton>
        <Text  style={{fontSize:20,color:'white'}}>Audios</Text>
        </View>
        
      
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
