import React, { useState } from "react";
import { View, ActivityIndicator } from "react-native";
import PostForm from "./PostForm";
import navStyles from "../../assets/stylesheets/navStyles";
import gql from "graphql-tag";

// Apollo hooks
import { useMutation, useQuery } from "@apollo/react-hooks";

const UpdatePost = props => {
	const [loading, setLoading] = useState(false);

	const { data } = useQuery(POST_QUERY, {
		variables: { id: props.navigation.state.params.id }
	});
	const { Post } = data;

	const [updatePost] = useMutation(UPDATE_POST, {
		variables: { id: Post.id, title: title, body: body },
		refetchQueries: ["Post"]
	});

	const { navigation, title, body, screenProps } = props;

	const updateUserPost = ({ title, body }) => {
		setLoading(true);
		updatePost({
			variables: { id: Post.id, title, body, userId: screenProps.user.id }
		})
			.then(() => {
				navigation.goBack();
			})
			.catch(error => {
				setLoading(false);
				console.log(error);
			});
	};

	return (
		<View>
			{loading ? (
				<ActivityIndicator size="large" />
			) : (
				<PostForm onSubmit={updateUserPost} post={Post} />
			)}
		</View>
	);
};

const UPDATE_POST = gql`
	mutation updatePost($id: ID!, $title: String!, $body: String!, $userId: ID!) {
		updatePost(id: $id, title: $title, body: $body, userId: $userId) {
			id
		}
	}
`;

const POST_QUERY = gql`
	query Post($id: ID!) {
		Post(id: $id) {
			id
			title
			body
		}
	}
`;

// Nav header options
UpdatePost.navigationOptions = ({ navigation }) => {
	return {
		title: "Update Post",
		headerRight: <View />,
		...navStyles
	};
};

export default UpdatePost;
