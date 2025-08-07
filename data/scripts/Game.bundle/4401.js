Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./6.js");
var c = require("./30.js");
var u = require("./4402.js");
var d = require("./79.js");
var p = require("./4403.js");
var h = function (e) {
  function ColossusEventVO() {
    var t = this;
    t._offsetRank = -1;
    t._ownPoints = 0;
    t._conversionRate = 0;
    t._hasHighestRank = false;
    t._lowestRankOnServer = 0;
    t._highestRankInList = l.int(Number.MAX_VALUE);
    t._lowestRankInList = 0;
    t._lastUpdateTimeStamp = 0;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this).initColossusModel();
    return t;
  }
  n.__extends(ColossusEventVO, e);
  ColossusEventVO.prototype.initColossusModel = function () {
    this._ranking = new Map();
  };
  ColossusEventVO.prototype.updateRank = function (e, t, i, n, a) {
    r.HighscoreConst.NUMBER_OF_ENTRIES_SHOWN_FOR_COLOSS;
    if (t < this._highestRankInList) {
      this._highestRankInList = t;
    }
    if (t > this._lowestRankInList) {
      this._lowestRankInList = t;
    }
    if (!o.DictionaryUtil.containsKey(this._ranking, t)) {
      this._ranking.set(t, new p.ColossusRankingItemVO());
    }
    this._ranking.get(t).updateVO(t, i, n, a);
    this._lastUpdateTimeStamp = l.int(c.CachedTimer.getCachedTimer());
  };
  ColossusEventVO.prototype.getRankingEntryByRank = function (e) {
    if (o.DictionaryUtil.containsKey(this._ranking, e)) {
      return this._ranking.get(e);
    } else {
      return null;
    }
  };
  ColossusEventVO.prototype.getRankingEntryByName = function (e) {
    if (this._ranking != null) {
      for (var t = 0, i = Array.from(this._ranking.values()); t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.playerName.toLowerCase() == e.toLowerCase()) {
          return n;
        }
      }
    }
    return null;
  };
  Object.defineProperty(ColossusEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      if (this.isCoinColossusEvent()) {
        return ColossusEventVO.EVENT_COIN_BUILDING_WOD;
      } else if (this.isHorseColossusEvent()) {
        return ColossusEventVO.EVENT_HORSE_BUILDING_WOD;
      } else {
        return ColossusEventVO.EVENT_BUILDING_WOD;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.ASpecialEventVO.prototype, "eventBuildingWOD").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ColossusEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      if (this.isCoinColossusEvent()) {
        return "eventBuilding_coinColossus";
      } else {
        return "eventBuilding_Colossus";
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.ASpecialEventVO.prototype, "eventBuildingNameId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ColossusEventVO.prototype, "offsetRank", {
    get: function () {
      return this._offsetRank;
    },
    set: function (e) {
      this._offsetRank = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ColossusEventVO.prototype, "ownPoints", {
    get: function () {
      return this._ownPoints;
    },
    set: function (e) {
      this._ownPoints = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ColossusEventVO.prototype, "hasHighestRank", {
    get: function () {
      return this._hasHighestRank;
    },
    set: function (e) {
      this._hasHighestRank = e;
    },
    enumerable: true,
    configurable: true
  });
  ColossusEventVO.prototype.openDialog = function (e = true) {
    this.executeOpenDialog(e, g.CastleColossusEventDialog, new u.CastleColossusEventDialogProperties(this));
  };
  Object.defineProperty(ColossusEventVO.prototype, "lowestRankOnServer", {
    get: function () {
      return this._lowestRankOnServer;
    },
    set: function (e) {
      this._lowestRankOnServer = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ColossusEventVO.prototype, "highestRankInList", {
    get: function () {
      return this._highestRankInList;
    },
    set: function (e) {
      this._highestRankInList = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ColossusEventVO.prototype, "lowestRankInList", {
    get: function () {
      return this._lowestRankInList;
    },
    set: function (e) {
      this._lowestRankInList = e;
    },
    enumerable: true,
    configurable: true
  });
  ColossusEventVO.prototype.clearRankingCache = function () {
    this._ranking = new Map();
    this._hasHighestRank = false;
    this._highestRankInList = l.int(Number.MAX_VALUE);
    this._lowestRankInList = 0;
    this._lowestRankOnServer = 0;
  };
  ColossusEventVO.prototype.clearRankingCacheOnTimeout = function () {
    if (!isNaN(this._lastUpdateTimeStamp)) {
      if (l.int(c.CachedTimer.getCachedTimer()) - this._lastUpdateTimeStamp > 15000) {
        this.clearRankingCache();
      }
    }
  };
  ColossusEventVO.prototype.getConversionRateForEvent = function () {
    if (this.isCoinColossusEvent()) {
      return ColossusEventVO.COIN_COLOSSUS_CONVERSION_RATE;
    } else {
      return ColossusEventVO.COLOSSUS_CONVERSION_RATE;
    }
  };
  ColossusEventVO.prototype.isCoinColossusEvent = function () {
    return this.eventId == s.EventConst.EVENTTYPE_COIN_COLOSSUS;
  };
  ColossusEventVO.prototype.isHorseColossusEvent = function () {
    return this.eventId == s.EventConst.EVENTTYPE_HORSE_COLOSSUS;
  };
  ColossusEventVO.__initialize_static_members = function () {
    ColossusEventVO.COLOSSUS_CONVERSION_RATE = 0.01;
    ColossusEventVO.COIN_COLOSSUS_CONVERSION_RATE = 0.01093;
    ColossusEventVO.EVENT_BUILDING_WOD = 276;
    ColossusEventVO.EVENT_COIN_BUILDING_WOD = 57;
    ColossusEventVO.NUM_ENTRIES = 10;
  };
  ColossusEventVO.EVENT_HORSE_BUILDING_WOD = 2898;
  return ColossusEventVO;
}(d.ASpecialEventVO);
exports.ColossusEventVO = h;
var g = require("./4404.js");
a.classImplementsInterfaces(h, "IEventOverviewable");
h.__initialize_static_members();