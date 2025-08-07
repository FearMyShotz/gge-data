Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./6.js");
var o = require("./308.js");
var a = require("./5.js");
var s = function () {
  function AllianceBattlegroundAlliancePerformanceVO() {
    this.playerID = 0;
    this.playerLevel = 0;
    this.conquerPoints = 0;
    this.attackPoints = 0;
    this.influenceAlliancePoints = 0;
    this.stats_influenceCityStates = 0;
    this.stats_influenceEnemyCastles = 0;
    this.stats_influenceEnemyCapitals = 0;
    this.currentInfluencePoints = 0;
    this.tower_collectedFromTowers = 0;
    this.tower_towersAttack = 0;
    this.tower_troopsSend = 0;
    this.tower_castleDefences = 0;
    this.tower_purchasedBuff = 0;
    this.tower_activatesBuff = 0;
    this.tower_towerDefended = 0;
  }
  AllianceBattlegroundAlliancePerformanceVO.prototype.parseData = function (e) {
    this.playerID = n.int(e.PID);
    this.playerName = e.NOM;
    this.playerLevel = n.int(e.L);
    this.currentInfluencePoints = n.int(e.AMT);
    for (var t = 0, i = e.PST; t < i.length; t++) {
      var s = i[t];
      if (s !== undefined) {
        switch (s.PSI) {
          case a.StatisticsConst.CONTRIBUTION_TO_ALLIANCE_INFLUENCE:
            this.influenceAlliancePoints = n.int(s.AMT);
            break;
          case a.StatisticsConst.CITY_STATES_CONQUERED:
            this.conquerPoints = n.int(s.AMT);
            break;
          case a.StatisticsConst.CAPITALS_ATTACKED:
            this.attackPoints = n.int(s.AMT);
            break;
          case a.StatisticsConst.INFLUENCE_FROM_CITY_STATES:
            this.stats_influenceCityStates = n.int(s.AMT);
            break;
          case a.StatisticsConst.INFLUENCE_FROM_ENEMY_CASTLES:
            this.stats_influenceEnemyCastles = n.int(s.AMT);
            break;
          case a.StatisticsConst.INFLUENCE_FROM_ENEMY_CAPITALS:
            this.stats_influenceEnemyCapitals = n.int(s.AMT);
            break;
          case a.StatisticsConst.CONTRIBUTION_TO_ALLIANCE_TOWER_POINTS:
            this.tower_collectedFromTowers = n.int(s.AMT);
            break;
          case a.StatisticsConst.SUPPORT_TROOPS_SENT_TO_ALLIANCE_TOWERS:
            this.tower_troopsSend = n.int(s.AMT);
            break;
          case a.StatisticsConst.ALLIANCE_TOWERS_DEFEATED:
            this.tower_towersAttack = n.int(s.AMT);
            break;
          case a.StatisticsConst.ALLIANCE_CASTLES_DEFENDED:
            this.tower_castleDefences = n.int(s.AMT);
            break;
          case a.StatisticsConst.TOWER_EFFECT_BUFFS_PURCHASED:
            this.tower_purchasedBuff = n.int(s.AMT);
            break;
          case a.StatisticsConst.TOWER_EFFECT_BUFFS_ACTIVATED:
            this.tower_activatesBuff = n.int(s.AMT);
            break;
          case a.StatisticsConst.ALLIANCE_TOWERS_DEFENDED:
            this.tower_towerDefended = n.int(s.AMT);
        }
      }
    }
    this.crestVO = new o.CrestVO();
    this.crestVO.loadFromParamObject(e.E);
  };
  AllianceBattlegroundAlliancePerformanceVO.sortByConquerPoints = function (e, t) {
    return t.conquerPoints - e.conquerPoints;
  };
  AllianceBattlegroundAlliancePerformanceVO.sortByAttackPoints = function (e, t) {
    return t.attackPoints - e.attackPoints;
  };
  AllianceBattlegroundAlliancePerformanceVO.sortByInfluenceAlliancePoints = function (e, t) {
    return t.influenceAlliancePoints - e.influenceAlliancePoints;
  };
  AllianceBattlegroundAlliancePerformanceVO.sortByAllianceTowerPoints = function (e, t) {
    return t.tower_collectedFromTowers - e.tower_collectedFromTowers;
  };
  AllianceBattlegroundAlliancePerformanceVO.sortByTowersDefeated = function (e, t) {
    return t.tower_towersAttack - e.tower_towersAttack;
  };
  AllianceBattlegroundAlliancePerformanceVO.sortByTowerTroopsSend = function (e, t) {
    return t.tower_troopsSend - e.tower_troopsSend;
  };
  return AllianceBattlegroundAlliancePerformanceVO;
}();
exports.AllianceBattlegroundAlliancePerformanceVO = s;