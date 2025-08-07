var i = this;
Object.defineProperty(exports, "__esModule", {
  value: true
});
var a = require("./62.js");
var s = require("./90.js");
var r = require("./112.js");
var o = require("./39.js");
var l = require("./630.js");
var u = require("./2.js");
var c = require("./91.js");
var _ = require("./70.js");
var d = require("./71.js");
var m = require("./631.js");
var h = require("./632.js");
var p = require("./634.js");
var g = require("./635.js");
var E = u.getLogger("WorldAssignment.CountriesController");
exports.loadCountryConfig = function (e) {
  return a.__awaiter(i, undefined, undefined, function () {
    return a.__generator(this, function (t) {
      if (e) {
        e(c.WorldAssignmentTrackingConstants.COUNTRY_XML_START);
      }
      E.debug("loadCountryConfig: load country.xml from", o.Context.instance.globals.countriesConfigUrl);
      return [2, new s.Service(o.Context.instance.globals.countriesConfigUrl).load().then(function (t) {
        if (e) {
          e(c.WorldAssignmentTrackingConstants.COUNTRY_XML_END);
        }
        var n = p.parseCountries(t);
        o.Context.instance.get(r.CountriesManager).initCountries(n);
      }).catch(function () {
        throw new _.WorldAssignmentError(d.WorldAssignmentErrorCodes.COUNTRY_FAILED_TO_LOAD, "Failed to load country.xml from " + o.Context.instance.globals.countriesConfigUrl);
      })];
    });
  });
};
exports.detectCountry = function () {
  return a.__awaiter(i, undefined, undefined, function () {
    var e;
    var t;
    var n;
    var i;
    var s;
    var u;
    return a.__generator(this, function (a) {
      switch (a.label) {
        case 0:
          E.debug("detectCountry: START");
          e = o.Context.instance.globals;
          t = o.Context.instance.get(r.CountriesManager);
          n = new l.CountryDetectionVO(e.browserLanguage, e.timezoneOffset, e.countryCodeFromNetworkCookie, e.countryCodeFromQueryString, m.getCountryCodeByPresetInstance(e.presetInstanceId), m.getCountryCodeByFriendInvite(e.zoneIdFromFriendInviteCode, e.countryCodeFromFriendInviteCode), m.getCountryCodeByDefaultInstance(o.Context.instance.networkSettings.defaultInstanceId), e.fakeGeoIpResponse, e.alsoDetectUnavailableCountries);
          return [4, h.runCountryDetection(n, t)];
        case 1:
          i = a.sent();
          s = i.country;
          u = i.factor;
          t.detectionFactor = u;
          t.currentCountry = g.forceEnglishForSupportAgents(s, e.isHydraLogin);
          return [2, t.currentCountry];
      }
    });
  });
};