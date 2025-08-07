Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./39.js");
var u = require("./172.js");
var d = require("./31.js");
var p = require("./19.js");
var h = require("./4.js");
var g = require("./8.js");
var C = require("./34.js");
var _ = createjs.Point;
var m = function (e) {
  function CastleEilandRankingDialogAlliance(t) {
    var i = this;
    i._currentRewardPage = 1;
    i.standardXpos = 0;
    i.firstHighscoreRequest = true;
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this).initBasicButtons([i.subLayerDisp.mc_rankingContainer.btn_search, i.subLayerDisp.btn_right, i.subLayerDisp.btn_left, i.subLayerDisp.mc_rankingContainer.btn_top, i.subLayerDisp.mc_rankingContainer.btn_up, i.subLayerDisp.mc_rankingContainer.btn_down]);
    i.rankingList = new y.CastleEilandAllianceRankingComponent(i.subLayerDisp.mc_rankingContainer);
    i.rewardInfos = h.CastleModel.kingdomData.eilandRewards;
    i.subLayerDisp.mc_gotReward.toolTipText = "dialog_eiland_gotReward_tooltip";
    i.standardXpos = i.getCustomRewardComponent(i.subLayerDisp.mc_reward.mc_multireward_item0).clips.itemMc.x;
    return i;
  }
  n.__extends(CastleEilandRankingDialogAlliance, e);
  CastleEilandRankingDialogAlliance.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.rankingList.show();
    this.scrollReward(this.getStartRewardPage());
    this.subLayerDisp.mc_reward.mc_c2.toolTipText = c.ClientConstTextIds.C2;
    this.subLayerDisp.mc_reward.mc_c1.toolTipText = c.ClientConstTextIds.C1;
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_reward.txt_forAlliance, new s.LocalizedTextVO("dialog_eiland_forTreasury_header")).verticalAlign = a.GGSVerticalAlign.MIDDLE;
    this.firstHighscoreRequest = true;
    h.CastleModel.highscoreData.addEventListener(u.CastleHighscoreEvent.GET_HIGHSCORE_DATA, this.bindFunction(this.onGetHighscoreData));
  };
  CastleEilandRankingDialogAlliance.prototype.hide = function () {
    e.prototype.hide.call(this);
    this.rankingList.hide();
    this.destroyCollectableRenderList();
    h.CastleModel.highscoreData.removeEventListener(u.CastleHighscoreEvent.GET_HIGHSCORE_DATA, this.bindFunction(this.onGetHighscoreData));
  };
  CastleEilandRankingDialogAlliance.prototype.onClick = function (t) {
    if (g.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.subLayerDisp.btn_right:
          this.scrollReward(this._currentRewardPage + 1);
          break;
        case this.subLayerDisp.btn_left:
          this.scrollReward(this._currentRewardPage - 1);
      }
    }
  };
  CastleEilandRankingDialogAlliance.prototype.onGetHighscoreData = function (e) {
    if (this.firstHighscoreRequest) {
      this.firstHighscoreRequest = false;
      this.scrollReward(this.getStartRewardPage());
    }
  };
  CastleEilandRankingDialogAlliance.prototype.getStartRewardPage = function () {
    if (!h.CastleModel.userData.isInAlliance) {
      return CastleEilandRankingDialogAlliance.PAGE_TOP1;
    }
    var e = l.int(h.CastleModel.allianceData.myAllianceVO.aquaPoints);
    if (this.rankingList.ownRank <= E.CastleEilandRewardsVO.TOPX_MIN_RANK) {
      return CastleEilandRankingDialogAlliance.PAGE_TOP1;
    } else if (e >= this.rewardInfos.getReward(E.CastleEilandRewardsVO.REWARD_BOOBY6).cargoPointsNeeded) {
      return CastleEilandRankingDialogAlliance.PAGE_TOPX;
    } else if (e >= this.rewardInfos.getReward(E.CastleEilandRewardsVO.REWARD_BOOBY5).cargoPointsNeeded) {
      return CastleEilandRankingDialogAlliance.PAGE_3;
    } else if (e >= this.rewardInfos.getReward(E.CastleEilandRewardsVO.REWARD_BOOBY4).cargoPointsNeeded) {
      return CastleEilandRankingDialogAlliance.PAGE_4;
    } else if (e >= this.rewardInfos.getReward(E.CastleEilandRewardsVO.REWARD_BOOBY3).cargoPointsNeeded) {
      return CastleEilandRankingDialogAlliance.PAGE_5;
    } else if (e >= this.rewardInfos.getReward(E.CastleEilandRewardsVO.REWARD_BOOBY2).cargoPointsNeeded) {
      return CastleEilandRankingDialogAlliance.PAGE_6;
    } else if (e >= this.rewardInfos.getReward(E.CastleEilandRewardsVO.REWARD_BOOBY1).cargoPointsNeeded) {
      return CastleEilandRankingDialogAlliance.PAGE_7;
    } else {
      return CastleEilandRankingDialogAlliance.PAGE_8;
    }
  };
  CastleEilandRankingDialogAlliance.prototype.scrollReward = function (e) {
    this._currentRewardPage = e;
    this.subLayerDisp.btn_left.visible = this._currentRewardPage > 1;
    this.subLayerDisp.btn_right.visible = this._currentRewardPage < CastleEilandRankingDialogAlliance.MAX_REWARD_PAGE;
    switch (this._currentRewardPage) {
      case CastleEilandRankingDialogAlliance.PAGE_TOP1:
        this.textFieldManager.registerTextField(this.subLayerDisp.txt_rewardTitle, new s.LocalizedTextVO("dialog_eiland_top1Reward_copy"));
        this.subLayerDisp.mc_topReward.visible = true;
        this.subLayerDisp.mc_reward.visible = false;
        this.textFieldManager.registerTextField(this.subLayerDisp.mc_topReward.txt_header, new s.LocalizedTextVO("dialog_eiland_forLeader_header"));
        this.textFieldManager.registerTextField(this.subLayerDisp.mc_topReward.txt_copy, new s.LocalizedTextVO("dialog_eiland_forLeader_copy"));
        if (h.CastleModel.userData.isInAlliance) {
          this.subLayerDisp.mc_gotReward.visible = this.rankingList.ownRank == 1;
        } else {
          this.subLayerDisp.mc_gotReward.visible = false;
        }
        break;
      case CastleEilandRankingDialogAlliance.PAGE_TOPX:
        this.textFieldManager.registerTextField(this.subLayerDisp.txt_rewardTitle, new s.LocalizedTextVO("dialog_eiland_topXReward_copy", [E.CastleEilandRewardsVO.TOPX_MIN_RANK]));
        this.subLayerDisp.mc_topReward.visible = false;
        this.applyReward(this.rewardInfos.getReward(E.CastleEilandRewardsVO.REWARD_TOPX));
        break;
      case CastleEilandRankingDialogAlliance.PAGE_3:
        this.textFieldManager.registerTextField(this.subLayerDisp.txt_rewardTitle, new s.LocalizedTextVO("dialog_eiland_pointReward_copy", [new r.LocalizedNumberVO(this.rewardInfos.getReward(E.CastleEilandRewardsVO.REWARD_BOOBY6).cargoPointsNeeded, false)]));
        this.subLayerDisp.mc_topReward.visible = false;
        this.applyReward(this.rewardInfos.getReward(E.CastleEilandRewardsVO.REWARD_BOOBY6));
        break;
      case CastleEilandRankingDialogAlliance.PAGE_4:
        this.textFieldManager.registerTextField(this.subLayerDisp.txt_rewardTitle, new s.LocalizedTextVO("dialog_eiland_pointReward_copy", [new r.LocalizedNumberVO(this.rewardInfos.getReward(E.CastleEilandRewardsVO.REWARD_BOOBY5).cargoPointsNeeded, false)]));
        this.subLayerDisp.mc_topReward.visible = false;
        this.applyReward(this.rewardInfos.getReward(E.CastleEilandRewardsVO.REWARD_BOOBY5));
        break;
      case CastleEilandRankingDialogAlliance.PAGE_5:
        this.textFieldManager.registerTextField(this.subLayerDisp.txt_rewardTitle, new s.LocalizedTextVO("dialog_eiland_pointReward_copy", [new r.LocalizedNumberVO(this.rewardInfos.getReward(E.CastleEilandRewardsVO.REWARD_BOOBY4).cargoPointsNeeded, false)]));
        this.subLayerDisp.mc_topReward.visible = false;
        this.applyReward(this.rewardInfos.getReward(E.CastleEilandRewardsVO.REWARD_BOOBY4));
        break;
      case CastleEilandRankingDialogAlliance.PAGE_6:
        this.textFieldManager.registerTextField(this.subLayerDisp.txt_rewardTitle, new s.LocalizedTextVO("dialog_eiland_pointReward_copy", [new r.LocalizedNumberVO(this.rewardInfos.getReward(E.CastleEilandRewardsVO.REWARD_BOOBY3).cargoPointsNeeded, false)]));
        this.subLayerDisp.mc_topReward.visible = false;
        this.applyReward(this.rewardInfos.getReward(E.CastleEilandRewardsVO.REWARD_BOOBY3));
        break;
      case CastleEilandRankingDialogAlliance.PAGE_7:
        this.textFieldManager.registerTextField(this.subLayerDisp.txt_rewardTitle, new s.LocalizedTextVO("dialog_eiland_pointReward_copy", [new r.LocalizedNumberVO(this.rewardInfos.getReward(E.CastleEilandRewardsVO.REWARD_BOOBY2).cargoPointsNeeded, false)]));
        this.subLayerDisp.mc_topReward.visible = false;
        this.applyReward(this.rewardInfos.getReward(E.CastleEilandRewardsVO.REWARD_BOOBY2));
        break;
      case CastleEilandRankingDialogAlliance.PAGE_8:
        this.textFieldManager.registerTextField(this.subLayerDisp.txt_rewardTitle, new s.LocalizedTextVO("dialog_eiland_pointReward_copy", [new r.LocalizedNumberVO(this.rewardInfos.getReward(E.CastleEilandRewardsVO.REWARD_BOOBY1).cargoPointsNeeded, false)]));
        this.subLayerDisp.mc_topReward.visible = false;
        this.applyReward(this.rewardInfos.getReward(E.CastleEilandRewardsVO.REWARD_BOOBY1));
    }
  };
  CastleEilandRankingDialogAlliance.prototype.applyReward = function (e) {
    this.destroyCollectableRenderList();
    var t = e.rewardList.clone();
    var i = this.getCustomRewardComponent(this.subLayerDisp.mc_reward.mc_decoReward, new _(60, 60));
    var n = this.getCustomRewardComponent(this.subLayerDisp.mc_reward.mc_multireward_item0);
    var o = this.getCustomRewardComponent(this.subLayerDisp.mc_reward.mc_multireward_item1);
    this.collectableRenderList.push(i);
    this.collectableRenderList.push(n);
    this.collectableRenderList.push(o);
    var l = t.getItemByType(f.CollectableEnum.C2);
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_reward.mc_c2RewardValue.txt_value, new r.LocalizedNumberVO(l.amount));
    t.removeByItem(l);
    var c = t.getItemByType(f.CollectableEnum.C1);
    if (c && c.amount > 0) {
      this.subLayerDisp.mc_reward.mc_c1RewardValue.visible = true;
      this.subLayerDisp.mc_reward.mc_c1.visible = true;
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_reward.mc_c1RewardValue.txt_value, new r.LocalizedNumberVO(c.amount));
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_reward.txt_forPlayer, new s.LocalizedTextVO("dialog_eiland_forTreasury_header")).verticalAlign = a.GGSVerticalAlign.MIDDLE;
      t.removeByItem(c);
    } else {
      this.subLayerDisp.mc_reward.mc_c1RewardValue.visible = false;
      this.subLayerDisp.mc_reward.mc_c1.visible = false;
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_reward.txt_forPlayer, new s.LocalizedTextVO("dialog_eiland_forMembers_header")).verticalAlign = a.GGSVerticalAlign.MIDDLE;
    }
    this.subLayerDisp.mc_reward.visible = true;
    n.setVisibility(false);
    o.setVisibility(false);
    i.setVisibility(false);
    if (t.containsType(f.CollectableEnum.BUILDING)) {
      i.updateWithNewVO(t.getItemByType(f.CollectableEnum.BUILDING));
      i.setVisibility(true);
    } else {
      n.clips.itemMc.x = t.length == 1 ? this.standardXpos + CastleEilandRankingDialogAlliance.SINGLE_REWARD_OFFSET.x : this.standardXpos;
      var u = t.getItemByIndexSave(0);
      if (u) {
        n.setVisibility(true);
        n.updateWithNewVO(u);
      }
      if (u = t.getItemByIndexSave(1)) {
        o.setVisibility(true);
        o.updateWithNewVO(u);
      }
    }
    this.subLayerDisp.mc_reward.deco_background.visible = t.containsType(f.CollectableEnum.BUILDING);
    if (h.CastleModel.userData.isInAlliance && h.CastleModel.allianceData.myAllianceVO.aquaPoints >= e.cargoPointsNeeded && h.CastleModel.allianceData.myAllianceVO.aquaPoints > 0) {
      if (e.isTopXReward) {
        this.subLayerDisp.mc_gotReward.visible = this.rankingList.ownRank <= E.CastleEilandRewardsVO.TOPX_MIN_RANK;
      } else {
        this.subLayerDisp.mc_gotReward.visible = true;
      }
    } else {
      this.subLayerDisp.mc_gotReward.visible = false;
    }
  };
  CastleEilandRankingDialogAlliance.prototype.getCustomRewardComponent = function (e, t = null) {
    return new O.CollectableRenderer(new d.CollectableRenderClips(e), new p.CollectableRenderOptions(p.CollectableRenderOptions.SET_DEFAULT, t || CastleEilandRankingDialogAlliance.DEFAULT_ICON_DIMENSION));
  };
  CastleEilandRankingDialogAlliance.__initialize_static_members = function () {
    CastleEilandRankingDialogAlliance.SINGLE_REWARD_OFFSET = new _(23, 0);
    CastleEilandRankingDialogAlliance.DEFAULT_ICON_DIMENSION = new _(40, 40);
  };
  CastleEilandRankingDialogAlliance.MAX_REWARD_PAGE = 8;
  CastleEilandRankingDialogAlliance.PAGE_TOP1 = 1;
  CastleEilandRankingDialogAlliance.PAGE_TOPX = 2;
  CastleEilandRankingDialogAlliance.PAGE_3 = 3;
  CastleEilandRankingDialogAlliance.PAGE_4 = 4;
  CastleEilandRankingDialogAlliance.PAGE_5 = 5;
  CastleEilandRankingDialogAlliance.PAGE_6 = 6;
  CastleEilandRankingDialogAlliance.PAGE_7 = 7;
  CastleEilandRankingDialogAlliance.PAGE_8 = 8;
  return CastleEilandRankingDialogAlliance;
}(C.CastleDialogSubLayer);
exports.CastleEilandRankingDialogAlliance = m;
o.classImplementsInterfaces(m, "ICollectableRendererList", "ISublayer");
var f = require("./12.js");
var O = require("./186.js");
var E = require("./667.js");
var y = require("./3695.js");
m.__initialize_static_members();