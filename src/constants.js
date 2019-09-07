import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const DEVICE = Object.freeze({
  HEIGHT: height,
  WIDTH: width,
});

export {DEVICE};
