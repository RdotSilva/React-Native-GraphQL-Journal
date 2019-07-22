import React from "react";
import { View, Text } from "react-native";
import navStyles from "../../assets/stylesheets/navStyles";

import { compose, graphql, Query } from "react-apollo";
import { gql } from "apollo-boost";

const Post = props => {
	const { Post, loading } = props;
	if (loading) return null;
	return (
		<View>
			<Text>{Post.id}</Text>
			<Text>{Post.title}</Text>
		</View>
	);
};

// Nav header options
Post.navigationOptions = {
	title: "Post",
	...navStyles
};

const postQuery = gql`
	query Post($id: ID!) {
		Post(id: $id) {
			id
			title
		}
	}
`;

export default graphql(postQuery, {
	props: ({ data }) => ({ ...data }),
	options: ({ navigation }) => ({
		variables: { id: navigation.state.params.id }
	})
})(Post);
