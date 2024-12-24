import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react';
import { Button, TextInput } from 'react-native-paper'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';






const Dataformwithimag = () => {
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
  <View style={{flex:1}}>
    <View  style={{width:"50%",alignSelf:'center',margin:10}}>
      <Image source={{uri:imageUri}} style={{width:150,height:150,backgroundColor:'blue',alignSelf:'center'}}/>
      <Button mode='elevated' onPress={takePhotoWithCamera}>+image</Button>
    </View>
    <View style={{flex:1,flexDirection:'row'}}>
      <View style={{width:'75%',borderWidth:1}}>
      <TextInput placeholder='Name'/>
      <TextInput placeholder='City'/>
      <TextInput placeholder='Age'/>
      <TextInput placeholder='Department'/>
      </View>
      <Button mode='elevated'>Save</Button>
      
    </View>
  </View>
  )
}

export default Dataformwithimag

const styles = StyleSheet.create({
   
})