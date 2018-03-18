import React, { Component } from 'react';
import EventsList from './EventsList';
import Loader from './Loader';
import CalendarSearch from './CalendarSearch';
import s14 from './images/240.jpg';

import './calendar.css';

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {loading: false, events: [], value: "", searchResults: []}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.setState({loading: true});
    const calendarUrl = "https://www.googleapis.com/calendar/v3/calendars/kambjuls4c2gjbl5kukv1n9cp0@group.calendar.google.com/events?key=AIzaSyAUqQo9YdvNWyzdLPgyNLjDrPsWupw8v0w";
    return fetch(calendarUrl)
      .then(response => response.json())
      //searchResults state is also populated with all events as our initial state
      //the events array acts as a 'database'
      .then(data => this.setState({events: data.items, searchResults:data.items, loading: false}))
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    //use searchResults based on the events array, so that we are looking at all events rather than previous seach results
    this.setState({searchResults: this.state.events.filter(event => event.summary.toLowerCase().includes(this.state.value))})
  }

  render() {
    return (
      <div className="container eventsContainer">
        <div className="headerImage">
          <div className="headerImageContainer"><h3>Calendar</h3></div>
        </div>
        <CalendarSearch handleSubmit={this.handleSubmit} handleChange={this.handleChange} value={this.state.value}/>
        {(this.state.loading) ? <Loader /> : <EventsList searchResults={this.state.searchResults}/>}
      </div>
    )
  }
}

export default Calendar;
