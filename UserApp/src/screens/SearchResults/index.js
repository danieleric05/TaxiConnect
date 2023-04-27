import React from "react";
import { View, Text, Dimensions } from "react-native";


import RouteMap from "../../components/RouteMap";
import NewConTypes from "../../components/NewConTypes";

import {useRoute} from '@react-navigation/native'; 

const SearchResults = () => {
    const route = useRoute();

    console.log('destination',route.params.destinationPlace.details.geometry.location)
    console.log('origin',route.params.originPlace.data.geometry.location)
    const {originPlace, destinationPlace} =route.params
    return (
        <View style={{display:'flex', justifyContent:'space-between'}}>
            <View style={{height:Dimensions.get('window').height -400}}>
                <RouteMap origin={originPlace} destination={destinationPlace} />
            </View>
            

            <View style={{height:500}}>
            <NewConTypes />
            </View>
           
        </View>
    );
};

export default SearchResults;