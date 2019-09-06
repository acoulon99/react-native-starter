import {
    AppRegistry,
    YellowBox,
} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

/**
 * Ignored Warnings
 */
YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated', // triggered by 3rd party module
]);

AppRegistry.registerComponent(appName, () => App);
