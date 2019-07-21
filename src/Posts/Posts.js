import React from "react";
import { View, Text } from "react-native";
import { compose, graphql } from "react-apollo";
import { gql } from "apollo-boost";

const Posts = props => {
	console.log(props);
	return (
		<View>
			<Text />
		</View>
	);
};

const postsQuery = gql`
	{
		allPosts {
			id
			title
		}
	}
`;

export default graphql(postsQuery, {
	props: ({ data }) => ({ ...data })
})(Posts);
