// Make it so liri.js can take in one of the following commands:
//This will show your last 20 tweets and when they were created at in your terminal/bash window.
//my-tweets
var inquirer = require("inquirer");
inquirer
	.prompt([
		{
		type: "input",
		message: "Please enter 'my-tweets' for recent tweets",
		answer1: "thnx"
		}		
	])
	.then(function(inquirerResponse) {
		var request = require('request');
		request(url: '', function (error, response, body) {
    		if (!error && response.statusCode == 200) {
      			var info = JSON.parse(body)
    		}
		})
	})


// GET statuses / user_timeline
// statuses/show/:id

var twitter = new Twitter(config);

    //Example calls

    twitter.getUserTimeline({ screen_name: '', count: '10'}, error, success);






