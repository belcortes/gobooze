import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';


export default class Options extends Component {

	onLearnMore = (screenName) => {
    // this.props.navigation.navigate('Bars', { screenName: screenName });
    this.props.navigation.navigate(screenName, { screenName: screenName });
  };

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
					onPress={() => this.onLearnMore('HappyHour')}>
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
		padding: 20,
		backgroundColor: 'black'
	},
	logo: {
		height: 50
	},
	logoContainer: {
		alignItems: 'center',
		marginTop: 50
	},
	textContainer: {
		marginTop: 50,
		alignItems: 'center',
		marginBottom: 50,
	},
	textStyle: {
		marginBottom: 10,
		fontSize: 18,
		color: 'white'
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