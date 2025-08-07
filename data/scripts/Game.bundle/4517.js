Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./1912.js");
var u = require("./155.js");
var d = require("./4.js");
var p = require("./52.js");
var h = require("./8.js");
var g = require("./11.js");
var C = require("./1168.js");
var _ = require("./1167.js");
var m = require("./1913.js");
var f = require("./4518.js");
var O = require("./4519.js");
var E = function (e) {
  function CastleLuckWheelSalesDaysDialog() {
    return e.call(this, CastleLuckWheelSalesDaysDialog.NAME) || this;
  }
  n.__extends(CastleLuckWheelSalesDaysDialog, e);
  Object.defineProperty(CastleLuckWheelSalesDaysDialog.prototype, "mediatorClass", {
    get: function () {
      return f.CastleLuckyWheelSalesDayMediator;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(m.CastleBasicLuckyWheelDialog.prototype, "mediatorClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleLuckWheelSalesDaysDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this._tfTickets = this.textFieldManager.registerTextField(this.dialogDisp.mc_tickets.tf_ticketcount, new r.LocalizedNumberVO(0));
    this.dialogDisp.mc_tickets.icon_tickets.toolTipText = "tooltip_tickets_saleDays";
    h.ButtonHelper.initBasicButtons([this.dialogDisp.mc_tickets.btn_info_tickets]);
  };
  CastleLuckWheelSalesDaysDialog.prototype.updateScoreBarText = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.component_scoreBar.txt_points, new s.LocalizedTextVO("dialog_luckyWheel_saleDays_description"));
  };
  CastleLuckWheelSalesDaysDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (h.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.mc_tickets.btn_info_tickets:
          var i = new u.CollectableItemGenericCurrencyVO(p.ClientConstCurrency.ID_SALES_DAYS_LUCKY_WHEEL_TICKET);
          this.layoutManager.showDialog(C.CastleRewardInfoDialog, new _.CastleRewardInfoDialogProperties(i));
          break;
        case this.dialogDisp.btn_help:
          g.CastleExternalDialog.dialogHandler.showHelper(l.Localize.text(""), l.Localize.text("dialog_luckyWheel_saleDays_text_help"));
      }
    }
  };
  CastleLuckWheelSalesDaysDialog.prototype.updateBG = function () {
    e.prototype.updateBG.call(this);
    this.dialogDisp.mc_tickets.y = this.eventVO.isProMode ? 120 : 111;
    this.dialogDisp.component_spin.y = this.eventVO.isProMode ? 122 : 113;
  };
  CastleLuckWheelSalesDaysDialog.prototype.handleNotEnoughTickets = function () {
    g.CastleExternalDialog.dialogHandler.registerDefaultDialogs(O.CastleNotEnoughLuckyWheelSalesDaysTicketsDialog);
  };
  CastleLuckWheelSalesDaysDialog.prototype.startSpin = function () {
    d.CastleModel.smartfoxClient.sendCommandVO(new c.C2SLuckyWheelSpinVO(1));
  };
  Object.defineProperty(CastleLuckWheelSalesDaysDialog.prototype, "eventVO", {
    get: function () {
      if (this.luckyProperties) {
        return this.luckyProperties.eventVO;
      } else {
        return d.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_LUCKYWHEEL_SD);
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(m.CastleBasicLuckyWheelDialog.prototype, "eventVO").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleLuckWheelSalesDaysDialog.NAME = "CastleLuckyWheelSalesDay";
  return CastleLuckWheelSalesDaysDialog;
}(m.CastleBasicLuckyWheelDialog);
exports.CastleLuckWheelSalesDaysDialog = E;
o.classImplementsInterfaces(E, "ICollectableRendererList");