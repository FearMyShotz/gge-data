Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./53.js");
var l = require("./13.js");
var c = require("./1399.js");
var u = function (e) {
  function CastleAllianceBattlegroundEventDialogRankingAlliance(t, i) {
    return e.call(this, t, i) || this;
  }
  n.__extends(CastleAllianceBattlegroundEventDialogRankingAlliance, e);
  Object.defineProperty(CastleAllianceBattlegroundEventDialogRankingAlliance.prototype, "highscoreID", {
    get: function () {
      if (r.ABGHelper.isAllianceCollectorScoring) {
        return a.HighscoreConst.ALLIANCE_BATTLE_GROUND_ALLIANCE_COLLECTOR;
      } else {
        return a.HighscoreConst.ALLIANCE_BATTLE_GROUND_ALLIANCE_TOWER;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleAllianceBattlegroundEventDialogRanking.prototype, "highscoreID").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceBattlegroundEventDialogRankingAlliance.prototype, "listItemClass", {
    get: function () {
      return d.CastleAllianceBattlegroundEventDialogRankingAllianceListItem;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleAllianceBattlegroundEventDialogRanking.prototype, "listItemClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceBattlegroundEventDialogRankingAlliance.prototype.show = function (t) {
    this.dialogDisp_0.btn_alliance.gotoAndStop(1);
    this.dialogDisp_0.btn_player.gotoAndStop(2);
    e.prototype.show.call(this, t);
    this.dialogDisp_0.mc_rank.toolTipText = "rank";
    this.dialogDisp_0.mc_member.toolTipText = "dialog_alliance_member";
    this.dialogDisp_0.icon_discovery_points_ML.toolTipText = "currency_name_AllianceInfluence";
    this.dialogDisp_0.icon_discovery_points_ML.visible = r.ABGHelper.isAllianceCollectorScoring;
    this.dialogDisp_0.mc_alliTowerPoints.toolTipText = "currency_name_AllianceStatuette";
    this.dialogDisp_0.mc_alliTowerPoints.visible = r.ABGHelper.isAllianceTowerScoring;
    this.textFieldManager.registerTextField(this.dialogDisp_0.txt_alliance_name, new s.TextVO(l.TextHelper.toUpperCaseLocaSafeTextId("allianceName")));
    this.textFieldManager.registerTextField(this.dialogDisp_0.btn_findme.txt_text, new s.TextVO(l.TextHelper.toUpperCaseLocaSafeTextId("myRank")));
  };
  Object.defineProperty(CastleAllianceBattlegroundEventDialogRankingAlliance.prototype, "dialogDisp_0", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  return CastleAllianceBattlegroundEventDialogRankingAlliance;
}(c.CastleAllianceBattlegroundEventDialogRanking);
exports.CastleAllianceBattlegroundEventDialogRankingAlliance = u;
var d = require("./2538.js");
o.classImplementsInterfaces(u, "ICollectableRendererList", "ISublayer");