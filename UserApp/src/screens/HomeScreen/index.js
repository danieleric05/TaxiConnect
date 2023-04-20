/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Dimensions} from 'react-native';

import HomeMap from '../../components/HomeMaps';
import CovidMessage from '../../components/CovidMessage';
import HomeSearch from '../../components/HomeSearch';

const HomeScreen = (props) => {
  return (
    <View>
      <View style={{height: Dimensions.get('window').height - 450}}>
        <HomeMap />
      </View>

      {/* Covid message */}
      <CovidMessage />
    
      {/* Bottom comp */}
      <HomeSearch />
    </View>
  );
};

export default HomeScreen;
