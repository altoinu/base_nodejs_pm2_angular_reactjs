// --------------------------------------------------------------------------
//
// required Node JS modules
//
// --------------------------------------------------------------------------

var mod_express = require('express');
var mod_Q = require('q');

var APP_VARS = require('../models/app_vars.js');

var utils = require('../utils/utils.js');
var getENVParams = utils.getENVParams;

var ENV = APP_VARS.env;

// --------------------------------------------------------------------------
//
// private variables
//
// --------------------------------------------------------------------------

var Logger = require('../utils/Logger.js');
var logger = new Logger();
logger.prefix = 'ConfigRoute:';

// --------------------------------------------------------------------------
//
// stuff
//
// --------------------------------------------------------------------------

var ConfigRoute = mod_express.Router();

ConfigRoute.get('/getip.json', function(req, res) {

	logger.log('->getip.json');
	logger.log(req.query);

	var clientIP = req.header('x-forwarded-for') || req.connection.remoteAddress;
	var configValues = {
		ip: clientIP
	};

	res.status(200);
	res.header("Cache-Control", "no-cache, no-store, must-revalidate");
	res.header("Pragma", "no-cache");
	res.header("Expires", 0);

	if (req.query.hasOwnProperty('callback'))
		res.jsonp(configValues);
	else
		res.json(configValues);

});

ConfigRoute.get('/config.json', function(req, res) {

	logger.log('->config.json');
	logger.log(req.query);

	var clientIP = req.header('x-forwarded-for') || req.connection.remoteAddress;

	var envParam = getENVParams(ENV);

	var configValues = {
		env: ENV,
		envName: envParam['name'],
		envLongName: envParam['longname'],
		ip: clientIP,
	};

	res.status(200);
	res.header("Cache-Control", "no-cache, no-store, must-revalidate");
	res.header("Pragma", "no-cache");
	res.header("Expires", 0);

	if (req.query.hasOwnProperty('callback'))
		res.jsonp(configValues);
	else
		res.json(configValues);

});

module.exports = ConfigRoute;