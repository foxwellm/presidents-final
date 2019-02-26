import React from 'react';
import ReactDOM from 'react-dom';
import { CardsArea, mapStateToProps} from './CardsArea'

describe('CardsArea', () => {

  describe('mapStateToProps', () => {
    it('should return an array of objects', () => {
      // Setup
      const mockState = {
        presidents: [{}, {}, {}]
      }
      const expected = {
        presidents: [{}, {}, {}]
      }
      // Execution
      const mappedProps = mapStateToProps(mockState)
      // Expectation
      expect(mappedProps).toEqual(expected)
    })
  })


})
