import React, { Component } from 'react';

import './calendar.css';

class Calendar extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchEvents();
  }
  render() {
    return (
      <div className="container eventsContainer">
        {this.props.events.map(event => 
          <div className="row">
            <div className="col-12 event">
              <div className="eventContent">
                <h4>{event.summary}</h4>
                <p>Start: {event.start.dateTime}</p>
                <p>End: {event.end.dateTime}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Calendar;
