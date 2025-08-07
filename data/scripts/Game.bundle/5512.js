Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./21.js");
var p = require("./26.js");
var h = require("./4.js");
var g = require("./27.js");
var C = function (e) {
  function CastleUnderworldEventTeaserDialog() {
    return e.call(this, CastleUnderworldEventTeaserDialog.NAME) || this;
  }
  n.__extends(CastleUnderworldEventTeaserDialog, e);
  CastleUnderworldEventTeaserDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_okay]);
    this.itxt_title = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new l.LocalizedTextVO(""));
    this.itxt_desc = this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new l.LocalizedTextVO(""));
    this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.mc_timer.txt_time, new c.TextVO(""));
    this.itxt_time.textAlign = o.GGSTextAlign.LEFT;
    this.dialogDisp.mc_deco_hard.visible = false;
    this.dialogDisp.mc_deco_normal.visible = false;
  };
  CastleUnderworldEventTeaserDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyProperties.call(this);
    if (this.dialogProperties.specialEventID == r.MessageConst.SPECIAL_ID_SPECIAL_EVENT_START) {
      this.itxt_title.textContentVO.textId = "message_header_underworld_start";
      this.itxt_desc.textContentVO.textId = "dialog_underworld_message";
      this.dialogDisp.mc_deco_hard.visible = false;
      this.dialogDisp.mc_deco_normal.visible = true;
    } else if (this.dialogProperties.specialEventID == r.MessageConst.SPECIAL_ID_UNDERWORLD) {
      this.itxt_title.textContentVO.textId = "message_header_underworld_start";
      this.itxt_desc.textContentVO.textId = "dialog_underworld_message2";
      this.dialogDisp.mc_deco_hard.visible = true;
      this.dialogDisp.mc_deco_normal.visible = false;
    }
    this.onUpdateEventTime(null);
  };
  CastleUnderworldEventTeaserDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    h.CastleModel.timerData.addEventListener(d.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTime));
    h.CastleModel.specialEventData.addEventListener(p.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoved));
  };
  CastleUnderworldEventTeaserDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    h.CastleModel.timerData.removeEventListener(d.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTime));
    h.CastleModel.specialEventData.removeEventListener(p.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoved));
  };
  CastleUnderworldEventTeaserDialog.prototype.onUpdateEventTime = function (e) {
    var t = 0;
    var i = this.getEventVO();
    if (i && this.itxt_time.textContentVO) {
      t = u.int(i.remainingEventTimeInSeconds);
    }
    g.CastleTimeStringHelper.setEventTime(this.dialogDisp.mc_timer.txt_time, t);
    g.CastleTimeStringHelper.setEventTimeToolTip(this.dialogDisp.mc_timer, t);
  };
  CastleUnderworldEventTeaserDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_okay:
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  CastleUnderworldEventTeaserDialog.prototype.getEventVO = function () {
    return h.CastleModel.specialEventData.getActiveEventByEventId(s.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD);
  };
  CastleUnderworldEventTeaserDialog.prototype.onEventRemoved = function (e) {
    this.hide();
  };
  Object.defineProperty(CastleUnderworldEventTeaserDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleUnderworldEventTeaserDialog.NAME = "CastleUnderworldEventTeaser";
  return CastleUnderworldEventTeaserDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleUnderworldEventTeaserDialog = C;
a.classImplementsInterfaces(C, "ICollectableRendererList");