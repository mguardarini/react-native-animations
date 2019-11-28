import React from 'react'

import SplashScreen from '../screens/splashscreen/Splashscreen';
import HomePage from '../screens/homepage/HomePage';

import { createAppContainer } from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';

const mainNavigation = createAnimatedSwitchNavigator(
  {
    SplashScreen,
    HomePage,
    
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