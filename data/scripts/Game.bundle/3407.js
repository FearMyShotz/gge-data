Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./5.js");
var u = require("./5.js");
var d = require("./3.js");
var p = require("./3.js");
var h = require("./264.js");
var g = require("./210.js");
var C = require("./15.js");
var _ = require("./4.js");
var m = require("./251.js");
var f = require("./8.js");
var O = require("./35.js");
var E = require("./330.js");
var y = function (e) {
  function CastleFactionInvasionEventDialogAllianceSublayer(t) {
    var i = e.call(this, t) || this;
    i.setTexts();
    return i;
  }
  n.__extends(CastleFactionInvasionEventDialogAllianceSublayer, e);
  CastleFactionInvasionEventDialogAllianceSublayer.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.initBasicButtons([this.subLayerDisp.btn_show_me_red, this.subLayerDisp.btn_show_me_blue, this.subLayerDisp.btn_highscore]);
    this.subLayerDisp.btn_highscore.toolTipText = "dialog_berimondInvasion_alliance_rankings_tooltip";
    var i = CastleFactionInvasionEventDialogAllianceSublayer.eventVO.pointThresholds.concat(CastleFactionInvasionEventDialogAllianceSublayer.eventVO.topX);
    var n = new b.RewardsDialogScoreBarProperties(CastleFactionInvasionEventDialogAllianceSublayer.eventVO.rewardLists, "berimondInvasion_alliance", i, this.levelLabels, this.descriptions);
    var o = new (a.getDefinitionByName("FactionInvasionEvent_Score_Icon"))();
    o.toolTipText = "factionHighscore_points";
    var s = new (a.getDefinitionByName("FactionInvasionEvent_Background"))();
    this.scoreBar = new D.RewardsDialogScoreBarComponentExternal();
    this.scoreBar.load(this.subLayerDisp.mc_scoreBarContainer, this.bindFunction(this.onScorebarAssetLoaded), "Scorebar_Alliance_V", o, s, CastleFactionInvasionEventDialogAllianceSublayer.openRewardsDialog, n);
  };
  CastleFactionInvasionEventDialogAllianceSublayer.prototype.onScorebarAssetLoaded = function () {
    this.onUpdatePoints();
    C.CastleBasicController.getInstance().addEventListener(g.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
  };
  CastleFactionInvasionEventDialogAllianceSublayer.prototype.hide = function () {
    e.prototype.hide.call(this);
    this.scoreBar.destroy();
    C.CastleBasicController.getInstance().removeEventListener(g.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
  };
  CastleFactionInvasionEventDialogAllianceSublayer.prototype.updateProgressBar = function () {
    this.scoreBar.update(new m.CastleScoreBarProgressVO(CastleFactionInvasionEventDialogAllianceSublayer.eventVO.ownPoints, CastleFactionInvasionEventDialogAllianceSublayer.eventVO.ownRank, CastleFactionInvasionEventDialogAllianceSublayer.eventVO.pointThresholds, CastleFactionInvasionEventDialogAllianceSublayer.eventVO.topX, CastleFactionInvasionEventDialogAllianceSublayer.eventVO.rewardsReceived, this.isPlayerQualifiedForAllianceRewards(), this.allianceRewardThresholdPoints()));
  };
  CastleFactionInvasionEventDialogAllianceSublayer.prototype.onUpdatePoints = function (e = null) {
    if (CastleFactionInvasionEventDialogAllianceSublayer.mainEventVO) {
      this.updateProgressBar();
    }
  };
  Object.defineProperty(CastleFactionInvasionEventDialogAllianceSublayer.prototype, "levelLabels", {
    get: function () {
      var e = 0;
      if (!this._levelLabels) {
        this._levelLabels = [];
        var t = CastleFactionInvasionEventDialogAllianceSublayer.eventVO;
        for (e = 0; e < t.pointThresholds.length && t.pointThresholds[e] != 0; e++) {
          this._levelLabels.push(t.pointThresholds[e]);
        }
        for (e = 0; e < t.topX.length; e++) {
          this._levelLabels.push(p.Localize.text("Ranking_TopX", [t.topX[e]]));
        }
        this._levelLabels.push(p.Localize.text("Ranking_Winner"));
      }
      return this._levelLabels;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFactionInvasionEventDialogAllianceSublayer.prototype, "descriptions", {
    get: function () {
      if (!this._descriptions) {
        this._descriptions = [];
        for (var e = 0; e < CastleFactionInvasionEventDialogAllianceSublayer.eventVO.rewardLists.length; e++) {
          if (CastleFactionInvasionEventDialogAllianceSublayer.eventVO.rewardLists[e].grantType == l.RewardConst.ALLIANCE) {
            this._descriptions.push("dialog_alienInvasionAlliance_Treasury_tooltip");
          } else if (CastleFactionInvasionEventDialogAllianceSublayer.eventVO.rewardLists[e].grantType == l.RewardConst.ALLIANCE_MEMBER) {
            this._descriptions.push("dialog_alienInvasionAlliance_Members_tooltip");
          } else {
            this._descriptions.push("forAllianceFundsAndMembers");
          }
        }
      }
      return this._descriptions;
    },
    enumerable: true,
    configurable: true
  });
  CastleFactionInvasionEventDialogAllianceSublayer.prototype.setTexts = function () {
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_dialog_title, new d.LocalizedTextVO("dialog_berimondInvasion_alliance_header")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_description, new d.LocalizedTextVO("dialog_berimondInvasion_alliance_desc")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_goto_red_title, new d.LocalizedTextVO("dialog_berimondInvasion_findRedCamp")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_goto_blue_title, new d.LocalizedTextVO("dialog_berimondInvasion_findBlueCamp")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_goto_red_description, new d.LocalizedTextVO("dialog_berimondInvasion_alliance_camp_desc")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_goto_blue_description, new d.LocalizedTextVO("dialog_berimondInvasion_alliance_camp_desc")).autoFitToBounds = true;
  };
  CastleFactionInvasionEventDialogAllianceSublayer.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (f.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.subLayerDisp.btn_show_me_red:
          _.CastleModel.smartfoxClient.sendCommandVO(new h.C2SFindNextMapObjectVO(s.WorldConst.AREA_TYPE_FACTION_INVASION_CAMP, r.WorldClassic.KINGDOM_ID, -1, -1, u.DungeonConst.RED_FACTION_KING));
          break;
        case this.subLayerDisp.btn_show_me_blue:
          _.CastleModel.smartfoxClient.sendCommandVO(new h.C2SFindNextMapObjectVO(s.WorldConst.AREA_TYPE_FACTION_INVASION_CAMP, r.WorldClassic.KINGDOM_ID, -1, -1, u.DungeonConst.BLUE_FACTION_KING));
          break;
        case this.subLayerDisp.btn_highscore:
          O.CastleDialogSubLayer.dialogHandler.registerDefaultDialogs(I.CastleFactionInvasionEventHighscoreDialog, new E.GenericEventInfoListProperties(c.EventConst.EVENTTYPE_FACTION_INVASION, I.CastleFactionInvasionEventHighscoreDialog.TAB_ALLIANCE));
      }
    }
  };
  CastleFactionInvasionEventDialogAllianceSublayer.openRewardsDialog = function () {
    O.CastleDialogSubLayer.dialogHandler.registerDefaultDialogs(T.CastleFactionInvasionEventRewardListDialog, new E.GenericEventInfoListProperties(c.EventConst.EVENTTYPE_FACTION_INVASION, T.CastleFactionInvasionEventRewardListDialog.TAB_ALLIANCE));
  };
  Object.defineProperty(CastleFactionInvasionEventDialogAllianceSublayer, "mainEventVO", {
    get: function () {
      return _.CastleModel.specialEventData.getActiveEventByEventId(c.EventConst.EVENTTYPE_FACTION_INVASION);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFactionInvasionEventDialogAllianceSublayer, "eventVO", {
    get: function () {
      return this.mainEventVO.allianceEventVO;
    },
    enumerable: true,
    configurable: true
  });
  CastleFactionInvasionEventDialogAllianceSublayer.prototype.isPlayerQualifiedForAllianceRewards = function () {
    var e = _.CastleModel.specialEventData.getActiveEventByEventId(c.EventConst.EVENTTYPE_FACTION_INVASION);
    var t = e.singleEventVO(true);
    var i = e.singleEventVO(false);
    return t.isPlayerQualifiedForAllianceRewards || i.isPlayerQualifiedForAllianceRewards;
  };
  CastleFactionInvasionEventDialogAllianceSublayer.prototype.allianceRewardThresholdPoints = function () {
    var e = _.CastleModel.specialEventData.getActiveEventByEventId(c.EventConst.EVENTTYPE_FACTION_INVASION);
    var t = e.singleEventVO(true);
    var i = e.singleEventVO(false);
    if (t.isPlayerQualifiedForAllianceRewards) {
      if (i.isPlayerQualifiedForAllianceRewards) {
        return 0;
      } else {
        return i.allianceRewardThresholdPoints;
      }
    } else {
      return t.allianceRewardThresholdPoints;
    }
  };
  return CastleFactionInvasionEventDialogAllianceSublayer;
}(O.CastleDialogSubLayer);
exports.CastleFactionInvasionEventDialogAllianceSublayer = y;
var b = require("./464.js");
var D = require("./465.js");
var I = require("./1653.js");
var T = require("./1063.js");
o.classImplementsInterfaces(y, "ICollectableRendererList", "ISublayer");