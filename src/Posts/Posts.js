import React from "react";
import { View, Text, FlatList } from "react-native";

// Native Base
import { List, ListItem, Body, Right, Icon } from "native-base";

const Posts = ({ navigation, screenProps }) => {
	return (
		<View>
			<List>
				<FlatList
					data={screenProps.user.posts}
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

// NO LONGER NEEDED - screenProps replaces this.
// const POSTS_QUERY = gql`
// 	query postsQuery {
// 		allPosts(orderBy: createdAt_DESC) {
// 			id
// 			title
// 		}
// 	}
// `;

export default Posts;
