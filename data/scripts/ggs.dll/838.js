Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./11.js");
var s = function (e) {
  function LiveBranchingPreClientEnvironment() {
    return e.call(this, LiveBranchingPreClientEnvironment.LIVE_BRANCHING_PRE_CLIENT_ENVIRONMENT_ID) || this;
  }
  i.__extends(LiveBranchingPreClientEnvironment, e);
  LiveBranchingPreClientEnvironment.prototype.initPatterns = function () {
    e.prototype.initPatterns.call(this);
    if (!this._data.globals.urlVariables.forceToShowTestServers) {
      this._networkConfigPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://{cdnSubDomain}.{domain}/games-netconf/{gameId}/{networkId}.xml";
    }
    this._languageConfigPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://{cdnSubDomain}.{domain}/games-config-preClient/language/{gameId}/{languageVersion}/{languageCode}.{zipSuffix}";
    this._cldrConfigPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://{cdnSubDomain}.{domain}/games-config-preClient/language/{gameId}/cldr";
    this._versionPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://{cdnSubDomain}.{domain}/games-config-preClient/version/{gameId}/version.json";
    this._branchesConfigPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://" + a.BasicConstants.DOMAIN_INTERNAL_DNS + "/web/Web_PreClient/branches-preClient/{gameFileName}/branches.xml";
    this._gameUrlPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://" + a.BasicConstants.DOMAIN_INTERNAL_DNS + "/web/Web_PreClient/branches-preClient/{gameFileName}/{branchId}/{gameTitle}Game_{branchVersion}.swf";
  };
  LiveBranchingPreClientEnvironment.prototype.isSupported = function () {
    return this._data.globals.isLiveBranchingEnvironment && this._data.globals.isPreClient;
  };
  LiveBranchingPreClientEnvironment.LIVE_BRANCHING_PRE_CLIENT_ENVIRONMENT_ID = "LiveBranchingPreClientEnvironment";
  return LiveBranchingPreClientEnvironment;
}(require("./186.js").LiveBranchingLiveEnvironment);
exports.LiveBranchingPreClientEnvironment = s;