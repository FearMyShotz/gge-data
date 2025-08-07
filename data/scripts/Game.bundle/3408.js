Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./16.js");
var c = require("./331.js");
var u = require("./42.js");
var d = require("./8.js");
var p = createjs.MouseEvent;
var h = function (e) {
  function RewardsDialogScoreBarComponent(t, i, n, s, c) {
    var h = this;
    CONSTRUCTOR_HACK;
    h = e.call(this, t, c) || this;
    if (i && t.mc_iconContainer) {
      a.MovieClipHelper.clearMovieClip(t.mc_iconContainer);
      i.width = RewardsDialogScoreBarComponent.ICON_SIZE;
      i.scaleY = i.scaleX;
      t.mc_iconContainer.addChild(i);
    }
    if (n && t.reward0.background) {
      a.MovieClipHelper.clearMovieClip(t.reward0.background);
      t.reward0.background.addChild(n);
      var C = h.scorebarProperties.nextRewardTextColor;
      t.reward0.mc_text.tf_text.textColor = C > -1 ? C : l.ClientConstColor.FONT_DEFAULT_COLOR;
    }
    h._onClickRewardOverviewFunction = s;
    d.ButtonHelper.initBasicButton(t.btn_rewardOverview);
    h.itxt_receivedRewards = g.CastleComponent.textFieldManager.registerTextField(t.txt_receivedRewards, new r.LocalizedTextVO(""));
    g.CastleComponent.textFieldManager.registerTextField(t.mc_allRewards.txt_desc, new r.LocalizedTextVO("dialog_pointsEvent_scoreBar_allRewardsEarned")).autoFitToBounds = true;
    var _ = g.CastleComponent.textFieldManager.registerTextField(t.btn_rewardOverview.txt_desc, new r.LocalizedTextVO("dialog_pointsEvent_scoreBar_rewardList"));
    _.autoFitToBounds = true;
    _.verticalAlign = o.GGSVerticalAlign.MIDDLE;
    g.CastleComponent.textFieldManager.registerTextField(t.mc_background_nextReward.txt_static_nextReward, new r.LocalizedTextVO("dialog_pointsEvent_scoreBar_nextReward")).verticalAlign = u.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    t.btn_rewardOverview.addEventListener(p.CLICK, h.bindFunction(h.onClickRewardOverview));
    return h;
  }
  n.__extends(RewardsDialogScoreBarComponent, e);
  RewardsDialogScoreBarComponent.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    this.disp.btn_rewardOverview.removeEventListener(p.CLICK, this.bindFunction(this.onClickRewardOverview));
  };
  RewardsDialogScoreBarComponent.prototype.onClickRewardOverview = function (e) {
    this._onClickRewardOverviewFunction();
  };
  RewardsDialogScoreBarComponent.prototype.updateThresholdRewards = function () {
    var e = this.scorebarProperties.thresholdProgress(0, this.scoreBarProgress.pointThresholds, this.scoreBarProgress.ownPoints);
    var t = this.scoreBarProgress.pointThresholds[this.scoreBarProgress.pointThresholds.length - 1] <= this.scoreBarProgress.ownPoints;
    if (!t) {
      this.updateReward(0, e);
    }
    if (this.scoreBarProgress.isAlliance) {
      this.disp.reward0.visible = !t && this.scoreBarProgress.isPlayerQualifiedForAllianceRewards;
      this.disp.mc_allRewards.visible = t && this.scoreBarProgress.isPlayerQualifiedForAllianceRewards;
      this.disp.mc_background_nextReward.visible = !t || !this.scoreBarProgress.isPlayerQualifiedForAllianceRewards;
      this.disp.mc_background_allRewards.visible = t && this.scoreBarProgress.isPlayerQualifiedForAllianceRewards;
    } else {
      this.disp.reward0.visible = !t;
      this.disp.mc_allRewards.visible = t;
      this.disp.mc_background_nextReward.visible = !t;
      this.disp.mc_background_allRewards.visible = t;
    }
  };
  RewardsDialogScoreBarComponent.prototype.update = function (e) {
    if (e) {
      g.CastleComponent.textFieldManager.registerTextField(this.disp.txt_points, this.scorebarProperties.getOwnPointsText(e.ownPoints));
      this.scoreBarProgress = e;
      if (this.itxt_receivedRewards && this.itxt_receivedRewards.textContentVO) {
        this.itxt_receivedRewards.textContentVO.textId = "dialog_pointsEvent_scoreBar_rewards";
        this.itxt_receivedRewards.textContentVO.textReplacements = [e.rewardsReceived, e.pointThresholds.length];
      }
      this.updateThresholdRewards();
      this.updateRankRewards();
      this.displayRewardList();
      this.setLabels();
      this.setDescriptions();
      this.updateQualifiedForRewardsInfo();
    }
  };
  RewardsDialogScoreBarComponent.prototype.updateQualifiedForRewardsInfo = function () {
    if (this.disp.info_not_qualified) {
      this.disp.info_not_qualified.visible = !this.scoreBarProgress.isPlayerQualifiedForAllianceRewards;
      g.CastleComponent.textFieldManager.registerTextField(this.disp.info_not_qualified.txt_info, new r.LocalizedTextVO("dialog_pointsEvent_scoreBar_allianceContest_notQualified", [this.scoreBarProgress.allianceRewardThresholdPoints]));
    }
  };
  RewardsDialogScoreBarComponent.__initialize_static_members = function () {
    RewardsDialogScoreBarComponent.ICON_SIZE = 36;
  };
  return RewardsDialogScoreBarComponent;
}(c.CastleScoreBarComponent);
exports.RewardsDialogScoreBarComponent = h;
var g = require("./14.js");
s.classImplementsInterfaces(h, "ICollectableRendererList");
h.__initialize_static_members();