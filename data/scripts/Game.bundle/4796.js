Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./4.js");
var l = require("./849.js");
var c = require("./869.js");
var u = require("./10.js");
var d = function (e) {
  function RBUCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RBUCommand, e);
  Object.defineProperty(RBUCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_REPAIR_BUILDING;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  RBUCommand.prototype.executeCommand = function (e, t) {
    var i;
    switch (e) {
      case a.ERROR.ALL_OK:
        i = JSON.parse(t[1]);
        r.CastleModel.areaData.activeArea.updater.parseRBU(i);
        r.CastleModel.currencyData.parseGCU(i.gcu);
        break;
      case a.ERROR.NO_FREE_CONSTRUCTION_SLOT:
        i = JSON.parse(t[1]);
        p.CastleDialogHandler.getInstance().registerDefaultDialogs(h.CastleSkipBuildingDialog, new l.CastleSkipBuildingDialogProperties(new c.C2SIsoRepairBuildingVO(i.OID), i.WID));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return RBUCommand;
}(u.CastleCommand);
exports.RBUCommand = d;
var p = require("./9.js");
var h = require("./638.js");
o.classImplementsInterfaces(d, "IExecCommand");