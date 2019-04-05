/**
 * Request utils
 * @module RequestUtils
 * @requires multiparty
 * @requires q
 */

var $multiparty = require('multiparty');
var $q = require('q');

/**
 * Parse form data to {
 *  files,
 *  data,
 *  url,
 *  method,
 *  headers
 * }
 * @alias module:RequestUtils.parsePOSTFormData
 * @param {object} request - request object containing POSTed multipart form data
 * @returns Promise
 */
function parsePOSTFormData(request) {

	var deferred = $q.defer();

	var form = new $multiparty.Form();
	form.parse(request, function(err, fields, files) {

		if (err) {

			console.log('form data parse error');
			console.log(err);
			deferred.reject(err);

		} else {

			console.log('form data parsed');
			//console.log(fields);
			//console.log(files);

			var payload = {
				files: files
			};
			for ( var key in fields) {

				var fieldData = (fields[key].length == 1) ? fields[key][0] : fields[key];
				switch (key) {

					case 'headers':
					case 'data':
						payload[key] = JSON.parse(fieldData);
						break;

					case 'url':
					case 'method':
					default:
						payload[key] = fieldData;
						break;

				}

			}

			deferred.resolve(payload);

		}

	});

	return deferred.promise;

}

/**
 * 
 * @alias module:RequestUtils.parseJSONBodyData
 * @param {object} request
 * @returns Promise
 */
function parseJSONBodyData(request) {

	return $q.resolve(request.body);

}

module.exports = {
	parsePOSTFormData: parsePOSTFormData,
	parseJSONBodyData: parseJSONBodyData
};