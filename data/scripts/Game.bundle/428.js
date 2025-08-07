Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./6.js");
var a = require("./58.js");
var s = require("./146.js");
var r = require("./32.js");
var l = require("./161.js");
var c = require("./491.js");
var u = require("./4.js");
var d = require("./197.js");
var p = require("./8.js");
var h = function (e) {
  function ButtonAddGoldComponent(t) {
    return e.call(this, C.instanceOfClass(t, "BasicButton") ? t : t.basicButton) || this;
  }
  n.__extends(ButtonAddGoldComponent, e);
  ButtonAddGoldComponent.prototype.init = function () {
    e.prototype.init.call(this);
    this.controller.addEventListener(r.CastleUserDataEvent.CHANGE_PAYUSER_INFO, this.bindFunction(this.onUpdatePayuserInfo));
    this.controller.addEventListener(l.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onXPChanged));
    this.onXPChanged();
    this.onUpdatePayuserInfo();
  };
  ButtonAddGoldComponent.prototype.destroy = function () {
    this.controller.removeEventListener(r.CastleUserDataEvent.CHANGE_PAYUSER_INFO, this.bindFunction(this.onUpdatePayuserInfo));
    this.controller.removeEventListener(l.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onXPChanged));
    e.prototype.destroy.call(this);
  };
  ButtonAddGoldComponent.prototype.onClickButton = function (e = o.int(s.CastleOpenShopExecutor.SOURCE_UNKNOWN), t = _.CXFSourceTrackingConstants.SOURCE_UNKNOWN, i = o.int(s.CastleOpenShopExecutor.SHOP_TAB_DEFAULT)) {
    if (p.ButtonHelper.isButtonEnabled(this._button.enabled)) {
      s.CastleOpenShopExecutor.open(e, t, i);
    }
  };
  ButtonAddGoldComponent.prototype.onXPChanged = function (e = null) {
    p.ButtonHelper.enableButton(this._button, u.CastleModel.userData.userLevel >= a.ClientConstLevelRestrictions.MIN_LEVEL_PAYMENT_SHOP && !c.ClientBetaHelper.isOnOpenBeta);
    this.onUpdatePayuserInfo(null);
  };
  ButtonAddGoldComponent.prototype.onUpdatePayuserInfo = function (e = null) {
    if (p.ButtonHelper.isButtonEnabled(this._button.enabled)) {
      if (!u.CastleModel.userData.hasPaymentDoppler || u.CastleModel.globalOfferData.getActiveOffer(g.CastleGlobalOfferData.PRIME_TIME) && u.CastleModel.globalOfferData.getActiveOffer(g.CastleGlobalOfferData.PRIME_TIME).remainingDuration(Date.now()) >= 0) {
        this._button.disp.gotoAndStop(1);
        this._button.disp.toolTipText = "add_Gold";
      } else {
        this._button.disp.gotoAndStop(2);
        this._button.disp.toolTipText = "dialog_paymentdoubler_tootlipp" + d.CastleToolTipManager.ID_PARAM_SEPERATOR + u.CastleModel.userData.paymentDopplerCount;
      }
    } else {
      this._button.disp.gotoAndStop(1);
      this._button.disp.toolTipText = "panel_shop_needQuestProgress";
    }
  };
  return ButtonAddGoldComponent;
}(require("./150.js").ButtonBasicComponent);
exports.ButtonAddGoldComponent = h;
var g = require("./589.js");
var C = require("./1.js");
var _ = require("./108.js");