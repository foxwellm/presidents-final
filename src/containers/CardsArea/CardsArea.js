import React, {Component} from 'react'
import {connect} from 'react-redux'
import Card from '../../components/Card/Card'
import './CardsArea.css'

export class CardsArea extends Component {


  render() {
    const displayCards = this.props.presidents.map((president, i) => {
      return <Card {...president} key={i}/>
    })

    return (
      <div className='CardArea'>{displayCards}</div>
    )
  }
}

export const mapStateToProps = (state) => ({
  presidents: state.presidents
})

export default connect(mapStateToProps)(CardsArea);
