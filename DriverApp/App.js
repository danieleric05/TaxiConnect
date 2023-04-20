/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import {enableLatestRenderer} from 'react-native-maps';


enableLatestRenderer();

const App =  () => {
  return (
    <>
      <StatusBar barStyle="dark-content"/>
      <SafeAreaView>
        <HomeScreen />
  
      </SafeAreaView>
  </>
  );
};


export default App;
