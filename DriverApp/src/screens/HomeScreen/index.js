import React, {useEffect, useState} from "react";
import {View, Text, Dimensions, Pressable} from "react-native";
import MapView, {PROVIDER_GOOGLE} from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import NewOrderPopup from "../../components/NewOrderPopup";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const origin ={latitude: 5.3464608, longitude: -3.958544};
const destination ={latitude: 5.3304608, longitude: -3.966544};
const GOOGLE_MAPS_APIKEY='AIzaSyAMfAgF971vT1snufDpfGwmtfxwGq-BTpE';

const HomeScreen = (props) => {
    const [isOnline, setIsOnline] = useState (false);
    const [myPosition, setMyPosition] = useState(null)
    const [order,setOrder] = useState(null)

    useEffect( () => {
      if (order && order.distance && order.distance <0.2){
        setOrder({
          ...order,
          pickedUp:true,
        })
      }
    }, [order]);
    const [newOrder, setNewOrder]= useState({
        id: '1',
        type: 'NewX',

        originLatitude :5.3414347,
        originLongitude :-3.956872,

        destinationLatitude :5.3564608,
        destinationLongitude :-3.958544,

        user:{
          rating:4.8,
          name:'Daniel',
        }
    })

    const onDecline = () => {
      setNewOrder(null);
    }
    const onAccept = (newOrder) =>{
      setOrder(newOrder);
      setNewOrder(null);
    }


    const onGoPress = () => {
        setIsOnline(!isOnline);
    }

    const onUserLocationChange= (event) =>{
      setMyPosition(event.nativeEvent.coordinate);
    }
    const getDestination = () => {
      if (order && order.pickedUp){
        return {
          latitude: order.destinationLatitude,
          longitude: order.destinationLongitude,
        }
      }
      return {
        latitude: order.originLatitude,
        longitude: order.originLongitude,
      }
    }

    const onDirectionsFound = (event) => {
      console.log("Direction found : ", event);
      if (order){
        setOrder(
          {...order,
           distance:event.distance,
           duration:event.duration,
           pickedUp:order.pickedUp || event.distance < 0.2,
           isFinished:order.pickedUp && event.distance < 0.2,
        })
      }
    }


    

    const renderBottomTitle = () => {
      if(order && order.isFinished){
        
            return(
              <View style={{alignItems:'center'}}>
                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', backgroundColor:'#cb1a1a',width:200, padding:10, }}>
                <Text style={{color:'white', fontWeight:'bold'}}>COMPLETE {order.type}</Text>
                </View>
                <Text style={styles.bottomText}> {order.user.name}</Text>
              </View>
            )
        }  
      if(order && order.pickedUp){
            return(
              <View style={{alignItems:'center'}}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                <Text>{order.duration ? order.duration.toFixed(1) : '?'} min</Text>
                <View style={{backgroundColor:'#1e9203',marginHorizontal: 10, width:30, height:30, alignItems:'center', justifyContent:'center',borderRadius:20}}>
                  <FontAwesome name={"user"} color={"white"} size={20} />
                </View>
                <Text>{order.distance ? order.distance.toFixed(1) : '?'} km</Text>
                </View>
                <Text style={styles.bottomText}>Dropping off {order.user.name}</Text>
              </View>
            )
        }  
      if(order){
            return(
              <View style={{alignItems:'center'}}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                  <Text>{order.duration ? order.duration.toFixed(1) : '?'} min</Text>
                <View style={{backgroundColor:'#1e9203',
                    marginHorizontal: 10, 
                    width:30, 
                    height:30, 
                    alignItems:'center', 
                    justifyContent:'center',
                    borderRadius:20}}>
                  <FontAwesome name={"user"} color={"white"} size={20} />
                </View>
                  <Text>{order.distance ? order.distance.toFixed(1) : '?'} km</Text>
                </View>
                <Text style={styles.bottomText}>Picking up {order.user.name}</Text>
              </View>
            )
        }
        if(isOnline){
            return(
                <Text style={styles.bottomText}>You are online</Text>
            )
        }
        return(
                <Text style={styles.bottomText}>You are offline</Text>
            );

    }

    return (
        <View>
            <MapView
                style={{
                  height:Dimensions.get('window').height - 100, width:'100%'}}
                  provider={PROVIDER_GOOGLE}
                  showsUserLocation={true}
                  onUserLocationChange={onUserLocationChange}
                  initialRegion={{
                  latitude: 	5.3444608,
                  longitude: -3.948544,
                  latitudeDelta: 0.0222,
                  longitudeDelta: 0.0121,
            }}
            >
              {order && (
                <MapViewDirections
                  origin={myPosition}
                  onReady={onDirectionsFound}
                  destination={getDestination()}
                  apikey={GOOGLE_MAPS_APIKEY}
                  strokeWidth={5}
                  strokeColor="black"
                /> 
              )}
               
            </MapView>
            
      <Pressable
        onPress={() => console.warn('Go')}
        style={styles.balanceButton}>
        <Text style={styles.balanceText}>
            <Text style={{color:'green'}}>F</Text>
            {' '}
            00000
        </Text>
      </Pressable>

            <Pressable
              onPress={() => console.warn('Hey')}
              style={[styles.roundButton, {top: 10, left: 10}]}>
              <Entypo name={"menu"} size={24} color="#4a4a4a"/>
            </Pressable>

      <Pressable
        onPress={() => console.warn('Hey')}
        style={[styles.roundButton, {top: 10, right: 10}]}>
        <Entypo name={"menu"} size={24} color="#4a4a4a"/>
      </Pressable>

       <Pressable
        onPress={() => console.warn('Hey')}
        style={[styles.roundButton, {bottom: 110, left: 10}]}>
        <Entypo name={"menu"} size={24} color="#4a4a4a"/>
      </Pressable>

      <Pressable
        onPress={() => console.warn('Hey')}
        style={[styles.roundButton, {bottom: 110, right: 10}]}>
        <Entypo name={"menu"} size={24} color="#4a4a4a"/>
      </Pressable>

      <Pressable
        onPress={onGoPress}
        style={styles.goButton}>
        <Text style={styles.goText}>
        {
            isOnline ? 'End' : 'Go'
        }
           
        </Text>
      </Pressable>

            <View style ={styles.bottomContainer} >
                <Ionicons name={"options"}  size ={30} color="#4a4a4a"/>
                {
                  renderBottomTitle()
                }
                
                <Entypo name={"menu"}size ={30.} color="#4a4a4a"/>
            </View>

            {newOrder && <NewOrderPopup 
              newOrder={newOrder}
              duration={2}
              distance={0.5}
              onDecline={onDecline}
              onAccept={() => onAccept(newOrder)}
            />}
        </View>
    );
};



export default HomeScreen;
