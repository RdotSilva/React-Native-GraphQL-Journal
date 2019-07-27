import React from "react";
import { View, Text, Button } from "react-native";
import { Form, Item, Input, Label } from "native-base";

const UserForm = () => {
	return (
		<Form>
			<Item>
				<Input
					keyboardType="email-address"
					value={email}
					onChangeText={email => setFormData({ ...formData, email })}
				/>
			</Item>
			<Item />
		</Form>
	);
};

export default UserForm;
