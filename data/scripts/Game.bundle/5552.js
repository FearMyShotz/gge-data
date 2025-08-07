Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./5.js");
var o = require("./5.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./6.js");
var c = require("./148.js");
var u = require("./75.js");
var d = require("./28.js");
var p = require("./971.js");
var h = require("./50.js");
var g = require("./12.js");
var C = require("./45.js");
var _ = require("./48.js");
var m = require("./128.js");
var f = require("./155.js");
var O = require("./273.js");
var E = require("./112.js");
var y = require("./4.js");
var b = require("./483.js");
var D = require("./387.js");
var I = require("./729.js");
var T = require("./147.js");
var v = require("./52.js");
var S = require("./5553.js");
var A = require("./5554.js");
var L = require("./1960.js");
var P = require("./1961.js");
var M = require("./5557.js");
var R = require("./5559.js");
var V = function () {
  function BattleLogVO() {
    this._currentMessageID = 0;
    this._messageIDs = [];
    this._logID = 0;
    this._logType = 0;
    this._defenderWon = false;
    this._honor = 0;
    this._survivalRate = 0;
    this._attackerHadHospital = false;
    this._isAttackerHospitalFull = false;
    this._attackerHomeCastleId = 0;
    this._defenderHomeCastleId = 0;
    this._defenderHadHospital = false;
    this._isDefenderHospitalFull = false;
    this._attackerHasOnlyAuxiliaries = false;
    this._defenderHasOnlyAuxiliaries = false;
    this._supporterWoundedUnitCount = 0;
    this._metaData = new Map();
    this._disableJump = false;
    this._attackerTroopcountInKeep = 0;
    this._attackerTroopLostInKeep = 0;
    this._defenderTroopcountInKeep = 0;
    this._defenderTroopLostInKeep = 0;
    this._attackerLegendSkillIds = [];
    this._defenderLegendSkillIds = [];
    this._hasDefenderInfos = false;
    this._hasMiddleInfo = false;
    this._hasDetailedInfo = false;
    this._supportToolsAttacker = [];
    this._supportToolsDefender = [];
    this._reinforcementUnits = [];
    this._ragePoints = -1;
    this.attackerAllianceSubscribers = 0;
    this.attackerHadPlayerSubscription = false;
    this.defenderAllianceSubscribers = 0;
    this.defenderHadPlayerSubscription = false;
    this.oldChargePoints = 0;
    this.newChargePoints = 0;
    this.newChargeRank = 0;
    this.oldChargeRank = 0;
    this.defender_oldChargePoints = 0;
    this.defender_newChargePoints = 0;
    this.defender_newChargeRank = 0;
    this.defender_oldChargeRank = 0;
    this.defenderUsedSupportTools = false;
    this._attackerAbilities = [];
    this._defenderAbilities = [];
    this._autoSkipType = 0;
    this._advisorType = 0;
    this._advisorMovementCount = 0;
    this._advisorMovementNumber = 0;
  }
  BattleLogVO.prototype.fillFromParamObject = function (e) {
    var t = this;
    var i = l.int(e.AI.AT);
    if (e.SSID) {
      e.AI.SSID = e.SSID;
    }
    if (e.DAR) {
      e.AI.DAR = e.DAR;
    }
    if (i == a.WorldConst.AREA_TYPE_ALLIANCE_BATTLE_GROUND_TOWER) {
      e.AI.AID = e.AID;
      e.AI.N = e.N;
      e.AI.ACVC = e.ACVC;
      e.AI.E = e.E;
    }
    this.attackerAllianceSubscribers = l.int(e.AAS);
    this.attackerHadPlayerSubscription = e.AHP == 1;
    this.defenderAllianceSubscribers = l.int(e.DAS);
    this.defenderHadPlayerSubscription = e.DHP == 1;
    this.oldChargePoints = l.int(Math.max(e.CPO, 0));
    this.oldChargeRank = l.int(Math.max(e.CRO, 0));
    this.newChargePoints = l.int(Math.max(e.CPN, 0));
    this.newChargeRank = l.int(Math.max(e.CRN, 0));
    this.defender_oldChargePoints = l.int(Math.max(e.DCPO, 0));
    this.defender_oldChargeRank = l.int(Math.max(e.DCRO, 0));
    this.defender_newChargePoints = l.int(Math.max(e.DCPN, 0));
    this.defender_newChargeRank = l.int(Math.max(e.DCRN, 0));
    this._mapobjectVO = T.WorldmapObjectFactory.parseWorldMapArea([i], false);
    this._mapobjectVO.parseAreaInfoBattleLog(e.AI);
    this._currentMessageID = e.MID;
    this._messageIDs.push(this._currentMessageID);
    this._logID = l.int(e.LID);
    this._logType = l.int(e.MT);
    this._defenderWon = !!e.DW;
    this.addMetadataFromMessage(this._currentMessageID, e.MS);
    this.loadFromParamArrayPBI(e.PBI);
    for (var n = 0; n < this._playerBattleInfo.length; n++) {
      var o = this._playerBattleInfo[n];
      if (o.ownerInfoVO.playerID == e.AI.DP) {
        this._mapobjectVO.ownerInfo = o.ownerInfoVO;
      }
    }
    this.parseFactionFromPI(e.PI);
    this._honor = l.int(e.H);
    this._survivalRate = l.int(e.SR);
    var s = l.int(e.AI.NID);
    if (s > 0) {
      var c = this._mapobjectVO;
      c.tmapID = l.int(e.AI.MID ? e.AI.MID : this.metaData_optionalTMapID);
      c.tMapNode = y.CastleModel.treasureMapData.createTreasureMapNode(c.tmapID, s);
    }
    if (e.EQF) {
      this._equipmentVO = b.CastleEquipmentFactory.createEquipmentVO(e.EQF);
    }
    if (e.GF) {
      this._gemVO = y.CastleModel.gemData.getGemVO(e.GF);
    }
    if (e.MSF) {
      var u = l.int(e.MSF < y.CastleModel.currencyData.getCurrencyRangeByID(v.ClientConstCurrency.ID_RANGE_MINUTE_SKIP)[0] ? e.MSF + y.CastleModel.currencyData.getCurrencyRangeByID(v.ClientConstCurrency.ID_RANGE_MINUTE_SKIP)[0] : e.MSF);
      this._minuteSkipVO = C.CollectableHelper.createVO(g.CollectableEnum.GENERIC_CURRENCY, 1, u);
    }
    if (e.RP) {
      this._ragePoints = parseInt(e.RP);
    }
    if (e.DJ) {
      this._disableJump = true;
    }
    if (e.PS) {
      var p = new Date();
      p.setTime(p.getTime() - e.PS * d.ClientConstTime.SEC_2_MILLISEC);
      this._battleTimestamp = p;
    }
    this._attackerHomeCastleId = parseInt(e.AHC);
    this._attackerHadHospital = parseInt(e.AHH) == 1;
    this._isAttackerHospitalFull = parseInt(e.AHF) == 1;
    this._defenderHomeCastleId = parseInt(e.DHC);
    this._defenderHadHospital = parseInt(e.DHH) == 1;
    this._isDefenderHospitalFull = parseInt(e.DHF) == 1;
    this._attackerHasOnlyAuxiliaries = parseInt(e.AUA) == 1;
    this._defenderHasOnlyAuxiliaries = parseInt(e.DUA) == 1;
    this.updateSupporterWoundedUnitCount(e.WSU);
    if (e[r.CommKeys.ATTACKER_LORD_INFO]) {
      this._commanderVO = I.LordFactory.createLord(e[r.CommKeys.ATTACKER_LORD_INFO], true);
    }
    if (e[r.CommKeys.DEFENDER_BARON_INFO]) {
      this._baronVO = I.LordFactory.createLord(e[r.CommKeys.DEFENDER_BARON_INFO], true);
    }
    this._autoSkipCosts = [new _.CollectableList(), new _.CollectableList()];
    if (e.ASMS) {
      e.ASMS.forEach(function (e) {
        var i = new f.CollectableItemGenericCurrencyVO(e[0], e[1]);
        if (i.amount > 0) {
          t._autoSkipCosts[0].addItem(i);
        } else {
          t._autoSkipCosts[1].addItem(i);
        }
        i.amount = Math.abs(i.amount);
      });
    }
    if (e.ASC && e.ASC > 0) {
      var h = new m.CollectableItemC2VO(e.ASC);
      this._autoSkipCosts[0].addItem(h);
    }
    this._autoSkipType = e.ASCT;
    if (e.AAT) {
      this._advisorType = e.AAT;
    }
    if (e.AAC) {
      this._advisorMovementCount = e.AAC;
    }
    if (e.AAN) {
      this._advisorMovementNumber = e.AAN;
    }
  };
  BattleLogVO.prototype.loadFromParamArrayPBI = function (e) {
    this._playerBattleWinnerInfo = [];
    this._playerBattleLoserInfo = [];
    this._playerBattleInfo = [];
    for (var t = 0; t < e.length; t++) {
      var i = e[t];
      var r = new R.BattleParticipantVO();
      var u = l.int(i[0] == c.ClientConstNPCs.NPC_ID_DAIMYO_TOWNSHIP && this.isForwardedBattleLog ? y.CastleModel.messageData.getMessageVOById(this._currentMessageID).playerID : i[0]);
      if (u <= 0 && (this._mapobjectVO.areaType == a.WorldConst.AREA_TYPE_ALLIANCE_BATTLE_GROUND_TOWER || this._mapobjectVO.areaType == a.WorldConst.AREA_TYPE_ALLIANCE_BATTLE_GROUND_RESOURCE_TOWER)) {
        r.ownerInfoVO = this._mapobjectVO.ownerInfo;
        r.ownerIsAlliance = this._mapobjectVO.areaType == a.WorldConst.AREA_TYPE_ALLIANCE_BATTLE_GROUND_TOWER;
      } else {
        r.ownerInfoVO = y.CastleModel.otherPlayerData.getOwnerInfoVO(u);
      }
      if (!r.ownerInfoVO) {
        return;
      }
      r.playerID = l.int(r.ownerInfoVO.playerID);
      if (E.PlayerHelper.isDungeonPlayer(r.ownerInfoVO.playerID) && this._logType == n.MessageConst.MESSAGE_TYPE_BATTLE_LOG && this.isForwardedBattleLog) {
        if (O.TMapHelper.isThornKingMap(this.metaData_optionalTMapID)) {
          r.ownerInfoVO = D.CastleNPCOwnerFactory.generateEventOwner(s.EventConst.EVENTTYPE_CRUSADE_THORNKING);
        } else if (O.TMapHelper.isSeaQueenMap(this.metaData_optionalTMapID)) {
          r.ownerInfoVO = D.CastleNPCOwnerFactory.generateEventOwner(s.EventConst.EVENTTYPE_CRUSADE_SEAQUEEN);
        } else if (O.TMapHelper.isUnderworldMap(this.metaData_optionalTMapID)) {
          r.ownerInfoVO = D.CastleNPCOwnerFactory.generateEventOwner(s.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD);
        }
      }
      r.front = l.int(i[1]);
      r.startArmySize = l.int(i[2]);
      r.lostUnits = l.int(i[3]);
      r.lootGoods = h.CollectableManager.parser.s2cParamList.createList(i[4]);
      r.famePoints = l.int(i[5]);
      r.xp = l.int(i[6]);
      var d = l.int(i[7]);
      r.kingstowerBonus = d || 0;
      r.factionPoints = l.int(i[8]);
      var p = l.int(i[9]);
      r.highestFameTitleBonus = p || 0;
      r.woundedUnits = l.int(i[10]);
      r.moralBoost = l.int(i[11]);
      r.capitalTokens = l.int(i[12]);
      if (i[13]) {
        r.reputationPointsBlue = l.int(i[13][o.FactionConst.BLUE_FACTION]);
        r.reputationPointsRed = l.int(i[13][o.FactionConst.RED_FACTION]);
      }
      this._playerBattleInfo.push(r);
      if (this._defenderWon && r.front == 1 || !this._defenderWon && r.front == 0) {
        this._playerBattleWinnerInfo.push(r);
      } else {
        this._playerBattleLoserInfo.push(r);
      }
    }
  };
  BattleLogVO.prototype.parseFactionFromPI = function (e) {
    for (var t = 0; t < e.length; ++t) {
      for (var i = 0; i < this._playerBattleInfo.length; ++i) {
        if (this._playerBattleInfo[i].ownerInfoVO.playerID == e[t].OID) {
          this._playerBattleInfo[i].ownerInfoVO.factionID = e[t].FN.FID;
        }
      }
    }
  };
  BattleLogVO.prototype.updateSupporterWoundedUnitCount = function (e) {
    this._supporterWoundedUnitCount = -1;
    if (e) {
      for (var t = 0; t < e.length; t++) {
        if (e[t][0] == y.CastleModel.userData.playerID) {
          this._supporterWoundedUnitCount = l.int(e[t][1]);
          break;
        }
      }
    }
  };
  BattleLogVO.prototype.addMetadataFromMessage = function (e, t) {
    this._metaData.set(e, t.split("+"));
  };
  BattleLogVO.prototype.parseDetails = function (e) {
    this.parseYardDetailed(e.Y);
    this.parseWavesDetails(e.W, e.PW, e.EW);
    this.parseReinforcementDetails(e.RW || []);
    this._hasDetailedInfo = true;
  };
  BattleLogVO.prototype.parseWavesDetails = function (e, t, i) {
    this._detailedBattleWaves = [];
    if (t) {
      this._detailedPreCombatWave = new A.DetailedBattleWaveVO(t);
      this._detailedPreCombatWave.isPreOrPostWave = true;
      this._detailedBattleWaves.push(this._detailedPreCombatWave);
    }
    for (var n = 0; n < e.length; n++) {
      this._detailedBattleWaves.push(new A.DetailedBattleWaveVO(e[n]));
    }
    if (i) {
      this._detailedPostCombatWave = new A.DetailedBattleWaveVO(i);
      this._detailedPostCombatWave.isPreOrPostWave = true;
      this._detailedBattleWaves.push(this._detailedPostCombatWave);
    }
    this._detailedSummaryWave = new A.DetailedBattleWaveVO(null, this._detailedBattleWaves, true);
  };
  BattleLogVO.prototype.parseYardDetailed = function (e) {
    this._detailedCourtyardAttacker = [];
    this._detailedCourtyardDefender = [];
    if (e) {
      var t;
      var i = 0;
      if (e.length > BattleLogVO.ATTACKER) {
        var n = e[BattleLogVO.ATTACKER];
        for (i = 1; i < n.length; i++) {
          t = new L.LogUnitVO(n[i]);
          this._detailedCourtyardAttacker.push(t);
        }
      }
      if (e.length > BattleLogVO.DEFENDER) {
        var o = e[BattleLogVO.DEFENDER];
        for (i = 1; i < o.length; i++) {
          t = new L.LogUnitVO(o[i]);
          this._detailedCourtyardDefender.push(t);
        }
      }
      this._detailedCourtyardAttacker.sort(u.ClientConstSort.sortByUnitSortOrderForLogUnitVO);
      this._detailedCourtyardDefender.sort(u.ClientConstSort.sortByUnitSortOrderForLogUnitVO);
    }
  };
  BattleLogVO.prototype.parseSupportTools = function (e) {
    this._supportToolsAttacker = [];
    this._supportToolsDefender = [];
    if (e) {
      var t;
      var i = 0;
      if (e.length > BattleLogVO.ATTACKER) {
        var n = e[BattleLogVO.ATTACKER];
        for (i = 1; i < n.length; i++) {
          t = new L.LogUnitVO(n[i]);
          this._supportToolsAttacker.push(t);
        }
      }
      if (e.length > BattleLogVO.DEFENDER) {
        var o = e[BattleLogVO.DEFENDER];
        for (i = 1; i < o.length; i++) {
          t = new L.LogUnitVO(o[i]);
          this._supportToolsDefender.push(t);
        }
      }
      this._supportToolsAttacker.sort(u.ClientConstSort.sortByUnitSortOrderForLogUnitVO);
      this._supportToolsDefender.sort(u.ClientConstSort.sortByUnitSortOrderForLogUnitVO);
    }
  };
  BattleLogVO.prototype.parseReinforcementDetails = function (e) {
    this._reinforcementUnits = [];
    for (var t = 0, i = e; t < i.length; t++) {
      var n = i[t];
      this._reinforcementUnits.push(new L.LogUnitVO(n));
    }
  };
  BattleLogVO.prototype.parseMiddle = function (e) {
    var t = this;
    this.parseYard(e.Y);
    this.parseWaves(e.W, e.PW);
    this.parseSupportTools(e.SD);
    this.parseReinforcementWave(e.RW || [0, 0, 0]);
    if (e.AL) {
      this._commanderVO = I.LordFactory.createLord(e.AL, true);
    }
    if (e.DJ) {
      this._disableJump = true;
    }
    if (e.DB) {
      this._baronVO = I.LordFactory.createLord(e.DB, true);
    }
    if (e.PS) {
      var i = new Date();
      i.setTime(i.getTime() - e.PS * d.ClientConstTime.SEC_2_MILLISEC);
      this._battleTimestamp = i;
    }
    if (e.DGT) {
      this._defenderTriggeredGems = e.DGT;
    }
    if (e.AGT) {
      this._attackerTriggeredGems = e.AGT;
    }
    if (e.DLS) {
      this._defenderLegendSkillIds = e.DLS;
    }
    if (e.ALS) {
      this._attackerLegendSkillIds = e.ALS;
    }
    this.defenderUsedSupportTools = !!e.DUST && e.DUST;
    if (e.AA) {
      e.AA.forEach(function (e) {
        return t._attackerAbilities.push(new S.BattleLogAbilityVO(e));
      });
    }
    if (e.DA) {
      e.DA.forEach(function (e) {
        return t._defenderAbilities.push(new S.BattleLogAbilityVO(e));
      });
    }
    this._hasMiddleInfo = true;
  };
  BattleLogVO.prototype.parseYard = function (e) {
    if (e && e.length) {
      var t = e[BattleLogVO.ATTACKER];
      this._attackerTroopcountInKeep = l.int(t[BattleLogVO.KEEP_TROOP_COUNT]);
      this._attackerTroopLostInKeep = l.int(t[BattleLogVO.KEEP_TROOP_LOST]);
      var i = e[BattleLogVO.DEFENDER];
      if (i && i.length > BattleLogVO.KEEP_TROOP_LOST) {
        this._defenderTroopcountInKeep = l.int(i[BattleLogVO.KEEP_TROOP_COUNT]);
        this._defenderTroopLostInKeep = l.int(i[BattleLogVO.KEEP_TROOP_LOST]);
        this._hasDefenderInfos = true;
      }
    }
  };
  BattleLogVO.prototype.parseWaves = function (e, t) {
    this._mediumBattleWaves = [];
    for (var i = 0; i < e.length; i++) {
      var n = new M.MediumBattleWaveVO(e[i]);
      this._mediumBattleWaves.push(n);
    }
    if (t) {
      this._mediumPreCombatWave = new M.MediumBattleWaveVO(t);
      this._mediumPreCombatWave.isPreOrPostWave = true;
      this._mediumSummaryWave = new M.MediumBattleWaveVO(null, [this._mediumPreCombatWave].concat(this._mediumBattleWaves));
    } else {
      this._mediumSummaryWave = new M.MediumBattleWaveVO(null, this._mediumBattleWaves);
    }
  };
  BattleLogVO.prototype.parseReinforcementWave = function (e) {
    this._reinforcementWaveInfo = new P.FlankInfoVO(e);
  };
  BattleLogVO.prototype.hasWonState = function (e) {
    return this._defenderWon && e.front == 1 || !this._defenderWon && e.front == 0;
  };
  BattleLogVO.prototype.isDefender = function (e) {
    return e.front == 1;
  };
  BattleLogVO.prototype.hadHospital = function (e) {
    if (this.isDefender(e)) {
      return this.defenderHadHospital;
    } else {
      return this.attackerHadHospital;
    }
  };
  BattleLogVO.prototype.isHospitalFull = function (e) {
    if (this.isDefender(e)) {
      return this.isDefenderHospitalFull;
    } else {
      return this.isAttackerHospitalFull;
    }
  };
  BattleLogVO.prototype.getOwnBattleInfo = function () {
    var e = 0;
    var t = 0;
    for (e = 0; e < this._playerBattleInfo.length; e++) {
      if (this._playerBattleInfo[e].playerID == y.CastleModel.userData.playerID) {
        return this._playerBattleInfo[e];
      }
    }
    if (this._logType != n.MessageConst.MESSAGE_TYPE_BATTLE_LOG || this.metaData_battleResultSubtype != n.MessageConst.SUBTYPE_DEFENDER_FAILED && this.metaData_battleResultSubtype != n.MessageConst.SUBTYPE_DEFENDER_SUCCESS) {
      if (this._logType != n.MessageConst.MESSAGE_TYPE_BATTLE_LOG || this.metaData_battleResultSubtype != n.MessageConst.SUBTYPE_ATTACKER_SUCCESS && this.metaData_battleResultSubtype != n.MessageConst.SUBTYPE_ATTACKER_FAILED) {
        if (this._logType == n.MessageConst.MESSAGE_TYPE_BATTLE_LOG && this.isForwardedBattleLog) {
          for (e = 0; e < this._playerBattleInfo.length; e++) {
            if (this._playerBattleInfo[e].playerID == y.CastleModel.messageData.getMessageVOById(this._currentMessageID).playerID) {
              return this._playerBattleInfo[e];
            }
          }
          if (y.CastleModel.userData.isInAlliance) {
            for (e = 0; e < this._playerBattleInfo.length; e++) {
              if (this._playerBattleInfo[e].ownerInfoVO.allianceID == y.CastleModel.allianceData.myAllianceVO.allianceId) {
                return this._playerBattleInfo[e];
              }
            }
          }
          return this._playerBattleInfo[0];
        }
      } else {
        for (t = 0; t < this._playerBattleInfo.length; t++) {
          if (this._playerBattleInfo[t].front == 0) {
            return this._playerBattleInfo[t];
          }
        }
      }
    } else {
      for (t = 0; t < this._playerBattleInfo.length; t++) {
        if (this._playerBattleInfo[t].front == 1) {
          return this._playerBattleInfo[t];
        }
      }
    }
    return null;
  };
  BattleLogVO.prototype.getOpponentInfo = function () {
    for (var e = 0; e < this._playerBattleInfo.length; e++) {
      if (this.getOwnBattleInfo() && this._playerBattleInfo[e].playerID != this.getOwnBattleInfo().playerID) {
        return this._playerBattleInfo[e];
      }
    }
    return null;
  };
  Object.defineProperty(BattleLogVO.prototype, "isOutpostSiegeLog", {
    get: function () {
      return this._logType == n.MessageConst.MESSAGE_TYPE_BATTLE_LOG && this.metaData_areaType == a.WorldConst.AREA_TYPE_OUTPOST && this.metaData_AttackType == n.MessageConst.SUBTYPE_ATTACK_CONQUER;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "isSupportLog", {
    get: function () {
      for (var e = 0; e < this._playerBattleInfo.length; e++) {
        if (this._playerBattleInfo[e].playerID == y.CastleModel.userData.playerID) {
          return false;
        }
      }
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "isLandmarkBattleLog", {
    get: function () {
      return this.metaData_areaType == a.WorldConst.AREA_TYPE_KINGS_TOWER || this.metaData_areaType == a.WorldConst.AREA_TYPE_MONUMENT || this.metaData_areaType == a.WorldConst.AREA_TYPE_LABORATORY || this.metaData_areaType == a.WorldConst.AREA_TYPE_VILLAGE || this.metaData_areaType == a.WorldConst.AREA_TYPE_ISLE_RESOURCE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "isFactionBattleLog", {
    get: function () {
      return this._logType == n.MessageConst.MESSAGE_TYPE_BATTLE_LOG && (this.metaData_areaType == a.WorldConst.AREA_TYPE_FACTION_CAPITAL || this.metaData_areaType == a.WorldConst.AREA_TYPE_FACTION_TOWER || this.metaData_areaType == a.WorldConst.AREA_TYPE_FACTION_VILLAGE || this.metaData_areaType == a.WorldConst.AREA_TYPE_FACTION_CAMP) || this._mapobjectVO.kingdomID == o.FactionConst.KINGDOM_ID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "isFactionInvasionBattleLog", {
    get: function () {
      return this._logType == n.MessageConst.MESSAGE_TYPE_BATTLE_LOG && this.metaData_areaType == a.WorldConst.AREA_TYPE_FACTION_INVASION_CAMP && this._mapobjectVO.kingdomID != o.FactionConst.KINGDOM_ID;
    },
    enumerable: true,
    configurable: true
  });
  BattleLogVO.prototype.getOwnUnitSurvivalRatio = function () {
    var e = this.getOwnBattleInfo();
    return ((e.startArmySize <= 0 ? 0 : Math.abs(e.lostUnits) / e.startArmySize) - 1) * -1;
  };
  BattleLogVO.prototype.getOpponentUnitSurvivalRatio = function () {
    var e = this.getOpponentInfo();
    return ((e.startArmySize <= 0 ? 0 : Math.abs(e.lostUnits) / e.startArmySize) - 1) * -1;
  };
  BattleLogVO.prototype.getOwnBattleResultTitle = function () {
    var e = l.int(this.getOwnUnitSurvivalRatio() * 100);
    var t = l.int(this.getOpponentUnitSurvivalRatio() * 100);
    var i = "";
    switch (this.metaData_battleResultSubtype) {
      case n.MessageConst.SUBTYPE_ATTACKER_SUCCESS:
      case n.MessageConst.SUBTYPE_DEFENDER_SUCCESS:
        i = e >= y.CastleModel.xmlPropertyData.getValueById(p.ClientConstXmlProperties.ID_BATTLE_REPORT_LARGE_NORMAL_WIN) ? "dialog_battleLog_victoryHeader_glorious" : e >= y.CastleModel.xmlPropertyData.getValueById(p.ClientConstXmlProperties.ID_BATTLE_REPORT_NORMAL_CLOSE_WIN) ? "dialog_battleLog_victory" : "dialog_battleLog_victoryHeader_close";
        break;
      case n.MessageConst.SUBTYPE_ATTACKER_FAILED:
      case n.MessageConst.SUBTYPE_DEFENDER_FAILED:
        i = t >= y.CastleModel.xmlPropertyData.getValueById(p.ClientConstXmlProperties.ID_BATTLE_REPORT_NORMAL_CLOSE_LOSS) ? "dialog_battleLog_defeat" : "dialog_battleLog_defeatHeader_close";
    }
    return i;
  };
  Object.defineProperty(BattleLogVO.prototype, "isForwardedBattleLog", {
    get: function () {
      var e = y.CastleModel.messageData.getMessageVOById(this._currentMessageID);
      return e && e.forwarded;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "hasDefenderInfos", {
    get: function () {
      return this._hasDefenderInfos;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "detailedBattleWaves", {
    get: function () {
      return this._detailedBattleWaves;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "hasDetailedInfo", {
    get: function () {
      return this._hasDetailedInfo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "hasMiddleInfo", {
    get: function () {
      return this._hasMiddleInfo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "gemVO", {
    get: function () {
      return this._gemVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "equipmentVO", {
    get: function () {
      return this._equipmentVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "minuteSkipVO", {
    get: function () {
      return this._minuteSkipVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "commanderVO", {
    get: function () {
      return this._commanderVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "baronVO", {
    get: function () {
      return this._baronVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "mapobjectVO", {
    get: function () {
      return this._mapobjectVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "metaData_areaType", {
    get: function () {
      return l.int(this._metaData.get(this._currentMessageID)[0]);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "metaData_AttackType", {
    get: function () {
      return l.int(this._metaData.get(this._currentMessageID)[1]);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "metaData_battleResultSubtype", {
    get: function () {
      return l.int(this._metaData.get(this._currentMessageID)[2]);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "metaData_optionalTMapID", {
    get: function () {
      if (this._metaData.get(this._currentMessageID).length > 3) {
        return l.int(this._metaData.get(this._currentMessageID)[3]);
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "metaData_optionalTMapAreaType", {
    get: function () {
      if (this._metaData.get(this._currentMessageID).length > 4) {
        return this._metaData.get(this._currentMessageID)[4];
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "battleTimestamp", {
    get: function () {
      return this._battleTimestamp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "defenderLegendSkillIds", {
    get: function () {
      return this._defenderLegendSkillIds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "attackerLegendSkillIds", {
    get: function () {
      return this._attackerLegendSkillIds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "defenderTriggeredGems", {
    get: function () {
      return this._defenderTriggeredGems;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "attackerTriggeredGems", {
    get: function () {
      return this._attackerTriggeredGems;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "disableJump", {
    get: function () {
      return this._disableJump;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "isAttackerHospitalFull", {
    get: function () {
      return this._isAttackerHospitalFull;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "attackerHadHospital", {
    get: function () {
      return this._attackerHadHospital;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "attackerHomeCastleId", {
    get: function () {
      return this._attackerHomeCastleId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "defenderHomeCastleId", {
    get: function () {
      return this._defenderHomeCastleId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "defenderHadHospital", {
    get: function () {
      return this._defenderHadHospital;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "isDefenderHospitalFull", {
    get: function () {
      return this._isDefenderHospitalFull;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "supporterWoundedUnitCount", {
    get: function () {
      return this._supporterWoundedUnitCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "survivalRate", {
    get: function () {
      return this._survivalRate;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "detailedCourtyardAttacker", {
    get: function () {
      return this._detailedCourtyardAttacker;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "detailedCourtyardDefender", {
    get: function () {
      return this._detailedCourtyardDefender;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "supportToolsAttacker", {
    get: function () {
      return this._supportToolsAttacker;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "supportToolsDefender", {
    get: function () {
      return this._supportToolsDefender;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "attackerTroopcountInKeep", {
    get: function () {
      return this._attackerTroopcountInKeep;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "attackerTroopLostInKeep", {
    get: function () {
      return this._attackerTroopLostInKeep;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "defenderTroopcountInKeep", {
    get: function () {
      return this._defenderTroopcountInKeep;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "defenderTroopLostInKeep", {
    get: function () {
      return this._defenderTroopLostInKeep;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "messageIDs", {
    get: function () {
      return this._messageIDs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "currentMessageID", {
    set: function (e) {
      this._currentMessageID = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "logID", {
    get: function () {
      return this._logID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "logType", {
    get: function () {
      return this._logType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "defenderWon", {
    get: function () {
      return this._defenderWon;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "honor", {
    get: function () {
      return this._honor;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "playerBattleWinnerInfo", {
    get: function () {
      return this._playerBattleWinnerInfo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "attackerBattleInfo", {
    get: function () {
      return this._playerBattleInfo[0];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "defenderBattleInfo", {
    get: function () {
      return this._playerBattleInfo[1];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "playerBattleLoserInfo", {
    get: function () {
      return this._playerBattleLoserInfo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "detailedSummaryWave", {
    get: function () {
      return this._detailedSummaryWave;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "detailedPreCombatWave", {
    get: function () {
      return this._detailedPreCombatWave;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "detailedPostCombatWave", {
    get: function () {
      return this._detailedPostCombatWave;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "mediumSummaryWave", {
    get: function () {
      return this._mediumSummaryWave;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "mediumBattleWaves", {
    get: function () {
      return this._mediumBattleWaves;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "attackerHasOnlyAuxiliaries", {
    get: function () {
      return this._attackerHasOnlyAuxiliaries;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "defenderHasOnlyAuxiliaries", {
    get: function () {
      return this._defenderHasOnlyAuxiliaries;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "ragePoints", {
    get: function () {
      return this._ragePoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "reinforcementWaveInfo", {
    get: function () {
      return this._reinforcementWaveInfo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "reinforcementUnits", {
    get: function () {
      return this._reinforcementUnits;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "reinforcementWaveIndex", {
    get: function () {
      return this.mediumBattleWaves.length;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "lastWaveIndex", {
    get: function () {
      if (this.hasReinforcementWave()) {
        return this.reinforcementWaveIndex;
      } else {
        return this.reinforcementWaveIndex - 1;
      }
    },
    enumerable: true,
    configurable: true
  });
  BattleLogVO.prototype.hasReinforcementWave = function () {
    return this._reinforcementWaveInfo.soldierAmount > 0;
  };
  Object.defineProperty(BattleLogVO.prototype, "defenderAbilities", {
    get: function () {
      return this._defenderAbilities;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "attackerAbilities", {
    get: function () {
      return this._attackerAbilities;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "attackerGotThroughWall", {
    get: function () {
      return this.mediumBattleWaves.some(function (e) {
        return e.gotThroughWall;
      });
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "autoSkipCosts", {
    get: function () {
      return this._autoSkipCosts;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "autoSkipType", {
    get: function () {
      return this._autoSkipType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "advisorType", {
    get: function () {
      return this._advisorType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "advisorMovementCount", {
    get: function () {
      return this._advisorMovementCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BattleLogVO.prototype, "advisorMovementNumber", {
    get: function () {
      return this._advisorMovementNumber;
    },
    enumerable: true,
    configurable: true
  });
  BattleLogVO.ATTACKER = 0;
  BattleLogVO.DEFENDER = 1;
  BattleLogVO.KEEP_TROOP_COUNT = 1;
  BattleLogVO.KEEP_TROOP_LOST = 2;
  return BattleLogVO;
}();
exports.BattleLogVO = V;