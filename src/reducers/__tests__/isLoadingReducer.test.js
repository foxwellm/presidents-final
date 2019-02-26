import { isLoadingReducer } from '../isLoadingReducer'

describe('isLoadingReducer', () => {
  it('should return the initial state', () => {
    // Setup
    const expected = false
    // Execution
    const result = isLoadingReducer(undefined, {})
    // Expectation
    expect(result).toEqual(expected)
  })

  it('should return an error when given one', () => {
    // Setup
    const expected = true
    const mockAction = {
      type: 'IS_LOADING',
      isLoading: true
    }
    // Execution
    const result = isLoadingReducer(false, mockAction)
    // Expectation
    expect(result).toEqual(expected)
  })
})