import React from 'react';
import {Text, View} from 'react-native';
import Styles from './styles';
import {useJoke} from '../../hooks';

export default function Home(props) {
  const joke = useJoke();

  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>{'Home!'}</Text>
      <Text style={Styles.text}>{joke}</Text>
    </View>
  );
}
