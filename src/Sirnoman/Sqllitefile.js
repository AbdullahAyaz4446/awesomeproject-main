import { Alert, StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { openDatabase } from 'react-native-sqlite-storage';

const db = openDatabase({ name: 'MapDb.db' });

const Sqllitefile = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [Data, setdata] = useState([]);
  const [hide,sethide]=useState(false)

  const createTable = () => {
    db.transaction((txn) => {
      txn.executeSql(
        'CREATE TABLE IF NOT EXISTS Person (ID INTEGER PRIMARY KEY, pName TEXT)',
        [],
        (txn, res) => console.log('Table Successfully opened'),
        (error) => console.log('Error creating table: ' + error.message)
      );
    });
  };

  const insertData = () => {
    if (!id || !name) {
      alert('Please fill both ID and Name fields');
      return;
    }

    db.transaction((txn) => {
      txn.executeSql(
        `INSERT INTO Person (ID, pName) VALUES (?, ?)`,
        [id, name],
        (txn, res) => {
          console.log('Data Inserted Successfully');
          alert('Data Added Successfully');
          setId('');
          setName('');
        },
        (error) => console.log('Error inserting data: ' + error.message)
      );
    });
  };

  const Serachdata = () => {
    if (!id) {
      alert('Please fill ID field');
      return;
    }

    db.transaction((txn) => {
      txn.executeSql(
        `SELECT * FROM Person WHERE ID = ?`,
        [id],
        (txn, res) => {
          console.log(res.rows.item(0).pName);
          setName(res.rows.item(0).pName);
        },
        (error) => console.log('Error searching data: ' + error.message)
      );
    });
  };

  const Getalldata = () => {
    db.transaction((txn) => {
      txn.executeSql(
        `SELECT * FROM Person`,
        [],
        (txn, res) => {
          const temparry = [];
          for (let i = 0; i < res.rows.length; i++) {
            const p = res.rows.item(i);
            temparry.push(p);
          }
          setdata([...temparry]);

          console.log(temparry);
          
        },
        (error) => console.log('Error Getting all data: ' + error.message)
      );
    });
  };
  const Deletedata = () => {
    if (!id) {
      alert('Please fill ID field');
      return;
    }

    db.transaction((txn) => {
      txn.executeSql(
       `DELETE FROM Person WHERE ID = ?` ,
        [id],
        (txn, res) => {
            const temparry = [];
            for (let i = 0; i < res.rows.length; i++) {
              const p = { ID: res.rows.item(i).ID, pName: res.rows.item(i).pName };
              temparry.push(p);
            }
            setdata([...temparry]);
  
            console.log(temparry);
          },
        (error) => console.log('Error searching data: ' + error.message)
      );
    });
  };
  const Update = () => {
    if (!id || !name) {
        alert('Please fill both ID and Name fields');
        return;
    }

    db.transaction((txn) => {
        txn.executeSql(
            `UPDATE Person SET pName = ? WHERE ID = ?`, 
            [name, id],
            (txn, res) => {
                
                alert(`Record updated successfully`);
                setId('');
                setName('');
               
            },
            (error) => console.log('Error updating data: ' + error.message)
        );
    });
};
const Deleteall = () => {
  db.transaction((txn) => {
      txn.executeSql(
          `delete from person`, 
          [],
          (txn, res) => {
              
              alert(`delete successfully`);
              setId('');
              setName('');
              setdata([...emptyarr])
             
          },
          (error) => console.log('Error updating data: ' + error.message)
      );
  });
};

  useEffect(() => {
    createTable();
  }, []);
  const renderItem = ({ item }) => (
    <View style={styles.card}>
        <Text style={styles.cardText}>ID: {item.ID}</Text>
      <Text style={styles.cardText}>Name: {item.pName}</Text>
    </View>
  );
  const emptyarr=[];

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter ID"
        value={id}
        keyboardType="numeric"
        onChangeText={setId}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        value={name}
        onChangeText={setName}
      />
      <View style={{flexDirection:'row',justifyContent:'space-around'}}>
      <Button
        mode="contained"
        labelStyle={{ fontSize: 20 }}
        style={styles.button}
        onPress={insertData}
      >
        Add Data
      </Button>
      <Button
        mode="contained"
        labelStyle={{ fontSize: 20 }}
        style={styles.button}
        onPress={Serachdata}
      >
        Show by ID
      </Button>
  
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-around'}}>

     
      <Button
        mode="contained"
        labelStyle={{ fontSize: 20 }}
        style={styles.button}
        onPress={() => {
            Getalldata();
            sethide(!hide); 
        }}
      
        
      >
        Show All
      </Button>
      <Button
        mode="contained"
        labelStyle={{ fontSize: 20 }}
        style={styles.button}
        onPress={Deletedata}
      >
        Delete
      </Button>
      </View>
      <View  style={{flexDirection:'row',justifyContent:'space-around'}}>

  
      <Button
        mode="contained"
        labelStyle={{ fontSize: 20 }}
        style={styles.button}
        onPress={Update}
      >
        Update
      </Button>
      <Button
        mode="contained"
        labelStyle={{ fontSize: 20 }}
        style={styles.button}
        onPress={()=>{
          setdata([...emptyarr])
        }}
      >
        Reset
      </Button>
      </View>
      <Button
        mode="contained"
        labelStyle={{ fontSize: 20 }}
        style={styles.button}
        onPress={Deleteall}
      >
        Delete All
      </Button>

      {hide && (
                <FlatList
                    data={Data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.ID.toString()}
                />
            )}
    </View>
  );
};

export default Sqllitefile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  input: {
    margin: 10,
    backgroundColor: '#fff',
  },
  button: {
    borderRadius: 5,
    margin: 10,
  },
  card: {
    marginVertical: 8,
    padding: 15,
    backgroundColor: '#ffe4e1',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  cardText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
});
