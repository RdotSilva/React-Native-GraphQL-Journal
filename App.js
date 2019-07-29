import React from "react";
import Navigator from "./src/Navigation/Navigator";
import { setContext } from "apollo-link-context";
import { getToken } from "./src/utils/loginUtils";

const authLink = setContext(async (req, { headers }) => {
	const token = await getToken();
	return {
		...headers,
		headers: {
			authorization: token ? `Bearer ${token}` : null;
		}
	};
});

// Apollo Import
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
	uri: "https://api.graph.cool/simple/v1/cjybv96jy2msk014182vlh1z0"
});

const App = () => {
	return (
		<ApolloProvider client={client}>
			<Navigator />
		</ApolloProvider>
	);
};

export default App;
