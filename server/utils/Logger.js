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
 * @param {boolean} enabled Enable/disable log.
 * 
 * @example
 * var Logger = require('../utils/Logger.js');
 * var logger = new Logger();
 * logger.prefix = 'RouteSetter:';
 * logger.log('hello');
 */
var Logger = function(enabled) {

	// --------------------------------------------------------------------------
	//
	// public variables
	//
	// --------------------------------------------------------------------------

	/**
	 * Enable/disable log.
	 * @memberOf Logger#
	 */
	this.enabled = (enabled === undefined) ? true : enabled;

	/**
	 * Prefix displayed before every log.
	 * @memberOf Logger#
	 */
	this.prefix = '';

};

// --------------------------------------------------------------------------
//
// public methods
//
// --------------------------------------------------------------------------

/**
 * Displays log.
 */
Logger.prototype.log = function() {

	var args = Array.prototype.slice.call(arguments);
	consoleMethod.apply(this, [
		'log'
	].concat(args));

};

/**
 * Displays error log.
 */
Logger.prototype.error = function() {

	var args = Array.prototype.slice.call(arguments);
	consoleMethod.apply(this, [
		'error'
	].concat(args));

};

module.exports = Logger;