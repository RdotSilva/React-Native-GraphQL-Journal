import React from "react";
import { View, Text, TextInput, Button } from "react-native";

const PostForm = () => {
	return (
		<View>
			<TextInput ref={input => (title = input)} />
		</View>
	);
};

export default PostForm;
