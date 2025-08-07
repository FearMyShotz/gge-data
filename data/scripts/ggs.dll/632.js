var i = this;
Object.defineProperty(exports, "__esModule", {
  value: true
});
var a = require("./62.js");
var s = require("./254.js");
var r = require("./2.js");
var o = require("./39.js");
var l = require("./90.js");
var u = require("./633.js");
var c = require("./147.js");
var _ = require("./149.js");
var d = r.getLogger("WorldAssignment.CountryDetector");
exports.runCountryDetection = function (e, t) {
  return a.__awaiter(i, undefined, undefined, function () {
    var n;
    var i;
    var r;
    var u;
    var h;
    var p;
    return a.__generator(this, function (a) {
      switch (a.label) {
        case 0:
          d.debug("CountryDetector.run { " + e.toString() + " }");
          a.label = 1;
        case 1:
          a.trys.push([1, 4,, 5]);
          if (e.countryByPresetInstance) {
            i = s.CountryDetectorFactors.FACTOR_BY_INSTANCE;
            n = t.getCountryByCountryCode(e.countryByPresetInstance, e.alsoDetectUnavailableCountries);
          }
          if (!n && e.zoneIdFromFriendInviteCode) {
            i = s.CountryDetectorFactors.FACTOR_BY_FRIEND_INVITE_CODE;
            n = t.getCountryByCountryCode(e.zoneIdFromFriendInviteCode, e.alsoDetectUnavailableCountries);
          }
          if (!n && e.countryByDefaultInstance && e.countryByDefaultInstance !== _.CountryDetectionConstants.INSTANCE_COUNTRY_DEFAULT) {
            i = s.CountryDetectorFactors.FACTOR_BY_DEFAULT_INSTANCE;
            n = t.getCountryByCountryCode(e.countryByDefaultInstance, e.alsoDetectUnavailableCountries);
          }
          if (!n && e.countryCodeFromNetworkCookie) {
            i = s.CountryDetectorFactors.FACTOR_BY_NETWORK_COOKIE;
            n = t.getCountryByCountryCode(e.countryCodeFromNetworkCookie, e.alsoDetectUnavailableCountries);
          }
          if (!n && e.countryCodeFromQueryString) {
            i = s.CountryDetectorFactors.FACTOR_BY_QUERY_STRING;
            n = t.getCountryByCountryCode(e.countryCodeFromQueryString, e.alsoDetectUnavailableCountries);
          }
          if (!n && e.browserLanguage && e.browserLanguage !== "n.a.") {
            r = e.alsoDetectUnavailableCountries ? t.allCountries : t.activeCountries;
            if ((u = c.filterCountriesByBrowserLanguage(r, e.browserLanguage)).length === 1) {
              i = s.CountryDetectorFactors.FACTOR_BY_BROWSER_LANGUAGE;
              n = u[0];
            }
            if (u.length > 1 && (u = c.filterCountriesByTimezone(u, e.timezoneOffset)).length === 1) {
              i = s.CountryDetectorFactors.FACTOR_BY_BROWSER_LANGUAGE_AND_TIMEZONE;
              n = u[0];
            }
          }
          if (n) {
            return [3, 3];
          } else {
            h = new l.Service(o.Context.instance.globals.geoIPUrl);
            i = s.CountryDetectorFactors.FACTOR_BY_GEOIP;
            return [4, h.load().then(function (e) {
              return m(e);
            }).then(function (n) {
              return t.getCountryByGeoIpCode(n, e.alsoDetectUnavailableCountries);
            })];
          }
        case 2:
          n = a.sent();
          a.label = 3;
        case 3:
          return [3, 5];
        case 4:
          p = a.sent();
          d.error("Error while detecting country", p);
          return [3, 5];
        case 5:
          if (!n) {
            n = t.defaultCountry;
            i = s.CountryDetectorFactors.FACTOR_BY_FALLBACK;
          }
          d.debug("Country was detected by " + s.CountryDetectorFactors[i] + ":  " + n);
          return [2, {
            country: n,
            factor: i
          }];
      }
    });
  });
};
function m(e) {
  return a.__awaiter(i, undefined, undefined, function () {
    var t;
    var n;
    var i;
    return a.__generator(this, function (a) {
      d.debug("onGeoIPReceived");
      t = u.GeoIPUtils.hexStringToBytes(e);
      n = u.GeoIPUtils.bytesToAsciiString(t);
      i = window.atob(n);
      d.debug("onGeoIPReceived  countryCode", i);
      return [2, i];
    });
  });
}