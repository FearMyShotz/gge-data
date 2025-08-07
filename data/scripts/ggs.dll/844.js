Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function PrivateTestEnvironment() {
    return e.call(this, PrivateTestEnvironment.PRIVATE_TEST_ENVIRONMENT_ID) || this;
  }
  i.__extends(PrivateTestEnvironment, e);
  PrivateTestEnvironment.prototype.isSupported = function () {
    return this._data.globals.isPrivateTestServer;
  };
  PrivateTestEnvironment.PRIVATE_TEST_ENVIRONMENT_ID = "PrivateTestEnvironment";
  return PrivateTestEnvironment;
}(require("./58.js").LiveEnvironment);
exports.PrivateTestEnvironment = a;