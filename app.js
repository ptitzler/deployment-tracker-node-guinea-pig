'use strict';

//------------------------------------------------------------------------------
// Test application for https://github.com/IBM-Bluemix/cf-deployment-tracker-client-node
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

// create a new express server
var app = express();

// serve the files out of ./public as our main files
//app.use(express.static(__dirname + '/public'));

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log('server starting on ' + appEnv.url);
});

if (process.env.VCAP_APPLICATION) {
	console.log('VCAP_APPLICATION:');
    console.log(JSON.stringify(process.env.VCAP_APPLICATION));
}

require('cf-deployment-tracker-client').track();