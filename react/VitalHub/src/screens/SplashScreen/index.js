import { Image, View ,StyleSheet} from "react-native";
import React from 'react';

export default function index() {
    return(
        <View style={styles.container}>
            <Image source={require('../../../assets/Splash Screen - 2 (1).png')}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
  });
  