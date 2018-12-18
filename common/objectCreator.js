'use strict';

module.exports = (countries) => {
    var arr = []
		countries.map((country) => {
			arr.push({
        "CountryName": country.name,
        "CountryCode": country.alpha3Code,
        "CountryCapital": country.capital,
        "CurrenciesAccepted": country.currencies
      })
		});
    return arr;
};
