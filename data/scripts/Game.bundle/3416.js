Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./3.js");
var u = function (e) {
  function GenericScoreBarRewardListScrollItem(t) {
    var i = this;
    i._collectableRenderList = [];
    CONSTRUCTOR_HACK;
    return i = e.call(this, t) || this;
  }
  n.__extends(GenericScoreBarRewardListScrollItem, e);
  GenericScoreBarRewardListScrollItem.prototype.customFillItem = function () {
    this.destroyCollectableRenderList();
    if (this.rewardScrollItemVO.collectableList.length > 0) {
      d.RewardRenderHelper.renderCollectableList(this, this.disp, this.rewardScrollItemVO.collectableList);
    }
    this.changeDecoration();
    this.disp.reward_received_check.visible = this.rewardScrollItemVO.received;
    var e = this.rewardScrollItemVO.customPointTextID ? this.rewardScrollItemVO.customPointTextID : "points";
    this.textFieldManager.registerTextField(this.disp.txt_threshold, new c.LocalizedTextVO(e, [new l.LocalizedNumberVO(this.rewardScrollItemVO.thresholdPoints)])).autoFitToBounds = true;
    if (this.rewardScrollItemVO.customGrantTypeTextID) {
      this.textFieldManager.registerTextField(this.disp.txt_forAllAllianceMembers, new c.LocalizedTextVO(this.rewardScrollItemVO.customGrantTypeTextID)).autoFitToBounds = true;
    } else if (this.rewardScrollItemVO.grantType > 0) {
      this.textFieldManager.registerTextField(this.disp.txt_forAllAllianceMembers, new c.LocalizedTextVO(this.rewardScrollItemVO.grantType < r.RewardConst.ALLIANCE_MEMBER ? "reward_forAllianceFunds" : "reward_forAllianceMembers")).autoFitToBounds = true;
    }
    if (this.disp.icon_locked) {
      this.disp.icon_locked.visible = false;
      this.disp.icon_locked.toolTipText = null;
      this.disp.toolTipText = null;
      if (!this.rewardScrollItemVO.isPlayerQualifiedForRewards) {
        this.disp.icon_locked.visible = true;
        this.disp.icon_locked.mouseChildren = false;
        this.disp.icon_locked.gotoAndStop(this.rewardScrollItemVO.collectableList.length > 1 ? 2 : 1);
        this.disp.toolTipText = l.Localize.text("dialog_pointsEvent_rewardsList_allianceContest_notQualified_tooltip");
        this.disp.icon_locked.toolTipText = l.Localize.text("dialog_pointsEvent_rewardsList_allianceContest_notQualified_tooltip");
      }
    }
  };
  GenericScoreBarRewardListScrollItem.prototype.changeDecoration = function () {
    this.disp.decoration.gotoAndStop(this.rewardScrollItemVO.collectableList.length);
  };
  GenericScoreBarRewardListScrollItem.prototype.destroyCollectableRenderList = function () {
    for (var e = 0; e < this._collectableRenderList.length; ++e) {
      this._collectableRenderList[e].destroy();
    }
    this._collectableRenderList = [];
  };
  GenericScoreBarRewardListScrollItem.prototype.remove = function () {
    e.prototype.remove.call(this);
    this.destroyCollectableRenderList();
  };
  Object.defineProperty(GenericScoreBarRewardListScrollItem.prototype, "collectableRenderList", {
    get: function () {
      return this._collectableRenderList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GenericScoreBarRewardListScrollItem.prototype, "rewardScrollItemVO", {
    get: function () {
      return this.scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GenericScoreBarRewardListScrollItem.prototype, "textFieldManager", {
    get: function () {
      return o.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return GenericScoreBarRewardListScrollItem;
}(a.ScrollItem);
exports.GenericScoreBarRewardListScrollItem = u;
var d = require("./398.js");
s.classImplementsInterfaces(u, "MovieClip", "ICollectableRendererList");