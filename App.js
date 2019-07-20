import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

// Component imports
import Post from "./src/Post/Post";

const App = () => {
	return (
		<View style={styles.container}>
			<Text>Welcome to your home screen</Text>
		</View>
	);
};

// Nav header options
App.navigationOptions = {
	title: "Home",
	headerStyle: {
		backgroundColor: "#373142"
	},
	headerTintColor: "#fff",
	headerTitleStyle: {
		alignSelf: "center",
		textAlign: "center",
		justifyContent: "center",
		flex: 1,
		fontWeight: "bold",
		color: "#fff"
	}
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	}
});

const AppNavigator = createStackNavigator({
	// First page to load because it comes first in order
	Home: {
		screen: App
	},
	Post: {
		screen: Post
	}
});

export default createAppContainer(AppNavigator);
