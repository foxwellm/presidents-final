import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {

    }

  }

  componentDidMount = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/presidents', {
        method: 'GET',
        headers: {
          'content-type': 'application/json'
        }
      })
      if (!response.ok) {
        throw Error('wrong')
      }
      const result = await response.json()
      console.log(result)
    } catch {
      debugger
    }
  }
  render() {
    return (
      <div className="App">
        App
      </div>
    );
  }
}

export default App;
