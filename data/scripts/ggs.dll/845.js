Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./11.js");
var s = function (e) {
  function UsabilityTestEnvironment() {
    return e.call(this, UsabilityTestEnvironment.USABILITY_TEST_ENVIRONMENT_ID) || this;
  }
  i.__extends(UsabilityTestEnvironment, e);
  UsabilityTestEnvironment.prototype.initPatterns = function () {
    e.prototype.initPatterns.call(this);
    if (!this._data.globals.urlVariables.forceToShowTestServers) {
      this._networkConfigPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/games-netconf/{gameId}/{networkId}.xml";
    }
    this._languageConfigPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://{cdnSubDomain}.{domain}/games-config/language/{gameId}/{languageVersion}/{languageCode}.{zipSuffix}";
    this._cldrConfigPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://{cdnSubDomain}.{domain}/games-config/language/{gameId}/cldr";
    this._versionPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://{cdnSubDomain}.{domain}/games-config/version/{gameId}/version.json";
    this._itemsVersionPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://{cdnSubDomain}.{domain}/loader/{gameTitle}/ItemsVersion.properties";
    this._refCountURLPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/loader-usability/refcount.php";
  };
  UsabilityTestEnvironment.prototype.isSupported = function () {
    return this._data.globals.isUsabilityTest;
  };
  UsabilityTestEnvironment.USABILITY_TEST_ENVIRONMENT_ID = "UsabilityTestEnvironment";
  return UsabilityTestEnvironment;
}(require("./58.js").LiveEnvironment);
exports.UsabilityTestEnvironment = s;