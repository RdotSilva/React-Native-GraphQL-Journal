import React from "react";
import { View, Text } from "react-native";
import PostForm from "./PostForm";

import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const NewPost = props => {
	return (
		<Mutation mutation={NEWPOST}>
			{(createPost, { data }) => (
				<View>
					<PostForm
						onSubmit={({ title, body }) => {
							createPost({
								variables: { title, body }
							})
								.then(res => res)
								.catch(err => console.log(err));
						}}
					/>
				</View>
			)}
		</Mutation>
	);
};

const NEWPOST = gql`
	mutation NewPost($title: String!, $body: String!) {
		createPost(title: $title, body: $body) {
			id
		}
	}
`;

export default NewPost;
