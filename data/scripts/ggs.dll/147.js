Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterCountriesByCountryCode = function (e, t) {
  return e.filter(function (e) {
    return e.ggsCountryCode.toLowerCase() === t.toLowerCase();
  });
};
exports.filterCountriesByGeoIpCode = function (e, t) {
  return e.filter(function (e) {
    return e.geoIpCodes.map(function (e) {
      return e.toLocaleLowerCase();
    }).includes(t.toLocaleLowerCase());
  });
};
exports.filterCountriesByBrowserLanguage = function (e, t) {
  return e.filter(function (e) {
    return e.browserLanguageCodes.map(function (e) {
      return e.toLocaleLowerCase();
    }).includes(t.toLocaleLowerCase());
  });
};
exports.filterCountriesByTimezone = function (e, t) {
  return e.filter(function (e) {
    return e.isUTCTimezoneInRange(t);
  });
};