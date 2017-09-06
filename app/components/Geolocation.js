import React, { Component } from 'react';
import { View, Text } from 'react-native';

const BASE_URL = 'https://api.yelp.com/v3/businesses/search?term=bars';



// const fetchData = params =>

//   fetch(`${BASE_URL}${params}`, {
//     method: 'get', 
//     headers: {
//       'Authorization': 'Bearer eCO_zQz_Uu1BfMzvkfnsDFflR5xTwjx4Cd22vlATn4cQ3Grky8b11xs5fcYYL4m5QoK_CIj6XXRLUF-2V3nBlw5cjaFoJImgRzf8-iIqCWgMjcSk9UOxrP8uanabWXYx', 
//     }
//   })
//   .then(res => res.json());

// const fetchByAll = async () => {
//   console.log('yooooooo!!!!!')
//   try {
//     // console.log(navigator.geolocation.getCurrentPosition())
//     // return await fetchData(`&ll=${ll.lat},${ll.lon}&open_now=true`);
//     return await fetchData(`&location=san francisco&open_now=true`);
//   } catch (err) {
//     console.log(err);
//   }
// };
// export const data = fetchByAll()


class Geolocation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
    };
  }

  api() {
    const BASE_URL = 'https://api.yelp.com/v3/businesses/search?term=bars';

    const fetchData = params =>

      fetch(`${BASE_URL}${params}`, {
        method: 'get', 
        headers: {
          'Authorization': 'Bearer eCO_zQz_Uu1BfMzvkfnsDFflR5xTwjx4Cd22vlATn4cQ3Grky8b11xs5fcYYL4m5QoK_CIj6XXRLUF-2V3nBlw5cjaFoJImgRzf8-iIqCWgMjcSk9UOxrP8uanabWXYx', 
        }
      })
      .then(res => res.json());

    const fetchByAll = async () => {
      console.log('yooooooo!!!!!')
      try {
        // console.log(navigator.geolocation.getCurrentPosition())
        return await fetchData(`&ll=${this.state.latitude},${this.state.longitude}&open_now=true`);
        // return await fetchData(`&location=san francisco&open_now=true`);
      } catch (err) {
        console.log(err);
      }
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  render() {
    return (
      <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Latitude: {this.state.latitude}</Text>
        <Text>Longitude: {this.state.longitude}</Text>
        {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
      </View>
    );
  }
}

export default Geolocation;