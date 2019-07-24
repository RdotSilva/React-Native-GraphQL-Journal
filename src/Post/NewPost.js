import React from "react";
import { View, Text } from "react-native";
import PostForm from "./PostForm";

import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const NewPost = props => (
	<Mutation mutation={NEWPOST}>
		{(createPost, { data }) => {
			const { navigation } = props;

			const newPost = ({ title, body }) => {
				createPost({
					variables: { title, body }
				}).then(() => {
					navigation.goBack();
				});
			};

			return (
				<View>
					<PostForm onSubmit={newPost} />
				</View>
			);
		}}
	</Mutation>
);

const NEWPOST = gql`
	mutation NewPost($title: String!, $body: String!) {
		createPost(title: $title, body: $body) {
			id
		}
	}
`;

export default NewPost;
