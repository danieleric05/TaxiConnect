/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import {StatusBar, PermissionsAndroid, Platform} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import RootNavigator from './src/navigation/Root';
import { withAuthenticator } from 'aws-amplify-react-native';
import { Amplify } from 'aws-amplify';
import awsconfig from './src/aws-exports';

Amplify.configure(awsconfig);

/* L'import ici prends en compte les version react native au dessus de 0.60.0 */

import {enableLatestRenderer} from 'react-native-maps';
enableLatestRenderer();

navigator.geolocation = require('@react-native-community/geolocation');



const App = () => { 

  const androidPermission = async() =>{
    try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Cool Photo App Location Permission',
        message:
          'Nex Connect App needs access to your location ' +
          'so you can take awesome rides.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the location');
    } else {
      console.log('Location permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

useEffect(() => {
  if (Platform.OS === 'android'){
    androidPermission();
  }else{
    //IOS
    Geolocation.requestAuthorization();

  }
},[])
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <RootNavigator />
    </>
  );
};

export default withAuthenticator (App);