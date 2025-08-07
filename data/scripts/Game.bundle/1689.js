Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./13.js");
var l = require("./4.js");
var c = require("./467.js");
var u = require("./8.js");
var d = require("./112.js");
var p = createjs.Point;
var h = function (e) {
  function SeasonLeagueEndDialog() {
    return e.call(this, SeasonLeagueEndDialog.NAME) || this;
  }
  n.__extends(SeasonLeagueEndDialog, e);
  SeasonLeagueEndDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    u.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok], f.ClickFeedbackButtonHover);
    u.ButtonHelper.initButtons([this.dialogDisp.btn_pickUp], f.ClickFeedbackButtonHover);
    u.ButtonHelper.initBasicButton(this.dialogDisp.btn_tabRewards, 1.025);
    u.ButtonHelper.initBasicButton(this.dialogDisp.btn_tabMedals, 1.025);
    u.ButtonHelper.initBasicButton(this.dialogDisp.btn_tabMedalsAlliance, 1.025);
    this.dialogDisp.mc_rankInfoPlayer.mc_placementIcon.toolTipText = "dialog_seasonLeague_divisionRanking_position_tooltip";
    this.dialogDisp.mc_rankInfoAllianceEvent.mc_placementIcon.toolTipText = "dialog_seasonLeague_divisionRanking_position_tooltip";
    this.dialogDisp.mc_rankInfoAllianceSeason.mc_placementIcon.toolTipText = "dialog_seasonLeague_divisionRanking_position_tooltip";
    this.dialogDisp.mc_rankInfoAllianceEvent.mc_placementIconAlliance.toolTipText = "dialog_seasonLeague_eventEnd_finalAllianceRanking_tooltip";
    this.dialogDisp.mc_rankInfoAllianceSeason.mc_placementIconAlliance.toolTipText = "dialog_seasonLeague_seasonEnd_finalAllianceRanking_tooltip";
    this.textFieldManager.registerTextField(this.dialogDisp.btn_pickUp.txt_copy, new s.TextVO(r.TextHelper.toUpperCaseLocaSafeTextId("collect")));
    this._subLayer = new Map();
    this._subLayer.set(SeasonLeagueEndDialog.TAB_REWARDS, new _.SeasonLeagueEndDialogRewards(this.dialogDisp.mc_tab_rewards));
    this._subLayer.set(SeasonLeagueEndDialog.TAB_REWARDS_EVENT, new m.SeasonLeagueEndDialogRewardsEvent(this.dialogDisp.mc_tab_rewards_event));
    this._subLayer.set(SeasonLeagueEndDialog.TAB_MEDALS, new C.SeasonLeagueEndDialogMedals(this.dialogDisp.mc_tab_medals));
    this._subLayer.set(SeasonLeagueEndDialog.TAB_ALLIANCE_MEDALS, new C.SeasonLeagueEndDialogMedals(this.dialogDisp.mc_tab_medals, true));
  };
  SeasonLeagueEndDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this._subLayer.get(SeasonLeagueEndDialog.TAB_REWARDS_EVENT).reset();
    this._subLayer.get(SeasonLeagueEndDialog.TAB_REWARDS).reset();
    this.updateText();
    this.initTabs();
    this.updateTeaser();
    this.updateRankInfo();
  };
  SeasonLeagueEndDialog.prototype.hide = function () {
    if (this._subLayer) {
      this._subLayer.get(SeasonLeagueEndDialog.TAB_REWARDS).hasBoughtSeasonPassInThisDialog = false;
    }
    e.prototype.hide.call(this);
  };
  SeasonLeagueEndDialog.prototype.changeCategory = function (t) {
    function updateButton(e, t) {
      e.mc_default.visible = !t;
      e.mc_selected.visible = t;
    }
    if (t == SeasonLeagueEndDialog.TAB_REWARDS && this.dialogProperties.isSeasonEventEndDialog) {
      t = SeasonLeagueEndDialog.TAB_REWARDS_EVENT;
    }
    if (this._currentCategory != t) {
      e.prototype.changeCategory.call(this, t);
      this.showSublayer(this._subLayer.get(t), [this.dialogProperties]);
      updateButton(this.dialogDisp.btn_tabRewards, this._currentCategory == SeasonLeagueEndDialog.TAB_REWARDS || this._currentCategory == SeasonLeagueEndDialog.TAB_REWARDS_EVENT);
      updateButton(this.dialogDisp.btn_tabMedals, this._currentCategory == SeasonLeagueEndDialog.TAB_MEDALS);
      updateButton(this.dialogDisp.btn_tabMedalsAlliance, this._currentCategory == SeasonLeagueEndDialog.TAB_ALLIANCE_MEDALS);
    }
  };
  SeasonLeagueEndDialog.prototype.initTabs = function () {
    var e = this.hasAllianceInfo();
    u.ButtonHelper.enableButton(this.dialogDisp.btn_tabMedalsAlliance, e);
    var t = "";
    if (!e) {
      t = l.CastleModel.userData.isInAlliance ? "dialog_seasonLeague_eventEnd_medalsAllianceInactive_tooltip" : "dialog_alliance_invite_notaMember_tooltip";
    }
    this.dialogDisp.btn_tabMedalsAlliance.toolTipText = t;
    this.changeCategory(SeasonLeagueEndDialog.TAB_REWARDS);
  };
  SeasonLeagueEndDialog.prototype.updateText = function () {
    if (this.dialogProperties.isSeasonEventEndDialog) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.TextVO(r.TextHelper.toUpperCaseLocaSafeTextId("dialog_seasonLeague_eventEnd_" + this.dialogProperties.getEventName() + "_header"))).autoFitToBounds = true;
      this.setTabButtonText(this.dialogDisp.btn_tabRewards, "dialog_seasonLeague_eventEnd_rewards_tab");
      this.setTabButtonText(this.dialogDisp.btn_tabMedals, "dialog_seasonLeague_eventEnd_medalsPlayer_tab");
      this.setTabButtonText(this.dialogDisp.btn_tabMedalsAlliance, "dialog_seasonLeague_eventEnd_medalsAlliance_tab");
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.TextVO(r.TextHelper.toUpperCaseLocaSafeTextId("dialog_seasonLeague_seasonEnd_header"))).autoFitToBounds = true;
      this.setTabButtonText(this.dialogDisp.btn_tabRewards, "dialog_seasonLeague_seasonEnd_rewards_tab");
      this.setTabButtonText(this.dialogDisp.btn_tabMedals, "dialog_seasonLeague_seasonEnd_medalsPlayer_tab");
      this.setTabButtonText(this.dialogDisp.btn_tabMedalsAlliance, "dialog_seasonLeague_seasonEnd_medalsAlliance_tab");
    }
  };
  SeasonLeagueEndDialog.prototype.setTabButtonText = function (e, t) {
    this.textFieldManager.registerTextField(e.mc_default.txt_text, new s.TextVO(r.TextHelper.toUpperCaseLocaSafeTextId(t))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(e.mc_selected.txt_text, new s.TextVO(r.TextHelper.toUpperCaseLocaSafeTextId(t))).autoFitToBounds = true;
  };
  SeasonLeagueEndDialog.prototype.updateTeaser = function () {
    for (var e = this.dialogDisp.mc_teaser, t = 0; t < e.numChildren; ++t) {
      e.getChildAt(t).visible = false;
    }
    e.getChildByName(this.dialogProperties.getEventName()).visible = true;
  };
  SeasonLeagueEndDialog.prototype.updateRankInfo = function () {
    var e = this.hasAllianceInfo();
    this.dialogDisp.mc_rankInfoPlayer.visible = false;
    this.dialogDisp.mc_rankInfoAllianceEvent.visible = false;
    this.dialogDisp.mc_rankInfoAllianceSeason.visible = false;
    if (e) {
      if (this.dialogProperties.isSeasonEventEndDialog) {
        this.setRankInfo(this.dialogDisp.mc_rankInfoAllianceEvent);
      } else {
        this.setRankInfo(this.dialogDisp.mc_rankInfoAllianceSeason);
      }
    } else {
      this.setRankInfo(this.dialogDisp.mc_rankInfoPlayer);
    }
  };
  SeasonLeagueEndDialog.prototype.setRankInfo = function (e) {
    e.visible = true;
    if (e.mc_rankIcon) {
      new g.SeasonLeaguePromotionIconComponent(e.mc_rankIcon, g.SeasonLeaguePromotionIconComponent.TYPE_NORMAL, new p(75, 65)).updateWithNewVO(this.dialogProperties.promotionVO);
    }
    if (e.txt_rankName) {
      this.textFieldManager.registerTextField(e.txt_rankName, new s.TextVO(r.TextHelper.toUpperCaseLocaSafeTextId(this.dialogProperties.promotionVO.getNameTextId()))).autoFitToBounds = true;
    }
    if (e.txt_placement) {
      this.textFieldManager.registerTextField(e.txt_placement, this.dialogProperties.rank > 0 ? new a.LocalizedNumberVO(this.dialogProperties.rank) : new s.TextVO("-")).autoFitToBounds = true;
    }
    if (e.mc_pointsIcon) {
      e.mc_pointsIcon.gotoAndStop(c.ClientConstSeasonLeague.getPointsIconFrame(this.dialogProperties.eventId));
      e.mc_pointsIcon.toolTipText = c.ClientConstSeasonLeague.getPointsIconTooltipTextId(this.dialogProperties.eventId);
    }
    if (e.txt_points) {
      var t = this.textFieldManager.registerTextField(e.txt_points, new a.LocalizedNumberVO(this.dialogProperties.points));
      t.autoFitToBounds = true;
      t.visible = this.dialogProperties.isSeasonEventEndDialog;
    }
    if (e.txt_placementAlliance) {
      this.textFieldManager.registerTextField(e.txt_placementAlliance, this.dialogProperties.allianceRank > 0 ? new a.LocalizedNumberVO(this.dialogProperties.allianceRank) : new s.TextVO("-")).autoFitToBounds = true;
    }
  };
  SeasonLeagueEndDialog.prototype.hasAllianceInfo = function () {
    return this.dialogProperties.allianceRank > 0;
  };
  SeasonLeagueEndDialog.prototype.onClick = function (t) {
    if (u.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_ok:
          this.hide();
          break;
        case this.dialogDisp.btn_tabRewards:
          this.changeCategory(SeasonLeagueEndDialog.TAB_REWARDS);
          break;
        case this.dialogDisp.btn_tabMedals:
          this.changeCategory(SeasonLeagueEndDialog.TAB_MEDALS);
          break;
        case this.dialogDisp.btn_tabMedalsAlliance:
          this.changeCategory(SeasonLeagueEndDialog.TAB_ALLIANCE_MEDALS);
          break;
        case this.dialogDisp.btn_pickUp:
          if (this.dialogProperties.rewardHubVO) {
            O.CastleRewardHubMicroservice.Instance.pickRewardsSignal.dispatch([this.dialogProperties.rewardHubVO.hubRewardID]);
          }
          this.hide();
      }
    }
  };
  Object.defineProperty(SeasonLeagueEndDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  SeasonLeagueEndDialog.NAME = "SeasonLeagueEnd_RewardHub";
  SeasonLeagueEndDialog.TAB_REWARDS = "tab_rewards";
  SeasonLeagueEndDialog.TAB_REWARDS_EVENT = "tab_rewards_event";
  SeasonLeagueEndDialog.TAB_MEDALS = "tab_medals";
  SeasonLeagueEndDialog.TAB_ALLIANCE_MEDALS = "tab_allianceMedals";
  return SeasonLeagueEndDialog;
}(d.CastleExternalSubLayerDialog);
exports.SeasonLeagueEndDialog = h;
var g = require("./359.js");
var C = require("./3485.js");
var _ = require("./3486.js");
var m = require("./3488.js");
var f = require("./20.js");
var O = require("./360.js");
o.classImplementsInterfaces(h, "ICollectableRendererList");