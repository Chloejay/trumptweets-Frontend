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

            //console.log(data.allKeywordtests.edges[0].node.keywordCount)
            const style= {fontSize: 14, color: 'black', 
                          border: 'solid' ,
                          borderColor: 'grey',
                          borderWidth: 1, 
                          padding: 2}; 
            return data.allKeywordtests.edges.map(({node: {keyword , keywordCount }}, i) => (
              <tbody key={i}>
                <td style={style}>{keyword}</td> 
                <td style={style}>{keywordCount}</td>  
              </tbody>  
            )); 
        }}
    </Query> 
  ); 

export default Keywords; 

