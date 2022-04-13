import AppNavigator from './navigation/AppNavigator';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Setting a timer']);

/*
 *
  -Toki (Darrell Bryan)  - d_bryan8@fanshaweonline.ca 

  -Julian Vines - j_vines@fanshaweonline.ca

  -Leah Tomaszewski - l_tomaszewski@fanshaweonline.ca

  -Dylan Gendreau - d_gendreau@fanshaweonline.ca 
 *
*/



//Camera & ImagePicker
// expo install expo-image-picker
// expo install expo-permissions
// expo install expo-camera

// Email
// expo install expo-mail-composer

// TTS
// expo install expo-speech

// Nav
// npm install --save react-navigation
// expo install react-native-gesture-handler react-native-reanimated
// npm install --save react-navigation-header-buttons

// Firebase
// expo install firebase

import React, { useState } from 'react';

export default function App(){
  return (
        <AppNavigator />
 
  );
}
