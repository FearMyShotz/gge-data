Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function LocalHostTestEnvironment() {
    return e.call(this, LocalHostTestEnvironment.LOCAL_HOST_ENVIRONMENT_ID) || this;
  }
  i.__extends(LocalHostTestEnvironment, e);
  LocalHostTestEnvironment.prototype.initPatterns = function () {
    e.prototype.initPatterns.call(this);
    this._branchesConfigPathPattern = "../../branches/{gameFileName}/branches.xml";
    this._gameUrlPathPattern = "../../branches/{gameFileName}/{branchId}/{gameTitle}Game_{branchVersion}.swf";
  };
  LocalHostTestEnvironment.prototype.isSupported = function () {
    return this._data.globals.isLocalHost;
  };
  LocalHostTestEnvironment.LOCAL_HOST_ENVIRONMENT_ID = "LocalHostTestEnvironment";
  return LocalHostTestEnvironment;
}(require("./125.js").TestEnvironment);
exports.LocalHostTestEnvironment = a;