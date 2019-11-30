import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Animated
} from 'react-native';

import {
  GenerateHeaderHeight,
  GenerateProfileImageHeight,
  GenerateProfileImageMarginTop,
  GenerateHeaderZindex,
  GenerateHeaderTitleBottom} from './ProfileImageTransition';

import styles from './Style'
import profileImage from "../../assets/me.jpg";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(0)
    };
  }

  render() {
    const scrollY = this.state.scrollY;
    const profileName = "Mr.Sponge"
    return (
      <View style={styles.mainView}>
        <Animated.View
          style={[styles.mainContainer,{
            height: GenerateHeaderHeight(scrollY),
            zIndex: GenerateHeaderZindex(scrollY),
            elevation: GenerateHeaderZindex(scrollY), //required for android
          }]}
        >
          <Animated.View
            style={{ position: 'absolute', bottom: GenerateHeaderTitleBottom(scrollY) }}
          >
            <Text style={styles.mainText}>
              {profileName}
            </Text>
          </Animated.View>
        </Animated.View>

        <ScrollView
          style={{ flex: 1 }}
          scrollEventThrottle={16}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: scrollY } } }
          ])}
        >
          <Animated.View
            style={{
              height: GenerateProfileImageHeight(scrollY),
              width: GenerateProfileImageHeight(scrollY),
              borderRadius: 40,
              borderColor: 'white',
              borderWidth: 3,
              overflow: 'hidden',
              marginTop: GenerateProfileImageMarginTop(scrollY),
              marginLeft: 10
            }}
          >
            <Image
              source={profileImage}
              style={styles.profileImage}
            />
          </Animated.View>
          <View>
            <Text style={styles.profileName}>
              {profileName}
            </Text>
          </View>
          <View style={styles.profileBody} />
        </ScrollView>
      </View>
    );
  }
}
Homepage.navigationOptions = {
  title: "Homepage",
  headerStyle: {
      backgroundColor: '#26B9C8',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    textAlign: 'center'
  }
}
export default Homepage;

