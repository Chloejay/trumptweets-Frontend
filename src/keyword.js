import React from 'react'; 
import gql from 'graphql-tag';
import {Query} from 'react-apollo'; 



const Keywords = () =>(
<Query query= { 
      gql`
        {
        allKeywordtests {
         edges {
         node {
         keyword
         keywordCount
        }
      }
    }
  }
    `}   
    >
        {({loading, error, data}) => {
            if (loading) return <p>Loading now ...</p>;
            if (error) return <p>Error! </p>; 
            
            return data.allKeywordtests.edges.map(({keyword,keywordCount}) => (
            <div>
               <div>{keyword}</div> 
               <div>{keywordCount}</div> 
            </div> 
            )); 
        }}
    </Query> 
  ); 

export default Keywords; 

