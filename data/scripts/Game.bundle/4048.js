Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./266.js");
var l = require("./58.js");
var c = require("./1849.js");
var u = require("./21.js");
var d = require("./26.js");
var p = require("./15.js");
var h = require("./4.js");
var g = function (e) {
  function StatusIconWebshop() {
    var t = e.call(this, "Btn_Webshop2", "txt_label", new s.LocalizedTextVO("webshop_hudIcon_label"), 2) || this;
    t.setTooltip("webshop_hudIcon_tt");
    return t;
  }
  n.__extends(StatusIconWebshop, e);
  StatusIconWebshop.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    var i = {
      sourceId: _.CXFSourceTrackingConstants.CXF_SOURCE_WEB_SHOP_BUTTON
    };
    h.CastleModel.userData.splitRunData.handleHCShopABTestPayload(i);
    r.registerUIComponentToCXF(this.icon, "btn_webshop", i);
    this.itxt_label.autoFitToBounds = true;
    this._itxt_counter = this.textFieldManager.registerTextField(this.iconDisp.mc_amount.txt_copy, new s.TextVO(" "));
    this.onTimerUpdate();
  };
  StatusIconWebshop.prototype.disposeLoaded = function () {
    r.unregisterUIComponentToCXF(this.icon);
    e.prototype.disposeLoaded.call(this);
  };
  StatusIconWebshop.prototype.addEventListenerForVisibility = function () {
    h.CastleModel.specialEventData.addEventListener(d.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onChangeEvent));
    h.CastleModel.specialEventData.addEventListener(d.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventEnded));
    p.CastleBasicController.getInstance().addEventListener(c.CastleAccountDeletionEvent.ACCOUNT_DELETION_TIMER_UPDATED, this.bindFunction(this.onChangeEvent));
  };
  StatusIconWebshop.prototype.removeEventListenerForVisibility = function () {
    h.CastleModel.specialEventData.removeEventListener(d.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onChangeEvent));
    h.CastleModel.specialEventData.removeEventListener(d.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventEnded));
    p.CastleBasicController.getInstance().removeEventListener(c.CastleAccountDeletionEvent.ACCOUNT_DELETION_TIMER_UPDATED, this.bindFunction(this.onChangeEvent));
  };
  StatusIconWebshop.prototype.addEventListenerForShowTime = function () {
    e.prototype.addEventListenerForShowTime.call(this);
    this.timerData.addEventListener(u.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconWebshop.prototype.removeEventListenerForShowTime = function () {
    e.prototype.removeEventListenerForShowTime.call(this);
    this.timerData.removeEventListener(u.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconWebshop.prototype.onTimerUpdate = function (e = null) {
    var t = h.CastleModel.globalOfferData.webShopOffersAmount;
    this.iconDisp.mc_amount.visible = t > 0;
    this._itxt_counter.textContentVO.stringValue = t >= 100 ? "99+" : t.toString();
    this.updateCache();
  };
  StatusIconWebshop.prototype.onChangeEvent = function (e) {
    this.setVisibility();
  };
  StatusIconWebshop.prototype.isWebUserOutOfTempServer = function () {
    return !C.SpecialServerHelper.isOnSpecialServer;
  };
  StatusIconWebshop.prototype.onEventEnded = function (e) {
    this.setVisibility();
  };
  StatusIconWebshop.prototype.isUserOnValidSSO = function () {
    return o.EnvGlobalsHandler.globals.loginIsKeyBased && !o.EnvGlobalsHandler.globals.requestPayByJS;
  };
  StatusIconWebshop.prototype.isNonSSOWebUser = function () {
    return !o.EnvGlobalsHandler.globals.isSSO;
  };
  StatusIconWebshop.prototype.isMicrosoftUser = function () {
    return o.EnvGlobalsHandler.globals.urlVariables.nativeStore == o.BasicConstants.NATIVE_STORE_MICROSOFT;
  };
  StatusIconWebshop.prototype.setVisibilityLoaded = function () {
    if ((this.isUserOnValidSSO() || this.isNonSSOWebUser() || this.isMicrosoftUser() || o.EnvGlobalsHandler.globals.suk.length > 0) && h.CastleModel.userData.userLevel >= l.ClientConstLevelRestrictions.MIN_LEVEL_WEB_SHOP && !h.CastleModel.privateOfferData.isHiddenEvent(a.EventConst.EVENTTYPE_WEBSHOP) && this.isWebUserOutOfTempServer() && !h.CastleModel.deleteAccountData.isAccountDeletionStarted) {
      this.show();
    } else {
      this.hide();
    }
  };
  return StatusIconWebshop;
}(require("./305.js").ACastleLabeledStatusIcon);
exports.StatusIconWebshop = g;
var C = require("./44.js");
var _ = require("./107.js");