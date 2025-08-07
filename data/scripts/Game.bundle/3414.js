Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./3415.js");
var u = function (e) {
  function GenericScoreBarRewardListSublayer(t) {
    var i = this;
    i._rewardPerPage = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this)._rewardPerPage = i.countRewardsPerPage();
    i._rewardScrollListComponent = new d.CastleBasicItemListScrollComponent(i.subLayerDisp.btn_down, i.subLayerDisp.btn_up, i.subLayerDisp.txt_page_counter, i._rewardPerPage);
    i._itxt_rewardsDesc = i.textFieldManager.registerTextField(i.subLayerDisp.txt_description, new s.LocalizedTextVO(""));
    return i;
  }
  n.__extends(GenericScoreBarRewardListSublayer, e);
  GenericScoreBarRewardListSublayer.prototype.countRewardsPerPage = function () {
    for (var e = 0; this.subLayerDisp["reward_" + e];) {
      e++;
    }
    return e;
  };
  GenericScoreBarRewardListSublayer.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_title, new s.LocalizedTextVO("dialog_pointsEvent_rewardsList_header"));
    if (this.dialogProperties.additionalText && this.subLayerDisp.txt_additionalText) {
      this.textFieldManager.registerTextField(this.subLayerDisp.txt_additionalText, new r.TextVO(t.additionalText));
    }
    this.initScrollList();
    this.updateRewardDesc();
    this.setupRewardScrollList();
  };
  GenericScoreBarRewardListSublayer.prototype.setupRewardScrollList = function () {
    this._rewardScrollListComponent.amountOfItems = this.dialogProperties.pointThreshholds.length;
    this._rewardScrollListComponent.startItemIndex = this.dialogProperties.rewardsReceived;
    this._rewardScrollListComponent.show(this._itemScrollList);
  };
  GenericScoreBarRewardListSublayer.prototype.initScrollList = function () {
    this.disposeScrollList();
    this._itemScrollList = new o.ItemScrollList(this.subLayerDisp);
    this._itemScrollList.scrollInstanceName = "reward_";
    this._itemScrollList.scrollStep = this._rewardPerPage;
    this._itemScrollList.scrollItemClass = p.GenericScoreBarRewardListScrollItem;
    this.populateScrollList(this._itemScrollList);
  };
  GenericScoreBarRewardListSublayer.prototype.populateScrollList = function (e) {
    for (var t = 0; t < this.dialogProperties.pointThreshholds.length; t++) {
      var i = new c.CastleBasicPointEventRewardListScrollItemVO();
      i.collectableList = this.dialogProperties.rewardList[t];
      i.received = t < this.dialogProperties.rewardsReceived;
      i.thresholdPoints = l.int(this.dialogProperties.pointThreshholds[t]);
      i.grantType = l.int(this.dialogProperties.rewardList[t].grantType);
      i.customPointTextID = this.dialogProperties.customPointTextID;
      i.customGrantTypeTextID = this.dialogProperties.customGrantTypeTextID;
      i.isPlayerQualifiedForRewards = this.dialogProperties.isPlayerQualifiedForRewards();
      e.pushContent(i);
    }
  };
  GenericScoreBarRewardListSublayer.prototype.disposeScrollList = function () {
    if (this._itemScrollList) {
      this._itemScrollList.clear();
      this._itemScrollList.remove();
      this._itemScrollList = null;
    }
  };
  GenericScoreBarRewardListSublayer.prototype.hide = function () {
    e.prototype.hide.call(this);
    this._rewardScrollListComponent.hide();
    this.disposeScrollList();
  };
  GenericScoreBarRewardListSublayer.prototype.showHelp = function () {
    e.prototype.showHelp.call(this);
  };
  GenericScoreBarRewardListSublayer.prototype.updateRewardDesc = function () {
    if (this.dialogProperties.isPlayerQualifiedForRewards()) {
      if (this.dialogProperties.rewardsReceived < this.dialogProperties.rewardList.length) {
        this._itxt_rewardsDesc.textContentVO.textId = "dialog_pointsEvent_rewardsList_rewards";
        this._itxt_rewardsDesc.textContentVO.textReplacements = [this.dialogProperties.rewardsReceived, this.dialogProperties.pointThreshholds.length];
      } else {
        this._itxt_rewardsDesc.textContentVO.textId = "dialog_pointsEvent_rewardsList_rewards_all";
      }
    } else {
      if (this.dialogProperties.rewardsReceived == 1) {
        this._itxt_rewardsDesc.textContentVO.textId = "dialog_pointsEvent_rewardsList_allianceContest_notQualified_rewards_singular";
      } else {
        this._itxt_rewardsDesc.textContentVO.textId = "dialog_pointsEvent_rewardsList_allianceContest_notQualified_rewards_plural";
      }
      this._itxt_rewardsDesc.textContentVO.textReplacements = [0, this.dialogProperties.rewardList.length, this.dialogProperties.rewardsReceived];
    }
  };
  Object.defineProperty(GenericScoreBarRewardListSublayer.prototype, "dialogProperties", {
    get: function () {
      return this._params;
    },
    enumerable: true,
    configurable: true
  });
  return GenericScoreBarRewardListSublayer;
}(require("./34.js").CastleDialogSubLayer);
exports.GenericScoreBarRewardListSublayer = u;
var d = require("./1655.js");
var p = require("./3416.js");
a.classImplementsInterfaces(u, "ICollectableRendererList", "ISublayer");