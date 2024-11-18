import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SelectList } from 'react-native-dropdown-select-list'
import { useNavigation } from '@react-navigation/native'
import Ticket from './Ticket'

const Stations = () => {
  const[Station,Setstation]=useState(false)
  const Terminal=[{
    key:1, value:'Raja Terminal'
  },
  {
    key:'2', value:'Abdullah Ayaz Terminal'
  },

 {
    key:'3', value:'Tuheed Ayaz Terminal'
  },
  {
    key:'4', value:'Faiz ayaz Terminal'
  },
  {
    key:'4', value:'Muhammad Nouman Terminal'
  },
  
  
  
]
const navigtaion=useNavigation();
const forwaed=()=>{
  if(Station){
    Setstation(false)
    navigtaion.navigate(Ticket);
   
  }

  
}
  return (
    <View style={{flex:1,padding:10}}>
     <SelectList
     data={Terminal}
     setSelected={Setstation}
     onSelect={forwaed}
     />
    </View>
  )
}

export default Stations

const styles = StyleSheet.create({})