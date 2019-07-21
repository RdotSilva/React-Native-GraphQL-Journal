import React from "react";
import { View, Text, FlatList } from "react-native";
import { compose, graphql, Query } from "react-apollo";
import { gql } from "apollo-boost";

const Posts = ({ navigation }) => (
	<Query query={postsQuery}>
		{({ loading, data: { allPosts } }) => {
			if (loading) return <Text>Loading...</Text>;
			return (
				<View>
					<FlatList
						data={allPosts}
						renderItem={({ item }) => (
							<Text onPress={() => navigation.navigate("Post")}>
								{item.title}
							</Text>
						)}
						keyExtractor={item => item.id}
					/>
				</View>
			);
		}}
	</Query>
);

const postsQuery = gql`
	{
		allPosts {
			id
			title
		}
	}
`;

export default Posts;
