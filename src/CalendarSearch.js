import React from 'react';

const CalendarSearch = (props) => (
	<div className="search-form">
		<form onSubmit={props.handleSubmit}>
			<div className="input-group">
		        <input type="text" className="form-control" placeholder="Search Events" value={props.value} onChange={props.handleChange}></input>
		        <div className="input-group-append">
		        	<button type="submit" className="btn btn-primary">Search</button>
		        </div>
	        </div>
        </form>
	</div>
)

export default CalendarSearch;
