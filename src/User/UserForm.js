import React, { useState } from "react";
import { Button } from "react-native";
import { Form, Item, Input } from "native-base";

const UserForm = props => {
	const [formData, setFormData] = useState({
		email: "",
		password: ""
	});

	const { email, password } = formData;

	submitForm = () => {
		const { email, password } = formData;
		props.onSubmit({
			email,
			password
		});
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
			<Button color="#665b7a" title={props.type} onPress={submitForm} />
		</Form>
	);
};

export default UserForm;
