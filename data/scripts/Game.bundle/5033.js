Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./6.js");
var r = require("./7.js");
var l = require("./90.js");
var c = require("./4.js");
var u = require("./1937.js");
var d = require("./10.js");
var p = function (e) {
  function RUICommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RUICommand, e);
  Object.defineProperty(RUICommand.prototype, "cmdId", {
    get: function () {
      return r.ClientConstSF.S2C_RUIN_INFO;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  RUICommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        var n = s.int(i.ART);
        var o = s.int(i.PX);
        var r = s.int(i.PY);
        c.CastleModel.worldmapData.dispatchEvent(new l.CastleWorldmapEvent(l.CastleWorldmapEvent.CLICK_RUIN, [null, n]));
        h.CastleDialogHandler.getInstance().registerDefaultDialogs(g.CastleRelocateRuinDialog, new u.CastleRelocateRuinDialogProperties(o, r, n, true));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return RUICommand;
}(d.CastleCommand);
exports.RUICommand = p;
var h = require("./9.js");
var g = require("./1938.js");
o.classImplementsInterfaces(p, "IExecCommand");