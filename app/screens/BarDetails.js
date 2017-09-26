'use strict';

import React, { Component } from 'react';
import getDirections from 'react-native-google-maps-directions'

import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Button
} from 'react-native';

export default class BarDetails extends Component {

  handleGetDirections(lat, long) {
    // console.log(this.props.navigation.state)
    const data = {
       source: {
        latitude: -33.8356372,
        longitude: 18.6947617
      },
      destination: {
        latitude: lat,
        longitude: long
      },
      params: [
        {
          key: "dirflg",
          value: "w"
        }
      ]
    }
 
    getDirections(data)
  }

  getMiles(i) {
    let num = i*0.000621371192
    return Math.round(num * 100) / 100;
  }

  render() {
    const { params } = this.props.navigation.state;

    return (
      <View>
        <ImageBackground source={{ uri: params.image_url }} style={ styles.container }>
          <View style={styles.backdropView}>
            <Text style={styles.content}>{params.name}</Text>
            <Text style={styles.content}>Reviews: {params.review_count}</Text>
            <Text style={styles.content}>Price: {params.price}</Text>
            <Text style={styles.content}>Phone: {params.display_phone}</Text>
            <Text style={styles.content}>Distance: {this.getMiles(params.distance)}mi</Text>
          </View>
          <TouchableOpacity 
            style={styles.buttonContainer}
            onPress={() => this.handleGetDirections(params.coordinates.latitude, params.coordinates.longitude)}>
            <Text style={styles.buttonText}>GO BOOZE!</Text>
          </TouchableOpacity>
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
  backdropView: {
    backgroundColor: 'rgba(255,255,255,0.6)',
    width: '80%',
    marginLeft: '10%',
    padding: 20,
  },
  content: {
    fontSize: 16,
    paddingVertical: 8,
    color: 'black'
  },
  buttonContainer: {
    backgroundColor: '#F5F5F5',
    paddingVertical: 15,
    marginTop: 50,
    width: '80%',
    marginLeft: '10%'
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
    color: '#909090'
  }
});