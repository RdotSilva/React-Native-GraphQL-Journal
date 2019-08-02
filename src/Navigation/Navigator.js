import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { StyleSheet, View, ActivityIndicator, Button } from "react-native";
import { signOutUser } from "../utils/loginUtils";
import { gql } from "apollo-boost";

// Component imports
import Post from "../Post/Post";
import UpdatePost from "../Post/UpdatePost";
import NewPost from "../Post/NewPost";
import Posts from "../Posts/Posts";
import Login from "../User/Login";

import navStyles from "../../assets/stylesheets/navStyles";

// Apollo hooks
import { useQuery } from "@apollo/react-hooks";

// Native Base
import { Fab, Icon } from "native-base";

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
			<Button
				title="Sign Out"
				onPress={() => {
					// Clear cache and resetStore to re-render and return to login screen.
					signOutUser();
					props.screenProps.client.resetStore();
				}}
			/>
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
	},
	UpdatePost: {
		screen: UpdatePost
	}
});

const MainAppNavigator = createAppContainer(AppNavigator);

const NavWrapper = props => {
	const { loading, data, client } = useQuery(USER_QUERY);
	const user = data.user;
	// console.log(client);

	if (loading) return <ActivityIndicator size="large" />;
	if (!data.user) return <Login />;

	return <MainAppNavigator screenProps={{ user, client }} />;
};

const USER_QUERY = gql`
	query userQuery {
		user {
			id
			email
			posts(orderBy: createdAt_DESC) {
				id
				title
			}
		}
	}
`;

export default NavWrapper;
