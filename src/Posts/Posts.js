import React from "react";
import { View, Text, FlatList } from "react-native";
import { compose, graphql, Query } from "react-apollo";
import { gql } from "apollo-boost";

// Apollo hooks
import { useQuery } from "@apollo/react-hooks";

const Posts = ({ navigation }) => {
	const { loading, data } = useQuery(POSTS_QUERY);
	const { allPosts } = data;

	if (loading) return <Text>Loading...</Text>;

	return (
		<View>
			<FlatList
				data={allPosts}
				renderItem={({ item }) => (
					<Text
						onPress={() =>
							navigation.navigate("Post", { id: item.id, title: item.title })
						}
					>
						{item.title}
					</Text>
				)}
				keyExtractor={item => item.id}
			/>
		</View>
	);
};

// const Posts = ({ navigation }) => (
// 	<Query query={postsQuery}>
// 		{({ loading, data: { allPosts } }) => {
// 			if (loading) return <Text>Loading...</Text>;
// return (
// 	<View>
// 		<FlatList
// 			data={allPosts}
// 			renderItem={({ item }) => (
// 				<Text
// 					onPress={() => navigation.navigate("Post", { id: item.id })}
// 				>
// 					{item.title}
// 				</Text>
// 			)}
// 			keyExtractor={item => item.id}
// 		/>
// 	</View>
// );
// 		}}
// 	</Query>
// );

const POSTS_QUERY = gql`
	query postsQuery {
		allPosts {
			id
			title
		}
	}
`;

export default Posts;
