import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Keywords from './keyword.js'; 
import {ApolloProvider} from 'react-apollo'; 
import ApolloClient from 'apollo-boost'; 

const client = new ApolloClient({
   uri: 'https://trumptweetsdata.herokuapp.com/graphql'
}); 

const App=()=>(
    <ApolloProvider client={client}>
    <div>
        <Keywords />
    </div> 
    </ApolloProvider>  
  ); 

export default App; 