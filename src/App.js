import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      nodes: []
    }
  }

  componentDidMount = () =>
  {
    const keywords= `
{
  allKeywordtests {
    edges {
      node {
        keyword
        keywordCount
      }
    }
  }
}`
    fetch('https://trumptweetsdata.herokuapp.com/graphql', 
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ query: keywords }), 
      })
      .then(res => res.json())
      .then(res => {
        let nodes = res.data.allKeywordtests.edges.reduce((acc, nxt, i ) => {
          return [...acc, nxt.node]
        },[])
        this.setState({nodes})
      })
  }




  render() {
    console.log('this.state.nodes: ', this.state.nodes);
    return (
      <div className="App">
        <div>data</div>        
      </div>
    );
  }
}

export default App;
