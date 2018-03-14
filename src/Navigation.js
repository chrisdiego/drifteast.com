import React from 'react';
import logo from './images/deslw.png';
import { NavLink } from 'react-router-dom';

import './navigation.css';

const Navigation = () => (
	<nav className="navbar bg-primary navbar-expand-xl sticky-top no-padding">
		<a className="navbar-brand" href="/index.htm">
			<img className="img-responsive" src={logo} />
		</a>
		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
		</button>
		<div className="collapse navbar-collapse" id="navbarNav">
		    <ul className="navbar-nav">
		      <li className="nav-item">
		        <NavLink exact className="nav-link" to="/">Home</NavLink>
		      </li>
		      <li className="nav-item">
		        <NavLink exact className="nav-link" to="/calendar">Calendar</NavLink>
		      </li>
		      <li className="nav-item">
		        <NavLink exact className="nav-link" to="/media">Media</NavLink>
		      </li>
		      <li className="nav-item">
		        <NavLink exact className="nav-link" to="/contact">Contact</NavLink>
		      </li>
		    </ul>
		</div>
	</nav>
)

export default Navigation;
