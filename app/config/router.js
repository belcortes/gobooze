import React from 'react';
import { StackNavigator } from 'react-navigation';

import Options from '../screens/Options';
import Bars from '../screens/Bars';
import Distance from '../screens/Distance';
import Price from '../screens/Price';
import Ratings from '../screens/Ratings';
import HappyHour from '../screens/HappyHour';
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
  Distance: { 
    screen: Distance,
    navigationOptions: ({ navigation }) => ({
      title: 'by Distance'
    })
  },
  Price: { 
    screen: Price,
    navigationOptions: ({ navigation }) => ({
      title: 'by Price'
    })
  },
  Ratings: { 
    screen: Ratings,
    navigationOptions: ({ navigation }) => ({
      title: 'by Rating'
    })
  },
  HappyHour: { 
    screen: HappyHour,
    navigationOptions: ({ navigation }) => ({
      title: 'by Happy Hour'
    })
  },
  BarDetails: { 
    screen: BarDetails,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name}`
    })
  }
});

