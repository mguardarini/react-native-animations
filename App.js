import React, { Component } from 'react';
import {Homepage} from './src/screens/homepage/HomePage';
import Splashscreen from './src/screens/splashscreen/Splashscreen';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Splashscreen/>
    );
  }
}
export default App;
