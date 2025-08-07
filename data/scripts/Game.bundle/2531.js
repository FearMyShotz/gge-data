Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./1396.js");
var l = require("./4.js");
var c = require("./964.js");
var u = require("./1397.js");
var d = function (e) {
  function CastleAllianceBattlegroundEventDialogPerformanceAllianceCollector(t, i) {
    var n = this;
    n.SORT_CONQUERED = "SORT_CONQUERED";
    n.SORT_ATTACK = "SORT_ATTACK";
    n.SORT_ALLIANCE_INFLUENCE = "SORT_ALLIANCE_INFLUENCE";
    CONSTRUCTOR_HACK;
    return n = e.call(this, t, i) || this;
  }
  n.__extends(CastleAllianceBattlegroundEventDialogPerformanceAllianceCollector, e);
  Object.defineProperty(CastleAllianceBattlegroundEventDialogPerformanceAllianceCollector.prototype, "scrollListItemClass", {
    get: function () {
      return h.CastleAllianceBattlegroundEventDialogPerformanceAllianceListItem;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleAllianceBattlegroundEventDialogPerformanceAlliance.prototype, "scrollListItemClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceBattlegroundEventDialogPerformanceAllianceCollector.prototype, "scrollListItemAssetName", {
    get: function () {
      return "ABG_AlliancePerformance_ListItem";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleAllianceBattlegroundEventDialogPerformanceAlliance.prototype, "scrollListItemAssetName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceBattlegroundEventDialogPerformanceAllianceCollector.prototype, "sortTypes", {
    get: function () {
      return [this.SORT_ALLIANCE_INFLUENCE, this.SORT_ATTACK, this.SORT_CONQUERED];
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleAllianceBattlegroundEventDialogPerformanceAlliance.prototype, "sortTypes").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceBattlegroundEventDialogPerformanceAllianceCollector.prototype, "defaultSortType", {
    get: function () {
      return this.SORT_ALLIANCE_INFLUENCE;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleAllianceBattlegroundEventDialogPerformanceAlliance.prototype, "defaultSortType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceBattlegroundEventDialogPerformanceAllianceCollector.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.subLayerDisp.icon_attack_ML.toolTipText = this.subLayerDisp.mc_attack.toolTipText = "stats_capitalsLooted";
    this.subLayerDisp.icon_alliance_influence_points_ML.toolTipText = this.subLayerDisp.mc_allPoints.toolTipText = "stats_contributeAllianceInfluence";
    this.subLayerDisp.icon_conquered_ML.toolTipText = this.subLayerDisp.mc_conquered.toolTipText = "stats_cityStatesConquered";
    this.subLayerDisp.mc_rank.toolTipText = "rank";
    this.subLayerDisp.mc_currentPoints.toolTipText = "currentInfluence";
  };
  CastleAllianceBattlegroundEventDialogPerformanceAllianceCollector.prototype.sendPerformanceCommand = function () {
    o.BasicModel.smartfoxClient.sendCommandVO(new r.C2SAllianceBattleGroundGetAlliancePerformanceVO(l.CastleModel.userData.allianceID, s.EventConst.EVENTTYPE_ALLIANCE_BATTLEGROUND));
  };
  CastleAllianceBattlegroundEventDialogPerformanceAllianceCollector.prototype.updateDialogElements = function () {
    this.subLayerDisp.icon_attack_ML.visible = this.subLayerDisp.mc_attack.visible = this.currentSorting == this.SORT_ATTACK;
    this.subLayerDisp.icon_alliance_influence_points_ML.visible = this.subLayerDisp.mc_allPoints.visible = this.currentSorting == this.SORT_ALLIANCE_INFLUENCE;
    this.subLayerDisp.icon_conquered_ML.visible = this.subLayerDisp.mc_conquered.visible = this.currentSorting == this.SORT_CONQUERED;
  };
  CastleAllianceBattlegroundEventDialogPerformanceAllianceCollector.prototype.sortPerformances = function () {
    if (this.alliancePerformanceVOs) {
      switch (this.currentSorting) {
        case this.SORT_ALLIANCE_INFLUENCE:
          this.alliancePerformanceVOs.sort(c.AllianceBattlegroundAlliancePerformanceVO.sortByInfluenceAlliancePoints);
          break;
        case this.SORT_ATTACK:
          this.alliancePerformanceVOs.sort(c.AllianceBattlegroundAlliancePerformanceVO.sortByAttackPoints);
          break;
        case this.SORT_CONQUERED:
          this.alliancePerformanceVOs.sort(c.AllianceBattlegroundAlliancePerformanceVO.sortByConquerPoints);
      }
    }
  };
  CastleAllianceBattlegroundEventDialogPerformanceAllianceCollector.prototype.getPointsFromVO = function (e) {
    switch (this.currentSorting) {
      case this.SORT_ALLIANCE_INFLUENCE:
        return e.influenceAlliancePoints;
      case this.SORT_ATTACK:
        return e.attackPoints;
      case this.SORT_CONQUERED:
        return e.conquerPoints;
    }
    return 0;
  };
  CastleAllianceBattlegroundEventDialogPerformanceAllianceCollector.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.subLayerDisp.btn_alliance:
        this.mainDialog.setCategory(p.CastleAllianceBattleGroundEventDialog.TAB_PERFORMANCE_ALLIANCE_COLLECTOR);
        break;
      case this.subLayerDisp.btn_player:
        this.mainDialog.setCategory(p.CastleAllianceBattleGroundEventDialog.TAB_PERFORMANCE_PLAYER_COLLECTOR);
    }
  };
  return CastleAllianceBattlegroundEventDialogPerformanceAllianceCollector;
}(u.CastleAllianceBattlegroundEventDialogPerformanceAlliance);
exports.CastleAllianceBattlegroundEventDialogPerformanceAllianceCollector = d;
a.classImplementsInterfaces(d, "ICollectableRendererList", "ISublayer");
var p = require("./249.js");
var h = require("./1398.js");