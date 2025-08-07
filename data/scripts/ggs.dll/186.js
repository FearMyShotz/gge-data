Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./11.js");
var s = function (e) {
  function LiveBranchingLiveEnvironment(t) {
    return e.call(this, t !== undefined ? t : LiveBranchingLiveEnvironment.LIVE_BRANCHING_LIVE_ENVIRONMENT_ID) || this;
  }
  i.__extends(LiveBranchingLiveEnvironment, e);
  LiveBranchingLiveEnvironment.prototype.initPatterns = function () {
    e.prototype.initPatterns.call(this);
    this._branchesConfigPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://" + a.BasicConstants.DOMAIN_INTERNAL_DNS + "/web/Web_PreClient/branches/{gameFileName}/branches.xml";
    this._gameUrlPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://" + a.BasicConstants.DOMAIN_INTERNAL_DNS + "/web/Web_PreClient/branches/{gameFileName}/{branchId}/{gameTitle}Game_{branchVersion}.swf";
  };
  LiveBranchingLiveEnvironment.prototype.isSupported = function () {
    return this._data.globals.isLiveBranchingEnvironment;
  };
  LiveBranchingLiveEnvironment.LIVE_BRANCHING_LIVE_ENVIRONMENT_ID = "LiveBranchingLiveEnvironment";
  return LiveBranchingLiveEnvironment;
}(require("./58.js").LiveEnvironment);
exports.LiveBranchingLiveEnvironment = s;