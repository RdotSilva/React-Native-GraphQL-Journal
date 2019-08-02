import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import navStyles from "../../assets/stylesheets/navStyles";
import { gql } from "apollo-boost";
import { Fab, Icon, Item } from "native-base";
import { useQuery } from "@apollo/react-hooks";

const Post = props => {
	const { loading, data } = useQuery(postQuery, {
		variables: { id: props.navigation.state.params.id }
	});
	const { Post } = data;

	const updatePost = () => {
		props.navigation.navigate("UpdatePost", {
			id: Post.id,
			title: Post.title
		});
	};

	if (loading) return <ActivityIndicator size="large" />;

	return (
		<View style={styles.container}>
			<Text style={styles.bodyText}>{Post.body}</Text>
			<Fab onPress={updatePost} style={styles.editPost}>
				<Icon name="create" />
			</Fab>
		</View>
	);
};

// Nav header options
Post.navigationOptions = ({ navigation }) => {
	return {
		title: navigation.state.params.title,
		...navStyles
	};
};

const postQuery = gql`
	query Post($id: ID!) {
		Post(id: $id) {
			id
			title
			body
		}
	}
`;

const styles = StyleSheet.create({
	container: {
		padding: 20,
		flex: 1,
		backgroundColor: "#e9e7ed"
	},
	bodyText: {
		fontSize: 16
	},
	editPost: {
		backgroundColor: "#82D8D8"
	}
});

export default Post;
