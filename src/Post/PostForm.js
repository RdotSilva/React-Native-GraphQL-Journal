import React, { useState, setState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

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
				style={styles.title}
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

const styles = StyleSheet.create({
	title: {
		height: 40,
		borderColor: "#333",
		borderWidth: 1
	}
});

export default PostForm;
