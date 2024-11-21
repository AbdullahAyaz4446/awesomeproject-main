import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import React, { useState } from 'react';

const Showmobilestock = ({ route }) => {
  const { Mobiledata } = route.params;
  const [data, setData] = useState(Mobiledata);

  const Delete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData([...updatedData]);
    
  };

  const Showdata = ({ item }) => {
    return (
      <View style={styles.card}>
        <Text style={styles.text}>Product ID: {item.id}</Text>
        <Text style={styles.text}>Name: {item.name}</Text>
        <Text style={styles.text}>Category: {item.caterogry}</Text>
        <Text style={styles.text}>Price: {item.Price}</Text>
        <Text style={styles.text}>Quality: {item.qa}</Text>
        <View style={styles.buttonContainer}>
          <Button
            title="Delete"
            color="red"
            onPress={() => Delete(item.id)}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      { data.length > 0 ? 
        <FlatList
          data={data}
          renderItem={Showdata}
       
        />
        : <Text style={styles.noDataText}>No Data</Text>
      }
    </View>
  );
};

export default Showmobilestock;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f8f9fa',
  },
  card: {
    marginVertical: 10,
    padding: 15,
    backgroundColor: 'pink',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#d1d1d1',
  },
  text: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  buttonContainer: {
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  noDataText: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
    marginTop: 20,
  },
});
