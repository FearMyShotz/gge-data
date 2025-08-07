Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = require("./28.js");
var s = require("./21.js");
var r = require("./4.js");
var l = require("./1425.js");
var c = require("./42.js");
var u = function (e) {
  function ButtonBuyVipTimeComponent(t, i) {
    var n = e.call(this, t) || this;
    n.textBtnLabel = n.textFieldManager.registerTextField(i, new o.LocalizedTextVO(""));
    n.textBtnLabel.verticalAlign = c.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    n._button.mouseChildren = false;
    n.onShow();
    return n;
  }
  n.__extends(ButtonBuyVipTimeComponent, e);
  ButtonBuyVipTimeComponent.prototype.onShow = function () {
    r.CastleModel.timerData.addEventListener(s.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    this.init();
  };
  ButtonBuyVipTimeComponent.prototype.onHide = function () {
    r.CastleModel.timerData.removeEventListener(s.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  ButtonBuyVipTimeComponent.prototype.onTimerUpdate = function (e) {
    this.init();
  };
  ButtonBuyVipTimeComponent.prototype.init = function () {
    C.ButtonHelper.enableButton(this._button, true);
    this.setTextValues();
    C.ButtonHelper.enableButton(this._button, this.buttonEnable());
  };
  ButtonBuyVipTimeComponent.prototype.setTextValues = function () {
    if (this.textBtnLabel) {
      if (r.CastleModel.vipData.vipModeActive) {
        this.textBtnLabel.textContentVO.textId = "dialog_VipScreen_continueVIP_tooltip_v2";
      } else {
        this.textBtnLabel.textContentVO.textId = "dialog_VipScreen_activateVIP_tooltip_v2";
      }
    }
    this._button.disp.toolTipText = this.buttonEnable() ? "" : "dialog_buyVipTime_maxAmountTotal";
  };
  ButtonBuyVipTimeComponent.prototype.onClickButton = function () {
    if (this.buttonEnable()) {
      h.CastleDialogHandler.getInstance().registerDefaultDialogs(g.CastleVIPBuyPointsTimeDialog, new l.CastleVIPBuyPointsTimeDialogProperties(d.CollectableEnum.VIP_TIME));
    }
  };
  ButtonBuyVipTimeComponent.prototype.buttonEnable = function () {
    return r.CastleModel.vipData.remainingVIPTimeInSeconds + r.CastleModel.vipData.minBuyableVipTime <= a.ClientConstTime.SECONDS_PER_DAY * p.CastleVIPData.MAX_VIPTIME_DAYS;
  };
  ButtonBuyVipTimeComponent.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    r.CastleModel.timerData.removeEventListener(s.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  return ButtonBuyVipTimeComponent;
}(require("./150.js").ButtonBasicComponent);
exports.ButtonBuyVipTimeComponent = u;
var d = require("./12.js");
var p = require("./1426.js");
var h = require("./9.js");
var g = require("./1427.js");
var C = require("./8.js");