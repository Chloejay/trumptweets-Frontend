import React from 'react'; 
import gql from 'graphql-tag';
import {Query} from 'react-apollo'; 



const Keywords = () =>(
<Query 
  query= { 
    gql`{
      allKeywordtests(first:50) {
        edges {
          node {
            keyword
            keywordCount
          }
        }
      }
    }`
  }   
>
        {({loading, error, data}) => {
            if (loading) return <p>Loading now ...</p>;
            if (error) return <p>Error! </p>; 

            console.log(data.allKeywordtests.edges[0].node.keywordCount)
            
            return data.allKeywordtests.edges.map(({node: {keyword , keywordCount }}, i) => (
              <div key={i}>
                <div>{keyword}</div> 
                <div>{keywordCount}</div> 
              </div> 
            )); 
        }}
    </Query> 
  ); 

export default Keywords; 

