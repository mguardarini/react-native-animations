import React, { Component, useState, useEffect } from 'react';

import {View,Text,Image,ImageBackground,Animated } from 'react-native';
import styles from './Style.js'
import logoImage from "../../assets/logo.png";
import backgroundImage from "../../assets/splash2.jpeg";

const FadeInView = (props) => {
  const [fadeAnim] = useState(new Animated.Value(0)) 
  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 2000,
      }
    ).start();
  }, [])

  return (
    <Animated.View  
      style={{
        ...props.style,
        opacity: fadeAnim,     
      }}
    >
      {props.children}
    </Animated.View>
  );
}
export default () => {
  return (
        <View style={styles.mainView}>       
            <View>
                <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                    <FadeInView style={styles.fadeIn}>
                            <Image source={logoImage} style={styles.logoImage}/>
                    </FadeInView>
                </ImageBackground >  
            </View>        
        </View>  
    )
}
