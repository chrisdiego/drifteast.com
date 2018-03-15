import React from 'react';
import Articles from './Articles'; 
import { Link } from 'react-router-dom';

import './homepage.css';

const articles = [
	{
		title: "Calendar",
		icon: "far fa-calendar-alt",
		content: "See the complete list of events for the 2018 season"
	},
	{
		title: "Media",
		icon: "fas fa-camera",
		content: "View, share, and contribute to media coverage of past events"
	},
	{
		title: "Discord",
		icon: "fab fa-discord",
		content: "Join the community (bring your best memes)"
	}
]

const HomePage = () => (
	<div className="container-fluid no-padding home-page">
		<div className="image-holder">
			<div className="jumbotron">
			  <h1 className="display-3">Welcome to Drift East!</h1>
			  <p className="lead">A resource dedicated to the east coast drifting community. </p>
			  <hr className="my-4" />
			  <p>Check out the complete calendar of all east coast drift events, media coverage, and more.</p>
			  <p className="lead">
			    <a className="btn btn-primary btn-lg" href="#articles" role="button">Learn more</a>
			  </p>
			</div>	
		</div>
		<div className="articles" id="articles">
			<Articles articles={articles} />
		</div>
		<div className="bio">
			<div className="col-sm-4 col-12 seo-text">
				<h1>What up?</h1>
				<p className="font-18">We're two cool guys looking for other cool guys who want to hang out in our grassroots drifting community.</p>
				<hr />
				<p>But seriously, we were sick of bouncing between Facebook groups to find out when events were happening.  We're here to save you the hassle of planning out your drift season by providing an up-to-date calendar of all drift events on the east coast.</p>
				<p>If you're an organizer, help us out by <Link to="/contact">getting in touch</Link> so we can collaborate on our efforts.</p>
				<p>If you're a driver, spectator, or just wondering what all these damn kids are doing with their slidey cars, check out the <Link to="/media">media section</Link>.</p>
			</div>
		</div>
	</div>
)

export default HomePage;
