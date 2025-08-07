Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./6.js");
var r = require("./7.js");
var l = require("./4.js");
var c = require("./1928.js");
var u = require("./10.js");
var d = function (e) {
  function UFACommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(UFACommand, e);
  Object.defineProperty(UFACommand.prototype, "cmdId", {
    get: function () {
      return r.ClientConstSF.S2C_GET_FAME;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  UFACommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        l.CastleModel.titleData.parseUFA(i);
        var n = s.int(i.NHT);
        if (n > 0) {
          p.CastleDialogHandler.getInstance().registerDefaultDialogs(h.CastleTitleAchievedDialog, new c.CastleTitleAchievedDialogProperties(l.CastleModel.titleData.getTitleByTitleID(n)));
        }
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return UFACommand;
}(u.CastleCommand);
exports.UFACommand = d;
var p = require("./9.js");
var h = require("./1929.js");
o.classImplementsInterfaces(d, "IExecCommand");