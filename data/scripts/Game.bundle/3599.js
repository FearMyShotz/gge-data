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
  function PrimeTimeSkinDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, PrimeTimeSkinDialog.skinName) || this;
  }
  n.__extends(PrimeTimeSkinDialog, e);
  Object.defineProperty(PrimeTimeSkinDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  PrimeTimeSkinDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    O.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_payment], f.ClickFeedbackButtonHover, 1);
  };
  PrimeTimeSkinDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this);
    this.dialogDisp.btn_payment.toolTipText = "add_Gold";
    this.textFieldManager.registerTextField(this.dialogDisp.btn_payment.txt_shop, new r.TextVO(g.TextHelper.toUpperCaseLocaSafeTextId("add_gold"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_banner.txt_percent, new r.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE_ADD, [this.dialogProperties.offerVO.goldDiscount]));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_banner.txt_bonus, new r.LocalizedTextVO("dialog_specialOffer_Bonus"));
    var i = g.TextHelper.toUpperCaseLocaSafeTextId("primetime_copy1");
    i += "\n";
    i += g.TextHelper.toUpperCaseLocaSafeTextId("dialog_specialOffer_copy2_2", [this.dialogProperties.offerVO.goldDiscount]);
    var n = this.textFieldManager.registerTextField(this.dialogDisp.txt_copy1, new r.TextVO(i));
    if (n.height < n.textHeight) {
      n.textContentVO.stringValue = i.replace("\n", " ");
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy2, new r.LocalizedTextVO("dialog_specialOffer_copy4", [new r.TextVO(r.Localize.number(Math.floor((1 + this.dialogProperties.offerVO.goldDiscount / 100) * PrimeTimeSkinDialog.EXAMPLE_GOLD), false))])).autoFitToBounds = true;
    this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.txt_time, new r.TextVO(""));
    this.itxt_title = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.LocalizedTextVO("dialog_specialOffer_title"));
    this.onTimerUpdate();
    _.CastleModel.globalOfferData.addEventListener(d.CastleOfferDataEvent.OFFER_ADDED, this.bindFunction(this.onOfferAdded));
    _.CastleModel.globalOfferData.addEventListener(d.CastleOfferDataEvent.OFFER_ENDED, this.bindFunction(this.onOfferEnded));
    _.CastleModel.timerData.addEventListener(u.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    _.CastleModel.specialEventData.addEventListener(p.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoved));
    if (_.CastleModel.globalOfferData.getActiveGlobalPrimeTimeOffer() == null) {
      this.hide();
    }
  };
  PrimeTimeSkinDialog.prototype.hideLoaded = function (t = null) {
    this.removeEventListenerOnHide();
    e.prototype.hideLoaded.call(this);
    this.layoutManager.clearDialog(this);
  };
  PrimeTimeSkinDialog.prototype.removeEventListenerOnHide = function () {
    _.CastleModel.globalOfferData.removeEventListener(d.CastleOfferDataEvent.OFFER_ADDED, this.bindFunction(this.onOfferAdded));
    _.CastleModel.globalOfferData.removeEventListener(d.CastleOfferDataEvent.OFFER_ENDED, this.bindFunction(this.onOfferEnded));
    _.CastleModel.timerData.removeEventListener(u.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    _.CastleModel.specialEventData.removeEventListener(p.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoved));
    e.prototype.removeEventListenerOnHide.call(this);
  };
  PrimeTimeSkinDialog.prototype.onEventRemoved = function (e) {
    if (e.specialEventVO.eventId == s.EventConst.EVENTTYPE_PRIME_TIME_SKIN) {
      this.hide();
      if (_.CastleModel.globalOfferData.isGlobalOfferActive) {
        o.CommandController.instance.executeCommand(C.IngameClientCommands.OPEN_OFFER_DIALOG_COMMAND, _.CastleModel.globalOfferData.getActiveGlobalPrimeTimeOffer());
      }
    }
  };
  PrimeTimeSkinDialog.prototype.onClick = function (t) {
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
  PrimeTimeSkinDialog.prototype.onOfferAdded = function (e) {
    if (_.CastleModel.globalOfferData.getActiveGlobalPrimeTimeOffer() == null) {
      this.hide();
    }
  };
  PrimeTimeSkinDialog.prototype.onOfferEnded = function (e) {
    var t = _.CastleModel.globalOfferData.getActiveGlobalPrimeTimeOffer();
    if (e.offerVO == this.dialogProperties.offerVO || t == null) {
      this.hide();
    }
  };
  PrimeTimeSkinDialog.prototype.onTimerUpdate = function (e = null) {
    this.itxt_time.textContentVO.stringValue = e ? m.CastleTimeStringHelper.getEventTimeString(this.dialogProperties.offerVO.remainingDuration(e.nowValue)) : m.CastleTimeStringHelper.getEventTimeString(this.dialogProperties.offerVO.remainingDuration(h.CachedTimer.getCachedTimer()));
  };
  PrimeTimeSkinDialog.prototype.removeEventListenerOnDestroy = function () {
    this.removeEventListenerOnHide();
    e.prototype.removeEventListenerOnDestroy.call(this);
  };
  PrimeTimeSkinDialog.prototype.displayObjectClipIsLoaded = function (t) {
    var i = this.dialogDisp.mc_banner.x;
    var n = this.dialogDisp.mc_banner.y;
    this.dialogDisp.mc_banner.x = 0;
    this.dialogDisp.mc_banner.y = 0;
    this.dialogDisp.mc_banner.visible = false;
    e.prototype.displayObjectClipIsLoaded.call(this, t);
    this.dialogDisp.mc_banner.visible = true;
    this.dialogDisp.mc_banner.x = i;
    this.dialogDisp.mc_banner.y = n;
  };
  Object.defineProperty(PrimeTimeSkinDialog, "skinName", {
    get: function () {
      return "PrimeTimeDialog_" + PrimeTimeSkinDialog.skinEventVO.skinName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrimeTimeSkinDialog, "skinEventVO", {
    get: function () {
      return _.CastleModel.specialEventData.getActiveEventByEventId(s.EventConst.EVENTTYPE_PRIME_TIME_SKIN);
    },
    enumerable: true,
    configurable: true
  });
  PrimeTimeSkinDialog.__initialize_static_members = function () {
    PrimeTimeSkinDialog.EXAMPLE_GOLD = 50000;
  };
  return PrimeTimeSkinDialog;
}(require("./11.js").CastleExternalDialog);
exports.PrimeTimeSkinDialog = E;
a.classImplementsInterfaces(E, "ICollectableRendererList");
E.__initialize_static_members();