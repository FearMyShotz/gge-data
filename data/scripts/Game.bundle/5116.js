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
var d = require("./983.js");
var p = require("./985.js");
var h = require("./66.js");
var g = require("./10.js");
var C = function (e) {
  function SBPCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(SBPCommand, e);
  Object.defineProperty(SBPCommand.prototype, "cmdId", {
    get: function () {
      return c.ClientConstSF.S2C_BUY_EVENTPACKAGE;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  SBPCommand.prototype.executeCommand = function (e, t) {
    var i;
    switch (e) {
      case s.ERROR.ALL_OK:
        i = JSON.parse(t[1]);
        u.CastleModel.currencyData.parseGCU(i.gcu);
        u.CastleModel.militaryData.parse_GUI(i.gui);
        u.CastleModel.areaData.activeArea.updater.parseGRC(i.grc);
        u.CastleModel.spyData.parse_CPI(i.cpi);
        u.CastleModel.decoStorage.parseSIN(i.sin);
        u.CastleModel.vipData.parse_VIP(i.vip);
        u.CastleModel.eventPackageData.parseBoughtCount(i);
        break;
      case s.ERROR.NOT_ENOUGH_SPECIAL_CURRENCY:
        if (t.length) {
          i = JSON.parse(t[1]);
          var n = u.CastleModel.eventPackageData.getEventPackageByID(i.PID);
          var o = new p.ModernPackageShopResourceTipDialogProperties(n);
          if (o.isHandledByTipDialog()) {
            _.CastleDialogHandler.getInstance().registerDefaultDialogs(d.ModernPackageShopResourceTipDialog, o);
          } else {
            h.CostHelper.showNotEnoughSpecialCurrencyDialog(o.extractCurrencyIds());
          }
          break;
        }
        this.showErrorDialog(e, t);
        break;
      case s.ERROR.STORAGE_CAPACITY_REACHED:
        this.showCustomErrorDialog("dialog_storageFull");
        break;
      case s.ERROR.PLAYER_GIFT_STORAGE_FULL:
        if (u.CastleModel.playerGiftData.giftPackagesInInventoryAmount < r.PackageConst.MAX_PLAYER_GIFT_STORAGE) {
          this.showCustomErrorDialog("giftTrader_inventoryNotEnoughSpace", [r.PackageConst.MAX_PLAYER_GIFT_STORAGE - u.CastleModel.playerGiftData.giftPackagesInInventoryAmount]);
        } else {
          this.showCustomErrorDialog("giftTrader_inventoryLimitReached", [r.PackageConst.MAX_PLAYER_GIFT_STORAGE]);
        }
        break;
      case s.ERROR.CONSTRUCTION_ITEM_INVENTORY_FULL:
        this.showCustomErrorDialog("alert_ci_inventoryFull_copy");
        break;
      case s.ERROR.CONSTRUCTION_ITEM_INVENTORY_MAX_AMOUNT_REACHED:
        this.showCustomErrorDialog("alert_ci_itemInventoryFull_copy");
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  SBPCommand.prototype.showCustomErrorDialog = function (e, t = null) {
    _.CastleDialogHandler.getInstance().registerDefaultDialogs(m.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(l.Localize.text("generic_alert_watchout"), l.Localize.text(e, t)));
  };
  return SBPCommand;
}(g.CastleCommand);
exports.SBPCommand = C;
var _ = require("./9.js");
var m = require("./38.js");
a.classImplementsInterfaces(C, "IExecCommand");