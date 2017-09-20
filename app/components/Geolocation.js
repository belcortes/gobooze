import React, { Component } from 'react';
import { View, Text } from 'react-native';

// import Bars from '../components/Bars';

class Geolocation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
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
        }, function() { this.barsList(); });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
    
    // console.log('WE SHOULD BE GETTING A LATITUDE HURRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR')
    // console.log(this.state.latitude)
    // this.barsList();
    // console.log('hello hello')
    // console.log(this.state.barData)
    // this.barsList(this.state.latitude, this.state.longitude);
  }

  barsList() {
    // console.log('!!!!!!%%%%%%%%$$$$$$$$*******@@@@@@@@')
    // console.log(this.state.latitude)
    const BASE_URL = `https://api.yelp.com/v3/businesses/search?term=bars&latitude=${this.state.latitude}&longitude=${this.state.longitude}&open_now=true`;
    // console.log(BASE_URL)
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

  render() {
    // console.log(this.state.latitude)
    // this.barsList(this.state.latitude, this.state.longitude);
    // console.log('BAR STATE STARTS HURRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR')
    // console.log(this.state.barData.businesses.last)
    console.log('BAR STATE ENDS HURRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR')
    const bars = this.state.barData.businesses
    // console.log(this.state.barData.total)
    // console.log(this.state.barData === Array)
    // if(bars != undefined) {
    // const renderBar = bars.map((bar, i) => {
    //   return <div>
    //     <h1>{bar.name}</h1>
    //   </div>
    // });
    // }
    // var stringConstructor = "test".constructor;
    // var arrayConstructor = [].constructor;
    // var objectConstructor = {}.constructor;

    // function whatIsIt(bars) {
    //     if (bars === null) {
    //         return "null";
    //     }
    //     else if (bars === undefined) {
    //         return "undefined";
    //     }
    //     else if (bars.constructor === stringConstructor) {
    //         return "String";
    //     }
    //     else if (bars.constructor === arrayConstructor) {
    //         return "Array";
    //     }
    //     else if (bars.constructor === objectConstructor) {
    //         return "Object";
    //     }
    //     else {
    //         return "don't know";
    //     }
    // }
    // console.log(whatIsIt(bars))

    // for (var bar in bars) {
    //   console.log(bars.length) 
    // }
    // const bars = this.state.barData.businesses.map((item, i) => {
    //   return <div>
    //     <h1>{item.name}</h1>
    //   </div>
    // });
    // this.BarsList();
    // for (var i = 0; i < arrayLength; i++) {
    //     alert(myStringArray[i]);
    // }
    // console.log(renderBar)

    return (
      <View>

        <Text>Latitude: { this.state.latitude }</Text>
      </View>
    );
  }
}

export default Geolocation;