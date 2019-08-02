import React from "react";
import { View, Text } from "react-native";
import gql from "graphql-tag";

// Apollo hooks
import { useMutation, useApolloClient } from "@apollo/react-hooks";

import UserForm from "./UserForm";
import { signInUser } from "../utils/loginUtils";

const CreateUser = props => {
	const client = useApolloClient();

	const [makeUser] = useMutation(CREATE_USER, {
		variables: { email: email, password: password }
	});

	const [signinUser] = useMutation(SIGN_IN_USER, {
		variables: { email: email, password: password }
	});

	const { email, password } = props;

	createUser = async ({ email, password }) => {
		try {
			const user = await makeUser({
				variables: { email, password }
			});
			const signIn = await signinUser({
				variables: { email, password }
			});
			signInUser(signIn.data.signinUser.token);
			client.resetStore();
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<View>
			<Text>Register</Text>
			<UserForm type="Register" onSubmit={createUser} />
		</View>
	);
};

const CREATE_USER = gql`
	mutation createUser($email: String!, $password: String!) {
		createUser(
			authProvider: { email: { email: $email, password: $password } }
		) {
			id
		}
	}
`;

const SIGN_IN_USER = gql`
	mutation signinUser($email: String!, $password: String!) {
		signinUser(email: { email: $email, password: $password }) {
			token
		}
	}
`;

export default CreateUser;
