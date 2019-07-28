import React from "react";
import { View, Text } from "react-native";
import gql from "graphql-tag";
import { compose } from "react-apollo";

// Apollo hooks
import { useMutation } from "@apollo/react-hooks";

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

const createUser = gql`
	mutation createUser($email: String!, $password: String!) {
		createUser(
			authProvider: { email: { email: $email, password: $password } }
		) {
			id
		}
	}
`;

const signInUser = gql`
	mutation signInUser($email: String!, $password: String!) {
		signInUser(email: $email, password: $password) {
			token
		}
	}
`;

export default CreateUser;
