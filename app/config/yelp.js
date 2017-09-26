// const BASE_URL = `https://api.yelp.com/v3/businesses/search?term=bars&latitude=${this.state.latitude}&longitude=${this.state.longitude}&open_now=true`;

    // fetch(`${BASE_URL}`, {
    //   method: 'get', 
    //   headers: {
    //     'Authorization': 'Bearer eCO_zQz_Uu1BfMzvkfnsDFflR5xTwjx4Cd22vlATn4cQ3Grky8b11xs5fcYYL4m5QoK_CIj6XXRLUF-2V3nBlw5cjaFoJImgRzf8-iIqCWgMjcSk9UOxrP8uanabWXYx', 
    //   }
    // })


// const BASE_URL = 'https://api.yelp.com/v3/businesses/search?term=bars';

yelpAPI(lat, long, screenName) {

  const BASE_URL = `https://api.yelp.com/v3/businesses/search?term=bars&latitude=${lat}&longitude=${long}&open_now=true`;

  const fetchData = params =>

    fetch(`${BASE_URL}${params}`, {
      method: 'get', 
      headers: {
        'Authorization': 'Bearer eCO_zQz_Uu1BfMzvkfnsDFflR5xTwjx4Cd22vlATn4cQ3Grky8b11xs5fcYYL4m5QoK_CIj6XXRLUF-2V3nBlw5cjaFoJImgRzf8-iIqCWgMjcSk9UOxrP8uanabWXYx', 
      }
    })
    .then(res => res.json());

  const fetchByHH = async () => {
    // console.log('yooooooo!!!!!')
    try {
      // console.log(navigator.geolocation.getCurrentPosition())
      // return await fetchData(`&ll=${lat},${long}&open_now=true`);
      return await fetchData(`&location=san francisco&open_now=true`);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchByDistance = async () => {
    // console.log('yooooooo!!!!!')
    try {
      // console.log(navigator.geolocation.getCurrentPosition())
      // return await fetchData(`&ll=${lat},${long}&open_now=true`);
      return await fetchData(`&location=san francisco&open_now=true`);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchByRatings = async () => {
    // console.log('yooooooo!!!!!')
    try {
      // console.log(navigator.geolocation.getCurrentPosition())
      // return await fetchData(`&ll=${lat},${long}&open_now=true`);
      return await fetchData(`&location=san francisco&open_now=true`);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchByPrice = async () => {
    // console.log('yooooooo!!!!!')
    try {
      // console.log(navigator.geolocation.getCurrentPosition())
      // return await fetchData(`&ll=${lat},${long}&open_now=true`);
      return await fetchData(`&location=san francisco&open_now=true`);
    } catch (err) {
      console.log(err);
    }
  };

  export fetchByAll()
}



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