import React, { useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import CreateUser from "./CreateUser";
import LoginUser from "./LoginUser";

const Login = () => {
	const [register, setRegister] = useState(true);

	return (
		<View style={styles.container}>
			{register ? <CreateUser /> : <LoginUser />}
			<Button
				color="#8d82a2"
				onPress={() => setRegister(!register)}
				title={register ? "Login" : "Register"}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: "#e9e7ed"
	}
});

export default Login;
