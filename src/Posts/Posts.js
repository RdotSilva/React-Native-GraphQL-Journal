import React from "react";
import { View, Text } from "react-native";
import { compose, graphql } from "react-apollo";
import { gql } from "apollo-boost";

const Posts = ({ data }) => {
	console.log(data);
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

export default graphql(postsQuery)(Posts);
