import React from "react";
import { View, Text, Button } from "react-native";
import { Form, Item, Input, Label } from "native-base";

const UserForm = () => {
	const [formData, setFormData] = useState({
		email: "",
		password: ""
	});

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
		</Form>
	);
};

export default UserForm;
