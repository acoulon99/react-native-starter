import React from 'react';
import {Text, View} from 'react-native';
import Styles from './styles';
import {useJoke} from '../../hooks';

export default function About(props) {
  const joke = useJoke();

  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>{'About!'}</Text>
      <Text style={Styles.text}>{joke}</Text>
    </View>
  );
}
