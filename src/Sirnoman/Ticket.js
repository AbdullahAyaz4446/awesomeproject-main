import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import Anvoice from './Anvoice'


const Ticket = () => {
  const navigation=useNavigation();
  return (
    <View style={{flex:1,padding:10}}>
      <Text>Enter name</Text>
     <TextInput placeholder='Enter Name' style={{borderRadius:10,borderWidth:1,marginBottom:10}}/>
     <Text>Enter Father name</Text>
     <TextInput placeholder='Enter Father name' style={{borderRadius:10,borderWidth:1,marginBottom:10}}/>
     <Text>Enter Cnic number</Text>
     <TextInput placeholder='Enter Cnic' keyboardType='numeric' style={{borderRadius:10,borderWidth:1,marginBottom:10}}/>
     <View style={{flex:1,justifyContent:'flex-end'}}>
     <Button
     onPress={()=>navigation.navigate('Anvoice')}
          mode="contained"
          rippleColor="#D1C2E0"
          style={{ marginBottom: 20 }}
        >
          Check Out
        </Button>
     </View>
     
    </View>
  )
}

export default Ticket

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'flex-end', 
    alignItems: 'center', 
  }
})