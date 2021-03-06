import React, { Component } from 'react';
import EventLong from './eventLong';
import EventShort from './eventShort';
import moment from 'moment';

import './event.css';

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {expanded: false, animate: false } 
    this.toggleExpandEvent = this.toggleExpandEvent.bind(this);
  }

  toggleExpandEvent() {
    this.setState({expanded: !this.state.expanded})
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({animate: true})
    }, 350)
  }

  componentWillReceiveProps(nextProps) {
    //if a different event is populating this key post-search, reset the expanded state
    if (nextProps.event != this.props.event) {
      this.setState({expanded: false, animate: true});
    }
  }
  
  render() {
    const props = this.props;
    return (
    <div className="col-12 event" style={ { opacity: (this.state.animate) ? 1 : 0, transition: 'opacity 0.2s, max-height 1.5s ease-out', maxHeight: (this.state.expanded) ? '1200px' : '175px'} }>
        {(this.state.expanded) ? <EventLong event={props.event} expanded={this.state.expanded} onClick={() => this.toggleExpandEvent()} /> : <EventShort event={props.event} expanded={this.state.expanded} onClick={() => this.toggleExpandEvent()} />}
      <div className="row justify-content-end arrow">
        <i className="fas fa-angle-down fa-2x" style={ {transform: (this.state.expanded) ? 'rotate(180deg)' : 'none', transition: 'all 0.5s ease'} }></i>
      </div>
    </div>
    )
  }
}

export default Event;
 