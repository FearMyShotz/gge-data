Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./26.js");
var s = require("./9.js");
var r = require("./68.js");
var o = require("./4.js");
var l = require("./30.js");
var u = function (e) {
  function NFOCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(NFOCommand, e);
  Object.defineProperty(NFOCommand.prototype, "cmdId", {
    get: function () {
      return s.BasicSmartfoxConstants.S2C_SERVER_INFO_EVENT;
    },
    enumerable: true,
    configurable: true
  });
  NFOCommand.prototype.executeCommand = function (e, t) {
    if (e == r.BasicErrorConstants.ALL_OK) {
      var n = JSON.parse(t[1]);
      o.BasicModel.basicLocalization.setUsernameMinLength = n.minNameSize;
      var i = n.itemXmlVersion;
      this.compareItemsVersions(i);
      return true;
    }
    return false;
  };
  NFOCommand.prototype.compareItemsVersions = function (e) {
    var t = this.env.versionInformation.itemXmlVersion;
    if (t != e) {
      l.debug("Item XML version of client [" + t + "] doesn't fit to item XML version of the server [" + e + "]");
    }
  };
  return NFOCommand;
}(a.BasicCommand);
exports.NFOCommand = u;