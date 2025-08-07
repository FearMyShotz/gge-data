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
  function CastleAllianceBattlegroundEventDialogRankingPlayer(t, i) {
    return e.call(this, t, i) || this;
  }
  n.__extends(CastleAllianceBattlegroundEventDialogRankingPlayer, e);
  Object.defineProperty(CastleAllianceBattlegroundEventDialogRankingPlayer.prototype, "highscoreID", {
    get: function () {
      if (r.ABGHelper.isAllianceCollectorScoring) {
        return a.HighscoreConst.ALLIANCE_BATTLE_GROUND_PLAYER_COLLECTOR;
      } else {
        return a.HighscoreConst.ALLIANCE_BATTLE_GROUND_PLAYER_TOWER;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleAllianceBattlegroundEventDialogRanking.prototype, "highscoreID").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceBattlegroundEventDialogRankingPlayer.prototype, "listItemClass", {
    get: function () {
      return d.CastleAllianceBattlegroundEventDialogRankingPlayerListItem;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleAllianceBattlegroundEventDialogRanking.prototype, "listItemClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceBattlegroundEventDialogRankingPlayer.prototype.show = function (t) {
    this.dialogDisp_0.btn_alliance.gotoAndStop(2);
    this.dialogDisp_0.btn_player.gotoAndStop(1);
    e.prototype.show.call(this, t);
    this.dialogDisp_0.mc_rank.toolTipText = "rank";
    this.dialogDisp_0.mc_level.toolTipText = "level";
    this.dialogDisp_0.mc_points.toolTipText = "stats_contributeAllianceInfluence";
    this.dialogDisp_0.mc_points.visible = r.ABGHelper.isAllianceCollectorScoring;
    this.dialogDisp_0.mc_alliTowerPoints.toolTipText = "stats_contributeAllianceStatuette";
    this.dialogDisp_0.mc_alliTowerPoints.visible = r.ABGHelper.isAllianceTowerScoring;
    this.textFieldManager.registerTextField(this.dialogDisp_0.txt_name, new s.TextVO(l.TextHelper.toUpperCaseLocaSafeTextId("generic_playerName")));
    this.textFieldManager.registerTextField(this.dialogDisp_0.txt_allianceName, new s.TextVO(l.TextHelper.toUpperCaseLocaSafeTextId("allianceName")));
    this.textFieldManager.registerTextField(this.dialogDisp_0.btn_findme.txt_text, new s.TextVO(l.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_findMe_button")));
  };
  Object.defineProperty(CastleAllianceBattlegroundEventDialogRankingPlayer.prototype, "dialogDisp_0", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  return CastleAllianceBattlegroundEventDialogRankingPlayer;
}(c.CastleAllianceBattlegroundEventDialogRanking);
exports.CastleAllianceBattlegroundEventDialogRankingPlayer = u;
var d = require("./2540.js");
o.classImplementsInterfaces(u, "ICollectableRendererList", "ISublayer");