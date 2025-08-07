Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./7.js");
var l = require("./4.js");
var c = require("./1940.js");
var u = require("./10.js");
var d = function (e) {
  function SSUCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(SSUCommand, e);
  Object.defineProperty(SSUCommand.prototype, "cmdId", {
    get: function () {
      return r.ClientConstSF.S2C_SPY_SPY_UNITS;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  SSUCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case s.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        var n = new h.CastleSpyLogVO();
        n.parseSpyLog(i);
        var a = o.castAs(l.CastleModel.worldmapData.areaTiles.getVOForAreaByXY(n.areaPosX, n.areaPosY), "InteractiveMapobjectVO");
        if (a) {
          n.mapobjectVO = a;
        }
        var r = new p.AMessageSpyVO();
        r.forwarded = false;
        g.CastleDialogHandler.getInstance().registerDefaultDialogs(C.CastleSpyinfoDetailsDialog, new c.CastleSpyinfoDetailsDialogProperties(n, r, null));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return SSUCommand;
}(u.CastleCommand);
exports.SSUCommand = d;
var p = require("./1157.js");
var h = require("./1941.js");
var g = require("./9.js");
var C = require("./1942.js");
a.classImplementsInterfaces(d, "IExecCommand");