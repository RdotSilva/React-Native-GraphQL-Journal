import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { StyleSheet, View } from "react-native";

import navStyles from "../../assets/stylesheets/navStyles";

// Component imports
import Post from "../Post/Post";
import Posts from "../Posts/Posts";
import App from "../../App";

const Home = props => {
	const goToPost = () => {
		props.navigation.navigate("Post");
	};

	return (
		<View style={styles.container}>
			<Posts {...props} />
		</View>
	);
};

// Nav header options
Home.navigationOptions = {
	title: "Home",
	...navStyles
};

const styles = StyleSheet.create({
	container: {}
});

const AppNavigator = createStackNavigator({
	// First page to load because it comes first in order
	Home: {
		screen: Home
	},
	Post: {
		screen: Post
	}
});

export default createAppContainer(AppNavigator);
