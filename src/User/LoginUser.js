import React from "react";
import { View, Text } from "react-native";
import gql from "graphql-tag";

// Apollo hooks
import { useMutation } from "@apollo/react-hooks";

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

const SIGN_IN_USER = gql`
	mutation signinUser($email: String!, $password: String!) {
		signinUser(email: { email: $email, password: $password }) {
			token
		}
	}
`;

export default LoginUser;
