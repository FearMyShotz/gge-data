Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./6.js");
var r = require("./18.js");
var l = require("./58.js");
var c = require("./28.js");
var u = require("./103.js");
var d = require("./1215.js");
var p = require("./30.js");
var h = require("./4.js");
var g = require("./64.js");
var C = require("./345.js");
var _ = function (e) {
  function InteractiveMapobjectVO() {
    var t = this;
    t._gateLevel = 0;
    t._keepLevel = 0;
    t._towerLevel = 0;
    t._wallLevel = 0;
    t._moatLevel = 0;
    t._equipmentUniqueIdSkin = 0;
    t._attackCooldownEndTimestamp = 0;
    t._sabotageCooldownEndTimestamp = 0;
    t._secondsSinceEspionage = 0;
    t._spyInfoReceivingTime = 0;
    t._openGateTimeOffset = 0;
    t._openAbandonOutpostTimeOffset = 0;
    t._remainingAbandonOutpostTime = 0;
    t._remainingCancelAbandonOutpostTime = 0;
    t._remainingCooldownAbandonOutpostTime = 0;
    t._remainingCooldownAbandonOutpostTimeOffset = 0;
    t._remainingOpenGateTime = 0;
    t._openGateCounter = 0;
    t._outpostType = 0;
    t._occupierID = -1;
    t._bookmark = null;
    t._tempServerChargeRank = 0;
    t._temporarySabotageProtection = false;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this).group = "Mapobject";
    return t;
  }
  n.__extends(InteractiveMapobjectVO, e);
  Object.defineProperty(InteractiveMapobjectVO.prototype, "equipmentUniqueIdSkin", {
    get: function () {
      return this._equipmentUniqueIdSkin;
    },
    set: function (e) {
      this._equipmentUniqueIdSkin = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "moatLevel", {
    get: function () {
      return this._moatLevel;
    },
    set: function (e) {
      this._moatLevel = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "wallLevel", {
    get: function () {
      return this._wallLevel;
    },
    set: function (e) {
      this._wallLevel = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "towerLevel", {
    get: function () {
      return this._towerLevel;
    },
    set: function (e) {
      this._towerLevel = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "keepLevel", {
    get: function () {
      return this._keepLevel;
    },
    set: function (e) {
      this._keepLevel = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "gateLevel", {
    get: function () {
      return this._gateLevel;
    },
    set: function (e) {
      this._gateLevel = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "areaNameString", {
    get: function () {
      return this._areaNameString;
    },
    set: function (e) {
      this._areaNameString = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "areaNameStringShort", {
    get: function () {
      return this.areaNameString;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "isOwnMapobject", {
    get: function () {
      return !!this._ownerInfo && this._ownerInfo.playerID == h.CastleModel.userData.playerID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "ownerInfo", {
    get: function () {
      if (this.isOwnMapobject) {
        return h.CastleModel.otherPlayerData.getOwnInfoVO();
      } else {
        return this._ownerInfo;
      }
    },
    set: function (e) {
      this._ownerInfo = e;
    },
    enumerable: true,
    configurable: true
  });
  InteractiveMapobjectVO.prototype.parseAreaInfo = function (e) {
    this._areaType = e[0];
    this._absAreaPosX = e[1];
    this._absAreaPosY = e[2];
    this._objectId = e[3];
    var t = s.int(e[4]);
    this._ownerInfo = h.CastleModel.otherPlayerData.getOwnerInfoVO(t);
    this._keepLevel = s.int(e[5]);
    this._wallLevel = s.int(e[6]);
    this._gateLevel = s.int(e[7]);
    this._towerLevel = s.int(e[8]);
    this._moatLevel = s.int(e[9]);
    this._areaNameString = e[10];
    var i = s.int(e[11]);
    this._attackCooldownEndTimestamp = p.CachedTimer.getCachedTimer() + i * c.ClientConstTime.SEC_2_MILLISEC;
    var n = s.int(e[12]);
    this._sabotageCooldownEndTimestamp = p.CachedTimer.getCachedTimer() + n * c.ClientConstTime.SEC_2_MILLISEC;
    this._secondsSinceEspionage = s.int(e[13]);
    this._spyInfoReceivingTime = p.CachedTimer.getCachedTimer() * c.ClientConstTime.MILLISEC_2_SEC;
    this.outpostType = s.int(e[14]);
    this._occupierID = s.int(e[15]);
    this._kingdomID = e[16];
    this._equipmentUniqueIdSkin = s.int(e[17]);
    this._temporarySabotageProtection = s.int(e.length > 19 ? e[19] : 0) == 1;
    this._areaKey = d.AreaHelper.getAreaKey(this.kingdomID, this.objectId);
    this.dispatchEvent(u.EventInstanceMapper.getEvent(g.VisualVOEvent, g.VisualVOEvent.VALUEOBJECT_CHANGE));
  };
  InteractiveMapobjectVO.prototype.parseAreaInfoBattleLog = function (e) {
    this._areaType = e.AT;
    this._absAreaPosX = e.X;
    this._absAreaPosY = e.Y;
    this._keepLevel = s.int(e.KL);
    this._wallLevel = s.int(e.WL);
    this._gateLevel = s.int(e.GL);
    this._towerLevel = s.int(e.TL);
    this._moatLevel = s.int(e.ML);
    this._areaNameString = e.N;
    this._kingdomID = e.K;
    this._mapID = e.MID;
    this._equipmentUniqueIdSkin = s.int(e.EID);
    this._spyInfoReceivingTime = this._spyInfoReceivingTime || p.CachedTimer.getCachedTimer() * c.ClientConstTime.MILLISEC_2_SEC;
    this.dispatchEvent(u.EventInstanceMapper.getEvent(g.VisualVOEvent, g.VisualVOEvent.VALUEOBJECT_CHANGE));
  };
  Object.defineProperty(InteractiveMapobjectVO.prototype, "remainingCooldownTimeInSeconds", {
    get: function () {
      return (this._attackCooldownEndTimestamp - p.CachedTimer.getCachedTimer()) * c.ClientConstTime.MILLISEC_2_SEC;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "isCoolingDown", {
    get: function () {
      return this.remainingCooldownTimeInSeconds > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "remainingCooldownSabotageTimeInSeconds", {
    get: function () {
      return (this._sabotageCooldownEndTimestamp - p.CachedTimer.getCachedTimer()) * c.ClientConstTime.MILLISEC_2_SEC;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "remainingOpenGateTime", {
    get: function () {
      return this._remainingOpenGateTime - (p.CachedTimer.getCachedTimer() * c.ClientConstTime.MILLISEC_2_SEC - this._openGateTimeOffset);
    },
    set: function (e) {
      this._remainingOpenGateTime = e;
      this._openGateTimeOffset = p.CachedTimer.getCachedTimer() * c.ClientConstTime.MILLISEC_2_SEC;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "openGateCounter", {
    get: function () {
      return this._openGateCounter;
    },
    set: function (e) {
      this._openGateCounter = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "remainingAbandonOutpostTime", {
    get: function () {
      return this._remainingAbandonOutpostTime - (p.CachedTimer.getCachedTimer() * c.ClientConstTime.MILLISEC_2_SEC - this._openAbandonOutpostTimeOffset);
    },
    set: function (e) {
      this._remainingAbandonOutpostTime = e;
      this._openAbandonOutpostTimeOffset = p.CachedTimer.getCachedTimer() * c.ClientConstTime.MILLISEC_2_SEC;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "remainingCancelAbandonOutpostTime", {
    get: function () {
      return this._remainingCancelAbandonOutpostTime - (p.CachedTimer.getCachedTimer() * c.ClientConstTime.MILLISEC_2_SEC - this._openAbandonOutpostTimeOffset);
    },
    set: function (e) {
      this._remainingCancelAbandonOutpostTime = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "remainingSpyInfoTime", {
    get: function () {
      if (this._secondsSinceEspionage < 0) {
        return 0;
      } else {
        return Math.max(0, -this.secondsSinceEspionage + a.SpyConst.SPY_VALIDITY);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "secondsSinceEspionage", {
    get: function () {
      if (this._secondsSinceEspionage == -1) {
        return -1;
      } else {
        return p.CachedTimer.getCachedTimer() * c.ClientConstTime.MILLISEC_2_SEC - this._spyInfoReceivingTime + this._secondsSinceEspionage;
      }
    },
    set: function (e) {
      this._secondsSinceEspionage = e;
    },
    enumerable: true,
    configurable: true
  });
  InteractiveMapobjectVO.prototype.updateVE = function () {
    this.dispatchEvent(u.EventInstanceMapper.getEvent(g.VisualVOEvent, g.VisualVOEvent.VALUEOBJECT_CHANGE));
  };
  Object.defineProperty(InteractiveMapobjectVO.prototype, "outpostType", {
    get: function () {
      return this._outpostType;
    },
    set: function (e) {
      this._outpostType = e;
    },
    enumerable: true,
    configurable: true
  });
  InteractiveMapobjectVO.prototype.canBeConquered = function () {
    return false;
  };
  InteractiveMapobjectVO.prototype.canBeAttackedAndConquered = function () {
    return false;
  };
  InteractiveMapobjectVO.prototype.canBeSupported = function () {
    return false;
  };
  InteractiveMapobjectVO.prototype.canBeTroupsSended = function () {
    return false;
  };
  Object.defineProperty(InteractiveMapobjectVO.prototype, "isConqueredByMe", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  InteractiveMapobjectVO.prototype.canBeAttacked = function () {
    return false;
  };
  InteractiveMapobjectVO.prototype.canBePlagueAttacked = function () {
    return false;
  };
  InteractiveMapobjectVO.prototype.canBeAttackedButHasPeacemode = function () {
    return false;
  };
  InteractiveMapobjectVO.prototype.canShowPlayerInfo = function () {
    return false;
  };
  Object.defineProperty(InteractiveMapobjectVO.prototype, "canBeTraded", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "canBeVisited", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "canBeSpied", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "canBeSabotaged", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "hasOtherPlayerInfo", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "remainingCooldownAbandonOutpostTime", {
    get: function () {
      return this._remainingCooldownAbandonOutpostTime - (p.CachedTimer.getCachedTimer() * c.ClientConstTime.MILLISEC_2_SEC - this._remainingCooldownAbandonOutpostTimeOffset);
    },
    set: function (e) {
      this._remainingCooldownAbandonOutpostTime = e;
      this._remainingCooldownAbandonOutpostTimeOffset = p.CachedTimer.getCachedTimer() * c.ClientConstTime.MILLISEC_2_SEC;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "isUnderConquerControl", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "baseGateBonus", {
    get: function () {
      if (this.gateLevel == 0) {
        return 0;
      } else {
        return h.CastleModel.wodData.voSubList(m.CastleWodData.TYPE_BUILDING).get(r.ClientConstCastle.GATE_WOD_IDS[this.gateLevel - 1]).gateBonus;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "baseMoatBonus", {
    get: function () {
      if (this.moatLevel) {
        return h.CastleModel.wodData.voSubList(m.CastleWodData.TYPE_BUILDING).get(r.ClientConstCastle.MOAT_WOD_IDS[this.moatLevel - 1]).moatBonus;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "baseWallBonus", {
    get: function () {
      if (this.wallLevel) {
        return h.CastleModel.wodData.voSubList(m.CastleWodData.TYPE_BUILDING).get(r.ClientConstCastle.WALL_WOD_IDS[this.wallLevel - 1]).wallBonus;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "occupierID", {
    get: function () {
      return this._occupierID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "isOccupied", {
    get: function () {
      return this._occupierID > -1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "crestVO", {
    get: function () {
      if (this.ownerInfo) {
        return this.ownerInfo.crest;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "canChangeDefenceOnWorldmap", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "controllerWorldMapOwnerInfoVO", {
    get: function () {
      return this.ownerInfo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "bookmark", {
    get: function () {
      return this._bookmark;
    },
    set: function (e) {
      this._bookmark = e;
    },
    enumerable: true,
    configurable: true
  });
  InteractiveMapobjectVO.prototype.equalsOtherWMO = function (e, t) {
    return this.objectId == e && this.kingdomID == t;
  };
  Object.defineProperty(InteractiveMapobjectVO.prototype, "ignoresPeaceMode", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  InteractiveMapobjectVO.prototype.castAsAreaTypeAndParse = function (e) {
    if (e.length <= 0) {
      this.parseAreaInfo(e);
      return this;
    }
    var t = s.int(e[0]);
    if (this._areaType != t || isNaN(this._areaType)) {
      return require("./147.js").WorldmapObjectFactory.parseWorldMapArea(e);
    } else {
      this.parseAreaInfo(e);
      return this;
    }
  };
  Object.defineProperty(InteractiveMapobjectVO.prototype, "hasNameLabel", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "cooldownCanBeSkipped", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "skipCooldownCostC2", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "totalCooldownTime", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "temporarySabotageProtection", {
    get: function () {
      return this._temporarySabotageProtection;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "attackType", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "minimumOwnerLevel", {
    get: function () {
      if (this.ownerInfo) {
        return this.ownerInfo.playerLevel;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "unitBaseLocation", {
    get: function () {
      return C.UnitBaseLocationEnum.DEFAULT;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "isInSpyLevelRange", {
    get: function () {
      if (!this.ownerInfo || this.ownerInfo.playerID < 0) {
        return true;
      }
      var e = s.int(h.CastleModel.userData.level);
      var t = s.int(this.ownerInfo ? this.ownerInfo.playerLevel : 0);
      var i = s.int(Math.abs(e - t));
      return e >= l.ClientConstLevelRestrictions.MIN_LEVEL_SPY_ALL || i <= l.ClientConstLevelRestrictions.MAX_DELTA_LEVEL_SPY;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "spaceID", {
    get: function () {
      if (this.mapID > 0) {
        return this.mapID;
      } else {
        return this.kingdomID;
      }
    },
    enumerable: true,
    configurable: true
  });
  InteractiveMapobjectVO.prototype.resetVO = function () {
    this._objectId = 0;
    this._ownerInfo = null;
    this._keepLevel = 0;
    this._wallLevel = 0;
    this._gateLevel = 0;
    this._towerLevel = 0;
    this._moatLevel = 0;
    this._areaNameString = "";
    this._attackCooldownEndTimestamp = 0;
    this._sabotageCooldownEndTimestamp = 0;
    this._secondsSinceEspionage = -1;
    this._spyInfoReceivingTime = 0;
    this._outpostType = 0;
    this._occupierID = -1;
    this._equipmentUniqueIdSkin = 0;
  };
  InteractiveMapobjectVO.prototype.getDisplayObjectClipContainer = function (e, t, i = false) {
    throw new Error("Override this method!");
  };
  Object.defineProperty(InteractiveMapobjectVO.prototype, "chargeRank", {
    get: function () {
      return this._tempServerChargeRank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "isNpcCapital", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapobjectVO.prototype, "customConnections", {
    get: function () {
      this._customConnections ||= [];
      return this._customConnections;
    },
    enumerable: true,
    configurable: true
  });
  return InteractiveMapobjectVO;
}(require("./245.js").BasicMapobjectVO);
exports.InteractiveMapobjectVO = _;
var m = require("./56.js");
o.classImplementsInterfaces(_, "IDetailViewAble", "IWorldmapObjectVO");