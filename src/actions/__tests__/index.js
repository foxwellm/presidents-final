import * as actions from '../index'

describe('actions', () => {

  it('should have a type of IS_LOADING', () => {
    const expectedAction = {
      type: 'IS_LOADING',
      isLoading: true
    }
    const result = actions.isLoading(true)
    expect(result).toEqual(expectedAction)
  })


  it('should have a type of HAS_ERRORED', () => {
    const expectedAction = {
      type: 'HAS_ERRORED',
      message: 'Something wrong'
    }
    const result = actions.hasErrored('Something wrong')
    expect(result).toEqual(expectedAction)
  })

  it('should have a type of PRESIDENTS_FETCH_DATA_SUCCESS', () => {
    const expectedAction = {
      type: 'PRESIDENTS_FETCH_DATA_SUCCESS',
      presidents: [{}, {}, {}]
    }
    const result = actions.presidentsFetchDataSuccess([{}, {}, {}])
    expect(result).toEqual(expectedAction)
  })

})