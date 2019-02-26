import {fetchPresidents} from '../fetchPresidents'

import { isLoading, hasErrored, presidentsFetchDataSuccess} from '../../actions'

describe('fetchPresidents', () => {
  let mockUrl
  let mockOptions
  let mockDispatch

  beforeEach(() => {
    mockUrl = 'http://localhost:3001//api/v1/presidents'
    mockOptions = {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    }
    mockDispatch = jest.fn()
  })

  it('calls dispatch with the isLoading action', () => {
    const thunk = fetchPresidents(mockUrl, mockOptions) 
    thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })

  it('should dispatch hasErrored with a message if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'Something went wrong'
    }))
    const thunk = fetchPresidents(mockUrl, mockOptions)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('Something went wrong'))
  })

  it('should dispatch isLoading(false) if the response is ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true
    }))
    const thunk = fetchPresidents(mockUrl)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  })

  it.skip('should dispatch presidentsFetchDataSuccess', async () => {
    const mockPresidents = [{},{}]


    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        mockPresidents
      })
    }))
    const thunk = fetchPresidents(mockUrl, mockOptions)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(presidentsFetchDataSuccess(mockPesidents))
  })

})

