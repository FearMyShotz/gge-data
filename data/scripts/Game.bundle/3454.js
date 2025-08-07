Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./3.js");
var s = require("./21.js");
var r = require("./13.js");
var l = require("./4.js");
var c = require("./24.js");
var u = require("./20.js");
var d = require("./8.js");
var p = function (e) {
  function EventStarterAnnouncementDialog() {
    return e.call(this, EventStarterAnnouncementDialog.NAME) || this;
  }
  n.__extends(EventStarterAnnouncementDialog, e);
  EventStarterAnnouncementDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.dialogDisp.icon_timer.toolTipText = "resttime";
    d.ButtonHelper.initButtons([this.dialogDisp.btn_close], u.ClickFeedbackButtonHover);
    d.ButtonHelper.initButtons([this.dialogDisp.btn_goto], u.ClickFeedbackButtonHover, 1);
  };
  EventStarterAnnouncementDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.TextVO(r.TextHelper.toUpperCaseLocaSafeTextId(this.dialogProperties.getTitleTextID())));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new a.LocalizedTextVO(this.dialogProperties.getDescriptionTextID()));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_goto.txt_label, new a.TextVO(r.TextHelper.toUpperCaseLocaSafeTextId("joinEvent")));
    o.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_teaser);
    var i = "EventStarterAnnouncementTeaser_" + this.dialogProperties.eventID;
    var n = new c.CastleGoodgameExternalClip(i, o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(i), null, 0, false);
    this.dialogDisp.mc_teaser.addChild(n);
    this._itxt_timer = this.textFieldManager.registerTextField(this.dialogDisp.txt_timer, new a.TextVO(""));
    this._itxt_timer.visible = false;
    this.dialogDisp.icon_timer.visible = false;
    d.ButtonHelper.enableButton(this.dialogDisp.btn_join, false);
    l.CastleModel.timerData.addEventListener(s.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  EventStarterAnnouncementDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    l.CastleModel.timerData.removeEventListener(s.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  EventStarterAnnouncementDialog.prototype.onTimerUpdate = function (e) {
    var t = 0;
    if (this.dialogProperties.eventVO) {
      t = this.dialogProperties.getRemainingTime();
    }
    if (!this.dialogProperties.eventVO || t <= 0) {
      this.hide();
    } else {
      d.ButtonHelper.enableButton(this.dialogDisp.btn_join, true);
      this._itxt_timer.visible = true;
      this.dialogDisp.icon_timer.visible = true;
      this._itxt_timer.textContentVO.stringValue = o.TimeStringHelper.getHoureMinuteSecondTimeString(t);
    }
  };
  EventStarterAnnouncementDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_goto:
        if (this.dialogProperties.eventVO) {
          this.dialogProperties.eventVO.openDialog();
        }
        this.hide();
        break;
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  Object.defineProperty(EventStarterAnnouncementDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  EventStarterAnnouncementDialog.NAME = "EventStarterAnnouncementDialogExt";
  return EventStarterAnnouncementDialog;
}(require("./11.js").CastleExternalDialog);
exports.EventStarterAnnouncementDialog = p;