export const requestEvents = request => {
  return {
    type: 'REQUEST_EVENTS',
    request
  }
}

export const receiveEvents = events => {
	console.log(events)
  return {
    type: 'RECEIVE_EVENTS',
    events
  }
}

export const receiveEventsFail = response => {
  return {
    type: 'RECEIVE_EVENTS_FAIL',
    response
  }
}

export const receiveEventsSuccess = response => {
  return {
    type: 'RECEIVE_EVENTS_SUCCESS',
    response
  }
}

export function fetchEvents() {
  return dispatch => {
    dispatch(requestEvents())
    return fetch('/calendar')
	    .then(response => response.json())
	    .then(data => dispatch(receiveEvents(data)))
  }
}