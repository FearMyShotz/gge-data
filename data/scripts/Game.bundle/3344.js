Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./21.js");
var p = require("./19.js");
var h = require("./13.js");
var g = require("./4.js");
var C = require("./27.js");
var _ = require("./47.js");
var m = require("./189.js");
var f = require("./8.js");
var O = require("./1641.js");
var E = require("./281.js");
var y = createjs.MouseEvent;
var b = createjs.Point;
var D = function (e) {
  function CampaignQuestListComponent(t, i = null) {
    var n = this;
    CONSTRUCTOR_HACK;
    (n = e.call(this, t, i) || this).rewardComponent = new S.SimpleCollectableScrollComponent(t.rewardList, new _.SimpleScrollVO().initByParent(t.rewardList).addMouseWheelElements([t.rewardList]), new m.SimpleScrollStrategyHorizontal(), 4, 4);
    v.CastleComponent.textFieldManager.registerTextField(n._disp.txt_rewards, new c.TextVO(h.TextHelper.toUpperCaseLocaSafe(s.Localize.text("dialog_questbook_categoryCampaignRewardTeaser"))));
    v.CastleComponent.textFieldManager.registerTextField(n._disp.txt_gotReward, new l.LocalizedTextVO("dialog_questbook_campaignFinishedInfo"));
    v.CastleComponent.textFieldManager.registerTextField(n._disp.txt_resttime, new l.LocalizedTextVO("dialog_questbook_questActiveInfo"));
    f.ButtonHelper.initButton(n._disp.btn_buyRubies, -1, L.ClickFeedbackButton);
    f.ButtonHelper.initBasicButtons([n._disp.rewardList.btn_minus, n._disp.rewardList.btn_plus]);
    n._disp.btn_buyRubies.toolTipText = "dialog_questbook_buyRewardButton_tt";
    return n;
  }
  n.__extends(CampaignQuestListComponent, e);
  CampaignQuestListComponent.prototype.show = function () {
    e.prototype.show.call(this);
    v.CastleComponent.textFieldManager.registerTextField(this._disp.txt_name, new c.TextVO(h.TextHelper.toUpperCaseLocaSafe(s.Localize.text("dialog_questbook_TimeLimitedCampaign"))));
    this.rewardComponent.show(this.campaignEventVO.rewards, new p.CollectableRenderOptions(p.CollectableRenderOptions.SET_ADVANCED, CampaignQuestListComponent.REWARD_DIMENSIONS), this.bindFunction(this.preRenderFunc));
    if (this.campaignEventVO.receivedReward) {
      v.CastleComponent.textFieldManager.registerTextField(this._disp.txt_gotReward, new l.LocalizedTextVO("dialog_questbook_campaignFinishedInfo"));
      this._disp.btn_buyRubies.visible = false;
    } else {
      v.CastleComponent.textFieldManager.registerTextField(this._disp.txt_gotReward, new l.LocalizedTextVO(""));
      this._disp.btn_buyRubies.visible = true;
      v.CastleComponent.textFieldManager.registerTextField(this._disp.btn_buyRubies.txt_label, new r.LocalizedNumberVO(this.campaignEventVO.buyCost));
    }
    this.disp.addEventListener(y.CLICK, this.bindFunction(this.onClick));
    g.CastleModel.timerData.addEventListener(d.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
  };
  CampaignQuestListComponent.prototype.preRenderFunc = function (e) {
    if (e.itemVO) {
      var t = e.getRenderer(p.CollectableRenderOptions.ICON_TRANSFORM);
      if (I.ClientConstCollectable.COLLECTABLES_WITHOUT_TEXTFIELD.indexOf(e.itemVO.itemType) > -1) {
        t.transform.offset.y = 5;
        t.transform.scale = 1.4;
        if (e.itemVO.itemType == T.CollectableEnum.BUILDING) {
          t.transform.scale = 1.1;
        }
      }
    }
  };
  CampaignQuestListComponent.prototype.onClick = function (e) {
    if (f.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this._disp.btn_buyRubies:
          v.CastleComponent.dialogHandler.registerDefaultDialogs(A.CastleQuestBuyRewardDialog, new O.CastleQuestBuyRewardProperties(null));
      }
    }
  };
  CampaignQuestListComponent.prototype.hide = function () {
    e.prototype.hide.call(this);
    this.rewardComponent.hide();
    this.disp.removeEventListener(y.CLICK, this.bindFunction(this.onClick));
    g.CastleModel.timerData.removeEventListener(d.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
  };
  Object.defineProperty(CampaignQuestListComponent.prototype, "campaignEventVO", {
    get: function () {
      return g.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_TIMELIMITED_CAMPAIGN_EVENT);
    },
    enumerable: true,
    configurable: true
  });
  CampaignQuestListComponent.prototype.onTimer = function (e) {
    var t = u.int(this.campaignEventVO.remainingEventTimeInSeconds);
    C.CastleTimeStringHelper.setEventTime(this._disp.mc_timer.txt_time, t, null);
    C.CastleTimeStringHelper.setEventTimeToolTip(this._disp.mc_timer, t);
  };
  CampaignQuestListComponent.__initialize_static_members = function () {
    CampaignQuestListComponent.REWARD_DIMENSIONS = new b(45, 36);
  };
  return CampaignQuestListComponent;
}(E.DynamicSliderAccordionComponent);
exports.CampaignQuestListComponent = D;
var I = require("./86.js");
var T = require("./12.js");
var v = require("./14.js");
var S = require("./653.js");
var A = require("./1642.js");
var L = require("./36.js");
o.classImplementsInterfaces(D, "ICollectableRendererList");
D.__initialize_static_members();