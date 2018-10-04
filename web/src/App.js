import React, { Component } from 'react';
import routes from './routes';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import './App.css';

const client = new ApolloClient({
  // By default, this client will send queries to the
  //  `/graphql` endpoint on the same host
  // Pass the configuration option { uri: YOUR_GRAPHQL_API_URL } to the `HttpLink` to connect
  // to a different host
  link: new HttpLink({uri: 'http://localhost:5000/graphql'}),
  cache: new InMemoryCache(),
});


class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        {routes}
      </ApolloProvider>
    );
  }
}

export default App;
