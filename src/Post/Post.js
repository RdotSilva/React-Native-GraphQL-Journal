import React from "react";
import { View, Text } from "react-native";

const Post = () => {
	return (
		<View>
			<Text>New Page!</Text>
		</View>
	);
};

// Nav header options
Post.navigationOptions = {
	title: "Post",
	headerStyle: {
		backgroundColor: "#373142"
	},
	headerTintColor: "#fff",
	headerTitleStyle: {
		alignSelf: "center",
		textAlign: "center",
		justifyContent: "center",
		flex: 1,
		fontWeight: "bold",
		color: "#fff"
	}
};

export default Post;
