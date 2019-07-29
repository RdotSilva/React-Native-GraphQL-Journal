import { AsyncStorage } from "react-native";

let token;

export const signIn = newToken => {
	return AsyncStorage.setItem("AUTH_TOKEN", newToken);
};

export const signOut = newToken => {
	token = undefined;
	return AsyncStorage.remove("AUTH_TOKEN");
};
