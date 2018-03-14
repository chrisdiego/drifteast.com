const loading = (state = false, action) => {
  switch (action.type) { 
    case 'REQUEST_EVENTS':
      return state = true
    case 'RECEIVE_EVENTS':
      return state = false
    case 'RECEIVE_EVENTS_FAIL':
      return state = false
    case 'RECEIVE_EVENTS_SUCCESS':
      return state = false
    default:
      return state
  }
}

export default loading