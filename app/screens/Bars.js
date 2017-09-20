'use strict';

import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
  Image
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

export default class Bars extends Component {

  onLearnMore = (bar) => {
    this.props.navigation.navigate('BarDetails', { ...bar });
  };

  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
      isLoading: false,
      barData: [],
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
          isLoading: true
        }, function() { this.barsList(); });
      },
      (error) => this.setState({ error: error.message, isLoading: false }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  barsList() {
    const BASE_URL = `https://api.yelp.com/v3/businesses/search?term=bars&latitude=${this.state.latitude}&longitude=${this.state.longitude}&open_now=true`;

    fetch(`${BASE_URL}`, {
      method: 'get', 
      headers: {
        'Authorization': 'Bearer eCO_zQz_Uu1BfMzvkfnsDFflR5xTwjx4Cd22vlATn4cQ3Grky8b11xs5fcYYL4m5QoK_CIj6XXRLUF-2V3nBlw5cjaFoJImgRzf8-iIqCWgMjcSk9UOxrP8uanabWXYx', 
      }
    })
    .then((response) => response.json())
    .then((responseJson) => { this.setState({ barData: responseJson })})
    .catch((error) => {
     console.error(error);
    });
  }

  _renderItem ({item, index}) {
    return (
      <Image source={{ uri: item.image_url }} style={styles.slide}>
        <View style={styles.backdropView}>
          <Text style={styles.title}>{ item.name }</Text>
          <Text style={styles.content}>{ item.price }</Text>
          <Text style={styles.content}>{ item.location.display_address }</Text>
          <Text style={styles.content}>{item.display_phone}</Text>
        </View>
        <TouchableOpacity 
          style={styles.buttonContainer} 
          onPress={() => this.onLearnMore(item)}>
          <Text style={styles.buttonText}>PICK ME!</Text>
        </TouchableOpacity>
      </Image>
    );
  }

  render() {
    const spinner = this.state.isLoading ? <ActivityIndicator size='large'/> : null
    const bars = this.state.barData.businesses
    // console.log(bars)
    if (bars != undefined) {
      return (
        <View>
          <Carousel
            ref={(c) => { this._carousel = c; }}
            data={bars}
            renderItem={this._renderItem.bind(this)}
            sliderWidth={400}
            itemWidth={300}
            style={styles.carousel}
          />
        </View>
      )
    } else {
      return <View>{spinner}</View>;
    }
    
  }
}

var width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  slide: {
    marginTop: 50,
    width: 300,
    height: 500,
    justifyContent: 'center',
  },
  backdropView: {
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  carousel: {
    backgroundColor: '#320CE8'
  },
  title: {
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    paddingVertical: 20,
  },
  content: {
    textAlign: 'center',
    fontSize: 16,
    paddingVertical: 15,
    color: 'black'
  },
  buttonContainer: {
    backgroundColor: '#F5F5F5',
    paddingVertical: 15,
    marginTop: 50,
    width: '60%',
    marginLeft: '20%'
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
    color: '#909090'
  }
});