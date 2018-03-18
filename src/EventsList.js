import React from 'react';
import Event from './Event';

//import './eventslist.css';

const EventsList = (props) => (
	<div>
        {props.searchResults.map(event => 
          <div className="row">
            <Event event={event} />
          </div>
        )}
    </div>
)

export default EventsList;
