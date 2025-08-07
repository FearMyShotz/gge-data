Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./13.js");
var p = require("./29.js");
var h = require("./4.js");
var g = require("./52.js");
var C = require("./8.js");
var _ = require("./34.js");
var m = require("./656.js");
var f = require("./807.js");
var O = require("./394.js");
var E = require("./36.js");
var y = function (e) {
  function CastleTemporaryServerEventDialogTasks(t) {
    var i = e.call(this, t) || this;
    i.init();
    return i;
  }
  n.__extends(CastleTemporaryServerEventDialogTasks, e);
  CastleTemporaryServerEventDialogTasks.prototype.init = function () {
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_title, new l.TextVO(d.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_dailyTask_header")));
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_rewards.txt_copy, new l.TextVO(d.TextHelper.toUpperCaseLocaSafeTextId("rewards")));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_copy, new c.LocalizedTextVO("dialog_tempServer_dailyTask_desc"));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_points0, new l.TextVO(d.TextHelper.toUpperCaseLocaSafeTextId("currency_name_DailyDutyPoints")));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_points1, new l.TextVO(d.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_dailyTask_RewardStep")));
    C.ButtonHelper.initButtons([this.subLayerDisp.mc_task0.btn_showMe, this.subLayerDisp.mc_task1.btn_showMe, this.subLayerDisp.mc_task2.btn_showMe, this.subLayerDisp.btn_rewards], E.ClickFeedbackButton);
    C.ButtonHelper.initBasicButtons([this.subLayerDisp.btn_left, this.subLayerDisp.btn_right]);
    this._rewards = new O.TempServerSimpleRewardsComponent(this.subLayerDisp, true, true, 0);
  };
  CastleTemporaryServerEventDialogTasks.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.updateData();
    this._rewards.updateWithNewData(this.rewardList);
    this._rewards.onShow();
  };
  Object.defineProperty(CastleTemporaryServerEventDialogTasks.prototype, "rewardList", {
    get: function () {
      return h.CastleModel.tempServerData.getDailyTaskRewardsByPoints(this.dailyTaskPoints);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTemporaryServerEventDialogTasks.prototype, "dailyTaskPoints", {
    get: function () {
      return h.CastleModel.currencyData.getAmountById(g.ClientConstCurrency.ID_DAILY_TASK_POINTS_KEY);
    },
    enumerable: true,
    configurable: true
  });
  CastleTemporaryServerEventDialogTasks.prototype.updateData = function () {
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_value0, new u.LocalizedNumberVO(this.dailyTaskPoints));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_rewards, new l.TextVO(d.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_dailyTask_CurrentReward")));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_noRewards, new c.LocalizedTextVO("dialog_tempServer_dailyTask_noCurrentReward")).visible = this.rewardList.length <= 0;
    var e = h.CastleModel.tempServerData.getReachedRewardStepsByPoints(this.dailyTaskPoints);
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_value1, new c.LocalizedTextVO(a.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [e[0], e[1]]));
    this.quests = h.CastleModel.dailyQuestData.getTempServerQuests();
    for (var t = 0; t < 3; t++) {
      if (this.quests.length > t) {
        this.updateQuest(this.subLayerDisp["mc_task" + t], this.quests[t]);
      } else {
        this.subLayerDisp["mc_task" + t].visible = false;
      }
    }
  };
  CastleTemporaryServerEventDialogTasks.prototype.updateQuest = function (e, t) {
    e.visible = true;
    this.textFieldManager.registerTextField(e.txt_task, new l.TextVO(t.conditions[0].getConditionText(false)));
    this.textFieldManager.registerTextField(e.mc_progress.txt_value, new c.LocalizedTextVO(a.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [t.conditions[0].conditionCounter, t.conditions[0].conditionMaxCounter]));
    e.mc_progress.mc_bar.scaleX = o.MathBase.clamp(t.conditions[0].conditionCounter / t.conditions[0].conditionMaxCounter, 0, 1);
    this.textFieldManager.registerTextField(e.txt_points, new c.LocalizedTextVO("currency_name_DailyDutyPoints"));
    this.textFieldManager.registerTextField(e.txt_value, new u.LocalizedNumberVO(t.addDailyTaskPoints));
    e.btn_showMe.toolTipText = "showMe_simple";
  };
  CastleTemporaryServerEventDialogTasks.prototype.onClick = function (t) {
    if (C.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.subLayerDisp.mc_task0.btn_showMe:
          s.CommandController.instance.executeCommand(p.IngameClientCommands.SHOW_HOW_TODO_QUESTCONDITION_COMMAND, [this.quests[0], this.quests[0].conditions[0]]);
          break;
        case this.subLayerDisp.mc_task1.btn_showMe:
          s.CommandController.instance.executeCommand(p.IngameClientCommands.SHOW_HOW_TODO_QUESTCONDITION_COMMAND, [this.quests[1], this.quests[2].conditions[0]]);
          break;
        case this.subLayerDisp.mc_task2.btn_showMe:
          s.CommandController.instance.executeCommand(p.IngameClientCommands.SHOW_HOW_TODO_QUESTCONDITION_COMMAND, [this.quests[2], this.quests[2].conditions[0]]);
          break;
        case this.subLayerDisp.btn_rewards:
          _.CastleDialogSubLayer.dialogHandler.registerDefaultDialogs(m.SeasonLeagueRewardOverviewDialog, new f.SeasonLeagueRewardOverviewDialogProperties(h.CastleModel.tempServerData.getDailyTaskRewardsAsOverviewItems(), "dialog_tempServer_dailyTask_rewards_header", "dialog_tempServer_dailyTask_rewards_desc", "dialog_tempServer_dailyTask_rewards_help"));
          break;
        case this.subLayerDisp.btn_left:
        case this.subLayerDisp.btn_right:
      }
    }
  };
  CastleTemporaryServerEventDialogTasks.prototype.hide = function () {
    e.prototype.hide.call(this);
    this._rewards.onHide();
  };
  return CastleTemporaryServerEventDialogTasks;
}(_.CastleDialogSubLayer);
exports.CastleTemporaryServerEventDialogTasks = y;
r.classImplementsInterfaces(y, "ICollectableRendererList", "ISublayer");