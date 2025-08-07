Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./146.js");
var c = require("./108.js");
var u = require("./21.js");
var d = require("./255.js");
var p = require("./26.js");
var h = require("./30.js");
var g = require("./13.js");
var C = require("./29.js");
var _ = require("./4.js");
var m = require("./27.js");
var f = require("./20.js");
var O = require("./8.js");
var E = function (e) {
  function ModernPrimeTimeDialog() {
    return e.call(this, ModernPrimeTimeDialog.NAME) || this;
  }
  n.__extends(ModernPrimeTimeDialog, e);
  Object.defineProperty(ModernPrimeTimeDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  ModernPrimeTimeDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    O.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_payment], f.ClickFeedbackButtonHover, 1);
  };
  ModernPrimeTimeDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this);
    this.dialogDisp.mc_banner.x = ModernPrimeTimeDialog.BANNER_X;
    this.dialogDisp.mc_banner.y = ModernPrimeTimeDialog.BANNER_Y;
    this.dialogDisp.btn_payment.toolTipText = "add_Gold";
    this.textFieldManager.registerTextField(this.dialogDisp.btn_payment.txt_shop, new r.TextVO(g.TextHelper.toUpperCaseLocaSafeTextId("add_gold"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_banner.txt_percent, new r.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE_ADD, [this.dialogProperties.offerVO.goldDiscount]));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_banner.txt_bonus, new r.LocalizedTextVO("dialog_specialOffer_Bonus"));
    var i = r.Localize.text("primetime_copy1");
    i += "\n";
    i += r.Localize.text("dialog_specialOffer_copy2_2", [this.dialogProperties.offerVO.goldDiscount]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy1, new r.TextVO(i));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy3, new r.LocalizedTextVO("dialog_specialOffer_copy4", [new r.TextVO(r.Localize.number(Math.floor((1 + this.dialogProperties.offerVO.goldDiscount / 100) * ModernPrimeTimeDialog.EXAMPLE_GOLD), false))])).autoFitToBounds = true;
    this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.txt_time, new r.TextVO(""));
    this.itxt_title = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.LocalizedTextVO("dialog_specialOffer_title"));
    this.onTimerUpdate();
    _.CastleModel.globalOfferData.addEventListener(d.CastleOfferDataEvent.OFFER_ADDED, this.bindFunction(this.onOfferAdded));
    _.CastleModel.globalOfferData.addEventListener(d.CastleOfferDataEvent.OFFER_ENDED, this.bindFunction(this.onOfferEnded));
    _.CastleModel.specialEventData.addEventListener(p.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onEventAdded));
    _.CastleModel.timerData.addEventListener(u.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    if (_.CastleModel.globalOfferData.getActiveGlobalPrimeTimeOffer() == null) {
      this.hide();
    }
  };
  ModernPrimeTimeDialog.prototype.hideLoaded = function (t = null) {
    this.removeEventListenerOnHide();
    e.prototype.hideLoaded.call(this);
  };
  ModernPrimeTimeDialog.prototype.removeEventListenerOnHide = function () {
    _.CastleModel.globalOfferData.removeEventListener(d.CastleOfferDataEvent.OFFER_ADDED, this.bindFunction(this.onOfferAdded));
    _.CastleModel.globalOfferData.removeEventListener(d.CastleOfferDataEvent.OFFER_ENDED, this.bindFunction(this.onOfferEnded));
    _.CastleModel.timerData.removeEventListener(u.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    _.CastleModel.specialEventData.removeEventListener(p.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onEventAdded));
    e.prototype.removeEventListenerOnHide.call(this);
  };
  ModernPrimeTimeDialog.prototype.onEventAdded = function (e) {
    if (e.specialEventVO.eventId == s.EventConst.EVENTTYPE_PRIME_TIME_SKIN) {
      var t = _.CastleModel.specialEventData.getActiveEventByEventId(s.EventConst.EVENTTYPE_PRIME_TIME_SKIN);
      if (!!t && o.BasicModel.basicLoaderData.isItemAssetVersioned("PrimeTimeDialog_" + t.skinName)) {
        this.hide();
        o.CommandController.instance.executeCommand(C.IngameClientCommands.OPEN_OFFER_DIALOG_COMMAND, this.dialogProperties.offerVO);
      }
    }
  };
  ModernPrimeTimeDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_payment:
        if (_.CastleModel.globalOfferData.getActiveGlobalPrimeTimeOffer() != null) {
          l.CastleOpenShopExecutor.open(l.CastleOpenShopExecutor.SOURCE_SPECIAL_OFFER_BETTER, c.CXFSourceTrackingConstants.SOURCE_SPECIAL_OFFER_BETTER);
        }
        this.hide();
    }
  };
  ModernPrimeTimeDialog.prototype.onOfferAdded = function (e) {
    if (_.CastleModel.globalOfferData.getActiveGlobalPrimeTimeOffer() == null) {
      this.hide();
    }
  };
  ModernPrimeTimeDialog.prototype.onOfferEnded = function (e) {
    var t = _.CastleModel.globalOfferData.getActiveGlobalPrimeTimeOffer();
    if (e.offerVO == this.dialogProperties.offerVO || t == null) {
      this.hide();
    }
  };
  ModernPrimeTimeDialog.prototype.onTimerUpdate = function (e = null) {
    this.itxt_time.textContentVO.stringValue = e ? m.CastleTimeStringHelper.getEventTimeString(this.dialogProperties.offerVO.remainingDuration(e.nowValue)) : m.CastleTimeStringHelper.getEventTimeString(this.dialogProperties.offerVO.remainingDuration(h.CachedTimer.getCachedTimer()));
  };
  ModernPrimeTimeDialog.prototype.removeEventListenerOnDestroy = function () {
    this.removeEventListenerOnHide();
    e.prototype.removeEventListenerOnDestroy.call(this);
  };
  ModernPrimeTimeDialog.__initialize_static_members = function () {
    ModernPrimeTimeDialog.NAME = "ModernPrimeTime";
    ModernPrimeTimeDialog.EXAMPLE_GOLD = 50000;
  };
  ModernPrimeTimeDialog.BANNER_X = -274.9;
  ModernPrimeTimeDialog.BANNER_Y = -312.7;
  return ModernPrimeTimeDialog;
}(require("./11.js").CastleExternalDialog);
exports.ModernPrimeTimeDialog = E;
a.classImplementsInterfaces(E, "ICollectableRendererList");
E.__initialize_static_members();