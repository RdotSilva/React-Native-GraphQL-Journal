import React, { useState, setState } from "react";
import { View, Text, TextInput, Button } from "react-native";

const PostForm = props => {
	const [formData, setFormData] = useState({
		title: "",
		body: ""
	});

	const { title, body } = formData;

	submitForm = () => {
		props.onSubmit({
			title,
			body
		});
	};

	return (
		<View>
			<TextInput
				onChangeText={title => setFormData({ ...formData, title })}
				value={title}
				placeholder="Title"
			/>
			<TextInput
				onChangeText={body => setFormData({ ...formData, body })}
				value={body}
				placeholder="Body"
			/>
			<Button title="Save Post" onPress={submitForm} />
		</View>
	);
};

export default PostForm;
