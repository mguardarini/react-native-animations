import React, { Component } from 'react';
import {Homepage} from './src/screens/homepage/HomePage';
import Splashscreen from './src/screens/splashscreen/Splashscreen';
import { AppRegistry } from "react-native";
import Routes from "./src/routes/Routes";

AppRegistry.registerComponent('SpongeBob', () => Routes);

export default Routes;
