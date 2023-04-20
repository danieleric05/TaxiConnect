import React, {useState,useEffect} from "react";
import {Image, FlatList} from "react-native";
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';


import cars from '../../assets/data/cars';

const HomeMap  = (props) =>{
    
    const getImage =(type) => {
        if (type === 'NewX'){
            return require('../../assets/images/topNewX.png')
        }
        if (type === 'Comfort'){
            return require('../../assets/images/topComfort.png');
        
        }
        
        return require('../../assets/images/topNewXL.png');
        
    };
    return(
        
        <MapView
            style={{height:'100%', width:'100%'}}
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            initialRegion={{
                latitude: 	5.3444608,
                longitude: -3.948544,
                latitudeDelta: 0.0222,
                longitudeDelta: 0.0121,
            }}>
            {cars.map((car) =>(
            <Marker
                key={car.id}
                coordinate={{ latitude : car.latitude , longitude : car.longitude }}
           
            >
                <Image 
                    style={{
                        width:50, 
                        height:50, 
                        resizeMode:'contain',
                        transform:[{
                            rotate: `${car.heading}deg` 
                        }]
                    }} 
                    source={getImage(car.type)}
                    />
            </Marker>
    ))}
        
        </MapView>
    );
};

export default HomeMap;