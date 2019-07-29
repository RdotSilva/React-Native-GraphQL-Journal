import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";

import navStyles from "../../assets/stylesheets/navStyles";

import { gql } from "apollo-boost";

// Apollo hooks
import { useQuery } from "@apollo/react-hooks";

// Native Base
import { Fab, Icon } from "native-base";

// Component imports
import Post from "../Post/Post";
import NewPost from "../Post/NewPost";
import Posts from "../Posts/Posts";
import Login from "../User/Login";

const Home = props => {
	const goToPost = () => {
		props.navigation.navigate("Post");
	};

	const newPost = () => {
		props.navigation.navigate("NewPost");
	};

	return (
		<View style={styles.container}>
			<Posts {...props} />
			<Fab onPress={newPost} style={styles.newPost}>
				<Icon name="add" />
			</Fab>
		</View>
	);
};

// Nav header options
Home.navigationOptions = {
	title: "Home",
	...navStyles
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "space-between"
	},
	newPost: {
		backgroundColor: "#82D8D8"
	},
	newPostText: {
		fontSize: 20,
		textAlign: "center"
	}
});

const AppNavigator = createStackNavigator({
	// First page to load because it comes first in order
	Home: {
		screen: Home
	},
	Post: {
		screen: Post
	},
	NewPost: {
		screen: NewPost
	}
});

const NavWrapper = props => {
	return <Login />;
	return <AppNavigator />;
};

const USER_QUERY = gql`
	query userQuery {
		user {
			id
			email
		}
	}
`;

export default NavWrapper;

// export default createAppContainer(AppNavigator);
