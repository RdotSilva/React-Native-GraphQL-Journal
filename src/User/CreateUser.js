import React from "react";
import { View, Text } from "react-native";
import gql from "graphql-tag";
import { compose } from "react-apollo";

// Apollo hooks
import { useMutation } from "@apollo/react-hooks";

import UserForm from "./UserForm";

const CreateUser = props => {
	const [createUser] = useMutation(CREATE_USER, {
		variables: { email: email, password: password }
	});

	const { email, password } = props;

	createUser = async ({ email, password }) => {
		try {
			const user = await createUser({
				variable: { email, password }
			});
			const signIn = await SIGN_IN_USER;
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
	mutation signInUser($email: String!, $password: String!) {
		signInUser(email: $email, password: $password) {
			token
		}
	}
`;

export default CreateUser;
