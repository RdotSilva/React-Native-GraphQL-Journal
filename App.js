import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

const App = () => {
	return (
		<View style={styles.container}>
			<Text>Welcome to your home screen</Text>
		</View>
	);
};

// Nav header options
App.navigationOptions = {
	title: "Home"
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
	Home: {
		screen: App
	}
});

export default createAppContainer(AppNavigator);
