import React, { Component, useState, useEffect } from 'react';
import { createAppContainer } from 'react-navigation';
import {View,Text,Image,ImageBackground,Animated } from 'react-native';
import styles from './Style.js'
import logoImage from "../../assets/logo.png";
import backgroundImage from "../../assets/splash2.jpeg";

const FadeInView = (props) => {
  const [fadeAnim] = useState(new Animated.Value(0)) 
  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 2000,
      }
    ).start();
    setInterval(() => {
        props.navigation.navigate('Home');
    }, 4000);
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
export default class Splashscreen extends Component
{
  constructor(props)
  {
    super(props);
  }
  render(){
      return (
            <View style={styles.mainView}>       
                <View>
                    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                        <FadeInView navigation={this.props.navigation} style={styles.fadeIn} navigation={this.props.navigation}>
                                <Image source={logoImage} style={styles.logoImage}/>
                        </FadeInView>
                    </ImageBackground >  
                </View>        
            </View>  
        )
  }
}
