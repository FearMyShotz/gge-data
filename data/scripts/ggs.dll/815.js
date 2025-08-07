Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./9.js");
var s = require("./4.js");
var r = require("./6.js");
var o = require("./35.js");
var l = function (e) {
  function BasicTestCaseInfoCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(BasicTestCaseInfoCommand, e);
  BasicTestCaseInfoCommand.prototype.execute = function (e = null) {
    if (e) {
      var t = e[0];
      s.BasicModel.smartfoxClient.sendMessage(a.BasicSmartfoxConstants.C2S_TEST_CASE_INFO, [t]);
    } else {
      o.warn("Can't request TestCaseInfo without a testCaseID");
    }
  };
  return BasicTestCaseInfoCommand;
}(r.SimpleCommand);
exports.BasicTestCaseInfoCommand = l;