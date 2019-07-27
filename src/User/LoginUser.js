import React from "react";
import { View, Text } from "react-native";

import UserForm from "./UserForm";

const LoginUser = () => {
	loginUser = () => {
		// TODO
	};
	return (
		<View>
			<Text>Login</Text>
			<UserForm type="Login" onSubmit={loginUser} />
		</View>
	);
};

export default LoginUser;
