Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./2.js");
var a = require("./29.js");
var s = function () {
  function LogListManager() {}
  LogListManager.logTrace = function (e) {
    this.logger.warn("LogListManager.logTrace - is not implemented");
  };
  LogListManager.activate = function () {
    this.logger.warn("LogListManager.activate - is not implemented");
  };
  LogListManager.copyToClipboard = function (e = 600, t = -1, n = "") {
    this.logger.warn("LogListManager.copyToClipboard - is not implemented");
  };
  LogListManager.logger = i.getLogger(a.TOOLBOX_LOGGER);
  return LogListManager;
}();
exports.LogListManager = s;