Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./11.js");
var s = function (e) {
  function LiveTestEnvironment() {
    return e.call(this, LiveTestEnvironment.LIVE_TEST_ENVIRONMENT_ID) || this;
  }
  i.__extends(LiveTestEnvironment, e);
  LiveTestEnvironment.prototype.initPatterns = function () {
    e.prototype.initPatterns.call(this);
    if (!this._data.globals.urlVariables.forceToShowTestServers) {
      this._networkConfigPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/games-config-test/network/{gameId}/{networkVersion}/{networkId}.xml";
    }
    this._countryConfigPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/games-config-test/country/{gameId}/{countryVersion}/country.xml";
    this._languageConfigPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/games-config-test/language/{gameId}/{languageVersion}/{languageCode}.{zipSuffix}";
    this._cldrConfigPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/games-config-test/language/{gameId}/cldr";
    this._versionPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/games-config-test/version/{gameId}/version.json";
    this._branchesConfigPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://{cdnSubDomain}.{domain}/branches-livetest/{gameFileName}/branches.xml";
    this._gameUrlPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://{cdnSubDomain}.{domain}/branches-livetest/{gameFileName}/{branchId}/{gameTitle}Game_{branchVersion}.swf";
  };
  LiveTestEnvironment.prototype.isSupported = function () {
    return this._data.globals.isLiveTest;
  };
  LiveTestEnvironment.LIVE_TEST_ENVIRONMENT_ID = "LiveTestEnvironment";
  return LiveTestEnvironment;
}(require("./58.js").LiveEnvironment);
exports.LiveTestEnvironment = s;