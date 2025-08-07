Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./11.js");
var s = function (e) {
  function FeatureBranchQualityAssuranceEnvironment() {
    return e.call(this, FeatureBranchQualityAssuranceEnvironment.FEATURE_BRANCH_QUALITY_ASSURANCE_ENVIRONMENT) || this;
  }
  i.__extends(FeatureBranchQualityAssuranceEnvironment, e);
  FeatureBranchQualityAssuranceEnvironment.prototype.initPatterns = function () {
    e.prototype.initPatterns.call(this);
    this._branchesConfigPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://" + a.BasicConstants.DOMAIN_INTERNAL_DNS + "/web/branch_feature_{featureBranchId}/{featureBranchEnvironment}/branches/{gameFileName}/branches.xml";
    this._gameUrlPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://" + a.BasicConstants.DOMAIN_INTERNAL_DNS + "/web/branch_feature_{featureBranchId}/{featureBranchEnvironment}/branches/{gameFileName}/{branchId}/{gameTitle}Game_{branchVersion}.swf";
  };
  FeatureBranchQualityAssuranceEnvironment.prototype.isSupported = function () {
    return this._data.globals.isFeatureBranchEnvironment;
  };
  FeatureBranchQualityAssuranceEnvironment.FEATURE_BRANCH_QUALITY_ASSURANCE_ENVIRONMENT = "FeatureBranchQualityAssuranceEnvironment";
  return FeatureBranchQualityAssuranceEnvironment;
}(require("./125.js").TestEnvironment);
exports.FeatureBranchQualityAssuranceEnvironment = s;