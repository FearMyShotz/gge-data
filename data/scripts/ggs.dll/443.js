Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./26.js");
var s = require("./9.js");
var r = require("./44.js");
var o = require("./8.js");
var l = require("./444.js");
var u = require("./182.js");
var c = function (e) {
  function TCICommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(TCICommand, e);
  Object.defineProperty(TCICommand.prototype, "cmdId", {
    get: function () {
      return s.BasicSmartfoxConstants.S2C_TEST_CASE_INFO;
    },
    enumerable: true,
    configurable: true
  });
  TCICommand.prototype.executeCommand = function (e, t) {
    if (e == u.CoreErrorIdConstants.OK) {
      var n = JSON.parse(t.pop());
      o.BasicController.getInstance().dispatchEvent(new l.TestCaseInfoEvent(l.TestCaseInfoEvent.TEST_CASE_INFO_RECEIVED, n));
      return true;
    }
    r.error("TCICommand received TestCaseInfo error: " + e.toString());
    return false;
  };
  return TCICommand;
}(a.BasicCommand);
exports.TCICommand = c;