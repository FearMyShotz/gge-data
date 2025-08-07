Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./49.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./1.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./6.js");
var h = require("./13.js");
var g = require("./4.js");
var C = require("./14.js");
var _ = require("./42.js");
var m = require("./8.js");
var f = createjs.MouseEvent;
var O = function (e) {
  function QuestConditionComponent(t) {
    var i = e.call(this) || this;
    i._disp = t;
    i.itxt_condition = C.CastleComponent.textFieldManager.registerTextField(t.txt_condition, new d.TextVO(""));
    i.itxt_condition.autoFitToBounds = true;
    i.itxt_condition.verticalAlign = _.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    i.itxt_progress = C.CastleComponent.textFieldManager.registerTextField(t.quest_progressbar.txt_progress, new u.LocalizedTextVO(s.GenericTextIds.VALUE_PROPORTIONAL_VALUE));
    i.progressBar = new o.BasicProgressBar(t.quest_progressbar.progressbar);
    m.ButtonHelper.initButton(t.btn_showMe, -1, y.ClickFeedbackButton);
    m.ButtonHelper.initBasicButton(t.btn_donate);
    t.btn_showMe.toolTipText = "dialog_questInfo_showMe";
    t.btn_donate.toolTipText = "dialog_questInfo_showMe";
    t.icon_done.toolTipText = "dialog_questbook_taskfinished_tt";
    t.icon_failed.toolTipText = "dialog_questbook_taskfailed_tt";
    return i;
  }
  n.__extends(QuestConditionComponent, e);
  QuestConditionComponent.prototype.show = function (e, t) {
    this._disp.visible = true;
    this._quest = e;
    this._condition = t;
    this.itxt_condition.textContentVO.stringValue = h.TextHelper.toUpperCaseLocaSafe(t.getConditionText());
    var i = this.getProgress();
    this.itxt_progress.textContentVO.textReplacements = [new c.LocalizedNumberVO(i), new c.LocalizedNumberVO(t.conditionMaxCounter)];
    this.progressBar.scaleX = r.MathBase.clamp(i / t.conditionMaxCounter, 0, 1);
    var n = i >= t.conditionMaxCounter;
    this._disp.btn_showMe.visible = t.hasConditionShowHowTo && !n && !this._quest.isFailed && !this._quest.isCompleted && !e.isLocked;
    this._disp.icon_done.visible = n;
    this._disp.icon_failed.visible = this._quest.isFailed && !n;
    m.ButtonHelper.enableButton(this._disp.btn_showMe, !e.isLocked);
    this.updateDonationButton();
    this._disp.addEventListener(f.CLICK, this.bindFunction(this.onCLick));
  };
  QuestConditionComponent.prototype.getProgress = function () {
    return p.int(this._condition.isDone() ? this._condition.conditionMaxCounter : Math.min(this._condition.conditionMaxCounter, Math.max(this._condition.conditionCounter, 0)));
  };
  QuestConditionComponent.prototype.updateDonationButton = function () {
    var e = this.getProgress() >= this._condition.conditionMaxCounter;
    this._disp.btn_donate.visible = this._condition.isDonationQuest && !e && !this._quest.isFailed && !this._quest.isCompleted && !this._quest.isLocked;
    if (C.CastleComponent.layoutManager.isInEventState || this._quest.xmlTriggerKingdomID != g.CastleModel.kingdomData.activeKingdomID && this._quest.xmlTriggerKingdomID != -1) {
      m.ButtonHelper.enableButton(this._disp.btn_donate, false);
      this._disp.btn_donate.toolTipText = "questbook_notice_notrightKingdom";
    } else {
      m.ButtonHelper.enableButton(this._disp.btn_donate, !this._quest.isLocked);
      this._disp.btn_donate.toolTipText = "dialog_questInfo_Donate";
    }
  };
  QuestConditionComponent.prototype.hide = function () {
    this._disp.visible = false;
    this._disp.removeEventListener(f.CLICK, this.bindFunction(this.onCLick));
  };
  QuestConditionComponent.prototype.onCLick = function (e) {
    if (m.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this._disp.btn_donate:
          a.CommandController.instance.executeCommand(E.IngameClientCommands.DONATE_FOR_QUEST_COMMAND, [this._quest, this._condition, this.bindFunction(this.onDonation), this.bindFunction(this.onDonation)]);
          break;
        case this._disp.btn_showMe:
          a.CommandController.instance.executeCommand(E.IngameClientCommands.SHOW_HOW_TODO_QUESTCONDITION_COMMAND, [this._quest, this._condition]);
      }
    }
  };
  QuestConditionComponent.prototype.onDonation = function (e) {
    this.updateDonationButton();
  };
  return QuestConditionComponent;
}(C.CastleComponent);
exports.QuestConditionComponent = O;
var E = require("./29.js");
var y = require("./36.js");
l.classImplementsInterfaces(O, "ICollectableRendererList");