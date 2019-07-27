import React from "react";
import { View, Text } from "react-native";

import UserForm from "./UserForm";

const CreateUser = () => {
	createUser = () => {
		// TODO
	};
	return (
		<View>
			<UserForm type="Register" onSubmit={createUser} />
		</View>
	);
};

export default CreateUser;
