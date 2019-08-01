import React, { useState, setState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Form, Item, Input, Label } from "native-base";

const PostForm = props => {
	const [formData, setFormData] = useState({
		title: props.post.title || "",
		body: props.post.body || ""
	});

	const { title, body } = formData;

	submitForm = () => {
		props.onSubmit({
			title,
			body
		});
	};

	return (
		<Form>
			<Item>
				<Input
					onChangeText={title => setFormData({ ...formData, title })}
					value={title}
					placeholder="Title"
				/>
			</Item>
			<Item>
				<Input
					multiline
					style={styles.body}
					onChangeText={body => setFormData({ ...formData, body })}
					value={body}
					placeholder="Body"
				/>
			</Item>
			<Button title="Save Post" onPress={submitForm} />
		</Form>
	);
};

const styles = StyleSheet.create({
	body: {
		height: 400,
		textAlignVertical: "top"
	}
});

PostForm.defaultProps = {
	post: {}
};

export default PostForm;
