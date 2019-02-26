import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
// import { presidentsFetchDataSuccess} from '../actions'
import {fetchPresidents} from '../thunks/fetchPresidents'

class App extends Component {
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
    // try {
    //   const response = await fetch('http://localhost:3001/api/v1/presidents', {
    //     method: 'GET',
    //     headers: {
    //       'content-type': 'application/json'
    //     }
    //   })
    //   if (!response.ok) {
    //     throw Error('wrong')
    //   }
    //   const result = await response.json()
    //   console.log(result)
    //   // debugger
    //   this.props.presidentsFetchDataSuccess(result)
    // } catch {
    //   debugger
    // }
  }
  render() {
    console.log(this.props)
    return (
      <div className="App">
        App
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  presidents: state.presidents,
  isLoading: state.isLoading,
  error: state.error
})

const mapDispatchToProps = (dispatch) => ({
  fetchPresidents: (url,options) => dispatch(fetchPresidents(url,options)),
  // presidentsFetchDataSuccess: (presidents) => dispatch(presidentsFetchDataSuccess(presidents))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
