import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
// import { presidentsFetchDataSuccess} from '../actions'
import {fetchPresidents} from '../../thunks/fetchPresidents'
import CardsArea from '../CardsArea/CardsArea'
export class App extends Component {
  constructor() {
    super()
    this.state = {

    }

  }

  componentDidMount = async () => {
    const url = 'http://localhost:3001/api/v1/presidents'
    const options = {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    }
    this.props.fetchPresidents(url, options)

  }
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <h2>Presidents and Assholes</h2>
        <CardsArea />
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => ({
  fetchPresidents: (url,options) => dispatch(fetchPresidents(url,options))
})

export default connect(null, mapDispatchToProps)(App);
