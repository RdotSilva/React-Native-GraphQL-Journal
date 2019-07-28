import React from "react";
import { View, Text } from "react-native";

import UserForm from "./UserForm";

const CreateUser = () => {
	createUser = () => {
		// TODO
	};
	return (
		<View>
			<Text>Register</Text>
			<UserForm type="Register" onSubmit={createUser} />
		</View>
	);
};

export default CreateUser;
