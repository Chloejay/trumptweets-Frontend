import React from 'react';
import Keywords from './keyword.js'; 
import {ApolloProvider} from 'react-apollo'; 
import ApolloClient from 'apollo-boost';  

const client = new ApolloClient({
   uri: 'https://trumptweetsdata.herokuapp.com/graphql'
}); 

const App=()=>(
    <ApolloProvider client={client}>
      <div>

    <h2>Trump Tweet Analysis</h2> 
    <h4>Top 50th ranking keyword</h4> 
    <Keywords />
      </div> 
    </ApolloProvider>   
  ); 

export default App;  