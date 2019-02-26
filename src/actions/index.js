export const isLoading = (bool) => ({
  type: 'IS_LOADING',
  isLoading: bool
})

export const hasErrored = (message) => ({
  type: 'HAS_ERRORED',
  message
})

export const presidentsFetchDataSuccess = (presidents) => ({
  type: 'PRESIDENTS_FETCH_DATA_SUCCESS',
  presidents
})