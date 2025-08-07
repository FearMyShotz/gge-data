Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./11.js");
var s = function (e) {
  function DevTestEnvironment() {
    return e.call(this, DevTestEnvironment.DEV_TEST_ENVIRONMENT_ID) || this;
  }
  i.__extends(DevTestEnvironment, e);
  DevTestEnvironment.prototype.initPatterns = function () {
    e.prototype.initPatterns.call(this);
    this._branchesConfigPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/branches-test-dev/{gameFileName}/branches.xml";
    this._gameUrlPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/branches-test-dev/{gameFileName}/{branchId}/{gameTitle}Game_{branchVersion}.swf";
  };
  DevTestEnvironment.prototype.isSupported = function () {
    return this._data.globals.isDevTest;
  };
  DevTestEnvironment.DEV_TEST_ENVIRONMENT_ID = "DevTestEnvironment";
  return DevTestEnvironment;
}(require("./125.js").TestEnvironment);
exports.DevTestEnvironment = s;