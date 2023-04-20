import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   container:{
    padding: 5,
    height:'100%',

   },
   textInput:{
    padding:10,
    backgroundColor:'#eee',
    marginVertical:5,
    marginLeft:20,
   },
   separator:{
      backgroundColor: '#efefef',
      height: 1,
      },
   listView:{
      position: 'absolute',
      top:170,
      },
      autocompleteContainer:{
         position: 'absolute',
         top: 0,
         left:10,
         right:10,
         },
   row:{
      flexDirection:'row',
      alignItems:'center',
      marginVertical:10,
   },
   iconContainer:{
      backgroundColor:'#a2a2a2',
      padding:5,
      borderRadius:50,
      marginRight:15,

   },
   locationText:{

   },
   circle:{
      width:5,
      height:5,
      backgroundColor:'black',
      position:'absolute',
      top:35,
      left:15,
      borderRadius:50,
   },
   line:{
      width:1,
      height:75,
      backgroundColor:'#919191',
      position:'absolute',
      top:45,
      left:17,
   },
   square:{
      width:5,
      height:5,
      backgroundColor:'black',
      position:'absolute',
      top:125,
      left:15,
   },
});


export default styles;