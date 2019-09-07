import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {About, Home} from './screens';

const tabRouteConfig = {
  Home: {
    screen: Home,
    path: 'home',
  },
  About: {
    screen: About,
    path: 'about',
  },
};

const TabsStack = createBottomTabNavigator(tabRouteConfig);

export default createAppContainer(TabsStack);
