// @flow
import React, { useEffect, useState } from 'react';
import { View, TextInput, SafeAreaView } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native';


import styles from './styles';
import PlaceRow from "./PlaceRow";

const homePlace ={
    description: 'Home',
    geometry: {location: {lat: 5.3601000, lng: -3.9476670}},
};
const workPlace ={
    description: 'Work',
    geometry: {location: {lat: 5.3856850, lng: -3.9771590}},
}

const DestinationSearch = (props) =>{

    const [originPlace, setOriginPlace] = useState (null);
    const [destinationPlace, setDestinationPlace] = useState (null);

    const navigation = useNavigation();

    const checkNavigation =()=>{
        console.warn('checkNavigation is called')
        if (originPlace && destinationPlace){
            navigation.navigate('SearchResults',{
                originPlace,
                destinationPlace,
            })
        }

    }

    useEffect( () => {
        checkNavigation();
    }, [originPlace,destinationPlace])
    
    return (
        <SafeAreaView>
            <View style={styles.container}>
            <GooglePlacesAutocomplete 
            placeholder='Where from?'
            onPress={(data, details = null) =>{
                setOriginPlace({data, details});
            }}
            enablePoweredByContainer={false}
            suppressDefaultStyles
            currentLocation={true}
            currentLocationLabel='Current Location'
            styles={{
                textInputContainer: styles.textInput,
                container:styles.autocompleteContainer,
                listView:styles.listView,
                separator:styles.separator,
            }}
            fetchDetails
            query={{
                key: 'AIzaSyDFTxjYLQSeIGBhTSAok8q2yf9qzguOJwY',
                language: 'en'
            }}
            renderRow={(data) => <PlaceRow data={data} />
            }
            renderDescription={(data)=> data.description || data.vicinity}
            predefinedPlaces={[homePlace, workPlace]}
            />
            
            <GooglePlacesAutocomplete 
            placeholder='Where to'
            onPress={(data, details = null) =>{
                setDestinationPlace({data, details}); 
            }}
            enablePoweredByContainer={false}
            suppressDefaultStyles
            styles={{
                textInputContainer: styles.textInput,
                container:{
                    ...styles.autocompleteContainer,
                    top:90,
                },
                separator:styles.separator,
            }}
            fetchDetails
            query={{
                key: 'AIzaSyDFTxjYLQSeIGBhTSAok8q2yf9qzguOJwY',
                language: 'en'
            }}
            renderRow={(data) => <PlaceRow data={data} />}
            />
            {/* Circle near Origin input */}
            <View style={styles.circle} />

            {/* Line Between dots */}
            <View style={styles.line} />
            {/* Square near Destinations input */}
            <View style={styles.square} />
            </View>
            
        </SafeAreaView>

    );
};


export default DestinationSearch;