Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./7.js");
var u = require("./4.js");
var d = require("./10.js");
var p = function (e) {
  function HRUCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(HRUCommand, e);
  Object.defineProperty(HRUCommand.prototype, "cmdId", {
    get: function () {
      return c.ClientConstSF.S2C_REVIVE_HOSPITAL_UNITS;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  HRUCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case s.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        u.CastleModel.militaryData.parse_SPL(i.spl);
        u.CastleModel.currencyData.parseGCU(i.gcu);
        u.CastleModel.militaryData.parse_GUI(i.gui);
        break;
      case s.ERROR.INVALID_AMOUNT:
        h.CastleDialogHandler.getInstance().registerDefaultDialogs(g.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(l.Localize.text("generic_alert_information"), l.Localize.text("alert_hospital_amountOutdated")));
        break;
      case s.ERROR.NO_FREE_CONSTRUCTION_SLOT:
        if (u.CastleModel.militaryData.getPackageListById(r.UnitProductionConst.HOSPITAL_LIST).allSlotsBought()) {
          h.CastleDialogHandler.getInstance().registerDefaultDialogs(g.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(l.Localize.text("generic_alert_information"), l.Localize.text("alert_no_free_unitslot")));
        } else {
          h.CastleDialogHandler.getInstance().registerDefaultDialogs(g.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(l.Localize.text("generic_alert_information"), l.Localize.text("dialog_hospital_noUnlockedSlotLeft")));
        }
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return HRUCommand;
}(d.CastleCommand);
exports.HRUCommand = p;
var h = require("./9.js");
var g = require("./38.js");
a.classImplementsInterfaces(p, "IExecCommand");