Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./2.js");
var a = require("./147.js");
var s = i.getLogger("WorldAssignment.CountrySelector");
exports.getCountryByCountryCode = function (e, t) {
  if (e && t) {
    return a.filterCountriesByCountryCode(e, t)[0];
  }
  s.debug("CountrySelector.getCountryByCountryCode: error with countries || countryCode", e, t);
};
exports.getCountryByGeoIpCode = function (e, t) {
  if (e && t) {
    return a.filterCountriesByGeoIpCode(e, t)[0];
  }
  s.debug("CountrySelector.getCountryByGeoIpCode: error with countries || countryCode", e, t);
};
exports.getCountryByBrowserLanguage = function (e, t) {
  if (e && t) {
    return a.filterCountriesByBrowserLanguage(e, t)[0];
  }
  s.debug("CountrySelector.getCountryByBrowserLanguage: error with countries || countryCode", e, t);
};