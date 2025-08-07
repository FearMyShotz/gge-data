Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./2.js");
var a = require("./5.js");
var s = require("./6.js");
var r = require("./28.js");
var l = require("./296.js");
var c = require("./21.js");
var u = require("./119.js");
var d = require("./1221.js");
var p = require("./53.js");
var h = require("./30.js");
var g = require("./15.js");
var C = require("./1222.js");
var _ = require("./4.js");
var m = require("./111.js");
var f = require("./2129.js");
var O = require("./52.js");
var E = require("./142.js");
var y = require("./35.js");
var b = require("./2130.js");
var D = require("./335.js");
var I = require("./2131.js");
var T = function () {
  function AllianceInfoVO() {
    this._mightPoints = 0;
    this._allianceId = 0;
    this._externalMemberLevel = 0;
    this._allianceStatusToOwnAlliance = 0;
    this._allianceFamePoints = 0;
    this._allianceFamePointsHighestReached = 0;
    this._canInvitedForHardPact = false;
    this._canInvitedForSoftPact = false;
    this._isSearchingMembers = false;
    this._isAcceptingMembers = false;
    this._isInPeaceNegociations = false;
    this._autoWarOn = false;
    this._aquaPoints = NaN;
    this._applicationAmount = 12;
    this.isAbleToForge = false;
    this.isInventoryFull = false;
    this._freeRenames = 0;
    this._isKingAlliance = false;
    this._allianceMightPointsHighestReached = 0;
    this.allianceForgeRelicUsagesSoft = 0;
    this.allianceForgeRelicUsagesHard = 0;
    this._allianceLanguage = "";
    this._crestLayoutEndTimeStamps = new Map();
    this._landmarksList = new F.AllianceLandmarksList();
    this._allianceCrestVO = new D.AllianceCrestVO();
  }
  AllianceInfoVO.prototype.fillFromParamObject = function (e) {
    this._allianceId = parseInt(e.AID);
    this._allianceName = e.N;
    this._allianceDescription = n.TextValide.parseChatJSONMessage(e.D);
    this.parseMemberList(e.M);
    this._externalMemberLevel = parseInt(e.ML);
    this._allianceStatusToOwnAlliance = parseInt(e.DOA);
    this._mightPoints = parseInt(e.MP);
    this._isSearchingMembers = e.IS;
    this._isAcceptingMembers = !!e.IA;
    this._allianceMightPointsHighestReached = parseInt(e.HAMP);
    this._allianceFamePointsHighestReached = parseInt(e.HF);
    if (e.AA != null) {
      this._applicationAmount = parseInt(e.AA);
    }
    if (e.AW != null) {
      this._autoWarOn = e.AW == 1;
    }
    this._anouncement = n.TextValide.parseChatJSONMessage(e.A);
    if (this._anouncement == "") {
      this._anouncement = " ";
    }
    if (e.AP != null) {
      this._aquaPoints = e.AP;
    }
    this.parseStorageFromServer(e.STO);
    this.parseAMI(e.AMI);
    this._landmarksList.parseCompleteLandmarksList(e);
    this.parseStatusList(e.ADL);
    this.parseBuffList(e.ABL);
    this._allianceFamePoints = s.int(e.CF);
    this._freeRenames = s.int(e.FR);
    this._canInvitedForHardPact = e.HP == 1;
    this._canInvitedForSoftPact = e.SP == 1;
    if (e.MF != null && e.IF != null) {
      this.isAbleToForge = e.MF == 1;
      this.isInventoryFull = e.IF == 1;
      this.allianceForgeRelicUsagesSoft = s.int(e.SRFU);
      this.allianceForgeRelicUsagesHard = s.int(e.HRFU);
      _.CastleModel.allianceData.dispatchEvent(new u.CastleEquipmentEvent(u.CastleEquipmentEvent.FORGE_DATA_RECEIVED));
    }
    if (e.PO != null) {
      this._isInPeaceNegociations = true;
      var t = e.PO.T < 0;
      var i = s.int(t ? e.PO.T * -1 : e.PO.T);
      this._peaceOfferVO = new C.PeaceOfferVO(this.allianceId, this.allianceName, i, t, e.PO.TS);
      _.CastleModel.timerData.addEventListener(c.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onPeaceOfferCastleTimer));
    } else {
      this._isInPeaceNegociations = false;
    }
    this._isKingAlliance = e.KA == 1;
    this._allianceLanguage = e.ALL;
    if (e.ACLS) {
      this._crestLayoutEndTimeStamps.clear();
      for (var o = 0, a = e.ACLS; o < a.length; o++) {
        var l = a[o];
        var d = l.ACLI;
        var p = h.CachedTimer.getCachedTimer() + l.ACLET * r.ClientConstTime.SEC_2_MILLISEC;
        this._crestLayoutEndTimeStamps.set(d, {
          endTime: p,
          active: l.ACIA == 1,
          colors: l.ACLCS
        });
      }
    }
  };
  AllianceInfoVO.prototype.parseStorageFromServer = function (e) {
    var t;
    if (e && (this._storage = v.CollectableManager.parser.createGoodsList(new w.CollectableItemWoodVO(e.W), new x.CollectableItemStoneVO(e.S), new S.CollectableItemC1VO(e.C1), new A.CollectableItemC2VO(e.C2), new R.CollectableItemIronVO(e.I), new V.CollectableItemOilVO(e.O), new M.CollectableItemGlassVO(e.G), new P.CollectableItemCoalVO(e.C), new L.CollectableItemGenericCurrencyVO(O.ClientConstCurrency.ID_FURY_DOUBLOON, e.FD), new L.CollectableItemGenericCurrencyVO(O.ClientConstCurrency.ID_TIME_DOUBLOON, e.TD), new L.CollectableItemGenericCurrencyVO(O.ClientConstCurrency.ID_SPIRIT_DOUBLOON, e.SD), new L.CollectableItemGenericCurrencyVO(O.ClientConstCurrency.ID_VIGOR_DOUBLOON, e.VD), new L.CollectableItemGenericCurrencyVO(O.ClientConstCurrency.ID_BASTION_DOUBLOON, e.BD), new L.CollectableItemGenericCurrencyVO(O.ClientConstCurrency.ID_RAMPART_DOUBLOON, e.RD)), p.ABGHelper.isOnABGServer)) {
      if (p.ABGHelper.abgEvent) {
        (t = new L.CollectableItemGenericCurrencyVO(p.ABGHelper.abgEvent.settingVO.allianceCurrencyID)).amount = e[t.xmlCurrencyVO.jsonKey] || 0;
        this._storage.addItem(t);
        if (p.ABGHelper.abgEvent.settingVO.malusCurrencyID > 0) {
          var i = new L.CollectableItemGenericCurrencyVO(p.ABGHelper.abgEvent.settingVO.malusCurrencyID);
          i.amount = e[i.xmlCurrencyVO.jsonKey] || 0;
          this._storage.addItem(i);
        }
      } else if (e.AIN) {
        (t = new L.CollectableItemGenericCurrencyVO(O.ClientConstCurrency.ID_ALLIANCE_INFLUENCE)).amount = e[t.xmlCurrencyVO.jsonKey] || 0;
        this._storage.addItem(t);
      }
    }
  };
  AllianceInfoVO.prototype.parseAMI = function (e) {
    this._additionalMemberInfos = new Map();
    if (e) {
      for (var t = 0; t < e.length; t++) {
        var i = new b.AdditionalMemberInfoVO();
        i.parseAMI(e[t]);
        this._additionalMemberInfos.set(i.playerId, i);
      }
    }
  };
  AllianceInfoVO.prototype.parseAFA = function (e) {
    this._allianceFamePoints = s.int(e.CF);
    this._allianceFamePointsHighestReached = s.int(e.HF);
    g.CastleBasicController.getInstance().dispatchEvent(new d.CastleFameDataEvent(d.CastleFameDataEvent.UPDATE_DATA_ALLY_FAME));
  };
  AllianceInfoVO.prototype.updateAllyFame = function (e, t) {
    this._allianceFamePoints = s.int(e);
    this._allianceFamePointsHighestReached = s.int(t);
  };
  AllianceInfoVO.prototype.parseABL = function (e) {
    if (e) {
      this.parseBuffList(e.ABL ? e.ABL : e);
    }
  };
  AllianceInfoVO.prototype.parseBuffList = function (e) {
    this._allianceBuffs = new Map();
    if (e) {
      for (var t = 0; t < e.length; t++) {
        var i = e[t].BT;
        var n = e[t].CD;
        var o = e[t].L;
        var a = -1;
        if (n != -1) {
          a = s.int(h.CachedTimer.getCachedTimer() / 1000 + n);
        }
        this._allianceBuffs.set(i, new f.BuffVO(o, a));
      }
    }
  };
  AllianceInfoVO.prototype.hasBoughtBuff = function (e) {
    return this._allianceBuffs.get(e).level > 0;
  };
  AllianceInfoVO.prototype.parseActionList = function (e) {
    this._actionList = [];
    for (var t = 0; t < e.length; t++) {
      var i = new B.AllianceActionListItemVO();
      i.parseActionListItem(e[t]);
      this._actionList.push(i);
    }
    this._actionList.reverse();
  };
  AllianceInfoVO.prototype.parseMemberList = function (e) {
    this._memberList = [];
    var t = h.CachedTimer.getCachedTimer();
    for (var i = 0; i < e.length; i++) {
      this._memberList.push(_.CastleModel.otherPlayerData.parseOwnerInfo(e[i], t));
    }
    this._memberList.sort(this.bindFunction(this.sortOnRank));
  };
  AllianceInfoVO.prototype.parseStatusList = function (e) {
    this._otherAllianceStatusList = [];
    if (e) {
      for (var t = 0; t < e.length; t++) {
        var i = s.int(e[t].AID);
        var n = e[t].AN;
        var o = s.int(e[t].AS);
        var a = s.int(e[t].AC);
        this._otherAllianceStatusList.push(new I.OtherAllianceStatusListItemVO(i, n, o, a));
      }
    }
  };
  AllianceInfoVO.prototype.sortOnRank = function (e, t) {
    if (e.allianceRank > t.allianceRank) {
      return 1;
    } else if (e.allianceRank < t.allianceRank) {
      return -1;
    } else {
      return 0;
    }
  };
  AllianceInfoVO.prototype.getAdditionalMemberInfos = function (e) {
    return this._additionalMemberInfos.get(e);
  };
  AllianceInfoVO.prototype.getOnlineUserList = function () {
    var e;
    var t = [];
    if (this._memberList != null) {
      for (var i = 0, n = this._memberList; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && (e = this.getAdditionalMemberInfos(o.playerID)) && e.loginActivity == a.AllianceConst.ONLINESTATE_ONLINE) {
          t.push(o);
        }
      }
    }
    t.sort(this.bindFunction(this.sortOnRank));
    return t;
  };
  Object.defineProperty(AllianceInfoVO.prototype, "allianceLeader", {
    get: function () {
      if (this._memberList != null) {
        for (var e = 0, t = this._memberList; e < t.length; e++) {
          var i = t[e];
          if (i !== undefined && i.allianceRank == 0) {
            return i;
          }
        }
      }
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "allianceHonor", {
    get: function () {
      var e = 0;
      for (var t = 0; t < this._memberList.length; t++) {
        e += s.int(this._memberList[t].honor);
      }
      return e / this._memberList.length;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "allianceId", {
    get: function () {
      return this._allianceId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "allianceName", {
    get: function () {
      return this._allianceName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "allianceNameWithFameLevel", {
    get: function () {
      if (this._allianceName.length > 0) {
        return this._allianceName + " {" + this.allianceFameLevel + "}";
      } else {
        return this._allianceName;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "anouncement", {
    get: function () {
      return this._anouncement;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "memberAmount", {
    get: function () {
      return this._memberList.length;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "memberMax", {
    get: function () {
      if (p.ABGHelper.isOnABGServer) {
        return p.ABGHelper.abgEvent.settingVO.maxAllianceSize;
      } else {
        return _.CastleModel.allianceBuffData.getAllianceBuffVoBySeriesIDAndLevel(a.AllianceConst.TYPE_MEMBERS, this.memberLevel).getBonusVOByEffectType(y.EffectTypeEnum.EFFECT_TYPE_MEMBER).strength;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "memberList", {
    get: function () {
      return this._memberList;
    },
    enumerable: true,
    configurable: true
  });
  AllianceInfoVO.prototype.getBoostLevel = function (e) {
    return s.int(this._allianceBuffs.get(e).level);
  };
  AllianceInfoVO.prototype.getBoostDuration = function (e, t) {
    return s.int(_.CastleModel.allianceBuffData.getBuffDuration(e, t));
  };
  AllianceInfoVO.prototype.getRemainingBoostDuration = function (e) {
    return s.int(this._allianceBuffs.get(e).remainingDuration);
  };
  AllianceInfoVO.prototype.getBoostMaxLevel = function (e) {
    return s.int(_.CastleModel.allianceBuffData.maxLevelOfBuff(e));
  };
  AllianceInfoVO.prototype.isBoostUpgradeable = function (e) {
    return !!_.CastleModel.allianceBuffData && !!this._allianceBuffs && _.CastleModel.allianceBuffData.isUpgradeAble(e, this._allianceBuffs.get(e).level);
  };
  AllianceInfoVO.prototype.canTemporaryBoostBeActivated = function (e) {
    var t = s.int(_.CastleModel.allianceBuffData.getRequiredBuffID(e, this._allianceBuffs.get(e).level + 1));
    if (t == -1) {
      return true;
    }
    var i = s.int(_.CastleModel.allianceBuffData.getBuffLevelByBuffID(t));
    var n = s.int(_.CastleModel.allianceBuffData.getBuffSeriesIDByBuffID(t));
    return this._allianceBuffs.get(n).level >= i;
  };
  AllianceInfoVO.prototype.isBoosterTemporary = function (e) {
    return _.CastleModel.allianceBuffData.isTemporaryBuff(e, this._allianceBuffs.get(e).level + 1);
  };
  AllianceInfoVO.prototype.isTemporaryBoosterActive = function (e) {
    return !!this._allianceBuffs.get(e).isTemporary && this._allianceBuffs.get(e).remainingDuration > 0;
  };
  AllianceInfoVO.prototype.onPeaceOfferCastleTimer = function (e) {
    if (this.peaceOfferVO) {
      this.peaceOfferVO.remainingTimeInSeconds--;
      if (this.peaceOfferVO.remainingTimeInSeconds <= 0) {
        _.CastleModel.timerData.removeEventListener(c.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onPeaceOfferCastleTimer));
        _.CastleModel.smartfoxClient.sendCommandVO(new l.C2SGetAllianceInfoVO(this._allianceId));
      }
    }
  };
  AllianceInfoVO.prototype.getUpgradeCosts = function (e) {
    if (this.isBoostUpgradeable(e)) {
      return _.CastleModel.allianceBuffData.getCosts(e, this._allianceBuffs.get(e).level + 1);
    } else if (this.isBoosterTemporary) {
      return _.CastleModel.allianceBuffData.getCosts(e, this._allianceBuffs.get(e).level);
    } else {
      return null;
    }
  };
  Object.defineProperty(AllianceInfoVO.prototype, "additionalMemberForNextLevel", {
    get: function () {
      return _.CastleModel.allianceBuffData.getAllianceBuffVoBySeriesIDAndLevel(a.AllianceConst.TYPE_MEMBERS, this.memberLevel + 1).getBonusVOByEffectType(y.EffectTypeEnum.EFFECT_TYPE_MEMBER).strength - this.memberMax;
    },
    enumerable: true,
    configurable: true
  });
  AllianceInfoVO.prototype.getCurrentBoostValue = function (e, t) {
    return this.getBoostValue(e, this._allianceBuffs.get(e).level, t);
  };
  AllianceInfoVO.prototype.getUpgradeBoostValue = function (e, t) {
    if (this.isBoostUpgradeable(e)) {
      return s.int(this.getBoostValue(e, this._allianceBuffs.get(e).level + 1, t));
    } else {
      return s.int(this.getBoostValue(e, this._allianceBuffs.get(e).level, t));
    }
  };
  AllianceInfoVO.prototype.getBoostValue = function (e, t, i) {
    var n = 0;
    var o = _.CastleModel.allianceBuffData.getAllianceBuffVoBySeriesIDAndLevel(e, t);
    if (o) {
      var a = o.getBonusVOByEffectType(i);
      if (a) {
        n = s.int(a.strength);
      }
    }
    return n;
  };
  Object.defineProperty(AllianceInfoVO.prototype, "allianceDescription", {
    get: function () {
      return this._allianceDescription;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "actionList", {
    get: function () {
      return this._actionList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "statusList", {
    get: function () {
      return this._otherAllianceStatusList;
    },
    enumerable: true,
    configurable: true
  });
  AllianceInfoVO.prototype.getStatusListByStatus = function (e) {
    var t = [];
    if (this._otherAllianceStatusList != null) {
      for (var i = 0, n = this._otherAllianceStatusList; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o.allianceStatus == e) {
          t.push(o);
        }
      }
    }
    return t;
  };
  AllianceInfoVO.prototype.getStatusByAlliance = function (e) {
    if (this._otherAllianceStatusList != null) {
      for (var t = 0, i = this._otherAllianceStatusList; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.allianceID == e && n.allianceStatusConfirmed == a.AllianceConst.DIPLOMACY_CONFIRMED) {
          return n.allianceStatus;
        }
      }
    }
    return s.int(a.AllianceConst.DIPLOMACY_NEUTRAL);
  };
  AllianceInfoVO.prototype.getTestlist = function (e) {
    var t = [];
    for (var i = 0; i < 20; i++) {
      t.push(new I.OtherAllianceStatusListItemVO(i, "Alli " + i, e, o.Random.boolean() ? a.AllianceConst.DIPLOMACY_REQUEST : a.AllianceConst.DIPLOMACY_CONFIRMED));
    }
    return t;
  };
  Object.defineProperty(AllianceInfoVO.prototype, "allianceStatusToOwnAlliance", {
    get: function () {
      return this._allianceStatusToOwnAlliance;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "allianceRequestAvailable", {
    get: function () {
      if (this._otherAllianceStatusList != null) {
        for (var e = 0, t = this._otherAllianceStatusList; e < t.length; e++) {
          var i = t[e];
          if (i !== undefined && i.allianceStatusConfirmed == a.AllianceConst.DIPLOMACY_REQUEST) {
            return true;
          }
        }
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "allianceFamePoints", {
    get: function () {
      return Math.min(this._allianceFamePoints, a.AllianceConst.FAME_CAP);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "allianceFameLevel", {
    get: function () {
      return _.CastleModel.allianceFameData.getLevelFromFamePoints(this.allianceFamePoints);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "highestReachedFameLevel", {
    get: function () {
      return _.CastleModel.allianceFameData.getLevelFromFamePoints(this.allianceFamePointsHighestReached);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "allianceFamePointsNeedForNextLevel", {
    get: function () {
      return _.CastleModel.allianceFameData.getFamePointsForLevel(this.allianceFameLevel + 1);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "allianceFamePointsNeedForThisLevel", {
    get: function () {
      return _.CastleModel.allianceFameData.getFamePointsForLevel(this.allianceFameLevel);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "allianceFamePercentActFameLevel", {
    get: function () {
      return (this.allianceFamePoints - this.allianceFamePointsNeedForThisLevel) / (this.allianceFamePointsNeedForNextLevel - this.allianceFamePointsNeedForThisLevel);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "allianceFamePointsHighestReached", {
    get: function () {
      return this._allianceFamePointsHighestReached;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "allianceNextFameLevelVO", {
    get: function () {
      return _.CastleModel.allianceFameData.getFameVOByLevel(this.allianceFameLevel + 1);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "allianceCurrentFameLevelVO", {
    get: function () {
      return _.CastleModel.allianceFameData.getFameVOByLevel(this.allianceFameLevel);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "canInvitedForHardPact", {
    get: function () {
      return this._canInvitedForHardPact;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "canInvitedForSoftPact", {
    get: function () {
      return this._canInvitedForSoftPact;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "isSearchingMembers", {
    get: function () {
      return this._isSearchingMembers;
    },
    set: function (e) {
      this._isSearchingMembers = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "isAcceptingMembers", {
    get: function () {
      return this._isAcceptingMembers;
    },
    set: function (e) {
      this._isAcceptingMembers = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "applicationAmount", {
    get: function () {
      return this._applicationAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "hasFameLevelCapReached", {
    get: function () {
      return this.allianceFameLevel >= _.CastleModel.allianceFameData.getLevelFromFamePoints(a.AllianceConst.FAME_CAP);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "landmarksList", {
    get: function () {
      return this._landmarksList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "freeRenames", {
    get: function () {
      return this._freeRenames;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "aquaPoints", {
    get: function () {
      return this._aquaPoints;
    },
    set: function (e) {
      this._aquaPoints = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "isInPeaceNegociations", {
    get: function () {
      return this._isInPeaceNegociations;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "peaceOfferVO", {
    get: function () {
      return this._peaceOfferVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "storage", {
    get: function () {
      return this._storage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "autoWarOn", {
    get: function () {
      return this._autoWarOn;
    },
    set: function (e) {
      this._autoWarOn = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "mightPoints", {
    get: function () {
      return this._mightPoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "allianceMightPointsHighestReached", {
    get: function () {
      return this._allianceMightPointsHighestReached;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "allianceCrestVO", {
    get: function () {
      return this._allianceCrestVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "memberLevel", {
    get: function () {
      if (this._allianceBuffs.get(a.AllianceConst.TYPE_MEMBERS) !== undefined) {
        return this._allianceBuffs.get(a.AllianceConst.TYPE_MEMBERS).level;
      } else {
        return this._externalMemberLevel;
      }
    },
    enumerable: true,
    configurable: true
  });
  AllianceInfoVO.prototype.getTotalAllianceBuffEffectValue = function (e, t = -1, i = -1, n = -1, o = null) {
    var a = m.CastleEffectsHelper.getTotalEffectValue(this.getTotalAllianceBuffEffectsByType(e, new E.CastleEffectConditionVO(t, i, n, o)), true);
    return a || new e.valueClass();
  };
  AllianceInfoVO.prototype.getTotalAllianceBuffEffectsByType = function (e, t = null) {
    t = t || E.CastleEffectConditionVO.NULL_CONDITION;
    var i = [];
    if (this._allianceBuffs != null) {
      for (var n = 0, o = Array.from(this._allianceBuffs.keys()); n < o.length; n++) {
        var a = o[n];
        if (a !== undefined) {
          var s = this._allianceBuffs.get(a);
          var r = _.CastleModel.allianceBuffData.getAllianceBuffVoBySeriesIDAndLevel(a, s.level);
          if (r) {
            i = i.concat(r.getBonusVOsByType(e, t));
          }
        }
      }
    }
    return i;
  };
  Object.defineProperty(AllianceInfoVO.prototype, "allianceLanguage", {
    get: function () {
      return this._allianceLanguage;
    },
    set: function (e) {
      this._allianceLanguage = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "currentIslandRank", {
    get: function () {
      return this._currentIslandRank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "isIslandKing", {
    get: function () {
      return this._isIslandKing;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceInfoVO.prototype, "allianceEnteredIslands", {
    get: function () {
      return this._allianceEnteredIslands;
    },
    enumerable: true,
    configurable: true
  });
  AllianceInfoVO.prototype.parse_SII = function (e) {
    this._currentIslandRank = e.AR;
    this._isIslandKing = e.KA == 1;
    this._allianceEnteredIslands = e.AE == 1;
  };
  AllianceInfoVO.prototype.getEndTimeStampForLayout = function (e) {
    if (this._crestLayoutEndTimeStamps.get(e)) {
      return this._crestLayoutEndTimeStamps.get(e).endTime;
    } else {
      return -1;
    }
  };
  AllianceInfoVO.prototype.getRemainingSecondsForLayout = function (e) {
    var t = this.getEndTimeStampForLayout(e);
    if (t > 0) {
      return (t - h.CachedTimer.getCachedTimer()) * r.ClientConstTime.MILLISEC_2_SEC;
    } else {
      return -1;
    }
  };
  AllianceInfoVO.prototype.isLayoutActive = function (e) {
    return !!this._crestLayoutEndTimeStamps.has(e) && this._crestLayoutEndTimeStamps.get(e).active;
  };
  Object.defineProperty(AllianceInfoVO.prototype, "fallbackCrestVO", {
    get: function () {
      return this._fallbackCrestVO;
    },
    enumerable: true,
    configurable: true
  });
  AllianceInfoVO.prototype.parseFallbackCrest = function (e) {
    this._fallbackCrestVO = null;
    if (e && e.ACLI && e.ACCS) {
      this._fallbackCrestVO = new D.AllianceCrestVO();
      this._fallbackCrestVO.fillWithData(e);
    }
  };
  AllianceInfoVO.prototype.getEffectStrengthByType = function (e, t = -1, i = -1, n = -1, o = null) {
    var a = this.getTotalAllianceBuffEffectValue(e, t, i, n, o);
    if (a) {
      return a.strength;
    } else {
      return 0;
    }
  };
  AllianceInfoVO.prototype.getLayoutEffectStrengthByType = function (e, t = -1, i = -1, n = -1, o = null) {
    var a = this.getLayoutEffectsByType(e, new E.CastleEffectConditionVO(t, i, n, o));
    var s = a && a.length > 0 ? a[0] : null;
    if (s) {
      return s.strength;
    } else {
      return 0;
    }
  };
  AllianceInfoVO.prototype.getLayoutEffectsByType = function (e, t = null) {
    if (!this._allianceCrestVO || !this._allianceCrestVO.layoutVO) {
      return [];
    }
    t = t || E.CastleEffectConditionVO.NULL_CONDITION;
    var i = this._allianceCrestVO.layoutVO.effects;
    if (i && i.length != 0) {
      return i = i.filter(function (i) {
        return i.matchesConditions(e, t.areaType, t.spaceId, t.wodId, t.otherPlayer);
      });
    } else {
      return [];
    }
  };
  AllianceInfoVO.prototype.numberOfActiveTemporaryLayouts = function () {
    var e = 0;
    for (var t = 0, i = Array.from(this._crestLayoutEndTimeStamps.keys()); t < i.length; t++) {
      var n = i[t];
      if (this.getRemainingSecondsForLayout(n) > 0) {
        e++;
      }
    }
    return e;
  };
  AllianceInfoVO.DIPLOMACY_IN_WAR = 0;
  AllianceInfoVO.DIPLOMACY_NEUTRAL = 1;
  AllianceInfoVO.DIPLOMACY_SOFT_ALLIED = 2;
  AllianceInfoVO.DIPLOMACY_REAL_ALLIED = 3;
  return AllianceInfoVO;
}();
exports.AllianceInfoVO = T;
var v = require("./50.js");
var S = require("./234.js");
var A = require("./128.js");
var L = require("./155.js");
var P = require("./504.js");
var M = require("./505.js");
var R = require("./506.js");
var V = require("./507.js");
var x = require("./268.js");
var w = require("./269.js");
var B = require("./2132.js");
var F = require("./1223.js");