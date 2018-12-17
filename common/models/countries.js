'use strict';

module.exports = function(Countries) {
  Countries.afterRemote('getCountries', (res, country, next) => {
    console.log(res.result, "res");
    console.log(country, "country");
		var countries = res.result;
    var arr = []
		countries.map((country) => {
			arr.push({
        "CountryName": country.name,
        "CountryCode": country.alpha3Code,
        "CountryCapital": country.capital,
        "CurrenciesAccepted": country.currencies
      })
		});
		res.result = arr;
		next();
	});
};
