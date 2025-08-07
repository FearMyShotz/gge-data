Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./1396.js");
var c = require("./13.js");
var u = require("./4.js");
var d = require("./964.js");
var p = require("./1397.js");
var h = function (e) {
  function CastleAllianceBattlegroundEventDialogPerformanceAllianceTower(t, i) {
    var n = this;
    n.SORT_TROOPS_SENT_TOWERS = "SORT_TROOPS_SENT_TOWERS";
    n.SORT_TOWERS_DEFEATED = "SORT_TOWERS_DEFEATED";
    n.SORT_ALLIANCE_POINTS = "SORT_ALLIANCE_POINTS";
    CONSTRUCTOR_HACK;
    return n = e.call(this, t, i) || this;
  }
  n.__extends(CastleAllianceBattlegroundEventDialogPerformanceAllianceTower, e);
  Object.defineProperty(CastleAllianceBattlegroundEventDialogPerformanceAllianceTower.prototype, "scrollListItemClass", {
    get: function () {
      return C.CastleAllianceBattlegroundEventDialogPerformanceAllianceListItem;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.CastleAllianceBattlegroundEventDialogPerformanceAlliance.prototype, "scrollListItemClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceBattlegroundEventDialogPerformanceAllianceTower.prototype, "scrollListItemAssetName", {
    get: function () {
      return "ABG_TowerAlliancePerformance_ListItem";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.CastleAllianceBattlegroundEventDialogPerformanceAlliance.prototype, "scrollListItemAssetName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceBattlegroundEventDialogPerformanceAllianceTower.prototype, "sortTypes", {
    get: function () {
      return [this.SORT_ALLIANCE_POINTS, this.SORT_TOWERS_DEFEATED, this.SORT_TROOPS_SENT_TOWERS];
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.CastleAllianceBattlegroundEventDialogPerformanceAlliance.prototype, "sortTypes").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceBattlegroundEventDialogPerformanceAllianceTower.prototype, "defaultSortType", {
    get: function () {
      return this.SORT_ALLIANCE_POINTS;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.CastleAllianceBattlegroundEventDialogPerformanceAlliance.prototype, "defaultSortType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceBattlegroundEventDialogPerformanceAllianceTower.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.subLayerDisp.icon_points_big.toolTipText = this.subLayerDisp.icon_points.toolTipText = "stats_contributeAllianceStatuette";
    this.subLayerDisp.icon_tower_big.toolTipText = this.subLayerDisp.icon_tower.toolTipText = "stats_attackAmountEnemyAllianceTower";
    this.subLayerDisp.icon_troops_big.toolTipText = this.subLayerDisp.icon_troops.toolTipText = "stats_contributeTroopsAllianceTower";
    this.subLayerDisp.mc_rank.toolTipText = "rank";
    this.subLayerDisp.btn_tower.actLikeButton = true;
    this.subLayerDisp.btn_tower.gotoAndStop(2);
    this.subLayerDisp.btn_tower.mouseChildren = false;
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_tower.txt_text1, new r.TextVO(c.TextHelper.toUpperCaseLocaSafeTextId("dialog_beyondTheHorizon_main_AllianceTower_overview_title")));
  };
  CastleAllianceBattlegroundEventDialogPerformanceAllianceTower.prototype.sendPerformanceCommand = function () {
    o.BasicModel.smartfoxClient.sendCommandVO(new l.C2SAllianceBattleGroundGetAlliancePerformanceVO(u.CastleModel.userData.allianceID, s.EventConst.EVENTTYPE_ALLIANCE_BATTLEGROUND));
  };
  CastleAllianceBattlegroundEventDialogPerformanceAllianceTower.prototype.updateDialogElements = function () {
    this.subLayerDisp.icon_points_big.visible = this.subLayerDisp.icon_points.visible = this.currentSorting == this.SORT_ALLIANCE_POINTS;
    this.subLayerDisp.icon_tower_big.visible = this.subLayerDisp.icon_tower.visible = this.currentSorting == this.SORT_TOWERS_DEFEATED;
    this.subLayerDisp.icon_troops_big.visible = this.subLayerDisp.icon_troops.visible = this.currentSorting == this.SORT_TROOPS_SENT_TOWERS;
  };
  CastleAllianceBattlegroundEventDialogPerformanceAllianceTower.prototype.sortPerformances = function () {
    switch (this.currentSorting) {
      case this.SORT_ALLIANCE_POINTS:
        this.alliancePerformanceVOs.sort(d.AllianceBattlegroundAlliancePerformanceVO.sortByAllianceTowerPoints);
        break;
      case this.SORT_TOWERS_DEFEATED:
        this.alliancePerformanceVOs.sort(d.AllianceBattlegroundAlliancePerformanceVO.sortByTowersDefeated);
        break;
      case this.SORT_TROOPS_SENT_TOWERS:
        this.alliancePerformanceVOs.sort(d.AllianceBattlegroundAlliancePerformanceVO.sortByTowerTroopsSend);
    }
  };
  CastleAllianceBattlegroundEventDialogPerformanceAllianceTower.prototype.getPointsFromVO = function (e) {
    switch (this.currentSorting) {
      case this.SORT_ALLIANCE_POINTS:
        return e.tower_collectedFromTowers;
      case this.SORT_TOWERS_DEFEATED:
        return e.tower_towersAttack;
      case this.SORT_TROOPS_SENT_TOWERS:
        return e.tower_troopsSend;
    }
    return 0;
  };
  CastleAllianceBattlegroundEventDialogPerformanceAllianceTower.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.subLayerDisp.btn_alliance:
        this.mainDialog.setCategory(g.CastleAllianceBattleGroundEventDialog.TAB_PERFORMANCE_ALLIANCE_TOWER);
        break;
      case this.subLayerDisp.btn_player:
        this.mainDialog.setCategory(g.CastleAllianceBattleGroundEventDialog.TAB_PERFORMANCE_PLAYER_TOWER);
        break;
      case this.subLayerDisp.btn_tower:
        this.mainDialog.setCategory(g.CastleAllianceBattleGroundEventDialog.TAB_PERFORMANCE_TOWER);
    }
  };
  return CastleAllianceBattlegroundEventDialogPerformanceAllianceTower;
}(p.CastleAllianceBattlegroundEventDialogPerformanceAlliance);
exports.CastleAllianceBattlegroundEventDialogPerformanceAllianceTower = h;
a.classImplementsInterfaces(h, "ICollectableRendererList", "ISublayer");
var g = require("./249.js");
var C = require("./1398.js");