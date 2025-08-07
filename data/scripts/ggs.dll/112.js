Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./620.js");
var a = require("./249.js");
var s = require("./621.js");
var r = require("./2.js").getLogger("WorldAssignment.CountriesManager");
var o = function () {
  function CountriesManager() {
    this.detectionFactor = 0;
    this.allCountries = [];
    this.activeCountries = [];
    this.notSupportedCountries = [];
  }
  CountriesManager.prototype.initCountries = function (e) {
    var t;
    this.allCountries = e;
    for (var n = 0; n < this.allCountries.length; n++) {
      var i = this.allCountries[n];
      if (i.ggsCountryCode.toLowerCase() === a.CountryCodes.INTERNATIONAL.toLowerCase()) {
        t = i;
      }
      if (i.isDefault) {
        this.defaultCountry = i;
        break;
      }
    }
    if (!this.defaultCountry) {
      r.warn("There is no default country specified in the country.xml, using 'XX' as default instead. Check country.xml configuration!");
      this.defaultCountry = t;
    }
  };
  CountriesManager.prototype.initActiveCountries = function (e, t) {
    for (var n = 0; n < e.length; n++) {
      this.activeCountries = this.activeCountries.concat(e[n].countries);
    }
    this.activeCountries = this.removeDuplicatedActiveCountries();
    this.activeCountries.sort(s.CountrySorters.sortAlphabetically);
    this.initNotSupportedCountries();
    if (t) {
      t();
    }
  };
  CountriesManager.prototype.getCountryByCountryCode = function (e, t) {
    return i.getCountryByCountryCode(t ? this.allCountries : this.activeCountries, e);
  };
  CountriesManager.prototype.getCountryByGeoIpCode = function (e, t) {
    return i.getCountryByGeoIpCode(t ? this.allCountries : this.activeCountries, e);
  };
  CountriesManager.prototype.isCountryWithBrowserLanguageAvailable = function (e, t = true) {
    return i.getCountryByBrowserLanguage(t ? this.activeCountries : this.allCountries, e) !== undefined;
  };
  CountriesManager.prototype.initNotSupportedCountries = function () {
    for (var e = this.allCountries.length, t = 0; t < e;) {
      if (this.activeCountries.indexOf(this.allCountries[t]) === -1 && this.allCountries[t].ggsCountryCode !== a.CountryCodes.INTERNATIONAL) {
        this.notSupportedCountries.push(this.allCountries[t]);
      }
      t++;
    }
  };
  CountriesManager.prototype.removeDuplicatedActiveCountries = function () {
    var e = [];
    for (var t = this.activeCountries.length, n = 0; n < t;) {
      if (e.indexOf(this.activeCountries[n]) === -1) {
        e.push(this.activeCountries[n]);
      }
      n++;
    }
    return e;
  };
  return CountriesManager;
}();
exports.CountriesManager = o;