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
  const calendarUrl = "https://www.googleapis.com/calendar/v3/calendars/kambjuls4c2gjbl5kukv1n9cp0@group.calendar.google.com/events?key=AIzaSyAUqQo9YdvNWyzdLPgyNLjDrPsWupw8v0w";
  return dispatch => {
    dispatch(requestEvents())
    return fetch(calendarUrl)
	    .then(response => response.json())
	    .then(data => dispatch(receiveEvents(data.items)))
  }
}