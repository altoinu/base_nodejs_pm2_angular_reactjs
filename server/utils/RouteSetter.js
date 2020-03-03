/**
 * Module to create routes definition to be used by app_base.
 * @module RouteSetter
 * @version 1.1.2 2020-03-02
 * @requires express
 * @requires q
 * @requires Logger
 * 
 * @example
 * var routes = RouteSetter([
 *    path.join(__dirname, '/routes/ConfigRoute.js'),
 *    {
 *       route: express.Router() or require('...'),
 *       baseUrl: '/whatever', //optional
 *       shutdown: function() {
 *          console.log('shutdown for this route');
 *          return $q.resolve();
 *       }
 *    }
 * ]);
 */

var Logger = require('../utils/Logger.js');
var logger = new Logger();
logger.prefix = 'RouteSetter:';

var mod_express = require('express');
var mod_Q = require('q');

var routesDefObj = [];

/**
 * @param {Object[]} routesDef - Array route definition.<br/>
 * Each module should be either<br/>
 * <ul>
 * <li>file path to module, or</li>
 * <li>instance of express.Router(), or</li>
 * <li>Object {route, (optional) shutdown, (optional) baseUrl}</li>
 * </ul>
 * @param {(express.Router())} routesDef[].route - instance of express.Router()
 * @param {function} [routesDef[].shutdown] function()
 * @param {string} [routesDef[].baseUrl=''] - Base URL, ex '/api'
 */
function RouteSetter(routesDef) {

	// --------------------------------------------------------------------------
	//
	// private variables
	//
	// --------------------------------------------------------------------------

	var router = mod_express.Router();

	// --------------------------------------------------------------------------
	//
	// Routes
	//
	// --------------------------------------------------------------------------

	var routeCheck = function (req, res, next) {

		logger.log('================================================Route');
		logger.log('req.originalUrl', req.method, req.originalUrl);
		logger.log('req.baseUrl', req.baseUrl);
		logger.log('req.path', req.path);
		logger.log('req.url', req.url);

		if (req.query) {

			// logger.log('req.query');
			logger.log('req.query', req.query);

		}
		// logger.log('req.route');
		// logger.log(req.route);

		next();

	};

	router.use(routeCheck);

	var subRouter = mod_express.Router();

	// Read and set defined routes
	var args = Array.prototype.slice.call(routesDef);
	args.forEach(function (def, i, array) {

		logger.log(def);

		var r;
		if (typeof (def) === 'string')
			r = require(def);
		else
			r = def;

		routesDefObj.push(r);

		var targetRoute = r.hasOwnProperty('route') ? r.route : r;
		var targetBaseUrl = (r.hasOwnProperty('baseUrl') && r.baseUrl) ? r.baseUrl : null;
		if (targetBaseUrl)
			targetBaseUrl = (targetBaseUrl.charAt(0) != '/' ? '/' : '') + targetBaseUrl;

		var subSubRouter = mod_express.Router();
		subSubRouter.use(routeCheck);
		subSubRouter.use(targetRoute);

		// If path specified, mount routes to there [baseUrl]/[routes]...
		if (targetBaseUrl)
			subRouter.use(targetBaseUrl, subSubRouter);
		else
			subRouter.use(targetRoute);

	});

	router.use(subRouter);

	return {
		routes: router,
		shutdown: function () {

			// run shutdown stuff for each route
			return mod_Q.allSettled(routesDefObj.map(function (def, index, array) {

				if (def.hasOwnProperty('shutdown') && (typeof def.shutdown === 'function'))
					return def.shutdown();
				else
					return mod_Q.resolve();

			}));

		}
	};

}

module.exports = RouteSetter;
