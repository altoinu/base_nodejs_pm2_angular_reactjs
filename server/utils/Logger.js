/**
 * Module to handle console.log console.error
 * @module Logger
 * 
 * @example
 * var Logger = require('Logger.js');
 * var logger = new Logger();
 * logger.prefix = 'RouteSetter:';
 * logger.log('hello');
 */

/**
 * @private
 */
function consoleMethod() {

	if (this.enabled) {

		var args = Array.prototype.slice.call(arguments);
		var method = args[0];

		// if (args.length > 1)
		// args[0] = logPrefix + args[0];

		console[method].apply(console, [
			this.prefix
		].concat(args.slice(1)));

	}

}

/**
 * @class Logger
 * @classdesc Handles logs
 * 
 * @param {boolean} [enabled=true] Enable/disable log.
 * 
 * @property {boolean} [enabled=true] Enable/disable log.
 * @property {string} [prefix=''] Prefix displayed before every log.
 * 
 * @example
 * var Logger = require('Logger.js');
 * var logger = new Logger();
 * logger.prefix = 'RouteSetter:';
 * logger.log('hello');
 */
var Logger = function(enabled) {

	// --------------------------------------------------------------------------
	//
	// public properties
	//
	// --------------------------------------------------------------------------

	this.enabled = (enabled === undefined) ? true : enabled;

	this.prefix = '';

};

// --------------------------------------------------------------------------
//
// public methods
//
// --------------------------------------------------------------------------

/**
 * Displays log.
 * @param {...Object} arguments Contents to display in log.
 */
Logger.prototype.log = function() {

	var args = Array.prototype.slice.call(arguments);
	consoleMethod.apply(this, [
		'log'
	].concat(args));

};

/**
 * Displays error log.
 * @param {...Object} arguments Contents to display in error log.
 */
Logger.prototype.error = function() {

	var args = Array.prototype.slice.call(arguments);
	consoleMethod.apply(this, [
		'error'
	].concat(args));

};

module.exports = Logger;