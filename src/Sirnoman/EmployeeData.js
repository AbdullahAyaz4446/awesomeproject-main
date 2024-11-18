import { StyleSheet, Text, View, FlatList, Alert } from 'react-native'
import React, { useState } from 'react'
import { renderer } from 'react-test-renderer';
import { Button } from 'react-native-paper';


const Employee = () => {
  const [data, setdata] = useState([{
    id: 1, name: 'Abdullah Ayaz', city: 'jampur', age: 19
  },
  {
    id: 2, name: 'Tuheed Ayaz', city: 'jampur', age: 12
  },
  {
    id: 3, name: 'Faiz Ayaz', city: 'Rawalpindi', age: 10
  },
  {
    id: 4, name: 'Muhammad Nouman ', city: 'Rawalpindi', age: 9
  },
  {
    id: 5, name: 'Wajahat Ayaz', city: 'Rawalpindi', age: 20
  },
  {
    id: 6, name: 'Mughees Qadir', city: 'Islambad', age: 10
  }
  ])

  const resetdata = [
    {
      id: 1, name: 'Abdullah Ayaz', city: 'jampur', age: 19
    },
    {
      id: 2, name: 'Tuheed Ayaz', city: 'jampur', age: 12
    },
    {
      id: 3, name: 'Faiz Ayaz', city: 'Rawalpindi', age: 10
    },
    {
      id: 4, name: 'Muhammad Nouman ', city: 'Rawalpindi', age: 9
    },
    {
      id: 5, name: 'Wajahat Ayaz', city: 'Rawalpindi', age: 20
    },
    {
      id: 6, name: 'Mughees Qadir', city: 'Islambad', age: 10
    }
  ]


  const Delete = (id) => {
    var D = data.filter(p => p.id != id);
    setdata([...D]);
   
  }


  const Showdata = ({ item }) => {
    return (
      <View style={{ margin: 20, backgroundColor: 'pink', borderRadius: 12, borderWidth: 2 }}>
        <Text style={{ fontSize: 20, textAlign: "center", color: 'red', textAlign: "center" }}>
          {item.name}
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1, borderWidth: 1, margin: 5 }}>
            <Text style={{ margin: 2, fontSize:15 }}>City:{item.city}</Text>
            <Text style={{ margin: 2, fontSize: 15}}>City:{item.age}</Text>
          </View>
          <View style={{ flex: 1, borderWidth: 1, margin: 10 }}>
            <Button
              mode="contained"
              style={{ margin: 5, borderRadius: 5 }}
              onPress={() => { Alert.alert(item.id + "") }}

            >
              Show ID
            </Button>
            <Button
              mode="contained"

              style={{ margin: 5, backgroundColor: "red", borderRadius: 5 }}
              onPress={() => { Delete(item.id) }}
            >
              Delete
            </Button>

          </View>

        </View>



      </View>

    );
  }
  const reset = () => {
    setdata([...resetdata]);
  }

  return (
    <View style={{ flex: 1, padding: 10 }}>
     <Button
  mode="contained"
  style={{ margin:5,borderRadius:5}}
  onPress={() => reset()}
>
  Reset
</Button>
      <FlatList

        data={data}
        renderItem={Showdata}
      />


    </View>
  )
}

export default Employee

const styles = StyleSheet.create({})