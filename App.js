import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import navStyles from "./assets/stylesheets/navStyles";

// Apollo Import
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

// Component imports
import Post from "./src/Post/Post";
import Posts from "./src/Posts/Posts";

const client = new ApolloClient({
	uri: "https://api.graph.cool/simple/v1/cjybv96jy2msk014182vlh1z0"
});

const App = props => {
	const goToPost = () => {
		props.navigation.navigate("Post");
	};

	return (
		<ApolloProvider client={client}>
			<View style={styles.container}>
				<Posts {...props} />
			</View>
		</ApolloProvider>
	);
};

// Nav header options
App.navigationOptions = {
	title: "Home",
	...navStyles
};

const styles = StyleSheet.create({
	container: {}
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
