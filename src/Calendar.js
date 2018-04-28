import React, { Component } from 'react';
import EventsList from './EventsList';
import Loader from './Loader';
import CalendarSearch from './CalendarSearch';
import moment from 'moment';
import s14 from './images/240.jpg';

import './calendar.css';

let today = moment().format();

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {loading: false, events: [], value: "", searchResults: [], showUpcomingEvents: true }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeEventFilter = this.changeEventFilter.bind(this);
  }

  componentWillMount() {
    this.setState({loading: true});
    const calendarUrl = "https://www.googleapis.com/calendar/v3/calendars/kambjuls4c2gjbl5kukv1n9cp0@group.calendar.google.com/events?key=AIzaSyAUqQo9YdvNWyzdLPgyNLjDrPsWupw8v0w&singleEvents=true&orderBy=startTime&timeMin=" + today + "";
    return fetch(calendarUrl)
      .then(response => response.json())
      //searchResults state is also populated with all events as our initial state
      //the events array acts as a 'database'
      .then(data => this.setState({events: data.items, searchResults:data.items, loading: false}))
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  changeEventFilter() {
      this.setState({showUpcomingEvents: !this.state.showUpcomingEvents});
  }

  handleSubmit(e) {
    e.preventDefault();
    //use searchResults based on the events array, so that we are looking at all events rather than previous seach results
    this.setState({searchResults: this.state.events.filter(event => event.summary.toLowerCase().includes(this.state.value.toLowerCase()))})
  }

  render() {
    return (
      <div className="container eventsContainer">
        <div className="headerImage">
          <div className="headerImageContainer"><h3>Calendar</h3></div>
        </div>
        <div className="row">
          <div className="col-3">
            Only Show Upcoming Events<button className='btn btn-link' onClick={this.changeEventFilter}><i className={'fas fa-toggle-' + ((this.state.showUpcomingEvents) ? 'on' : 'off')}></i></button>
          </div>
          <CalendarSearch handleSubmit={this.handleSubmit} handleChange={this.handleChange} value={this.state.value}/>
        </div>
        {(this.state.loading) ? <Loader /> : <EventsList searchResults={this.state.searchResults}/>}
      </div>
    )
  }
}

export default Calendar;
