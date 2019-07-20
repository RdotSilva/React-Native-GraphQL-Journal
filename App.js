import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import navStyles from "./assets/stylesheets/navStyles";

// Component imports
import Post from "./src/Post/Post";

const App = ({ navigation }) => {
	const goToPost = () => {
		navigation.navigate("Post");
	};

	return (
		<View style={styles.container}>
			<Text>Welcome to your home screen</Text>
			<Button onPress={goToPost} title="Go to Post page" />
		</View>
	);
};

// Nav header options
App.navigationOptions = {
	title: "Home",
	...navStyles
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
