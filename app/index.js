import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button
} from 'react-native';

import {BarsStack} from './config/router.js'

class GoBooze extends Component {
  render() {
    return <BarsStack />
  }
}

export default GoBooze;