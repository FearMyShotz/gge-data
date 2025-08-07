Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./3721.js");
var u = require("./21.js");
var d = require("./26.js");
var p = require("./13.js");
var h = require("./4.js");
var g = require("./9.js");
var C = require("./279.js");
var _ = require("./280.js");
var m = require("./163.js");
var f = require("./59.js");
var O = require("./8.js");
var E = require("./11.js");
var y = require("./281.js");
var b = require("./3722.js");
var D = function (e) {
  function GlobalEffectEventDialog() {
    return e.call(this, GlobalEffectEventDialog.NAME) || this;
  }
  n.__extends(GlobalEffectEventDialog, e);
  GlobalEffectEventDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    O.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_info], T.ClickFeedbackButton, 1);
    this.dialogDisp.btn_tab.gotoAndStop(2);
    var i = new C.AccordionComponentProperties();
    i.scrollStrategy = f.DynamicSizeScrollStrategyVertical;
    i.disableButtons = true;
    this._scrollList = new y.DynamicSliderAccordionComponent(this.dialogDisp.mc_list, i);
  };
  GlobalEffectEventDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    if (this.eventVO) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.TextVO(p.TextHelper.toUpperCaseLocaSafeTextId("dialog_globalEffects_header")));
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new s.TextVO(p.TextHelper.toUpperCaseLocaSafeTextId(" ")));
      this.textFieldManager.registerTextField(this.dialogDisp.btn_info.txt_copy, new s.TextVO(p.TextHelper.toUpperCaseLocaSafeTextId("dialog_globalEffects_more_info")));
      if (l.int(this.eventVO.remainingEventTimeInSeconds) <= 0) {
        this.hide();
      } else {
        this.updateItems();
        this._scrollList.show();
        h.CastleModel.specialEventData.addEventListener(d.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoved));
        h.CastleModel.globalEffectData.addEventListener(v.CastleServerMessageArrivedEvent.GLOBAL_EFFECT_BUFFED, this.bindFunction(this.onBuffedInfo));
        h.CastleModel.timerData.addEventListener(u.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTime));
        this.onUpdateEventTime();
        h.CastleModel.smartfoxClient.sendCommandVO(new c.C2SGlobalEffectsSeenVO());
      }
    } else {
      this.hide();
    }
  };
  GlobalEffectEventDialog.prototype.onUpdateEventTime = function (e = null) {
    if (this.eventVO) {
      if (l.int(this.eventVO.remainingEventTimeInSeconds) <= 0) {
        this.hide();
      } else {
        this.updateTimer();
      }
    } else {
      this.hide();
    }
  };
  GlobalEffectEventDialog.prototype.onBuffedInfo = function (e) {
    this.updateItems();
  };
  GlobalEffectEventDialog.prototype.onEventRemoved = function (e) {
    if (e.specialEventVO.eventId == a.EventConst.EVENTTYPE_LONGTERM_POINT_EVENT) {
      this.hide();
    }
  };
  GlobalEffectEventDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (O.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          return;
        case this.dialogDisp.btn_help:
          g.CastleDialogHandler.getInstance().showHelper("", r.Localize.text("dialog_globalEffects_help"));
          return;
        case this.dialogDisp.btn_info:
          g.CastleDialogHandler.getInstance().registerDefaultDialogs(b.GlobalEffectEventInfoDialog);
          return;
      }
    }
  };
  GlobalEffectEventDialog.prototype.updateTimer = function () {
    if (!this.eventVO) {
      this.hide();
    }
    this._scrollList.items.forEach(GlobalEffectEventDialog.updateItemTimer);
  };
  GlobalEffectEventDialog.updateItemTimer = function (e) {
    var t = [];
    for (var i = 1; i < arguments.length; i++) {
      t[i - 1] = arguments[i];
    }
    e.updateTimer();
  };
  GlobalEffectEventDialog.prototype.updateItems = function () {
    this._scrollList.clear();
    var e = [];
    for (var t = 0, i = this.eventVO.getShownItems(); t < i.length; t++) {
      var n = i[t];
      for (var o = 0, a = n[0]; o < a.length; o++) {
        var s = a[o];
        if (s !== undefined && s.canBeUsed) {
          var r = new I.GlobalEffectEventDialogListItem([s, n[1], n[2]], GlobalEffectEventDialog.itemProperties);
          e.push(r);
        }
      }
    }
    e.sort(this.bindFunction(this.sortListItems));
    for (var l = 0; l < e.length; l++) {
      this._scrollList.addItem(e[l]);
    }
    this._scrollList.show();
    if (this._scrollList.numItems == 1) {
      this._scrollList.expandItemAt(0, true, true);
    }
  };
  GlobalEffectEventDialog.prototype.sortListItems = function (e, t) {
    return l.int(e.remainingTimeInSeconds - t.remainingTimeInSeconds);
  };
  GlobalEffectEventDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this._scrollList.hide();
    h.CastleModel.specialEventData.removeEventListener(d.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoved));
    h.CastleModel.timerData.removeEventListener(u.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTime));
    h.CastleModel.globalEffectData.removeEventListener(v.CastleServerMessageArrivedEvent.GLOBAL_EFFECT_BUFFED, this.bindFunction(this.onBuffedInfo));
  };
  Object.defineProperty(GlobalEffectEventDialog.prototype, "eventVO", {
    get: function () {
      return h.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_GLOBAL_EFFECTS);
    },
    enumerable: true,
    configurable: true
  });
  GlobalEffectEventDialog.__initialize_static_members = function () {
    GlobalEffectEventDialog.itemProperties = new _.GenericCollapsibleItemProperties(new m.LayoutMargin(0, 6, 0, 0), true, 0.2, 0.2, false);
  };
  GlobalEffectEventDialog.NAME = "GlobalEffectEvent_Boost";
  return GlobalEffectEventDialog;
}(E.CastleExternalDialog);
exports.GlobalEffectEventDialog = D;
var I = require("./1095.js");
var T = require("./36.js");
var v = require("./37.js");
o.classImplementsInterfaces(D, "ICollectableRendererList");
D.__initialize_static_members();