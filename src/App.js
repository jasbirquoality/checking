import React from "react"
import Router from "./Router"
import "react-perfect-scrollbar/dist/css/styles.css"
import "prismjs/themes/prism-tomorrow.css"
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";


const graphqlClient = new ApolloClient({
  uri: `${process.env.REACT_APP_BACKEND_SERVER}/graphql`,
  cache: new InMemoryCache({
    addTypename: false,
  }),
});

const App = props => {

  return (
    <ApolloProvider client={graphqlClient}>
      <Router />
    </ApolloProvider>
  );
}

export default App
