Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./11.js");
var s = function (e) {
  function LiveBranchingTestEnvironment() {
    return e.call(this, LiveBranchingTestEnvironment.LIVE_BRANCHING_TEST_ENVIRONMENT_ID) || this;
  }
  i.__extends(LiveBranchingTestEnvironment, e);
  LiveBranchingTestEnvironment.prototype.initPatterns = function () {
    e.prototype.initPatterns.call(this);
    this._networkConfigPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/games-netconf-test/{gameId}/{networkId}.xml";
    this._countryConfigPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/games-config-test/country/{gameId}/{countryVersion}/country.xml";
    this._languageConfigPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/games-config-test/language/{gameId}/{languageVersion}/{languageCode}.{zipSuffix}";
    this._cldrConfigPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/games-config-test/language/{gameId}/cldr";
    this._accountCookiePathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://account.{domain}/CookieSaver.swf";
    this._versionPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/games-config-test/version/{gameId}/version.json";
    this._branchesConfigPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://" + a.BasicConstants.DOMAIN_INTERNAL_DNS + "/web/Web_PreClient/branches-test/{gameFileName}/branches.xml";
    this._gameUrlPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://" + a.BasicConstants.DOMAIN_INTERNAL_DNS + "/web/Web_PreClient/branches-test/{gameFileName}/{branchId}/{gameTitle}Game_{branchVersion}.swf";
    this._refCountURLPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/loader-test/refcount.php";
    this._shopPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://shop-test.goodgamestudios.com/{languageCode}/";
  };
  LiveBranchingTestEnvironment.prototype.isSupported = function () {
    return this._data.globals.isLiveBranchingEnvironment && this._data.globals.isTest;
  };
  LiveBranchingTestEnvironment.LIVE_BRANCHING_TEST_ENVIRONMENT_ID = "LiveBranchingTestEnvironment";
  return LiveBranchingTestEnvironment;
}(require("./186.js").LiveBranchingLiveEnvironment);
exports.LiveBranchingTestEnvironment = s;