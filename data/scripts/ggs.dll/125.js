Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./11.js");
var s = function (e) {
  function TestEnvironment(t) {
    return e.call(this, t !== undefined ? t : TestEnvironment.TEST_ENVIRONMENT_ID) || this;
  }
  i.__extends(TestEnvironment, e);
  TestEnvironment.prototype.initPatterns = function () {
    e.prototype.initPatterns.call(this);
    if (!this._data.globals.urlVariables.forceToShowTestServers) {
      this._networkConfigPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/games-netconf-test/{gameId}/{networkId}.xml";
    }
    this._networkConfigPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/games-config-test/network/{gameId}/html5/1.xml";
    this._countryConfigPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/games-config-test/country/{gameId}/{countryVersion}/country.xml";
    this._languageConfigPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/games-config-test/language/{gameId}/{languageVersion}/{languageCode}.{zipSuffix}";
    this._cldrConfigPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + ":///files.{domain}/games-config-test/language/{gameId}/cldr";
    this._accountCookiePathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://account.{domain}/CookieSaver.swf";
    this._versionPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/games-config-test/version/{gameId}/version.json";
    this._branchesConfigPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/branches-test/{gameFileName}/branches.xml";
    this._gameUrlPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/branches-test/{gameFileName}/{branchId}/{gameTitle}Game_{branchVersion}.swf";
    this._refCountURLPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/loader-test/refcount.php";
    this._shopPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://shop-test.goodgamestudios.com/{languageCode}/";
  };
  TestEnvironment.prototype.isSupported = function () {
    return this._data.globals.isTest;
  };
  TestEnvironment.TEST_ENVIRONMENT_ID = "TestEnvironment";
  return TestEnvironment;
}(require("./58.js").LiveEnvironment);
exports.TestEnvironment = s;