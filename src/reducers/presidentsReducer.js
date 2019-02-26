export const presidentsReducer = (state = [], action) => {
  switch (action.type) {
    case 'PRESIDENTS_FETCH_DATA_SUCCESS':
      return [...state, ...action.presidents]
    default:
      return state
  }
}