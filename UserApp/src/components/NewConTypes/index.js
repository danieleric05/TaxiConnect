import React from "react";
import { View, Text, Pressable} from "react-native";
import NewConTypeRow from "../NewConTypeRow/index.js";
import styles from './styles.js';

import typesData from '../../assets/data/types';

const NewConTypes = (props) => {
    const confirm =() => {
        console.warn('confirm');
    }

    return (
        <View style={styles.container}>
            {typesData.map((type) => 
            (   <NewConTypeRow type={type}key={type.id} />
            ))}
          
            <Pressable onPress={confirm} 
                        style={{
                            backgroundColor:'black',
                            padding:10,
                            margin:10,
                            alignItems:'center',
                        }} >
                <Text style={{color: 'white', fontWeight: 'bold'}} >Confirm NewConnect</Text>
            </Pressable>
        </View>
    );
};

export default NewConTypes;