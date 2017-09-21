'use strict';

import React, { Component } from 'react';

import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
} from 'react-native';

export default class BarDetails extends Component {

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View>
        <ImageBackground source={{ uri: params.image_url }} style={ styles.container }>
          <Text>{params.name}</Text>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
});