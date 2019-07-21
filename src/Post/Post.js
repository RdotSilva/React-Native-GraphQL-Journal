import React from "react";
import { View, Text } from "react-native";
import navStyles from "../../assets/stylesheets/navStyles";

const Post = props => {
	console.log(props);
	return (
		<View>
			<Text>{props.navigation.state.params.id}</Text>
		</View>
	);
};

// Nav header options
Post.navigationOptions = {
	title: "Post",
	...navStyles
};

export default Post;
