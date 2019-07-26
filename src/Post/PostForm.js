import React, { useState, setState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Form, Item, Input, Label } from "native-base";

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
		<Form>
			<Item floatingLabel>
				<Label>Title</Label>
				<Input
					onChangeText={title => setFormData({ ...formData, title })}
					value={title}
				/>
			</Item>
			<Item floatingLabel>
				<Label>Body</Label>
				<Input
					multiline
					style={styles.body}
					onChangeText={body => setFormData({ ...formData, body })}
					value={body}
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

export default PostForm;
