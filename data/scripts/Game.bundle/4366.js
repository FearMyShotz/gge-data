Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./1.js");
var l = require("./5.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./146.js");
var p = require("./21.js");
var h = require("./26.js");
var g = require("./4.js");
var C = require("./11.js");
var _ = createjs.Event;
var m = require("./27.js");
var f = require("./108.js");
var O = function (e) {
  function CastleAlliPaymentBonusDialog() {
    return e.call(this, CastleAlliPaymentBonusDialog.NAME) || this;
  }
  n.__extends(CastleAlliPaymentBonusDialog, e);
  CastleAlliPaymentBonusDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_shop]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new c.LocalizedTextVO("dialog_alliancePT_title")).verticalAlign = o.GGSVerticalAlign.MIDDLE;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy1, new c.LocalizedTextVO("dialog_alliancePT_copy1"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_shop.txt_shop, new c.LocalizedTextVO("add_Gold"));
    this.dialogDisp.btn_shop.toolTipText = "add_Gold";
    this.itxt_percent = this.textFieldManager.registerTextField(this.dialogDisp.txt_percent, new c.LocalizedTextVO(a.GenericTextIds.VALUE_PERCENTAGE_ADD));
    this.itxt_copy3 = this.textFieldManager.registerTextField(this.dialogDisp.txt_copy3, new c.LocalizedTextVO("dialog_alliancePT_copy3"));
    this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.txt_time, new u.TextVO(""));
  };
  CastleAlliPaymentBonusDialog.prototype.setCopyTexts = function () {
    if (this.eventVO) {
      this.itxt_percent.textContentVO.textReplacements = [this.eventVO.primeFactorInPercent];
      this.itxt_copy3.textContentVO.textReplacements = [CastleAlliPaymentBonusDialog.EXAMPLE_GOLD, this.eventVO.primeFactorInPercent * 0.01 * CastleAlliPaymentBonusDialog.EXAMPLE_GOLD];
    } else {
      this.hide();
    }
  };
  CastleAlliPaymentBonusDialog.prototype.showLoaded = function (t = null) {
    if (this.eventVO) {
      e.prototype.showLoaded.call(this);
      this.onUpdateEventTime(new _("", false, false));
    } else {
      this.hide();
    }
  };
  CastleAlliPaymentBonusDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    g.CastleModel.specialEventData.addEventListener(h.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onPrimeAlliBonusEnd));
    g.CastleModel.timerData.addEventListener(p.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTime));
  };
  CastleAlliPaymentBonusDialog.prototype.removeEventListenerOnHide = function () {
    g.CastleModel.specialEventData.removeEventListener(h.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onPrimeAlliBonusEnd));
    g.CastleModel.timerData.removeEventListener(p.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTime));
    e.prototype.removeEventListenerOnHide.call(this);
  };
  CastleAlliPaymentBonusDialog.prototype.onPrimeAlliBonusEnd = function (e) {
    if (r.instanceOfClass(e.specialEventVO, "AlliPaymentBonusEventVO")) {
      this.hide();
    }
  };
  CastleAlliPaymentBonusDialog.prototype.onUpdateEventTime = function (e) {
    this.itxt_time.textContentVO.stringValue = m.CastleTimeStringHelper.getEventTimeString(this.eventVO.remainingEventTimeInSeconds);
  };
  Object.defineProperty(CastleAlliPaymentBonusDialog.prototype, "eventVO", {
    get: function () {
      return g.CastleModel.specialEventData.getActiveEventByEventId(l.EventConst.EVENTTYPE_ALLIPAYMENT);
    },
    enumerable: true,
    configurable: true
  });
  CastleAlliPaymentBonusDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (t.target == this.dialogDisp.btn_ok) {
      this.hide();
    } else if (t.target == this.dialogDisp.btn_shop) {
      d.CastleOpenShopExecutor.open(d.CastleOpenShopExecutor.SOURCE_ALLIANCE_PAYMENT_BONUS, f.CXFSourceTrackingConstants.SOURCE_ALLIANCE_PAYMENT_BONUS);
      this.hide();
    }
  };
  CastleAlliPaymentBonusDialog.__initialize_static_members = function () {
    CastleAlliPaymentBonusDialog.NAME = "CastleAlliPaymentBonusExternal";
    CastleAlliPaymentBonusDialog.EXAMPLE_GOLD = 50000;
  };
  return CastleAlliPaymentBonusDialog;
}(C.CastleExternalDialog);
exports.CastleAlliPaymentBonusDialog = O;
s.classImplementsInterfaces(O, "ICollectableRendererList");
O.__initialize_static_members();