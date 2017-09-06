'use strict';

import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import { data } from '../config/yelp';
import Geolocation from '../components/Geolocation';


export default class Bars extends Component {

  onLearnMore = (bar) => {
    this.props.navigation.navigate('BarDetails', { ...bar });
  };

  state = {
    data: data._55.businesses,
  }

  _renderItem ({item, index}) {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{ item.name }</Text>
        <Text style={styles.content}>{ item.price }</Text>
        <Text style={styles.content}>{ item.location.display_address }</Text>
        <Text style={styles.content}>{item.display_phone}</Text>
        <TouchableOpacity 
          style={styles.buttonContainer} 
          onPress={() => this.onLearnMore(item)}>
          <Text style={styles.buttonText}>PICK ME!</Text>
        </TouchableOpacity>
      </View>
    );
  }


  render() {
    return (
      <View>
        <Carousel
          ref={(c) => { this._carousel = c; }}
          data={this.state.data}
          renderItem={this._renderItem.bind(this)}
          sliderWidth={400}
          itemWidth={300}
          style={styles.carousel}
        />
      </View>
      
    )
  }
}

var width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  slide: {
    marginTop: 50,
    width: 300,
    height: 500,
    backgroundColor: '#FF0000',
  },
  carousel: {
    backgroundColor: '#320CE8'
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    paddingVertical: 20,
  },
  content: {
    textAlign: 'center',
    fontSize: 16,
    paddingVertical: 15
  },
  buttonContainer: {
    backgroundColor: '#F5F5F5',
    paddingVertical: 15,
    marginBottom: 20,
    width: '80%',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
    color: '#909090'
  }
});