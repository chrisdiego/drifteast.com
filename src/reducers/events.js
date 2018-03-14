const events = (state = [], action) => {
  switch (action.type) { 
    case 'REQUEST_EVENTS':
      return state
    case 'RECEIVE_EVENTS':
      return state = action.events
    case 'RECEIVE_EVENTS_FAIL':
      return state
    case 'RECEIVE_EVENTS_SUCCESS':
      return state
    default:
      return state
  }
}

export default events