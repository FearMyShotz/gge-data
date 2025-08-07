Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./5.js");
var a = require("./5.js");
var s = require("./188.js");
var r = require("./4.js");
var l = require("./498.js");
var c = function () {
  function OwnWorldMapOwnerInfoVO() {}
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "hasPremiumFlag", {
    get: function () {
      return r.CastleModel.userData.hasPremiumFlag;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "playerID", {
    get: function () {
      return r.CastleModel.userData.playerID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "playerName", {
    get: function () {
      return r.CastleModel.userData.userName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "playerLevel", {
    get: function () {
      return r.CastleModel.userData.userLevel;
    },
    set: function (e) {},
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "playerLegendLevel", {
    get: function () {
      return r.CastleModel.userData.userLegendLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "allianceID", {
    get: function () {
      return r.CastleModel.userData.allianceID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "allianceRank", {
    get: function () {
      return r.CastleModel.userData.allianceRank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "allianceName", {
    get: function () {
      return r.CastleModel.userData.allianceName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "crest", {
    get: function () {
      return r.CastleModel.userData.playerCrest;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "honor", {
    get: function () {
      return r.CastleModel.userData.userHonor;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "might", {
    get: function () {
      return r.CastleModel.mightData.userCurrentMight;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "hasVIPFlag", {
    get: function () {
      return r.CastleModel.vipData.vipModeActive && r.CastleModel.settingsData.showVIPFlagToOthers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "isSearchingAlliance", {
    get: function () {
      return r.CastleModel.userData.isSearchingAlliance;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "achievementPoints", {
    get: function () {
      return r.CastleModel.castleAchievementData.achievementPoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "playerPrefix", {
    get: function () {
      return r.CastleModel.titleData.getSelectedTitleByDisplayType(s.ClientConstTitle.DISPLAYTYPE_PREFIX);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "playerSuffix", {
    get: function () {
      return r.CastleModel.titleData.getSelectedTitleByDisplayType(s.ClientConstTitle.DISPLAYTYPE_SUFFIX);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "factionID", {
    get: function () {
      if (OwnWorldMapOwnerInfoVO.factionEventVO) {
        return OwnWorldMapOwnerInfoVO.factionEventVO.ownFaction;
      } else {
        return -1;
      }
    },
    set: function (e) {},
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "isFactionProtected", {
    get: function () {
      return !!OwnWorldMapOwnerInfoVO.factionEventVO && OwnWorldMapOwnerInfoVO.factionEventVO.factionProtectionStatus == d.FactionEventVO.FACTION_PROTECTION_STATUS_ACTIVE && OwnWorldMapOwnerInfoVO.factionEventVO.remainingEventTimeInSeconds > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "remainingFactionProtectionTimeInSeconds", {
    get: function () {
      if (OwnWorldMapOwnerInfoVO.factionEventVO) {
        return OwnWorldMapOwnerInfoVO.factionEventVO.remainingFactionProtectionTimeInSeconds;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO, "factionEventVO", {
    get: function () {
      return r.CastleModel.specialEventData.getActiveEventByEventId(o.EventConst.EVENTTYPE_FACTION);
    },
    enumerable: true,
    configurable: true
  });
  OwnWorldMapOwnerInfoVO.prototype.getMainCastlePositionByKingdomID = function (e) {
    if (r.CastleModel.userData.castleList) {
      var t = r.CastleModel.userData.castleList.getMainCastleByKingdomID(e);
      if (t) {
        return t.absAreaPos;
      }
    }
    return null;
  };
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "isOutpostOwner", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "isInAlliance", {
    get: function () {
      return this.allianceID >= 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "isLegend", {
    get: function () {
      return this.playerLegendLevel > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "remainingPeaceTime", {
    get: function () {
      if (r.CastleModel.userData.peaceModeStatus == u.CastleUserData.PEACEMODE_STATUS_PEACETIME) {
        return r.CastleModel.userData.getRemainingPeaceStatusTime();
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "remainingNoobTime", {
    get: function () {
      return r.CastleModel.userData.getRemainingNoobTime();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "isNoobProtected", {
    get: function () {
      return this.remainingNoobTime > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "isPeaceProtected", {
    get: function () {
      return this.remainingPeaceTime > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "isRuin", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "isDungeonOwner", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "isShareableDungeon", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "isOwnOwnerInfo", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "remainingRelocateDuration", {
    get: function () {
      return r.CastleModel.userData.remainingRelocationDuration;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "allianceCrestVO", {
    get: function () {
      if (r.CastleModel.allianceData.myAllianceVO) {
        return r.CastleModel.allianceData.myAllianceVO.allianceCrestVO;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "splitRunData", {
    get: function () {
      return r.CastleModel.userData.splitRunData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "isDummy", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "hasCapital", {
    get: function () {
      return OwnWorldMapOwnerInfoVO.hasAreaType(a.WorldConst.AREA_TYPE_CAPITAL);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "hasMetropolis", {
    get: function () {
      return OwnWorldMapOwnerInfoVO.hasAreaType(a.WorldConst.AREA_TYPE_METROPOL);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "hasMonument", {
    get: function () {
      return OwnWorldMapOwnerInfoVO.hasAreaType(a.WorldConst.AREA_TYPE_MONUMENT);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "hasLaboratory", {
    get: function () {
      return OwnWorldMapOwnerInfoVO.hasAreaType(a.WorldConst.AREA_TYPE_LABORATORY);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "hasKingstower", {
    get: function () {
      return OwnWorldMapOwnerInfoVO.hasAreaType(a.WorldConst.AREA_TYPE_KINGS_TOWER);
    },
    enumerable: true,
    configurable: true
  });
  OwnWorldMapOwnerInfoVO.hasAreaType = function (e) {
    return r.CastleModel.userData.castleList.getMapVOByAreaType(e) != null;
  };
  OwnWorldMapOwnerInfoVO.prototype.getCastlePosListByKingdomID = function (e) {
    var t;
    var i = [];
    var n = r.CastleModel.userData.getOwnMapObjects(-1, e);
    if (n != null) {
      for (var o = 0, a = n; o < a.length; o++) {
        var s = a[o];
        if (s !== undefined) {
          (t = new l.MinWorldMapCastleInfoVO()).copyFromWorldmapObjectVO(s);
          i.push(t);
        }
      }
    }
    return i;
  };
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "level", {
    get: function () {
      return r.CastleModel.userData.level;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OwnWorldMapOwnerInfoVO.prototype, "viaReferAFriend", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  return OwnWorldMapOwnerInfoVO;
}();
exports.OwnWorldMapOwnerInfoVO = c;
var u = require("./283.js");
var d = require("./202.js");
n.classImplementsInterfaces(c, "IWorldMapOwnerInfoVO");