import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const Carsqllite = () => {
  const [imageUri, setImageUri] = useState(null);

  const selectImageFromGallery = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
      },
      (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorCode) {
          console.log('Image Picker Error: ', response.errorMessage);
        } else if (response.assets && response.assets.length > 0) {
          setImageUri(response.assets[0].uri);
        }
      }
    );
  };

  const takePhotoWithCamera = () => {
    launchCamera(
      {
        mediaType: 'photo',
        saveToPhotos: true,
      },
      (response) => {
        if (response.didCancel) {
          console.log('User cancelled camera');
        } else if (response.errorCode) {
          console.log('Camera Error: ', response.errorMessage);
        } else if (response.assets && response.assets.length > 0) {
          setImageUri(response.assets[0].uri);
        }
      }
    );
  };

  return (
    <View style={styles.container}>
      
      {imageUri ? (
        <Image source={{ uri: imageUri }} style={styles.image} />
      ) : (
      <Image source={require('../images/google.png')} style={{width:"35%",height:'20%', resizeMode:'stretch'}}/>
      )}
      <Button title="Upload from Gallery" onPress={selectImageFromGallery} />
      
      <Button title="Take Photo with Camera" onPress={takePhotoWithCamera} />
    </View>
  );
};

export default Carsqllite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  placeholder: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
});
