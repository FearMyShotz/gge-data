Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./21.js");
var c = require("./4.js");
var u = require("./27.js");
var d = require("./256.js");
var p = function (e) {
  function CastleFactionArmorerEventDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleFactionArmorerEventDialog.NAME) || this;
  }
  n.__extends(CastleFactionArmorerEventDialog, e);
  CastleFactionArmorerEventDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_speechBubble, new r.LocalizedTextVO(this.speechBubbleTextID)).verticalAlign = o.GGSVerticalAlign.MIDDLE;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new r.LocalizedTextVO(this.descriptionTextID));
  };
  Object.defineProperty(CastleFactionArmorerEventDialog.prototype, "descriptionTextID", {
    get: function () {
      return "dialog_faction_armorer_hint";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFactionArmorerEventDialog.prototype, "speechBubbleTextID", {
    get: function () {
      return "dialog_faction_armorer_speechBubble";
    },
    enumerable: true,
    configurable: true
  });
  CastleFactionArmorerEventDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.onTimerTick();
  };
  Object.defineProperty(CastleFactionArmorerEventDialog.prototype, "merchantScrollItem", {
    get: function () {
      return h.FactionArmorerMerchantScrollItem;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastleGenericMerchantDialog.prototype, "merchantScrollItem").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleFactionArmorerEventDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    c.CastleModel.timerData.addEventListener(l.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerTick));
  };
  CastleFactionArmorerEventDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    c.CastleModel.timerData.removeEventListener(l.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerTick));
  };
  CastleFactionArmorerEventDialog.prototype.onTimerTick = function (e = null) {
    u.CastleTimeStringHelper.setEventTime(this.dialogDisp.txt_runTime, this.remainingEventTimeInSeconds);
    this.dialogDisp.mc_timerToolTip.toolTipText = u.CastleTimeStringHelper.getEventToolTipString(this.remainingEventTimeInSeconds);
  };
  Object.defineProperty(CastleFactionArmorerEventDialog.prototype, "remainingEventTimeInSeconds", {
    get: function () {
      return c.CastleModel.specialEventData.getActiveEventByEventId(s.EventConst.EVENTTYPE_UNITDEALER_BERIMOND).remainingEventTimeInSeconds;
    },
    enumerable: true,
    configurable: true
  });
  CastleFactionArmorerEventDialog.__initialize_static_members = function () {
    CastleFactionArmorerEventDialog.NAME = "CastleFactionArmorerEventExternal";
  };
  return CastleFactionArmorerEventDialog;
}(d.CastleGenericMerchantDialog);
exports.CastleFactionArmorerEventDialog = p;
var h = require("./1905.js");
a.classImplementsInterfaces(p, "ICollectableRendererList");
p.__initialize_static_members();