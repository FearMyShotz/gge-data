Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./7.js");
var d = require("./4.js");
var p = require("./4953.js");
var h = require("./135.js");
var g = require("./983.js");
var C = require("./622.js");
var _ = require("./10.js");
var m = function (e) {
  function BUPCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(BUPCommand, e);
  Object.defineProperty(BUPCommand.prototype, "cmdId", {
    get: function () {
      return u.ClientConstSF.S2C_BUY_UNIT_PACKAGE;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(_.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  BUPCommand.prototype.executeCommand = function (e, t) {
    var i;
    switch (e) {
      case s.ERROR.ALL_OK:
        i = JSON.parse(t[1]);
        d.CastleModel.militaryData.parse_SPL(i.spl);
        d.CastleModel.areaData.activeArea.updater.parseGRC(i.grc);
        d.CastleModel.currencyData.parseGCU(i.gcu);
        d.CastleModel.militaryData.parse_GUI(i.gui);
        if (i.O && i.O != 0) {
          d.CastleModel.militaryData.unitInventory.addUnit(i.O.W, i.O.AMT);
        }
        break;
      case s.ERROR.NO_FREE_CONSTRUCTION_SLOT:
        i = JSON.parse(t[1]);
        var n = d.CastleModel.wodData.createVObyWOD(i.WID, f.CastleWodData.TYPE_UNIT);
        var a = c.int(i.LID);
        var u = c.int(i.AMT);
        if (d.CastleModel.militaryData.getPackageListById(a).allSlotsBought()) {
          O.CastleDialogHandler.getInstance().registerDefaultDialogs(b.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(l.Localize.text("generic_alert_information"), l.Localize.text("alert_no_free_unitslot")));
          return false;
        }
        if (D.CostHelper.canAfford(n)) {
          O.CastleDialogHandler.getInstance().registerDefaultDialogs(E.CastleBuySlotAndUnitDialog, new p.CastleBuySlotAndUnitDialogProperties(n, a, u, d.CastleModel.costsData.getFinalCostsC2(r.UnitProductionConst.UNLOCK_C2), this.bindFunction(this.onBuyItem)));
        } else {
          O.CastleDialogHandler.getInstance().registerDefaultDialogs(b.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(l.Localize.text("generic_alert_information"), l.Localize.text("errorCode_55")));
        }
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  BUPCommand.prototype.onBuyItem = function (e, t, i) {
    if (d.CastleModel.militaryData.getPackageListById(t).playerCanBuyNextSlot()) {
      d.CastleModel.smartfoxClient.sendCommandVO(new C.C2SUnlockPackageSlotVO(t));
      d.CastleModel.smartfoxClient.sendCommandVO(new g.C2SBuyUnitPackageVO(t, e.wodId, i, d.CastleModel.kingdomData.activeKingdomID, d.CastleModel.permanentCastleData.getCurrentCastle().areaId));
    } else {
      O.CastleDialogHandler.getInstance().registerDefaultDialogs(y.CastleNoMoneyC2Dialog, new h.CastleNoMoneyC2DialogProperties());
    }
  };
  return BUPCommand;
}(_.CastleCommand);
exports.BUPCommand = m;
var f = require("./56.js");
var O = require("./9.js");
var E = require("./4954.js");
var y = require("./138.js");
var b = require("./38.js");
var D = require("./66.js");
a.classImplementsInterfaces(m, "IExecCommand");