import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import navStyles from "../../assets/stylesheets/navStyles";

import { compose, graphql, Query } from "react-apollo";
import { gql } from "apollo-boost";

// Native Base
import { Fab, Icon } from "native-base";

// Apollo hooks
import { useQuery } from "@apollo/react-hooks";

const Post = props => {
	const { loading, data } = useQuery(postQuery, {
		variables: { id: props.navigation.state.params.id }
	});
	const { Post } = data;

	if (loading) return <ActivityIndicator size="large" />;

	return (
		<View style={styles.container}>
			<Text style={styles.bodyText}>{Post.body}</Text>
			<Fab style={styles.editPost}>
				<Icon name="create" />
			</Fab>
		</View>
	);
};

// const Post = props => (
// 	<Query query={postQuery} variables={{ id: props.navigation.state.params.id }}>
// 		{({ loading, error, data }) => {
// 			const { Post } = data;
// 			if (loading) return <Text>Loading...</Text>;
// 			return (
// 				<View>
// 					<Text>{Post.title}</Text>
// 					<Text>{Post.id}</Text>
// 				</View>
// 			);
// 		}}
// 	</Query>
// );

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
		padding: 20
	},
	bodyText: {
		fontSize: 16
	},
	editPost: {
		backgroundColor: "#82D8D8"
	}
});

export default Post;

// Old method without Query Component:
// export default graphql(postQuery, {
// 	props: ({ data }) => ({ ...data }),
// 	options: ({ navigation }) => ({
// 		variables: { id: navigation.state.params.id }
// 	})
// })(Post);
