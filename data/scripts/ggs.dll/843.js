Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./11.js");
var s = function (e) {
  function PreClientEnvironment() {
    return e.call(this, PreClientEnvironment.PRE_CLIENT_ENVIRONMENT_ID) || this;
  }
  i.__extends(PreClientEnvironment, e);
  PreClientEnvironment.prototype.initPatterns = function () {
    e.prototype.initPatterns.call(this);
    if (!this._data.globals.urlVariables.forceToShowTestServers) {
      this._networkConfigPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://{cdnSubDomain}.{domain}/games-netconf/{gameId}/{networkId}.xml";
    }
    this._languageConfigPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://{cdnSubDomain}.{domain}/games-config-preClient/language/{gameId}/{languageVersion}/{languageCode}.{zipSuffix}";
    this._cldrConfigPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://{cdnSubDomain}.{domain}/games-config-preClient/language/{gameId}/cldr";
    this._versionPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://{cdnSubDomain}.{domain}/games-config-preClient/version/{gameId}/version.json";
    this._branchesConfigPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://{cdnSubDomain}.{domain}/branches-preClient/{gameFileName}/branches.xml";
    this._gameUrlPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://{cdnSubDomain}.{domain}/branches-preClient/{gameFileName}/{branchId}/{gameTitle}Game_{branchVersion}.swf";
  };
  PreClientEnvironment.prototype.isSupported = function () {
    return this._data.globals.isPreClient;
  };
  PreClientEnvironment.PRE_CLIENT_ENVIRONMENT_ID = "PreClientEnvironment";
  return PreClientEnvironment;
}(require("./58.js").LiveEnvironment);
exports.PreClientEnvironment = s;