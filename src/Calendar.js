import React, { Component } from 'react';
import EventsList from './EventsList';
import Loader from './Loader';

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
        <p>notes: shows all events in a list right now, pulled from <a target="_blank" href="https://calendar.google.com/calendar?cid=a2FtYmp1bHM0YzJnamJsNWt1a3YxbjljcDBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ">this calendar</a>. I will add the option to switch between calendar view and list view.</p>
        <p>a search feature will be added too</p>
        {(this.props.loading) ? <Loader /> : <EventsList {...this.props}/>}
      </div>
    )
  }
}

export default Calendar;
