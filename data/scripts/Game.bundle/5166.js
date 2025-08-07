Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./7.js");
var u = require("./183.js");
var d = require("./4.js");
var p = require("./10.js");
var h = function (e) {
  function TGTCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(TGTCommand, e);
  Object.defineProperty(TGTCommand.prototype, "cmdId", {
    get: function () {
      return c.ClientConstSF.S2C_TREASUREMAP_GOODS_TRANSFER;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  TGTCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case r.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        d.CastleModel.treasureMapData.parse_TMP(i.tmp);
        break;
      case r.ERROR.NOT_ENOUGH_RESOURCES:
        var n = l.Localize.text("generic_alert_information");
        var s = l.Localize.text("errorCode_" + e) + (a.EnvGlobalsHandler.globals.isTest || a.EnvGlobalsHandler.globals.isLocal ? " (" + this.cmdId + ")" : "");
        g.CastleDialogHandler.getInstance().registerDefaultDialogs(C.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(n, s));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    d.CastleModel.treasureMapData.dispatchEvent(new u.CastleTreasureMapEvent(u.CastleTreasureMapEvent.RESOURCE_TRANSFER_DATA_UPDATED, null));
    return true;
  };
  return TGTCommand;
}(p.CastleCommand);
exports.TGTCommand = h;
var g = require("./9.js");
var C = require("./38.js");
s.classImplementsInterfaces(h, "IExecCommand");