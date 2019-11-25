import SplashScreen from '../screens/splashscreen/SplashScreen.js';
import HomePage from '../screens/homepage/Homepage.js';

import { createAppContainer, createStackNavigator } from 'react-navigation';

const Routes = createAppContainer(
  createStackNavigator({
    SplashScreen: SplashScreen,
    HomePage: HomePage,
  })
);

export default Routes;