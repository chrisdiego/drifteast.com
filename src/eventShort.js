import React from 'react';
import moment from 'moment';

//import './event.css';

const EventShort = (props) => (
    <div className="eventContent short" onClick={props.onClick}>
      <h4>{props.event.summary}</h4>
      <div className="row infoRow">
      	<div className="col-auto"><i className="far fa-clock"></i></div>
      	<div className="col">{moment(props.event.start.dateTime).format("dddd, MMMM Do, h:mm a")} - {moment(props.event.end.dateTime).format("dddd, MMMM Do, h:mm a")}</div>
      </div>
      <div className="row infoRow">
      	<div className="col-auto"><i className="fas fa-location-arrow"></i></div>
      	<div className="col">{props.event.location}</div>
      </div>
      <div className="row infoRow">
      	<div className="col-auto"><i className="fas fa-info-circle"></i></div>
      	<div className="col description">{props.event.description}</div>
      </div>
    </div>
)

export default EventShort;