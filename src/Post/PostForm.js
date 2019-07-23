import React from "react";
import { View, Text, TextInput, Button } from "react-native";

const PostForm = () => {
	return (
		<View>
			<TextInput ref={input => (title = input)} />
			<TextInput ref={input => (body = input)} />
			<Button title="Save Post" onPress={submitForm} />
		</View>
	);
};

export default PostForm;
