Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./92.js");
var l = require("./4.js");
var c = require("./850.js");
var u = require("./868.js");
var d = require("./10.js");
var p = function (e) {
  function EBUCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(EBUCommand, e);
  Object.defineProperty(EBUCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_BUY_OBJECT;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  EBUCommand.prototype.executeCommand = function (e, t) {
    var i;
    switch (e) {
      case a.ERROR.ALL_OK:
        i = JSON.parse(t[1]);
        l.CastleModel.areaData.activeArea.updater.parseEBU(i);
        l.CastleModel.currencyData.parseGCU(i.gcu);
        l.CastleModel.decoStorage.parseSIN(i.sin);
        l.CastleModel.areaData.activeArea.updater.parseCBX(i.fbe, false);
        break;
      case a.ERROR.NO_FREE_CONSTRUCTION_SLOT:
        i = JSON.parse(t[1]);
        h.CastleDialogHandler.getInstance().registerDefaultDialogs(g.CastleSkipBuildingDialog, new c.CastleSkipBuildingDialogProperties(new u.C2SIsoBuyObjectVO(i.WID, i.X, i.Y, i.R, i.PO, false, i.DOID), i.WID));
        break;
      case a.ERROR.INVALID_POSITION:
        this.controller.dispatchEvent(new r.IsoEvent(r.IsoEvent.ON_DRAG_INVALID));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return EBUCommand;
}(d.CastleCommand);
exports.EBUCommand = p;
var h = require("./9.js");
var g = require("./639.js");
o.classImplementsInterfaces(p, "IExecCommand");