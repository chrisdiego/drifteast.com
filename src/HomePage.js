import React from 'react';

import './homepage.css';

const HomePage = () => (
	<div className="container-fluid no-padding">
		<div className="image-holder">
			<div className="jumbotron">
			  <h1 className="display-3">Welcome to Drift East!</h1>
			  <p className="lead">A resource dedicated to the east coast drifting community. </p>
			  <hr className="my-4" />
			  <p>Check out the complete calendar of all east coast drift events, media coverage, and more.</p>
			  <p className="lead">
			    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
			  </p>
			</div>	
		</div>
	</div>
)

export default HomePage;
