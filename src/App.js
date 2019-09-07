import React from 'react';
import {useScreens} from 'react-native-screens';
import Navigation from './navigation';

// Configures react-navigation to use screens instead of plain RN Views for rendering screen views
// see: https://github.com/kmagiera/react-native-screens
useScreens();

export default class App extends React.Component {
  render() {
    return <Navigation />;
  }
}
