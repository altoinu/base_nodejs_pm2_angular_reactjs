// --------------------------------------------------------------------------
//
// required Node JS modules
//
// --------------------------------------------------------------------------

var cluster = require('cluster');
var os = require('os');
var path = require('path');

var $bodyParser = require('body-parser');
var $express = require('express');
var $q = require('q');

var app_base = require('./utils/app_base.js');
var RouteSetter = require('./utils/RouteSetter.js');

var app_vars = require('./models/app_vars.js');

// --------------------------------------------------------------------------
//
// private variables
//
// --------------------------------------------------------------------------

var port = normalizePort(app_vars.port);

var cors = require('./utils/CORS.js')({
	'origin': app_vars.CORS_ALLOW_ORIGIN
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

console.log('System info-')
console.log('num cpus- ', os.cpus().length);
console.log('nodejs version:', process.version);
console.log('process:', process.pid);
console.log('cluster.isMaster:', cluster.isMaster);

var appObj = app_base('app_base, app.js:', {
	appSettings: [
		{
			name: 'views',
			value: path.join(__dirname, 'hbs_views')
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
		//$express.static(path.join(__dirname, '../public'))
		// Angularjs front end *********************************************************
		{
			baseUrl: '/angularjs',
			middleware: $express.static(path.join(__dirname, '../public_angularjs1')),
		},
		// Angular front end ***********************************************************
		{
			baseUrl: '/angular',
			middleware: $express.static(path.join(__dirname, '../my-angular-app/dist/my-angular-app'))
		},
		// React front end *************************************************************
		{
			baseUrl: '/react',
			middleware: $express.static(path.join(__dirname, '../my-react-app/build'))
		},
		{
			// For when using client side routing like react-router and sub folder on server
			// (ex http://www.example.com/path/to/react/app/)
			// https://create-react-app.dev/docs/deployment/#serving-apps-with-client-side-routing
			// https://muffinman.io/react-router-subfolder-on-server/
			baseUrl: '/react/*',
			method: 'GET',
			middleware: function (req, res) {

				console.log('react redirect', req.url, '-> index.html');
				//console.log(req.path);
				//console.log(req.url);

				// redirect to index.html so client side routing can take over
				res.sendFile(path.join(__dirname, '../my-react-app/build', 'index.html'));

			}
		}
	],
	routeSetterDef: routes,
	//baseUrl: CONFIG.API.path
	serverPort: port
});

module.exports = {
	app: appObj.app,
	shutdown: function () {
		// do necessary shutdown stuff here
		return appObj.shutdown();
	}
}