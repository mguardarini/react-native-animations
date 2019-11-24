import React, { Component } from 'react';

import {View,Text,Image,ImageBackground,Animated } from 'react-native';
import styles from './Style.js'
import logoImage from "../../assets/logo.png";
import backgroundImage from "../../assets/splash2.jpeg";

class Splashscreen extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={styles.mainView}>       
                <View>
                    <ImageBackground  
                      source={backgroundImage}
                      style={styles.backgroundImage}
                    >
                    <Image source={logoImage} style={styles.logoImage}/>
                    </ImageBackground >  
                     
                </View>
             
            </View>
        )
    }
}

export {Splashscreen};
