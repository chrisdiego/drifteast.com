import React from 'react';
import moment from 'moment';

import './event.css';

const Event = (props) => (
	<div className="col-12 event">
      <div className="eventContent">
        <h4>{props.event.summary}</h4>
        <div className="row infoRow">
        	<div className="col-auto"><i className="far fa-clock"></i></div>
        	<div className="col-auto">{moment(props.event.start.dateTime).format("dddd, MMMM Do, h:mm a")} - {moment(props.event.end.dateTime).format("dddd, MMMM Do, h:mm a")}</div>
        </div>
        <div className="row infoRow">
        	<div className="col-auto"><i class="fas fa-location-arrow"></i></div>
        	<div className="col-auto">{props.event.location}</div>
        </div>
        <div className="row infoRow">
        	<div className="col-auto"><i class="fas fa-info-circle"></i></div>
        	<div className="col-auto description">{props.event.description}</div>
        </div>
      </div>
    </div>
)

export default Event;
