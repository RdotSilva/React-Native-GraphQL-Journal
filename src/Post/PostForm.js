import React, { useState, setState } from "react";
import { View, Text, TextInput, Button } from "react-native";

const PostForm = props => {
	submitForm = () => {
		props.onSubmit({
			title: title,
			body: body
		});
	};

	return (
		<View>
			<TextInput onChangeText={title => setFormData({ title })} value={title} />
			<TextInput onChangeText={body => setFormData({ body })} value={body} />
			<Button title="Save Post" onPress={submitForm} />
		</View>
	);
};

export default PostForm;
