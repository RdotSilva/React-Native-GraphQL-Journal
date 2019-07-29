import React from "react";
import { View, Text } from "react-native";
import gql from "graphql-tag";

// Apollo hooks
import { useMutation } from "@apollo/react-hooks";

import UserForm from "./UserForm";
import { signIn } from "../utils/loginUtils";

const LoginUser = props => {
	const [signinUser] = useMutation(SIGN_IN_USER, {
		variables: { email: email, password: password }
	});

	const { email, password } = props;

	loginUser = async ({ email, password }) => {
		try {
			const signIn = await signinUser({
				variables: { email, password }
			});
			signIn(signIn.data.signinUser.token);
		} catch (err) {
			console.log(err);
		}
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
