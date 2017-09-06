import React from 'react';
import { StackNavigator } from 'react-navigation';

import Options from '../screens/Options';
import Bars from '../screens/Bars';
import BarDetails from '../screens/BarDetails';

export const BarsStack = StackNavigator({

  Home: { 
    screen: Options,
    navigationOptions: {
      title: 'Options',
    },
  },
  Bars: { 
    screen: Bars,
    navigationOptions: ({ navigation }) => ({
      title: `by ${navigation.state.params.screenName}`
    })
  },
  BarDetails: { 
    screen: BarDetails,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name}`
    })
  }
});

