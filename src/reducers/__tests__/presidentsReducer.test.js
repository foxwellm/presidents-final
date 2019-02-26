import { presidentsReducer } from '../presidentsReducer'

describe('presidentsReducer', () => {
  it('should return the initial state', () => {
    // Setup
    const expected = []
    // Execution
    const result = presidentsReducer(undefined, {})
    // Expectation
    expect(result).toEqual(expected)
  })

  it('should return an error when given one', () => {
    // Setup
    const expected = [{}, {}, {}]
    const mockAction = {
      type: 'PRESIDENTS_FETCH_DATA_SUCCESS',
      presidents: [{}, {}, {}]
    }
    // Execution
    const result = presidentsReducer('', mockAction)
    // Expectation
    expect(result).toEqual(expected)
  })
})