Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./6.js");
var r = require("./4.js");
var l = require("./184.js");
var c = function (e) {
  function ASeasonEventVO() {
    var t = this;
    t.hasFrame = true;
    t._mapID = 0;
    t._unlocked = false;
    t._finished = false;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this)._treasureMapLoader = new d.TreasureMapLoader();
    return t;
  }
  n.__extends(ASeasonEventVO, e);
  ASeasonEventVO.prototype.parseEventXmlNode = function (t) {
    e.prototype.parseEventXmlNode.call(this, t);
    this._mapID = parseInt(t.mapID || "");
  };
  ASeasonEventVO.prototype.parseParamObject = function (e) {
    if (e.UL) {
      this._unlocked = Boolean(e.UL.UL);
    }
    if (e.RID) {
      this._rewardList = r.CastleModel.rewardData.getListById(s.int(e.RID));
    }
    this._finished = s.int(e.F) == 1;
  };
  Object.defineProperty(ASeasonEventVO.prototype, "isLocked", {
    get: function () {
      return !this._unlocked;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASeasonEventVO.prototype, "treasureMapVO", {
    get: function () {
      return r.CastleModel.treasureMapData.getTreasureMapByID(this._mapID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASeasonEventVO.prototype, "finished", {
    get: function () {
      return this._finished;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASeasonEventVO.prototype, "requiresAdditionalEventLib", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.BuyPackagesEventVO.prototype, "requiresAdditionalEventLib").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  ASeasonEventVO.prototype.onDestroy = function () {
    e.prototype.onDestroy.call(this);
    r.CastleModel.armyData.removeTreasureMovementsByMapID(this._mapID);
  };
  Object.defineProperty(ASeasonEventVO.prototype, "mapID", {
    get: function () {
      return this._mapID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASeasonEventVO.prototype, "seasonNameString", {
    get: function () {
      return a.Localize.text("event_title_" + this.eventId);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASeasonEventVO.prototype, "rewardList", {
    get: function () {
      return this._rewardList;
    },
    enumerable: true,
    configurable: true
  });
  ASeasonEventVO.prototype.getEventLibName = function () {
    return "Castlewall_SeasonCamp_" + this._eventId;
  };
  ASeasonEventVO.prototype.loadTreasureMapAssets = function (e) {
    if (!u.FlashBlockHelper.checkFlashBlock(this.mapID)) {
      this._treasureMapLoader.loadTreasureMapAssets(e, this.eventId, this.preloadedAssets, this.hasFrame);
    }
  };
  ASeasonEventVO.prototype.treasureMapAssetsLoaded = function () {
    return this._treasureMapLoader.isLoaded();
  };
  Object.defineProperty(ASeasonEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return -1;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.BuyPackagesEventVO.prototype, "eventBuildingWOD").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASeasonEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "event_title_" + this.eventId;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.BuyPackagesEventVO.prototype, "eventBuildingNameId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASeasonEventVO.prototype, "addToOverview", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.BuyPackagesEventVO.prototype, "addToOverview").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  ASeasonEventVO.prototype.hasRewards = function () {
    return false;
  };
  ASeasonEventVO.prototype.getRewards = function (e) {
    if (!this._rewardLists) {
      this._rewardLists = [];
      this._rewardLists.push(this.rewardList);
    }
    return this._rewardLists;
  };
  ASeasonEventVO.prototype.getRank = function (e) {
    return -1;
  };
  ASeasonEventVO.prototype.getScore = function (e) {
    return -1;
  };
  return ASeasonEventVO;
}(l.BuyPackagesEventVO);
exports.ASeasonEventVO = c;
o.classImplementsInterfaces(c, "IEventOverviewable", "IDiscountableEventPackagesVO", "IEventPackagesVO");
var u = require("./160.js");
var d = require("./4523.js");