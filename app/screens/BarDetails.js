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

import Stars from 'react-native-stars';

export default class BarDetails extends Component {

  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoading: false,
      reviews: [],
    };
  }

  // componentDidMount() {
  //   this.barReviews();
  // //     this.setState({
  // //       error: null,
  // //       isLoading: true
  // //     }, function() { this.barReviews(); });
  // //     (error) => this.setState({ error: error.message, isLoading: false }),
  // //     { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  // }

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

  barReviews() {
    const BASE_URL = `https://api.yelp.com/v3/businesses/${this.props.navigation.state.params.id}/reviews`;
    // let urlParams = '&sort_by=distance';

    fetch(`${BASE_URL}`, {
      method: 'get', 
      headers: {
        'Authorization': 'Bearer eCO_zQz_Uu1BfMzvkfnsDFflR5xTwjx4Cd22vlATn4cQ3Grky8b11xs5fcYYL4m5QoK_CIj6XXRLUF-2V3nBlw5cjaFoJImgRzf8-iIqCWgMjcSk9UOxrP8uanabWXYx', 
      }
    })
    .then((response) => response.json())
    .then((responseJson) => { this.setState({ reviews: responseJson })})
    .catch((error) => {
     console.error(error);
    });
  }

  render() {
    // this.barReviews();
    const { params } = this.props.navigation.state;

    return (
      <View>
        <ImageBackground source={{ uri: params.image_url }} style={ styles.container }>
          <View style={styles.backdropView}>
            <Text style={styles.title}>{params.name}</Text>
            <Stars
              value={params.rating}
              half={true}
              spacing={8}
              count={5}
              starSize={20}
              opacity={true}
              backingColor='transparent'
              fullStar= {require('../images/starFilled.png')}
              emptyStar= {require('../images/starEmpty.png')}
              halfStar={require('../images/starHalf.png')}/>
            <Text style={styles.content}>Price: {params.price}</Text>
            <Text style={styles.content}>Phone: {params.display_phone}</Text>
            <Text style={styles.content}>Distance: {this.getMiles(params.distance)}mi</Text>
            <Text style={styles.content}>Reviews: {params.review_count}</Text>
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
    backgroundColor: 'rgba(255,255,255,0.7)',
    width: '80%',
    marginLeft: '10%',
    padding: 20,
  },
  title: {
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    paddingVertical: 10,
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