import React from "react";
import { View, Text } from "react-native";
import PostForm from "./PostForm";

import gql from "graphql-tag";
import { Mutation } from "react-apollo";

// Apollo hooks
import { useMutation } from "@apollo/react-hooks";

const NewPost = props => {
	const [createPost] = useMutation(NEW_POST, {
		variables: { title: title, body: body }
	});

	const { navigation, title, body } = props;

	const newPost = ({ title, body }) => {
		createPost({ variables: { title, body } }).then(navigation.goBack());
	};

	return (
		<View>
			<PostForm onSubmit={newPost} />
		</View>
	);
};

// const NewPost = props => (
// 	<Mutation mutation={NEWPOST}>
// 		{(createPost, { data }) => {
// 			const { navigation } = props;

// 			const newPost = ({ title, body }) => {
// 				createPost({
// 					variables: { title, body }
// 				}).then(() => {
// 					navigation.goBack();
// 				});
// 			};

// 			return (
// 				<View>
// 					<PostForm onSubmit={newPost} />
// 				</View>
// 			);
// 		}}
// 	</Mutation>
// );

const NEW_POST = gql`
	mutation NewPost($title: String!, $body: String!) {
		createPost(title: $title, body: $body) {
			id
		}
	}
`;

export default NewPost;
