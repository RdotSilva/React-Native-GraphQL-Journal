import React from "react";
import { View, Text } from "react-native";
import navStyles from "../../assets/stylesheets/navStyles";

import { compose, graphql, Query } from "react-apollo";
import { gql } from "apollo-boost";

const Post = props => (
	<Query query={postQuery} variables={{ id: props.navigation.state.params.id }}>
		{({ loading, error, data }) => {
			const { Post } = data;
			if (loading) return <Text>Loading...</Text>;
			return (
				<View>
					<Text>{Post.title}</Text>
					<Text>{Post.id}</Text>
				</View>
			);
		}}
	</Query>
);

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

export default Post;

// Old method without Query Component:
// export default graphql(postQuery, {
// 	props: ({ data }) => ({ ...data }),
// 	options: ({ navigation }) => ({
// 		variables: { id: navigation.state.params.id }
// 	})
// })(Post);
