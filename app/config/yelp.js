var React = require('react-native');

// var GeolocationExample = React.createClass({
//   constructor(props) {
//     super(props);

//     this.state = {
//       latitude: null,
//       longitude: null,
//       error: null,
//     };
//   }

//   componentDidMount() {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         this.setState({
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//           error: null,
//         });
//       },
//       (error) => this.setState({ error: error.message }),
//       { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
//     );
//     console.log(this.state.lat)
//   },

//   render: function() {
//     return (
//       <View>
//         <Text>
//           <Text style={styles.title}>Initial position: </Text>
//           {this.state.initialPosition}
//         </Text>
//         <Text>
//           <Text style={styles.title}>Current position: </Text>
//           {this.state.lastPosition}
//         </Text>
//       </View>
//     );
//   }
// });


const BASE_URL = 'https://api.yelp.com/v3/businesses/search?term=bars';



const fetchData = params =>

  fetch(`${BASE_URL}${params}`, {
    method: 'get', 
    headers: {
      'Authorization': 'Bearer eCO_zQz_Uu1BfMzvkfnsDFflR5xTwjx4Cd22vlATn4cQ3Grky8b11xs5fcYYL4m5QoK_CIj6XXRLUF-2V3nBlw5cjaFoJImgRzf8-iIqCWgMjcSk9UOxrP8uanabWXYx', 
    }
  })
  .then(res => res.json());

const fetchByAll = async (lat, long) => {
  // console.log('yooooooo!!!!!')
  try {
    // console.log(navigator.geolocation.getCurrentPosition())
    // return await fetchData(`&ll=${lat},${long}&open_now=true`);
    return await fetchData(`&location=san francisco&open_now=true`);
  } catch (err) {
    console.log(err);
  }
};
export const data = fetchByAll()

// export const fetchMoviesSimilar = async movieId => {
//   try {
//     return await fetchData(`movie/${movieId}/similar`);
//   } catch (err) {
//     console.log(err);
//   }
// };

// export const fetchMovieTrailers = async movieId => {
//   try {
//     return await fetchData(`movie/${movieId}/videos`);
//   } catch (err) {
//     console.log(err);
//   }
// };