import React, {Component} from 'react'
import {connect} from 'react-redux'
import Card from '../../components/Card/Card'

export class CardsArea extends Component {


  render() {
    const displayCards = this.props.presidents.map(president => {
      return <Card {...president}/>
    })
// debugger

    return (
      <div>{displayCards}</div>
    )
  }
}

const mapStateToProps = (state) => ({
  presidents: state.presidents,
  isLoading: state.isLoading,
  error: state.error
})

export default connect(mapStateToProps)(CardsArea);
