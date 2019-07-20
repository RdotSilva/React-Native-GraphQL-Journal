import React from "react";
import { View, Text } from "react-native";
import navStyles from "../../assets/stylesheets/navStyles";

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
	...navStyles
};

export default Post;
