Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./7.js");
var l = require("./4.js");
var c = require("./10.js");
var u = function (e) {
  function GBLCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GBLCommand, e);
  Object.defineProperty(GBLCommand.prototype, "cmdId", {
    get: function () {
      return r.ClientConstSF.S2C_GET_BOOKMARKLIST;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  GBLCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case s.ERROR.ALL_OK:
        try {
          var i = JSON.parse(t[1]);
        } catch (e) {
          o.debug("Invalid Json String appeared");
          o.debug(e.toString());
          return false;
        }
        l.CastleModel.bookmarkData.parse_GBL(i);
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return GBLCommand;
}(c.CastleCommand);
exports.GBLCommand = u;
a.classImplementsInterfaces(u, "IExecCommand");