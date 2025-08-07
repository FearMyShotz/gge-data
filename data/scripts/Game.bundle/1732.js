Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./21.js");
var d = require("./255.js");
var p = require("./30.js");
var h = require("./4.js");
var g = function (e) {
  function CastleSpecialIngameOfferDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleSpecialIngameOfferDialog.NAME) || this;
  }
  n.__extends(CastleSpecialIngameOfferDialog, e);
  CastleSpecialIngameOfferDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_close]);
  };
  CastleSpecialIngameOfferDialog.prototype.applyPropertiesLoaded = function (e = null) {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_percent, new l.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [this.dialogProperties.offerVO.cashDiscount]));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_bonus, new l.LocalizedTextVO("dialog_specialOffer_Bonus"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new l.LocalizedTextVO("dialog_specialIngameOffer_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy1, new l.LocalizedTextVO("dialog_specialIngameOffer_copy1", [this.dialogProperties.offerVO.cashDiscount]));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy2, new l.LocalizedTextVO("dialog_specialIngameOffer_copy2"));
    this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.txt_time, new c.TextVO(""));
    h.CastleModel.globalOfferData.addEventListener(d.CastleOfferDataEvent.OFFER_ENDED, this.bindFunction(this.onOfferEnded));
    h.CastleModel.timerData.addEventListener(u.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimeUpdate));
    this.onTimeUpdate();
  };
  CastleSpecialIngameOfferDialog.prototype.onTimeUpdate = function (e = null) {
    this.itxt_time.textContentVO.stringValue = e ? a.TimeStringHelper.getPrimeTimeToString(this.dialogProperties.offerVO.remainingDuration(e.nowValue), r.Localize.text) : a.TimeStringHelper.getPrimeTimeToString(this.dialogProperties.offerVO.remainingDuration(p.CachedTimer.getCachedTimer()), r.Localize.text);
  };
  CastleSpecialIngameOfferDialog.prototype.onOfferEnded = function (e) {
    if (e.offerVO == this.dialogProperties.offerVO) {
      this.hide();
    }
  };
  CastleSpecialIngameOfferDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  CastleSpecialIngameOfferDialog.prototype.hideLoaded = function (t = null) {
    h.CastleModel.globalOfferData.removeEventListener(d.CastleOfferDataEvent.OFFER_ENDED, this.bindFunction(this.onOfferEnded));
    h.CastleModel.timerData.removeEventListener(u.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimeUpdate));
    e.prototype.hideLoaded.call(this);
  };
  Object.defineProperty(CastleSpecialIngameOfferDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleSpecialIngameOfferDialog.__initialize_static_members = function () {
    CastleSpecialIngameOfferDialog.NAME = "CastleSpecialIngameOfferExternal";
  };
  return CastleSpecialIngameOfferDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleSpecialIngameOfferDialog = g;
s.classImplementsInterfaces(g, "ICollectableRendererList");
g.__initialize_static_members();