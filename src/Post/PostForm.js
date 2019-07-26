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
					style={styles.title}
					onChangeText={title => setFormData({ ...formData, title })}
					value={title}
					placeholder="Title"
				/>
				>
			</Item>

			<TextInput
				style={styles.body}
				onChangeText={body => setFormData({ ...formData, body })}
				value={body}
				placeholder="Body"
			/>
			<Button title="Save Post" onPress={submitForm} />
		</Form>
	);
};

const styles = StyleSheet.create({
	title: {
		height: 40,
		borderColor: "#333",
		borderWidth: 1
	},
	body: {
		height: 400,
		borderColor: "#333",
		borderWidth: 1,
		textAlignVertical: "top"
	}
});

export default PostForm;
