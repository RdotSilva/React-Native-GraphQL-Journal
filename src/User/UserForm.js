import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { Form, Item, Input, Label } from "native-base";

const UserForm = props => {
	const [formData, setFormData] = useState({
		email: "",
		password: ""
	});

	const { email, password } = formData;

	submitForm = () => {
		// TODO
	};

	return (
		<Form>
			<Item>
				<Input
					keyboardType="email-address"
					value={email}
					onChangeText={email => setFormData({ ...formData, email })}
					placeholder="Email"
				/>
			</Item>
			<Item>
				<Input
					secureTextEntry
					value={password}
					onChangeText={password => setFormData({ ...formData, password })}
					placeholder="Password"
				/>
			</Item>
			<Button title={props.type} onPress={submitForm} />
		</Form>
	);
};

export default UserForm;
