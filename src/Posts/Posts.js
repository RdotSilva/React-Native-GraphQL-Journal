import React from "react";
import { View, Text, FlatList } from "react-native";
import { compose, graphql } from "react-apollo";
import { gql } from "apollo-boost";

const Posts = ({ loading, allPosts }) => {
	if (loading) return null;
	return (
		<View>
			<FlatList
				data={allPosts}
				renderItem={({ item }) => <Text>{item.title}</Text>}
				keyExtractor={item => item.id}
			/>
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
