import React, { Component } from 'react';
import EventLong from './eventLong';
import EventShort from './eventShort';
import moment from 'moment';

import './event.css';

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {expanded: false}
    this.toggleExpandEvent = this.toggleExpandEvent.bind(this);
  }

  toggleExpandEvent() {
    this.setState({expanded: !this.state.expanded})
  }

  componentWillReceiveProps(nextProps) {
    //if a different event is populating this key post-search, reset the expanded state
    if (nextProps.event != this.props.event) {
      this.setState({expanded: false});
    }
  }
  
  render() {
    const props = this.props;
    return (
    <div className="col-12 event">
      {(this.state.expanded) ? <EventLong event={props.event} expanded={this.state.expanded} onClick={() => this.toggleExpandEvent()} /> : <EventShort event={props.event} expanded={this.state.expanded} onClick={() => this.toggleExpandEvent()} />}
    </div>
    )
  }
}

export default Event;
