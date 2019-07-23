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
		<Mutation mutation={makeNewPost}>
			{(createPost, { data }) => (
				<View>
					<PostForm onSubmit={newPost} />
				</View>
			)}
		</Mutation>
	);
};

const makeNewPost = gql`
	mutation makeNewPost($title: String!, $body: String!) {
		createPost(title: $title, body: $body) {
			id
		}
	}
`;

export default NewPost;
