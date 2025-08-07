Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./4.js");
var l = require("./849.js");
var c = require("./870.js");
var u = require("./10.js");
var d = function (e) {
  function EUPCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(EUPCommand, e);
  Object.defineProperty(EUPCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_UPGRADE_OBJECT;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  EUPCommand.prototype.executeCommand = function (e, t) {
    var i;
    switch (e) {
      case a.ERROR.ALL_OK:
        i = JSON.parse(t[1]);
        r.CastleModel.areaData.activeArea.updater.parseEUP(i);
        r.CastleModel.currencyData.parseGCU(i.gcu);
        break;
      case a.ERROR.NO_FREE_CONSTRUCTION_SLOT:
        i = JSON.parse(t[1]);
        p.CastleDialogHandler.getInstance().registerDefaultDialogs(h.CastleSkipBuildingDialog, new l.CastleSkipBuildingDialogProperties(new c.C2SIsoUpgradeObjectVO(i.OID, i.PO), i.WID));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return EUPCommand;
}(u.CastleCommand);
exports.EUPCommand = d;
var p = require("./9.js");
var h = require("./638.js");
o.classImplementsInterfaces(d, "IExecCommand");