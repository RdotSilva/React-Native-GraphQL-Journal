import React from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { compose, graphql, Query } from "react-apollo";
import { gql } from "apollo-boost";

// Native Base
import { List, ListItem, Body, Right, Icon } from "native-base";

// Apollo hooks
import { useQuery } from "@apollo/react-hooks";

const Posts = ({ navigation }) => {
	const { loading, data } = useQuery(POSTS_QUERY);
	const { allPosts } = data;

	if (loading) return <ActivityIndicator size="large" />;

	return (
		<View>
			<List>
				<FlatList
					data={allPosts}
					renderItem={({ item }) => (
						<ListItem
							onPress={() =>
								navigation.navigate("Post", { id: item.id, title: item.title })
							}
						>
							<Body>
								<Text>{item.title}</Text>
							</Body>
							<Right>
								<Icon name="arrow-forward" />
							</Right>
						</ListItem>
					)}
					keyExtractor={item => item.id}
				/>
			</List>
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
		allPosts(orderBy: createdAt_DESC) {
			id
			title
		}
	}
`;

export default Posts;
