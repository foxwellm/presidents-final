import React from 'react';
import ReactDOM from 'react-dom';
import { App, mapStateToProps, mapDispatchToProps } from './App'
import { fetchPresidents} from '../../thunks/fetchPresidents'
import * as fetch from './App'

describe('App', () => {

  describe('mapStateToProps', () => {
    it('should return an object with the isLoading and error values', () => {
      // Setup
      const mockState = {
        isLoading: false,
        error: ''
      }
      const expected = {
        isLoading: false,
        error: ''
      }
      // Execution
      const mappedProps = mapStateToProps(mockState)
      // Expectation
      expect(mappedProps).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {
    it('calls dispatch with an fetchPresidents action when cDM', () => {
      // Setup
      const mockUrl = 'http://localhost:3001//api/v1/presidents'
      const mockOptions = {
        method: 'GET',
        headers: {
          'content-type': 'application/json'
        }
      }
      const mockDispatch = jest.fn()
      const actionToDispatch = fetchPresidents(mockUrl, mockOptions)

      // Execution
      // fetch.fetchStuff()
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.fetchPresidents(mockUrl, mockOptions)

      // Expectaion
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })


})
