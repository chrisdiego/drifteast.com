import React from 'react';
import Event from './Event';

const EventsList = (props) => (
	<div>
		{(props.searchResults.length != 0) ?
			props.searchResults.map((event, i) => 
			  <div className="row">
			    <Event key={i} event={event} />
			  </div>
			) : 
			<div className="text-center text-danger">
				<i className="fas fa-language fa-6x"></i>
				<h3><b>No result!</b></h3>
			</div>
		}
    </div>
)

export default EventsList;
 