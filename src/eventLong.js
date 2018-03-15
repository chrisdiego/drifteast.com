import React from 'react';
import GMapsStreetView from './gMapsStreetView';
import moment from 'moment';

const EventLong = (props) => (
    <div className="eventContent" onClick={props.onClick}>
      <div className="longHeading">
        <h3>{props.event.summary}</h3>
        <GMapsStreetView location={props.event.location}/>
        <div className="eventDetails">
          <div className="row infoRow">
            <div className="col-auto"><i className="far fa-clock"></i></div>
            <div className="col-auto">{moment(props.event.start.dateTime).format("dddd, MMMM Do, h:mm a")} - {moment(props.event.end.dateTime).format("dddd, MMMM Do, h:mm a")}</div>
          </div>
          <div className="row infoRow">
            <div className="col-auto"><i className="fas fa-location-arrow"></i></div>
            <div className="col-auto">{props.event.location}</div>
          </div>
        </div>
      </div>
      <div className="row infoRow">
        <div className="col-auto"><i className="fas fa-info-circle"></i></div>
        <div className="col-auto description">{props.event.description}</div>
      </div>
      <div className="row justify-content-end arrow">
        <i class="fas fa-angle-up fa-2x"></i>
      </div>
    </div>
)

export default EventLong;