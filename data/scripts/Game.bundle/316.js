Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./5.js");
var a = require("./3.js");
var s = require("./6.js");
var r = require("./28.js");
var l = require("./53.js");
var c = require("./30.js");
var u = require("./44.js");
var d = require("./119.js");
var p = require("./4.js");
var h = require("./335.js");
var g = require("./1216.js");
var C = require("./308.js");
var _ = require("./498.js");
var m = function () {
  function WorldMapOwnerInfoVO() {
    this._playerID = 0;
    this._playerLevel = 0;
    this._playerLegendLevel = 0;
    this._remainingNoobTime = 0;
    this._noobTimeOffset = 0;
    this._remainingPeaceTime = 0;
    this._peaceTimeOffset = 0;
    this._honor = 0;
    this._might = 0;
    this._isRuin = false;
    this._allianceID = -1;
    this._allianceRank = 0;
    this._allianceName = "";
    this._isSearchingAlliance = false;
    this._isDungeonOwner = false;
    this._isKingstowerOwner = false;
    this._isMonumentOwner = false;
    this._isShareableDungeon = false;
    this._isOutpostOwner = false;
    this._castlePosList = [];
    this._villagePosList = [];
    this._hasPremiumFlag = false;
    this._hasVIPFlag = false;
    this._isDummy = false;
    this._achievementPoints = 0;
    this._relocateDurationEndTimestamp = 0;
    this._factionID = 0;
    this._factionProtectionStatus = 0;
    this._factionProtectionEndTime = 0;
    this._factionTitleID = 0;
    this._topX = 0;
    this._viaReferAFriend = false;
    this._splitRunData = new g.CastleSplitRunData(this);
  }
  WorldMapOwnerInfoVO.createDummy = function (e = 0, t = false) {
    var i = new WorldMapOwnerInfoVO();
    i._playerID = e;
    i._crest = C.CrestVO.createDummyCrest();
    i._playerName = "";
    i._isDummy = true;
    i._isRuin = t;
    return i;
  };
  WorldMapOwnerInfoVO.prototype.fillFromParamObject = function (e, t = -1) {
    this._playerID = parseInt(e.OID);
    this._playerName = e.N;
    this._crest = new C.CrestVO();
    this._crest.loadFromParamObject(e.E);
    this._playerLevel = parseInt(e.L);
    this._playerLegendLevel = parseInt(e.LL);
    this._remainingNoobTime = parseInt(e.RNP);
    this._honor = parseInt(e.H);
    this._might = parseInt(e.MP);
    this._topX = parseInt(e.TOPX);
    this._isRuin = parseInt(e.R) == 1;
    this._allianceID = parseInt(e.AID);
    this._allianceRank = parseInt(e.AR);
    this._allianceName = e.AN ? e.AN : "";
    this._isSearchingAlliance = !!e.SA;
    this._remainingPeaceTime = parseInt(e.RPT);
    this._noobTimeOffset = s.int(this._peaceTimeOffset = s.int(t));
    this._castlePosList = WorldMapOwnerInfoVO.parsePosList(e.AP);
    this._villagePosList = WorldMapOwnerInfoVO.parsePosList(e.VP);
    this._hasPremiumFlag = !!e.PF;
    this._hasVIPFlag = !!e.VF;
    this._isDummy = e.DUM == 1;
    this._achievementPoints = parseInt(e.AVP);
    this._relocateDurationEndTimestamp = Math.max(0, t + parseInt(e.RRD) * r.ClientConstTime.SEC_2_MILLISEC);
    if (e.FN) {
      this._factionID = parseInt(e.FN.FID);
      this._factionProtectionStatus = parseInt(e.FN.PMS);
      this._factionProtectionEndTime = parseInt(e.FN.PMT) * r.ClientConstTime.SEC_2_MILLISEC + t;
      this._factionTitleID = parseInt(e.FN.TID);
    }
    this._allianceCrestVO = new h.AllianceCrestVO();
    if (this.isInAlliance && e.aee && e.aee.ACCA) {
      this._allianceCrestVO.fillWithData(e.aee.ACCA);
    }
    this._playerSuffix = null;
    this._playerPrefix = null;
    if (e.hasOwnProperty("SUF")) {
      this._playerSuffix = p.CastleModel.titleData.getTitleByTitleID(e.SUF);
    }
    if (e.hasOwnProperty("PRE")) {
      this._playerPrefix = p.CastleModel.titleData.getTitleByTitleID(e.PRE);
    }
    this._viaReferAFriend = !!parseInt(e.IRF);
  };
  WorldMapOwnerInfoVO.parsePosList = function (e) {
    var t = [];
    var i = e;
    if (i) {
      var n;
      for (var o = 0; o < i.length; ++o) {
        (n = new _.MinWorldMapCastleInfoVO()).fillFromParamObject(i[o]);
        t.push(n);
      }
    }
    return t;
  };
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "remainingFactionProtectionTimeInSeconds", {
    get: function () {
      return Math.max((this._factionProtectionEndTime - c.CachedTimer.getCachedTimer()) * r.ClientConstTime.MILLISEC_2_SEC, 0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "remainingNoobTime", {
    get: function () {
      return this._remainingNoobTime - (c.CachedTimer.getCachedTimer() / 1000 - this._noobTimeOffset / 1000);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "remainingPeaceTime", {
    get: function () {
      return this._remainingPeaceTime - (c.CachedTimer.getCachedTimer() / 1000 - this._peaceTimeOffset / 1000);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "isNoobProtected", {
    get: function () {
      return this.remainingNoobTime > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "isPeaceProtected", {
    get: function () {
      return this.remainingPeaceTime > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "isFactionProtected", {
    get: function () {
      return this.remainingFactionProtectionTimeInSeconds > 0 && this._factionProtectionStatus == f.FactionEventVO.FACTION_PROTECTION_STATUS_ACTIVE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "allianceID", {
    get: function () {
      return this._allianceID;
    },
    set: function (e) {
      this._allianceID = e;
      if (!this.isInAlliance) {
        this._allianceCrestVO = new h.AllianceCrestVO();
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "allianceRank", {
    get: function () {
      return this._allianceRank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "isRuin", {
    get: function () {
      return this._isRuin;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "honor", {
    get: function () {
      return this._honor;
    },
    set: function (e) {
      this._honor = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "playerLevel", {
    get: function () {
      return this._playerLevel;
    },
    set: function (e) {
      this._playerLevel = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "crest", {
    get: function () {
      return this._crest;
    },
    set: function (e) {
      this._crest = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "playerName", {
    get: function () {
      if (l.ABGHelper.isOnABGServer && d.PlayerHelper.isEmptyMapObjectOwner(this.playerID)) {
        return a.Localize.text(u.SpecialServerHelper.checkTextIDForSkinText("dungeon_playerName"));
      } else {
        return this._playerName || "";
      }
    },
    set: function (e) {
      this._playerName = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "playerID", {
    get: function () {
      return this._playerID;
    },
    set: function (e) {
      this._playerID = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "isInAlliance", {
    get: function () {
      return this._allianceID >= 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "allianceName", {
    get: function () {
      if (this._allianceName) {
        return this._allianceName;
      } else {
        return "";
      }
    },
    set: function (e) {
      this._allianceName = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "castlePosList", {
    get: function () {
      return this._castlePosList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "playerPrefix", {
    get: function () {
      return this._playerPrefix;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "playerSuffix", {
    get: function () {
      return this._playerSuffix;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "hasCapital", {
    get: function () {
      return this.hasAreaType(o.WorldConst.AREA_TYPE_CAPITAL);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "hasMetropolis", {
    get: function () {
      return this.hasAreaType(o.WorldConst.AREA_TYPE_METROPOL);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "hasMonument", {
    get: function () {
      return this.hasAreaType(o.WorldConst.AREA_TYPE_MONUMENT);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "hasLaboratory", {
    get: function () {
      return this.hasAreaType(o.WorldConst.AREA_TYPE_LABORATORY);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "hasKingstower", {
    get: function () {
      return this.hasAreaType(o.WorldConst.AREA_TYPE_KINGS_TOWER);
    },
    enumerable: true,
    configurable: true
  });
  WorldMapOwnerInfoVO.prototype.hasAreaType = function (e) {
    for (var t = 0; t < this.castlePosList.length; ++t) {
      if (this.castlePosList[t].areaType == e) {
        return true;
      }
    }
    return false;
  };
  WorldMapOwnerInfoVO.prototype.getMainCastlePositionByKingdomID = function (e) {
    var t;
    for (var i = this.getCastlePosListByKingdomID(e), n = 0; n < i.length; ++n) {
      if ((t = i[n]).areaType == o.WorldConst.AREA_TYPE_CASTLE || t.areaType == o.WorldConst.AREA_TYPE_KINGDOM_CASTLE) {
        return t.absAreaPos;
      }
    }
    return null;
  };
  WorldMapOwnerInfoVO.prototype.getCastlePosListByKingdomID = function (e) {
    var t = [];
    for (var i = 0; i < this._castlePosList.length; i++) {
      if (s.int(this._castlePosList[i].kingdomId) == e) {
        t.push(this._castlePosList[i]);
      }
    }
    if (this._villagePosList) {
      for (var n = 0; n < this._villagePosList.length; n++) {
        if (s.int(this._villagePosList[n].kingdomId) == e) {
          t.push(this._villagePosList[n]);
        }
      }
    }
    return t;
  };
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "isOwnOwnerInfo", {
    get: function () {
      return this._playerID == p.CastleModel.userData.playerID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "isSearchingAlliance", {
    get: function () {
      return this._isSearchingAlliance;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "hasPremiumFlag", {
    get: function () {
      return this._hasPremiumFlag;
    },
    set: function (e) {
      this._hasPremiumFlag = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "isDummy", {
    get: function () {
      return this._isDummy;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "achievementPoints", {
    get: function () {
      return this._achievementPoints;
    },
    set: function (e) {
      this._achievementPoints = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "remainingRelocateDuration", {
    get: function () {
      return Math.max(0, (this._relocateDurationEndTimestamp - c.CachedTimer.getCachedTimer()) * r.ClientConstTime.MILLISEC_2_SEC);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "factionID", {
    get: function () {
      return this._factionID;
    },
    set: function (e) {
      this._factionID = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "hasVIPFlag", {
    get: function () {
      return this._hasVIPFlag;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "playerLegendLevel", {
    get: function () {
      return this._playerLegendLevel;
    },
    set: function (e) {
      this._playerLegendLevel = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "isLegend", {
    get: function () {
      return this.playerLegendLevel > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "might", {
    get: function () {
      return this._might;
    },
    set: function (e) {
      this._might = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "level", {
    get: function () {
      return this.playerLevel + this.playerLegendLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "allianceCrestVO", {
    get: function () {
      return this._allianceCrestVO;
    },
    set: function (e) {
      this._allianceCrestVO = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "topX", {
    get: function () {
      return this._topX;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "factionTitleID", {
    get: function () {
      return this._factionTitleID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "isOutpostOwner", {
    get: function () {
      return this._isOutpostOwner;
    },
    set: function (e) {
      this._isOutpostOwner = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "isDungeonOwner", {
    get: function () {
      return this._isDungeonOwner;
    },
    set: function (e) {
      this._isDungeonOwner = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "isKingstowerOwner", {
    get: function () {
      return this._isKingstowerOwner;
    },
    set: function (e) {
      this._isKingstowerOwner = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "isMonumentOwner", {
    get: function () {
      return this._isMonumentOwner;
    },
    set: function (e) {
      this._isMonumentOwner = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "isShareableDungeon", {
    get: function () {
      return this._isShareableDungeon;
    },
    set: function (e) {
      this._isShareableDungeon = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "splitRunData", {
    get: function () {
      return this._splitRunData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapOwnerInfoVO.prototype, "viaReferAFriend", {
    get: function () {
      return this._viaReferAFriend;
    },
    enumerable: true,
    configurable: true
  });
  return WorldMapOwnerInfoVO;
}();
exports.WorldMapOwnerInfoVO = m;
var f = require("./202.js");
n.classImplementsInterfaces(m, "IPlayer", "IWorldMapOwnerInfoVO");