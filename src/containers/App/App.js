import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import {fetchPresidents} from '../../thunks/fetchPresidents'
import CardsArea from '../CardsArea/CardsArea'
export class App extends Component {
  constructor() {
    super()
    this.state = {

    }

  }

  fetchStuff = () => {
    const url = 'http://localhost:3001/api/v1/presidents'
    const options = {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    }
    this.props.fetchPresidents(url, options)
  }

  componentDidMount = () => {
 this.fetchStuff()

  }
  render() {
    const {isLoading, error} = this.props
    return (
      <div className="App">
        <h2>Presidents and Assholes</h2>
        {
          error && <div>{error.message}</div>
        }
        {
          isLoading && <div>...Loading</div>
        }
        <CardsArea />
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  error: state.error
})

export const mapDispatchToProps = (dispatch) => ({
  fetchPresidents: (url,options) => dispatch(fetchPresidents(url,options))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
