Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function Country(e, t, n, i, a, s, r, o, l) {
    this.ggsCountryCode = e;
    this.ggsLanguageCode = t;
    this.browserLanguageCodes = n;
    this.geoIpCodes = i;
    this.flashRuntimeLanguageCodes = a;
    this.utcTimezoneMin = s;
    this.utcTimezoneMax = r;
    this.cdn = o;
    this.isDefault = l;
    this._flashLocaleId = "";
    this._useNonLatinCharset = false;
    if (this.ggsLanguageCode.toLowerCase() === "zh") {
      this._flashLocaleId = "zh-Hans-CN";
    } else {
      this._flashLocaleId = this.ggsLanguageCode.toLowerCase() + "-" + this.ggsCountryCode.toUpperCase();
    }
  }
  Country.prototype.isUTCTimezoneInRange = function (e) {
    return e >= this.utcTimezoneMin && e <= this.utcTimezoneMax;
  };
  Country.prototype.toString = function () {
    return "ggsCountryCode: '" + this.ggsCountryCode + "', ggsLangCode: '" + this.ggsLanguageCode + "', flashLangCodes: '" + this.flashRuntimeLanguageCodes + "', browserLangCodes: '" + this.browserLanguageCodes + "', geoIpCodes: '" + this.geoIpCodes + "', timeZoneOffset " + (isNaN(this.utcTimezoneMin) ? "NA" : "from " + this.utcTimezoneMin + " to " + this.utcTimezoneMax);
  };
  Object.defineProperty(Country.prototype, "useNonLatinCharset", {
    get: function () {
      return this._useNonLatinCharset;
    },
    set: function (e) {
      this._useNonLatinCharset = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Country.prototype, "isLanguageWrittenRightToLeft", {
    get: function () {
      return this.ggsLanguageCode === "ar";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Country.prototype, "flashLocaleId", {
    get: function () {
      return this._flashLocaleId;
    },
    enumerable: true,
    configurable: true
  });
  return Country;
}();
exports.Country = i;