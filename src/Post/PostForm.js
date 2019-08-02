import React, { useState, setState } from "react";
import { Button, StyleSheet, View } from "react-native";
import { Form, Item, Input } from "native-base";

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
		<View style={styles.container}>
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
		</View>
	);
};

const styles = StyleSheet.create({
	body: {
		height: 520,
		textAlignVertical: "top"
	},
	container: {
		backgroundColor: "#e9e7ed"
	}
});

PostForm.defaultProps = {
	post: {}
};

export default PostForm;
