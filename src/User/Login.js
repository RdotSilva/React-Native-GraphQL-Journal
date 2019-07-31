import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { withApollo } from "react-apollo";

import CreateUser from "./CreateUser";
import LoginUser from "./LoginUser";

const Login = () => {
	const [register, setRegister] = useState(true);

	return (
		<View style={styles.container}>
			{register ? <CreateUser {...props} /> : <LoginUser {...props} />}
			<Button
				onPress={() => setRegister(!register)}
				title={register ? "Login" : "Register"}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center"
	}
});

export default withApollo(Login);
