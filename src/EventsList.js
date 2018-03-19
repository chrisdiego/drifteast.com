import React from 'react';
import Event from './Event';

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
 