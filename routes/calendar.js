var express = require('express');
var router = express.Router();
var path = require('path');
var fetch = require('node-fetch');


/* GET calendar events from /calendar. */
router.get('/', function(req, res, next) {
	//public google calendar URL with API key
  	const calendarUrl = "https://www.googleapis.com/calendar/v3/calendars/kambjuls4c2gjbl5kukv1n9cp0@group.calendar.google.com/events?key=AIzaSyAUqQo9YdvNWyzdLPgyNLjDrPsWupw8v0w";
    
    //fetch the events & json em
    fetch(calendarUrl).then(response => response.json())
    .then(function(data) {
        res.send(data.items);
        console.log(data.items);
    })
    .catch(function(error) {
        console.log("Call to Google Calendar has goofed.")
    });
});

module.exports = router;