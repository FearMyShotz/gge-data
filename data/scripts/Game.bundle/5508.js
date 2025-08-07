Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./21.js");
var d = require("./26.js");
var p = require("./4.js");
var h = require("./27.js");
var g = function (e) {
  function CastleSeaQueenEventTeaserDialog() {
    return e.call(this, CastleSeaQueenEventTeaserDialog.NAME) || this;
  }
  n.__extends(CastleSeaQueenEventTeaserDialog, e);
  CastleSeaQueenEventTeaserDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_okay]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.LocalizedTextVO("message_header_seaqueen_start")).autoFitToBounds = true;
    if (this.getEventVO().mapID == s.TreasureMapsConst.MAP_ID_SEAQUEEN_EXTRA_HARD || this.getEventVO().mapID == s.TreasureMapsConst.MAP_ID_SEAQUEEN_HARD) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new r.LocalizedTextVO("dialog_seaqueen_message2"));
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new r.LocalizedTextVO("dialog_seaqueen_message"));
    }
    this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.mc_timer.txt_time, new l.TextVO(""));
    this.itxt_time.textAlign = o.GGSTextAlign.LEFT;
  };
  CastleSeaQueenEventTeaserDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyProperties.call(this);
    this.onUpdateEventTime(null);
  };
  CastleSeaQueenEventTeaserDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    p.CastleModel.timerData.addEventListener(u.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTime));
    p.CastleModel.specialEventData.addEventListener(d.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoved));
  };
  CastleSeaQueenEventTeaserDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    p.CastleModel.timerData.removeEventListener(u.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTime));
    p.CastleModel.specialEventData.removeEventListener(d.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoved));
  };
  CastleSeaQueenEventTeaserDialog.prototype.onUpdateEventTime = function (e) {
    var t = 0;
    var i = this.getEventVO();
    if (i && this.itxt_time.textContentVO) {
      t = c.int(i.remainingEventTimeInSeconds);
    }
    h.CastleTimeStringHelper.setEventTime(this.dialogDisp.mc_timer.txt_time, t);
    h.CastleTimeStringHelper.setEventTimeToolTip(this.dialogDisp.mc_timer, t);
  };
  CastleSeaQueenEventTeaserDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_okay:
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  CastleSeaQueenEventTeaserDialog.prototype.getEventVO = function () {
    return p.CastleModel.specialEventData.getActiveEventByEventId(s.EventConst.EVENTTYPE_CRUSADE_SEAQUEEN);
  };
  CastleSeaQueenEventTeaserDialog.prototype.onEventRemoved = function (e) {
    this.hide();
  };
  CastleSeaQueenEventTeaserDialog.NAME = "CastleSeaqueenEventTeaser";
  return CastleSeaQueenEventTeaserDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleSeaQueenEventTeaserDialog = g;
a.classImplementsInterfaces(g, "ICollectableRendererList");