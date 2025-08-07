Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./21.js");
var c = require("./53.js");
var u = require("./13.js");
var d = require("./4.js");
var p = require("./27.js");
var h = require("./8.js");
var g = function (e) {
  function CastleAllianceBattlegroundJoinBlockerDialog() {
    return e.call(this, CastleAllianceBattlegroundJoinBlockerDialog.NAME) || this;
  }
  n.__extends(CastleAllianceBattlegroundJoinBlockerDialog, e);
  CastleAllianceBattlegroundJoinBlockerDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    h.ButtonHelper.initButtons([this.dialogDisp.btn_showMe, this.dialogDisp.btn_close], _.ClickFeedbackButton);
  };
  CastleAllianceBattlegroundJoinBlockerDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.TextVO(u.TextHelper.toUpperCaseLocaSafeTextId("dialog_beyondTheHorizon_eventParticipationBlocker_infoDialog_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new r.LocalizedTextVO("dialog_beyondTheHorizon_eventParticipationBlocker_infoDialog_desc"));
    this.itxt_remain = this.textFieldManager.registerTextField(this.dialogDisp.txt_remain, new s.TextVO(u.TextHelper.toUpperCaseLocaSafeTextId("dialog_beyondTheHorizon_eventParticipationBlocker_infoDialog_timer")));
    this.itxt_remain.autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.btn_showMe.txt_value, new s.TextVO(u.TextHelper.toUpperCaseLocaSafeTextId("showMe_simple")));
    this.itxt_timer = this.textFieldManager.registerTextField(this.dialogDisp.txt_time, new s.TextVO(" "));
    this.updateTime();
  };
  CastleAllianceBattlegroundJoinBlockerDialog.prototype.addEventListenerOnShow = function () {
    d.CastleModel.timerData.addEventListener(l.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateTime));
  };
  CastleAllianceBattlegroundJoinBlockerDialog.prototype.removeEventListenerOnHide = function () {
    d.CastleModel.timerData.removeEventListener(l.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateTime));
  };
  CastleAllianceBattlegroundJoinBlockerDialog.prototype.updateTime = function (e = null) {
    if (c.ABGHelper.abgEvent.remainingTimeInSecondsUntilJoinBlock > 0) {
      this.itxt_timer.textContentVO.stringValue = p.CastleTimeStringHelper.getShortTimeString(c.ABGHelper.abgEvent.remainingTimeInSecondsUntilJoinBlock);
      this.itxt_remain.textContentVO.stringValue = u.TextHelper.toUpperCaseLocaSafeTextId("dialog_beyondTheHorizon_eventParticipationBlocker_infoDialog_timer");
      h.ButtonHelper.enableButton(this.dialogDisp.btn_showMe, true);
      this.dialogDisp.btn_showMe.toolTipText = null;
      this.dialogDisp.mc_time.visible = true;
    } else {
      this.itxt_timer.textContentVO.stringValue = " ";
      h.ButtonHelper.enableButton(this.dialogDisp.btn_showMe, c.ABGHelper.abgEvent.castleBought);
      this.itxt_remain.textContentVO.stringValue = u.TextHelper.toUpperCaseLocaSafeTextId("dialog_beyondTheHorizon_main_eventParticipationBlocker_blocked");
      this.dialogDisp.btn_showMe.toolTipText = h.ButtonHelper.isButtonEnabled(this.dialogDisp.btn_showMe) ? null : "dialog_beyondTheHorizon_main_eventParticipationBlocker_blocked_tooltip";
      this.dialogDisp.mc_time.visible = false;
    }
  };
  CastleAllianceBattlegroundJoinBlockerDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (h.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_showMe:
          this.onOK();
      }
    }
  };
  CastleAllianceBattlegroundJoinBlockerDialog.prototype.onOK = function () {
    if (!c.ABGHelper.abgEvent.castleBought) {
      a.BasicDialogHandler.getInstance().registerDialogs(C.CastleAllianceBattleGroundBuyInfoDialog);
    }
    this.hide();
  };
  CastleAllianceBattlegroundJoinBlockerDialog.NAME = "CastleAllianceBattleGroundMessage";
  return CastleAllianceBattlegroundJoinBlockerDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleAllianceBattlegroundJoinBlockerDialog = g;
var C = require("./1392.js");
var _ = require("./36.js");
o.classImplementsInterfaces(g, "ICollectableRendererList");