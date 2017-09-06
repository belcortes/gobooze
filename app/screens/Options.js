import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';


export default class Options extends Component {
	// constructor(props) {
 //    super(props);

 //    this.state = {
 //      latitude: null,
 //      longitude: null,
 //      error: null,
 //    };
 //  }

	onLearnMore = (screenName) => {
    this.props.navigation.navigate('Bars', { screenName: screenName });
  };

  // componentDidMount() {
  //   navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       this.setState({
  //         latitude: position.coords.latitude,
  //         longitude: position.coords.longitude,
  //         error: null,
  //       });
  //     },
  //     (error) => this.setState({ error: error.message }),
  //     { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
  //   );
  // }

  render() {
    return (
			<View style={styles.container}>
				<View style={styles.logoContainer}>
					<Image 
						style={styles.logo}
						source={require("../images/placeholder.png")} />
				</View>
				<View style={styles.textContainer}>
					<Text style={styles.textStyle}>Welcome to GoBooze</Text>
					<Text style={styles.textStyle}>What are you looking for in a bar?</Text>
				</View>

				<TouchableOpacity 
					style={styles.buttonContainer} 
					onPress={() => this.onLearnMore('Happy Hour')}>
					<Text style={styles.buttonText}>HAPPY HOUR</Text>
				</TouchableOpacity>
				<TouchableOpacity 
					style={styles.buttonContainer} 
					onPress={() => this.onLearnMore('Distance')}>
					<Text style={styles.buttonText}>DISTANCE</Text>
				</TouchableOpacity>
				<TouchableOpacity 
					style={styles.buttonContainer} 
					onPress={() => this.onLearnMore('Ratings')}>
					<Text style={styles.buttonText}>RATINGS</Text>
				</TouchableOpacity>
				<TouchableOpacity 
					style={styles.buttonContainer} 
					onPress={() => this.onLearnMore('Price')}>
					<Text style={styles.buttonText}>PRICE</Text>
				</TouchableOpacity>
			</View>
		)
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20
	},
	logo: {
		height: 50
	},
	logoContainer: {
		alignItems: 'center',
		marginTop: 50
		// flexGrow: 1,
		// justifyContent: 'center'
	},
	textContainer: {
		marginTop: 50,
		alignItems: 'center',
		marginBottom: 50
	},
	textStyle: {
		marginBottom: 10,
		fontSize: 18,
		color: '#383838'
	},
	buttonContainer: {
		backgroundColor: '#F5F5F5',
		paddingVertical: 15,
		marginBottom: 20
	},
	buttonText: {
		textAlign: 'center',
		fontSize: 16,
		fontWeight: '700',
		color: '#909090'
	}
});