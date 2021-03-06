import React from 'react';
import GMapsStreetView from './gMapsStreetView';
import moment from 'moment';

const EventLong = (props) => {
    return (
      <div className="eventContent" onClick={props.onClick}>
        <div className="longHeading">
          <h4>{props.event.summary}</h4>
          <GMapsStreetView location={props.event.location}/>
          <div className="eventDetails bg-primary">
            <div className="row infoRow">
              <div className="col-auto"><i className="far fa-clock"></i></div>
              <div className="col">{moment(props.event.start.dateTime).format("dddd, MMMM Do, h:mm a")} - {moment(props.event.end.dateTime).format("dddd, MMMM Do, h:mm a")}</div>
            </div>
            <div className="row infoRow">
              <div className="col-auto"><i className="fas fa-location-arrow"></i></div>
              <div className="col">{props.event.location}</div>
            </div>
          </div>
        </div>
        <div className="infoRow">
          <h4>Event description</h4>
          <div className="description">{props.event.description}</div>
        </div>
      </div>
    )
}

export default EventLong;