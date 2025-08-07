Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./21.js");
var u = require("./803.js");
var d = require("./19.js");
var p = require("./13.js");
var h = require("./4.js");
var g = require("./27.js");
var C = require("./14.js");
var _ = require("./47.js");
var m = require("./189.js");
var f = require("./42.js");
var O = require("./8.js");
var E = require("./1641.js");
var y = createjs.MouseEvent;
var b = createjs.Point;
var D = function (e) {
  function QuestInfoComponent(t) {
    var i = this;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).disp = t;
    i.conditionComponents = [];
    for (var n = 0; n < QuestInfoComponent.MAX_CONDITIONS; n++) {
      i.conditionComponents[n] ||= new S.QuestConditionComponent(t["condition" + n]);
    }
    i.rewardComponent = new T.SimpleCollectableScrollComponent(t.rewardList, new _.SimpleScrollVO().initByParent(t.rewardList).addMouseWheelElements([t.rewardList]), new m.SimpleScrollStrategyHorizontal(), 3, 3);
    i.itxt_name = C.CastleComponent.textFieldManager.registerTextField(t.txt_name, new l.TextVO(""));
    i.itxt_desc = C.CastleComponent.textFieldManager.registerTextField(t.txt_desc, new r.LocalizedTextVO(""));
    i.itxt_desc_big = C.CastleComponent.textFieldManager.registerTextField(t.txt_desc_big, new r.LocalizedTextVO(""));
    i.itxt_time = C.CastleComponent.textFieldManager.registerTextField(t.mc_campaignInfo.mc_timer.txt_time, new r.LocalizedTextVO(""));
    i.itxt_timeInfo = C.CastleComponent.textFieldManager.registerTextField(t.mc_campaignInfo.txt_timeInfo, new r.LocalizedTextVO(""));
    i.itxt_campaignDesc = C.CastleComponent.textFieldManager.registerTextField(t.mc_campaignInfo.txt_campaignDesc, new r.LocalizedTextVO(""));
    i.itxt_name.verticalAlign = f.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    i.itxt_desc_big.verticalAlign = f.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    C.CastleComponent.textFieldManager.registerTextField(t.txt_rewards, new l.TextVO(p.TextHelper.toUpperCaseLocaSafe(s.Localize.text("rewards"))));
    O.ButtonHelper.initButton(t.mc_campaignInfo.btn_buyRubies, -1, A.ClickFeedbackButton);
    O.ButtonHelper.initBasicButtons([t.rewardList.btn_minus, t.rewardList.btn_plus]);
    t.mc_campaignInfo.btn_buyRubies.toolTipText = "dialog_questbook_buyProgressButton_tt";
    return i;
  }
  n.__extends(QuestInfoComponent, e);
  QuestInfoComponent.prototype.preRenderFunc = function (e) {
    if (e.itemVO) {
      var t = e.getRenderer(d.CollectableRenderOptions.ICON_TRANSFORM);
      if (I.ClientConstCollectable.COLLECTABLES_WITHOUT_TEXTFIELD.indexOf(e.itemVO.itemType) > -1) {
        t.transform.offset.y = 9;
        t.transform.scale = 1.4;
      }
    }
  };
  QuestInfoComponent.prototype.showQuest = function (e) {
    this.currentQuest = e;
    this.itxt_name.textContentVO.stringValue = p.TextHelper.toUpperCaseLocaSafe(this.currentQuest.getQuestName());
    this.itxt_desc.textContentVO.textId = "";
    this.itxt_desc_big.textContentVO.textId = "";
    if (e.isCampaignQuest) {
      if (this.currentQuest.isCompleted) {
        this.disp.mc_campaignInfo.visible = false;
        this.itxt_desc_big.textContentVO.textId = "dialog_questbook_questfinishedInfo";
      } else if (e.isLocked) {
        this.disp.mc_campaignInfo.visible = false;
        this.itxt_desc_big.textContentVO.textId = "dialog_questbook_questStatusStartInfo";
      } else {
        this.disp.mc_campaignInfo.visible = true;
        this.disp.mc_campaignInfo.btn_buyRubies.visible = false;
        if (this.currentQuest.isFailed) {
          this.itxt_campaignDesc.textContentVO.textId = "dialog_questbook_questStatusFailedInfo";
          this.itxt_timeInfo.textContentVO.textId = "dialog_questbook_questFailedInfo";
          this.disp.mc_campaignInfo.btn_buyRubies.visible = true;
          this.disp.mc_campaignInfo.mc_timer.visible = false;
        } else {
          this.itxt_campaignDesc.textContentVO.textId = "dialog_questbook_questStatusActiveInfo";
          this.itxt_timeInfo.textContentVO.textId = "dialog_questbook_questActiveInfo";
          this.disp.mc_campaignInfo.mc_timer.visible = true;
          h.CastleModel.timerData.addEventListener(c.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
          this.onTimer(null);
        }
      }
    } else {
      this.disp.mc_campaignInfo.visible = false;
      this.itxt_desc.textContentVO.textId = this.currentQuest.getQuestInfoTextId();
    }
    this.fillConditions();
    this.rewardComponent.show(e.rewards, new d.CollectableRenderOptions(d.CollectableRenderOptions.SET_ADVANCED, QuestInfoComponent.REWARD_DIMENSIONS), this.bindFunction(this.preRenderFunc));
    this.disp.addEventListener(y.CLICK, this.bindFunction(this.onClick));
    C.CastleComponent.controller.dispatchEvent(new u.CastleTutorialEvent(u.CastleTutorialEvent.QUEST_INFO_SHOWN));
  };
  QuestInfoComponent.prototype.fillConditions = function () {
    for (var e = 0; e < QuestInfoComponent.MAX_CONDITIONS; e++) {
      if (e < this.currentQuest.conditions.length) {
        var t = this.currentQuest.conditions[e];
        this.conditionComponents[e].show(this.currentQuest, t);
        this.disp["conditionEmpty" + e].visible = false;
      } else {
        this.conditionComponents[e].hide();
        this.disp["conditionEmpty" + e].visible = true;
      }
    }
  };
  QuestInfoComponent.prototype.onClick = function (e) {
    if (O.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.disp.mc_campaignInfo.btn_buyRubies:
          C.CastleComponent.dialogHandler.registerDefaultDialogs(v.CastleQuestBuyRewardDialog, new E.CastleQuestBuyRewardProperties(this.currentQuest));
      }
    }
  };
  QuestInfoComponent.prototype.hide = function () {
    if (this.conditionComponents != null) {
      for (var e = 0, t = this.conditionComponents; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.hide();
        }
      }
    }
    this.rewardComponent.hide();
    this.disp.removeEventListener(y.CLICK, this.bindFunction(this.onClick));
    h.CastleModel.timerData.removeEventListener(c.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
  };
  Object.defineProperty(QuestInfoComponent.prototype, "campaignQuestEventVO", {
    get: function () {
      return h.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_TIMELIMITED_CAMPAIGN_QUEST_EVENT);
    },
    enumerable: true,
    configurable: true
  });
  QuestInfoComponent.prototype.onTimer = function (e) {
    var t = this.currentQuest.remainingSeconds;
    g.CastleTimeStringHelper.setEventTime(this.disp.mc_campaignInfo.mc_timer.txt_time, t, null);
    g.CastleTimeStringHelper.setEventTimeToolTip(this.disp.mc_campaignInfo.mc_timer, t);
  };
  QuestInfoComponent.__initialize_static_members = function () {
    QuestInfoComponent.MAX_CONDITIONS = 3;
    QuestInfoComponent.REWARD_DIMENSIONS = new b(52, 46);
  };
  return QuestInfoComponent;
}(C.CastleComponent);
exports.QuestInfoComponent = D;
var I = require("./86.js");
var T = require("./652.js");
var v = require("./1642.js");
var S = require("./3347.js");
var A = require("./36.js");
o.classImplementsInterfaces(D, "ICollectableRendererList");
D.__initialize_static_members();