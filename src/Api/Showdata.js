import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, Alert, Button, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';

const Showdata = () => {
  const [data, setData] = useState([]);
  const  [name,setname]=useState('');
  const  [email,setemail]=useState('');
  const  [password,setpassword]=useState('');


 
  const alldata= async ()=>{
    try {
      const response= await fetch('http://168.254.224.237/reactnative/api/user/allusers');
      if(!response.ok){
        throw new Error('sorry beta try again');
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      Alert.alert('Error', 'Could not fetch data. Please check the API and network.');
      
    }finally{
     
    }
  }
  
  const insertdata= async ()=>{
    const data={
      name:name,
      email:email,
      password:password
    }
    try {
      const response= await fetch('http://168.254.224.237/reactnative/api/user/addusers',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(data)
      });
      if(!response.ok){
        throw new Error('faild to insert data');
      }
      const res= await response.json();
      setname('');
      setemail('');
      setpassword('');
      Alert.alert('Success', 'Data inserted successfully');

    } catch (error) {
      Alert.alert('Error', 'Could not insert data. Please try again.');
    }
    
  }
  // const updatedata= async ()=>{
  //   const data={
  //     name:name,
  //     email:email,
  //     password:password
  //   }
  //   try {
  //     const response= await fetch('http://192.168.185.68/reactnative/api/user/addusers',{
  //       method:'POST',
  //       headers:{
  //         'content-type':'application/json'
  //       },
  //       body:JSON.stringify(data)
  //     });
  //     if(!response.ok){
  //       throw new Error('faild to insert data');
  //     }
  //     const res= await response.json();
  //     setname('');
  //     setemail('');
  //     setpassword('');
  //     Alert.alert('Success', 'Data inserted successfully');

  //   } catch (error) {
  //     Alert.alert('Error', 'Could not insert data. Please try again.');
  //   }
    
  // }
  const dete= async (id)=>{
    const response= await fetch(`http://192.168.185.68/reactnative/api/user/delete/${id}`);
    if (!response.ok) {
      throw new Error('Failed to delete data');
    }
    console.log("pressed")
    alldata();
    Alert.alert('Success', 'Data deleted successfully');
  }
  const handlelongpress=(id)=>{
    Alert.alert('Delete data','Are u  Sure  to delete this data',[
      {text:'cancel'},
      {text:'Delete', onPress:()=>dete(id)}
    ]);
  }

  useEffect(() => {
   alldata();
  }, [data]);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <TouchableOpacity onPress={()=>updatedata(item.id)} onLongPress={() => handlelongpress(item.id)}>
        <Text style={styles.title}>{item.id}</Text>
        <Text style={styles.body}>{item.name}</Text>
        <Text style={styles.body}>{item.email}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput placeholder='Enter name' value={name} onChangeText={setname} />
      <TextInput placeholder='Enter email' value={email} onChangeText={setemail} />
      <TextInput placeholder='Enter password' value={password} onChangeText={setpassword} />
      <Button title='Insert data' onPress={insertdata}/>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  item: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  body: {
    fontSize: 14,
    color: '#666',
  },
});

export default Showdata;
