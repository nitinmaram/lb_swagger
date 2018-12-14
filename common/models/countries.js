'use strict';

module.exports = function(Countries) {
  Countries.afterRemote('getCountries', function(ctx, country, next) {
    console.log(ctx.result, "ctx");
    console.log(country, "country");
		var countries = ctx.result;
    var arr = []
		countries.map(function(country) {
			arr.push({
        "CountryName": country.name,
        "CountryCode": country.alpha3Code,
        "CountryCapital": country.capital,
        "CurrenciesAccepted": country.currencies
      })
		});
		ctx.result = arr;
		next();
	});
};
