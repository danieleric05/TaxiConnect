import React from "react";
import {View,Text} from "react-native";

import styles from "./style";

const CovidMessage  = (props) =>{
    return(
        <View style={styles.container}> 
            <Text style={styles.title}>Travel Only if necessary</Text>
            <Text style={styles.text}>Some of the sites you've enabled require new permissions to keep working. Click the highlighted sites to approve these permissions.
                    Choose sites below to enable News Feed Eradicator. When you enable a site, we'll request your permission to modify that site.
            </Text>
            <Text style={styles.learnMore}>
                Learn more
            </Text>
        </View>
    );
};

export default CovidMessage;