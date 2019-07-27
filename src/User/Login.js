import React from "react";
import { View, Text, StyleSheet } from "react-native";

import CreateUser from "./CreateUser";

const Login = () => {
	return (
		<View style={styles.container}>
			<CreateUser />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center"
	}
});

export default Login;
