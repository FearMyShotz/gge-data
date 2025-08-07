Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./6.js");
var p = require("./21.js");
var h = require("./26.js");
var g = require("./4.js");
var C = require("./27.js");
var _ = function (e) {
  function CastleThornkingEventTeaserDialog() {
    return e.call(this, CastleThornkingEventTeaserDialog.NAME) || this;
  }
  n.__extends(CastleThornkingEventTeaserDialog, e);
  CastleThornkingEventTeaserDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_okay]);
    this.itxt_title = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new c.LocalizedTextVO("message_header_thornking_start"));
    this.itxt_title.autoFitToBounds = true;
    this.itxt_title.verticalAlign = a.GGSVerticalAlign.MIDDLE;
    this.itxt_desc = this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new c.LocalizedTextVO("dialog_thornking_message"));
    this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.mc_timer.txt_time, new u.TextVO(""));
    this.itxt_time.textAlign = o.GGSTextAlign.LEFT;
    this.dialogDisp.mc_deco_hard.visible = false;
    this.dialogDisp.mc_deco_normal.visible = false;
  };
  CastleThornkingEventTeaserDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyProperties.call(this);
    if (this.dialogProperties.specialEventID == l.TreasureMapsConst.MAP_ID_THORNKING_EASY) {
      this.itxt_title.textContentVO.textId = "message_header_thornking_start";
      this.itxt_desc.textContentVO.textId = "dialog_thornking_message";
      this.dialogDisp.mc_deco_hard.visible = false;
      this.dialogDisp.mc_deco_normal.visible = true;
    } else if (this.dialogProperties.specialEventID == l.TreasureMapsConst.MAP_ID_THORNKING_HARD) {
      this.itxt_title.textContentVO.textId = "message_header_thornking_start";
      this.itxt_desc.textContentVO.textId = "dialog_thornking_message2";
      this.dialogDisp.mc_deco_hard.visible = true;
      this.dialogDisp.mc_deco_normal.visible = false;
    }
  };
  CastleThornkingEventTeaserDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    g.CastleModel.timerData.addEventListener(p.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTime));
    g.CastleModel.specialEventData.addEventListener(h.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoved));
  };
  CastleThornkingEventTeaserDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    g.CastleModel.timerData.removeEventListener(p.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTime));
    g.CastleModel.specialEventData.removeEventListener(h.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoved));
  };
  CastleThornkingEventTeaserDialog.prototype.onUpdateEventTime = function (e) {
    var t = 0;
    var i = this.getEventVO();
    if (i && this.itxt_time.textContentVO) {
      t = d.int(i.remainingEventTimeInSeconds);
    }
    C.CastleTimeStringHelper.setEventTime(this.dialogDisp.mc_timer.txt_time, t);
    C.CastleTimeStringHelper.setEventTimeToolTip(this.dialogDisp.mc_timer, t);
  };
  CastleThornkingEventTeaserDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_okay:
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  CastleThornkingEventTeaserDialog.prototype.getEventVO = function () {
    return g.CastleModel.specialEventData.getActiveEventByEventId(r.EventConst.EVENTTYPE_CRUSADE_THORNKING);
  };
  CastleThornkingEventTeaserDialog.prototype.onEventRemoved = function (e) {
    this.hide();
  };
  Object.defineProperty(CastleThornkingEventTeaserDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleThornkingEventTeaserDialog.NAME = "CastleThornkingEventTeaser";
  return CastleThornkingEventTeaserDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleThornkingEventTeaserDialog = _;
s.classImplementsInterfaces(_, "ICollectableRendererList");