import { isLoading, hasErrored } from '../actions'
import {presidentsFetchDataSuccess} from '../actions'


export const fetchPresidents = (url, options) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url, options)
      if (!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(isLoading(false))
      const presidents = await response.json()
      dispatch(presidentsFetchDataSuccess(presidents))
    } catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}