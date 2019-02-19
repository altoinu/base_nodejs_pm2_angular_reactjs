/**
 * Reads env var/default values for the system to use.
 */
var APP_DEFAULTS = require('./app_defaults.js');

var env = process.env.NODE_ENV || APP_DEFAULTS.env;

module.exports = {
	env: env
};