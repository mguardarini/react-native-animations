import React from 'react'

import SplashScreen from '../screens/splashscreen/Splashscreen';
import HomeScreen from '../screens/homepage/HomePage';
import {createStackNavigator} from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';


const SplashStack = createStackNavigator({ Splash: SplashScreen });
const HomeStack = createStackNavigator({ Home: HomeScreen });


const mainNavigation = createAnimatedSwitchNavigator(
  {
    Splash: SplashStack,
    Home: HomeStack,
  },
  {
    transition: (
      <Transition.Together>
        <Transition.Out
          type="slide-bottom"
          durationMs={400}
          interpolation="easeIn"
        />
        <Transition.In type="fade" durationMs={500} />
      </Transition.Together>
    ),
  },
);

export default createAppContainer(mainNavigation);