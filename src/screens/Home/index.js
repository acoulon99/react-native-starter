import React from 'react';
import {Text, View} from 'react-native';
import Styles from './styles';

export default class Home extends React.Component {
  render() {
    return (
      <View style={Styles.container}>
        <Text style={Styles.text}>{'Home!'}</Text>
      </View>
    );
  }
}
