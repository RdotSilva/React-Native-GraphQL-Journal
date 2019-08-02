import React, { useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import PostForm from "./PostForm";
import navStyles from "../../assets/stylesheets/navStyles";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

const NewPost = props => {
	const [loading, setLoading] = useState(false);

	const [createPost] = useMutation(NEW_POST, {
		variables: { title: title, body: body },
		refetchQueries: ["userQuery"]
	});

	const { navigation, title, body, screenProps } = props;

	const newPost = ({ title, body }) => {
		setLoading(true);
		createPost({ variables: { title, body, userId: screenProps.user.id } })
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
				<PostForm onSubmit={newPost} />
			)}
		</View>
	);
};

const NEW_POST = gql`
	mutation NewPost($title: String!, $body: String!, $userId: ID!) {
		createPost(title: $title, body: $body, userId: $userId) {
			id
		}
	}
`;

// Nav header options
NewPost.navigationOptions = ({ navigation }) => {
	return {
		title: "New Post",
		headerRight: <View />,
		...navStyles
	};
};

export default NewPost;
