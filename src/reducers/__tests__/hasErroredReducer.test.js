import {hasErroredReducer} from '../hasErroredReducer'

describe('hasErroredReducer', () => {
  it('should return the initial state', () => {
    // Setup
    const expected = ''
    // Execution
    const result = hasErroredReducer(undefined, {})
    // Expectation
    expect(result).toEqual(expected)
  })

  it('should return an error when given one', () => {
    // Setup
    const expected = 'Error'
    const mockAction = {
      type: 'HAS_ERRORED',
      message: 'Error'
    }
    // Execution
    const result = hasErroredReducer('', mockAction)
    // Expectation
    expect(result).toEqual(expected)
  })
})