import React from "react";
import { View, Text } from "react-native";
import PostForm from "./PostForm";

import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const NewPost = props => {
	newPost = ({ title, body }) => {
		console.log(title, body);
	};

	return (
		<View>
			<PostForm onSubmit={newPost} />
		</View>
	);
};

const newPost = gql`
	mutation newPost($title: String!, $body: String!) {
		createPost(title: $title, body: $body) {
			id
		}
	}
`;

export default NewPost;
