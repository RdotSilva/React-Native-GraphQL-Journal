import React from "react";
import { View, Text } from "react-native";
import PostForm from "./PostForm";

const NewPost = () => {
	newPost = () => {};

	return (
		<View>
			<PostForm onSubmit={newPost} />
		</View>
	);
};

export default NewPost;
