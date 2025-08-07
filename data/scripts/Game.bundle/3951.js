Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./1.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./21.js");
var h = require("./255.js");
var g = require("./4.js");
var C = function (e) {
  function CastleDynamicOfferDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleDynamicOfferDialog.NAME) || this;
  }
  n.__extends(CastleDynamicOfferDialog, e);
  CastleDynamicOfferDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_ok]);
  };
  CastleDynamicOfferDialog.prototype.applyPropertiesLoaded = function (e = null) {
    this.itxt_percent = this.textFieldManager.registerTextField(this.dialogDisp.txt_percent, new u.LocalizedTextVO(a.GenericTextIds.VALUE_PERCENTAGE, [this.dialogProperties.offerVO.cashDiscount]));
    this.itxt_forYou = this.textFieldManager.registerTextField(this.dialogDisp.txt_forYou, new u.LocalizedTextVO("dialog_dynamicOffer_onlyForYou"));
    this.itxt_name = this.textFieldManager.registerTextField(this.dialogDisp.txt_name, new u.LocalizedTextVO("dialog_dynamicOffer_hallo", [g.CastleModel.userData.userName]));
    this.itxt_desc = this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new u.LocalizedTextVO("dialog_dynamicOffer_desc", [this.dialogProperties.offerVO.cashDiscount]));
    this.itxt_desc2 = this.textFieldManager.registerTextField(this.dialogDisp.txt_desc2, new u.LocalizedTextVO("dialog_dynamicOffer_desc2"));
    this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.txt_time, new d.TextVO(""));
    this.itxt_time.multiline = this.itxt_time.wordwrap = false;
    this.itxt_time.selectable = false;
    this.itxt_time.type = r.TextFieldType.DYNAMIC;
    this.itxt_time.verticalAlign = o.GGSVerticalAlign.MIDDLE;
    g.CastleModel.globalOfferData.addEventListener(h.CastleOfferDataEvent.OFFER_ENDED, this.bindFunction(this.onOfferEnded));
    g.CastleModel.timerData.addEventListener(p.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimeUpdate));
  };
  CastleDynamicOfferDialog.prototype.onTimeUpdate = function (e = null) {
    this.itxt_time.textContentVO.stringValue = s.TimeStringHelper.getTimeToString(this.dialogProperties.offerVO.remainingDuration(e.nowValue), s.TimeStringHelper.TWO_TIME_FORMAT, c.Localize.text);
  };
  CastleDynamicOfferDialog.prototype.onOfferEnded = function (e) {
    if (e.offerVO == this.dialogProperties.offerVO) {
      this.hide();
    }
  };
  CastleDynamicOfferDialog.prototype.onOfferFinished = function () {
    this.itxt_time.textContentVO = new u.LocalizedTextVO("dialog_specialIngameOffer_ended");
    this.itxt_forYou.textContentVO.textId = "";
    this.itxt_desc.textContentVO.textId = "dialog_specialIngameOffer_endedText";
    this.itxt_desc2.textContentVO.textId = "";
  };
  CastleDynamicOfferDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  CastleDynamicOfferDialog.prototype.hideLoaded = function (t = null) {
    g.CastleModel.globalOfferData.removeEventListener(h.CastleOfferDataEvent.OFFER_ENDED, this.bindFunction(this.onOfferEnded));
    g.CastleModel.timerData.removeEventListener(p.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimeUpdate));
    e.prototype.hideLoaded.call(this);
  };
  Object.defineProperty(CastleDynamicOfferDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleDynamicOfferDialog.__initialize_static_members = function () {
    CastleDynamicOfferDialog.NAME = "CastleDynamicOfferExternal";
  };
  return CastleDynamicOfferDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleDynamicOfferDialog = C;
l.classImplementsInterfaces(C, "ICollectableRendererList");
C.__initialize_static_members();