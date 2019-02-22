// --------------------------------------------------------------------------
//
// required Node JS modules
//
// --------------------------------------------------------------------------

var path = require('path');

var $bodyParser = require('body-parser');
var $express = require('express');
var $q = require('q');

var app_base = require('./utils/app_base.js');
var RouteSetter = require('./utils/RouteSetter.js');

var APP_VARS = require('./models/app_vars.js');

// --------------------------------------------------------------------------
//
// private variables
//
// --------------------------------------------------------------------------

var port = normalizePort(APP_VARS.port);

var cors = require('./utils/CORS.js')({
	'origin': APP_VARS.CORS_ALLOW_ORIGIN
});

var routes = RouteSetter([
	path.join(__dirname, '/routes/ConfigRoute.js'),
	/*
	{
		route: express.Router() require('...'),
		baseUrl: '/whatever', //optional
		shutdown: function() {
			
			console.log('shutdown for this route');
			return $q.resolve();
			
		}
	}
	*/
]);

//--------------------------------------------------------------------------
//
// private functions
//
// --------------------------------------------------------------------------

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {

	var port = parseInt(val, 10);

	if (isNaN(port)) {

		// named pipe
		return val;

	}

	if (port >= 0) {

		// port number
		return port;

	}

	return false;

}

// --------------------------------------------------------------------------
//
// stuff
//
// --------------------------------------------------------------------------

var appObj = app_base('app_base, app.js:', {
	appSettings: [
		{
			name: 'views',
			value: path.join(__dirname, 'utils/hbs_views')
		},
		{
			name: 'view engine',
			value: 'hbs'
		}
	],
	middleware: [
		$bodyParser.json({
			limit: '1mb'
		}),
		$bodyParser.urlencoded({
			parameterLimit: 100000,
			limit: '1mb',
			extended: true
		}),
		cors.allow,
		$express.static(path.join(__dirname, 'public'))
	],
	routeSetterDef: routes,
	//baseUrl: CONFIG.API.path
	serverPort: port
});

module.exports = {
	app: appObj.app,
	shutdown: function() {
		// do necessary shutdown stuff here
		return appObj.shutdown();
	}
}