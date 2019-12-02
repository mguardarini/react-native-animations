import React, { Component, useState, useEffect } from 'react';
import { createAppContainer } from 'react-navigation';
import {View,Text,Image,ImageBackground,Animated } from 'react-native';
import styles from './Style.js'
import logoImage from "../../assets/logo.png";
import backgroundImage from "../../assets/splash2.jpeg";
import { useNavigation } from 'react-navigation-hooks'


const FadeInView = (props) => {
  const [fadeAnim] = useState(new Animated.Value(0)) 
  const { navigate } = useNavigation();

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 2000,
      }
    ).start();
    setInterval(() => {
        navigate('Home');
    }, 2000);
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

const Splashscreen = (props) => {
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

Splashscreen.navigationOptions = {
  title: "Welcome to Spongebob world",
  headerStyle: {
      backgroundColor: '#0457A0',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    textAlign: 'center'
  }
}

export default Splashscreen;