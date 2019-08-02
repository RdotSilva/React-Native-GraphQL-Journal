import React from "react";
import Navigator from "./src/Navigation/Navigator";
import { getToken } from "./src/utils/loginUtils";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
	uri: "https://api.graph.cool/simple/v1/cjybv96jy2msk014182vlh1z0",
	request: async operation => {
		const token = await getToken();
		operation.setContext({
			headers: {
				authorization: token ? `Bearer ${token}` : null
			}
		});
	}
});

const App = () => {
	return (
		<ApolloProvider client={client}>
			<Navigator />
		</ApolloProvider>
	);
};

export default App;
