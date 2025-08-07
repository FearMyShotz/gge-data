Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./210.js");
var c = require("./15.js");
var u = require("./4.js");
var d = require("./8.js");
var p = function (e) {
  function CastleFactionInvasionEventDialogSingleplayerSublayer(t) {
    var i = e.call(this, t) || this;
    i.initBasicButtons([i.subLayerDisp.reputation_progress_component.btn_redHighscore, i.subLayerDisp.reputation_progress_component.btn_blueHighscore, i.subLayerDisp.mc_redReputationRewardContainer.btn_showRewards, i.subLayerDisp.mc_blueReputationRewardContainer.btn_showRewards, i.subLayerDisp.mc_redReputationRewardContainer.btn_gotoCamp, i.subLayerDisp.mc_blueReputationRewardContainer.btn_gotoCamp]);
    i.registerTextfields();
    i.subLayerDisp.reputation_progress_component.btn_redHighscore.toolTipText = "dialog_berimondInvasion_redRank_tooltip";
    i.subLayerDisp.reputation_progress_component.btn_blueHighscore.toolTipText = "dialog_berimondInvasion_blueRank_tooltip";
    i.subLayerDisp.mc_blueReputationRewardContainer.btn_gotoCamp.toolTipText = "dialog_berimondInvasion_findRedCamp";
    i.subLayerDisp.mc_redReputationRewardContainer.btn_gotoCamp.toolTipText = "dialog_berimondInvasion_findBlueCamp";
    var n = i.eventVO.singleEventVO(false);
    var o = i.eventVO.singleEventVO(true);
    i.reputationProgressComponent = new _.FactionReputationProgressComponent(i.subLayerDisp.reputation_progress_component);
    i.redFactionReputationRewardContainer = new g.CastleFactionReputationRewardComponent(i.subLayerDisp.mc_redReputationRewardContainer, n.rewardLists, n.pointThresholds, h.CastleFactionInvasionEventRewardListDialog.TAB_RED);
    i.blueFactionReputationRewardContainer = new g.CastleFactionReputationRewardComponent(i.subLayerDisp.mc_blueReputationRewardContainer, o.rewardLists, o.pointThresholds, h.CastleFactionInvasionEventRewardListDialog.TAB_BLUE);
    i.topXfactionScoreBarsComponent = new C.FactionInvasionEventTopXScorebars(i.subLayerDisp.scorebars, i.eventVO);
    return i;
  }
  n.__extends(CastleFactionInvasionEventDialogSingleplayerSublayer, e);
  CastleFactionInvasionEventDialogSingleplayerSublayer.prototype.registerTextfields = function () {
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_singleplayerDesc, new r.LocalizedTextVO("dialog_berimondInvasion_sp_desc")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_reputationInfo, new r.LocalizedTextVO("dialog_berimondInvasion_sp_reputation_desc")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_reputationHeader, new r.LocalizedTextVO("reputation")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_dialogtitle, new r.LocalizedTextVO("dialog_berimondInvasion_sp_header")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_blueReputationRewardContainer.mc_nextReward.txt_nextReward, new r.LocalizedTextVO("dialog_berimondInvasion_sp_nextBlueReward")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_redReputationRewardContainer.mc_nextReward.txt_nextReward, new r.LocalizedTextVO("dialog_berimondInvasion_sp_nextRedReward")).autoFitToBounds = true;
  };
  CastleFactionInvasionEventDialogSingleplayerSublayer.prototype.onClick = function (e) {
    if (d.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.subLayerDisp.reputation_progress_component.btn_redHighscore:
          this.reputationProgressComponent.showRedFactionHighscore();
          break;
        case this.subLayerDisp.reputation_progress_component.btn_blueHighscore:
          this.reputationProgressComponent.showBlueFactionHighscore();
          break;
        case this.subLayerDisp.mc_redReputationRewardContainer.btn_showRewards:
          this.redFactionReputationRewardContainer.showAllRewards();
          break;
        case this.subLayerDisp.mc_blueReputationRewardContainer.btn_showRewards:
          this.blueFactionReputationRewardContainer.showAllRewards();
          break;
        case this.subLayerDisp.mc_redReputationRewardContainer.btn_gotoCamp:
          this.redFactionReputationRewardContainer.gotoCamp(a.DungeonConst.BLUE_FACTION_KING);
          break;
        case this.subLayerDisp.mc_blueReputationRewardContainer.btn_gotoCamp:
          this.redFactionReputationRewardContainer.gotoCamp(a.DungeonConst.RED_FACTION_KING);
      }
    }
  };
  CastleFactionInvasionEventDialogSingleplayerSublayer.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.registerEventListenersOnShow();
    this.topXfactionScoreBarsComponent.show();
    this.updateComponents();
  };
  CastleFactionInvasionEventDialogSingleplayerSublayer.prototype.hide = function () {
    e.prototype.hide.call(this);
    this.topXfactionScoreBarsComponent.hide();
    this.removeEventListenersOnHide();
  };
  CastleFactionInvasionEventDialogSingleplayerSublayer.prototype.registerEventListenersOnShow = function () {
    c.CastleBasicController.getInstance().addEventListener(l.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
  };
  CastleFactionInvasionEventDialogSingleplayerSublayer.prototype.onUpdatePoints = function (e) {
    this.updateComponents();
  };
  CastleFactionInvasionEventDialogSingleplayerSublayer.prototype.updateComponents = function () {
    this.topXfactionScoreBarsComponent.update();
    this.reputationProgressComponent.update(this.eventVO.currentReputationFactionScale);
    this.redFactionReputationRewardContainer.update(this.eventVO.redPoints, this.eventVO.maxPointsRed);
    this.blueFactionReputationRewardContainer.update(this.eventVO.bluePoints, this.eventVO.maxPointsBlue);
  };
  CastleFactionInvasionEventDialogSingleplayerSublayer.prototype.removeEventListenersOnHide = function () {
    c.CastleBasicController.getInstance().removeEventListener(l.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
  };
  Object.defineProperty(CastleFactionInvasionEventDialogSingleplayerSublayer.prototype, "eventVO", {
    get: function () {
      return u.CastleModel.specialEventData.getActiveEventByEventId(s.EventConst.EVENTTYPE_FACTION_INVASION);
    },
    enumerable: true,
    configurable: true
  });
  return CastleFactionInvasionEventDialogSingleplayerSublayer;
}(require("./35.js").CastleDialogSubLayer);
exports.CastleFactionInvasionEventDialogSingleplayerSublayer = p;
var h = require("./1063.js");
var g = require("./3549.js");
var C = require("./1712.js");
var _ = require("./1713.js");
o.classImplementsInterfaces(p, "ICollectableRendererList", "ISublayer");