Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./6.js");
var r = require("./7.js");
var l = require("./4.js");
var c = require("./1929.js");
var u = require("./10.js");
var d = function (e) {
  function UFPCommand() {
    return e.call(this) || this;
  }
  n.__extends(UFPCommand, e);
  Object.defineProperty(UFPCommand.prototype, "cmdId", {
    get: function () {
      return r.ClientConstSF.S2C_USER_FACTION_POINTS;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  UFPCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        l.CastleModel.titleData.parseUFP(i);
        var n = s.int(i.NHT);
        if (n > 0) {
          var o = l.CastleModel.titleData.getTitleByTitleID(n);
          var r = l.CastleModel.titleData.getHighestTitleEverHeldByThisUser(o.titleSystem);
          var u = false;
          if (r != null) {
            u = o.orderInSystem <= r.orderInSystem;
          }
          p.CastleDialogHandler.getInstance().registerDefaultDialogs(h.CastleTitleAchievedDialog, new c.CastleTitleAchievedDialogProperties(o, u));
        }
        return true;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return UFPCommand;
}(u.CastleCommand);
exports.UFPCommand = d;
var p = require("./9.js");
var h = require("./1930.js");
o.classImplementsInterfaces(d, "IExecCommand");