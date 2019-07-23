import React from "react";
import { View, Text } from "react-native";
import PostForm from "./PostForm";

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

export default NewPost;
