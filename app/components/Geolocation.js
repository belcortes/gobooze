import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

// import Bars from '../components/Bars';
import Carousel from 'react-native-snap-carousel';

class Geolocation extends Component {
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
    // const fetchData = () =>
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

    // const fetchByAll = async () => {
    //   console.log('yooooooo!!!!!')
    //   try {
    //     return await fetchData(`&ll=${this.state.latitude},${this.state.longitude}&open_now=true`)
    //       .then((data) => {
    //         this.setState({ barData: data.results });
    //       });
    //     // return await fetchData(`&location=san francisco&open_now=true`);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
  }

  _renderItem ({item, index}) {
    const bars = this.state.barData.businesses
    const renderBar = bars.map((bar, i) => {
        return (
          <View style={styles.slide}>
            <Text style={styles.title}>{ bar.name }</Text>
            <Text style={styles.content}>{ bar.price }</Text>
            <Text style={styles.content}>{ bar.location.display_address }</Text>
            <Text style={styles.content}>{bar.display_phone}</Text>
            <TouchableOpacity 
              style={styles.buttonContainer} 
              onPress={() => this.onLearnMore(bar)}>
              <Text style={styles.buttonText}>PICK ME!</Text>
            </TouchableOpacity>
          </View>
        )
        // <Text>{bar.name}</Text>
      });

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
    const spinner = this.state.isLoading ? <ActivityIndicator size='large'/> : null
    const bars = this.state.barData.businesses

    
    if (bars != undefined) {

      const renderBar = bars.map((bar, i) => {
        return <Text>{bar.name}</Text>
      });

      return (
        <View>
          <Text>{ renderBar }</Text>
          <Text>Latitude: { this.state.latitude }</Text>
        </View>
      );
    } else {
      return <View>{spinner}</View>;
    }
  }
}

export default Geolocation;