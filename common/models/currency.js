'use strict';
var objCreator = require('../objectCreator.js')
module.exports = (Countries) => {
  Countries.afterRemote('byCurrencyCode', (res, country, next) => {
		var countries = res.result;
		res.result = objCreator(countries);
		next();
	});
};
