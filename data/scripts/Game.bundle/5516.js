Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./21.js");
var l = require("./53.js");
var c = require("./13.js");
var u = require("./4.js");
var d = require("./27.js");
var p = require("./8.js");
var h = require("./11.js");
var g = require("./36.js");
var C = function (e) {
  function CastleAllianceBattlegroundMessageDialog() {
    return e.call(this, CastleAllianceBattlegroundMessageDialog.NAME) || this;
  }
  n.__extends(CastleAllianceBattlegroundMessageDialog, e);
  CastleAllianceBattlegroundMessageDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    p.ButtonHelper.initButtons([this.dialogDisp.btn_showMe, this.dialogDisp.btn_close], g.ClickFeedbackButton);
  };
  CastleAllianceBattlegroundMessageDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.TextVO(c.TextHelper.toUpperCaseLocaSafeTextId("event_title_113")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new s.LocalizedTextVO("dialog_beyondTheHorizon_inboxMessage_desc_" + l.ABGHelper.abgEvent.settingVO.scoringSystemVO.scoring));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_remain, new a.TextVO(c.TextHelper.toUpperCaseLocaSafeTextId("countdown_restTime_noValue", [new a.TextVO("  ")])));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_showMe.txt_value, new a.TextVO(c.TextHelper.toUpperCaseLocaSafeTextId("showMe_simple")));
    this.itxt_timer = this.textFieldManager.registerTextField(this.dialogDisp.txt_time, new a.TextVO(" "));
    this.updateTime();
  };
  CastleAllianceBattlegroundMessageDialog.prototype.addEventListenerOnShow = function () {
    u.CastleModel.timerData.addEventListener(r.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateTime));
  };
  CastleAllianceBattlegroundMessageDialog.prototype.removeEventListenerOnHide = function () {
    u.CastleModel.timerData.removeEventListener(r.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateTime));
  };
  CastleAllianceBattlegroundMessageDialog.prototype.updateTime = function (e = null) {
    if (l.ABGHelper.abgEvent) {
      this.itxt_timer.textContentVO.stringValue = d.CastleTimeStringHelper.getShortTimeString(l.ABGHelper.abgEvent.remainingEventTimeInSeconds);
    } else {
      this.hide();
    }
  };
  CastleAllianceBattlegroundMessageDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_showMe:
        this.onOK();
    }
  };
  CastleAllianceBattlegroundMessageDialog.prototype.onOK = function () {
    if (l.ABGHelper.abgEvent) {
      l.ABGHelper.abgEvent.openDialog();
    }
    this.hide();
  };
  CastleAllianceBattlegroundMessageDialog.NAME = "CastleAllianceBattleGroundMessage";
  return CastleAllianceBattlegroundMessageDialog;
}(h.CastleExternalDialog);
exports.CastleAllianceBattlegroundMessageDialog = C;
o.classImplementsInterfaces(C, "ICollectableRendererList");