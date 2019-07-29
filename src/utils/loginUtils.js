import { AsyncStorage } from "react-native";

let token;

export const getToken = async () => {
	if (token) {
		return Promise.resolve(token);
	}
	token = await AsyncStorage.getItem("AUTH_TOKEN");
	return token;
};

export const signInUser = newToken => {
	return AsyncStorage.setItem("AUTH_TOKEN", newToken);
};

export const signOutUser = () => {
	token = undefined;
	return AsyncStorage.remove("AUTH_TOKEN");
};
