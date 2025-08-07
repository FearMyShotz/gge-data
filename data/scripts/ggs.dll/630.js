Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function CountryDetectionVO(e, t, n, i, a, s, r, o, l) {
    this.browserLanguage = e;
    this.timezoneOffset = t;
    this.countryCodeFromNetworkCookie = n;
    this.countryCodeFromQueryString = i;
    this.countryByPresetInstance = a;
    this.zoneIdFromFriendInviteCode = s;
    this.countryByDefaultInstance = r;
    this.fakeGeoIpResponse = o;
    this.alsoDetectUnavailableCountries = l;
  }
  CountryDetectionVO.prototype.toString = function () {
    return ["browserLanguage: " + this.browserLanguage, "timezoneOffset: " + this.timezoneOffset, "countryCodeFromNetworkCookie: " + this.countryCodeFromNetworkCookie, "countryCodeFromQueryString: " + this.countryCodeFromQueryString, "countryByInstance: " + this.countryByPresetInstance, "zoneIdFromFriendInviteCode: " + this.zoneIdFromFriendInviteCode, "countryByDefaultInstance: " + this.countryByDefaultInstance, "fakeGeoIpResponse: " + this.fakeGeoIpResponse, "alsoDetectUnavailableCountries: " + this.alsoDetectUnavailableCountries].join(", ");
  };
  return CountryDetectionVO;
}();
exports.CountryDetectionVO = i;