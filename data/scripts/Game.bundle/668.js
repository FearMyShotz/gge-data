Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./28.js");
var r = require("./265.js");
var l = require("./30.js");
var c = require("./15.js");
var u = require("./4.js");
var d = require("./327.js");
var p = createjs.Point;
var h = function (e) {
  function AGachaEventVO() {
    var t = e !== null && e.apply(this, arguments) || this;
    t._freeChestResetTime = 0;
    t._currentMultiPull = 1;
    return t;
  }
  n.__extends(AGachaEventVO, e);
  AGachaEventVO.prototype.parseEventXmlNode = function (t) {
    e.prototype.parseEventXmlNode.call(this, t);
  };
  AGachaEventVO.prototype.parseParamObject = function (t) {
    e.prototype.parseParamObject.call(this, t);
    this.parseGachaEvent(t);
  };
  AGachaEventVO.prototype.parseGachaEvent = function (e) {
    if (e.FCRT) {
      this._freeChestResetTime = l.CachedTimer.getCachedTimer() + e.FCRT * s.ClientConstTime.SEC_2_MILLISEC;
    }
    if (e.OP) {
      this._ownPoints = a.int(e.OP);
    }
    if (e.OR) {
      this._ownRank = a.int(e.OR);
    }
    c.CastleBasicController.getInstance().dispatchEvent(new r.GachaEvent(r.GachaEvent.UPDATED, this));
  };
  AGachaEventVO.prototype.setRankAndPoints = function (t, i, n) {
    e.prototype.setRankAndPoints.call(this, t, i, n);
    c.CastleBasicController.getInstance().dispatchEvent(new r.GachaEvent(r.GachaEvent.UPDATED, this));
  };
  AGachaEventVO.prototype.getGachaVOs = function () {
    return u.CastleModel.gachaData.getGachaVOs(this.eventId, this.rewardSetId, this.leagueID);
  };
  AGachaEventVO.prototype.getGachaVOByLevel = function (e) {
    return u.CastleModel.gachaData.getGachaVOByLevel(this.eventId, this.rewardSetId, this.leagueID, e);
  };
  AGachaEventVO.prototype.getCurrentGachaVO = function () {
    return u.CastleModel.gachaData.getCurrentGachaVO(this.eventId, this.rewardSetId, this.leagueID, this.ownPoints);
  };
  AGachaEventVO.prototype.getCurrentLevel = function () {
    return this.getCurrentGachaVO().gachaLevel;
  };
  AGachaEventVO.prototype.getCurrentLevelProgress = function (e = 0) {
    return this._ownPoints + e - this.getCurrentGachaVO().minPulls;
  };
  AGachaEventVO.prototype.getCurrentLevelMaxPulls = function () {
    return this.getCurrentGachaVO().maxPulls - this.getCurrentGachaVO().minPulls + 1;
  };
  AGachaEventVO.prototype.getIsMaxLevel = function () {
    return this.getCurrentGachaVO().isMaxLevel;
  };
  Object.defineProperty(AGachaEventVO.prototype, "freeChestResetTime", {
    get: function () {
      return this._freeChestResetTime;
    },
    enumerable: true,
    configurable: true
  });
  AGachaEventVO.prototype.assetName = function () {
    return this.eventType;
  };
  Object.defineProperty(AGachaEventVO.prototype, "eventName", {
    get: function () {
      return this.assetName();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AGachaEventVO.prototype, "animationPos", {
    get: function () {
      return new p(275, 43);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AGachaEventVO.prototype, "animationScale", {
    get: function () {
      return 0.25;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AGachaEventVO.prototype, "currencyMerchantEventID", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AGachaEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "tooltip_gachaName_" + this.assetName();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AGachaEventVO.prototype, "currentMultiPull", {
    get: function () {
      return this._currentMultiPull;
    },
    set: function (e) {
      this._currentMultiPull = e;
      c.CastleBasicController.getInstance().dispatchEvent(new r.GachaEvent(r.GachaEvent.MULTIPULL_CHANGED, this));
    },
    enumerable: true,
    configurable: true
  });
  return AGachaEventVO;
}(d.ALeagueTypeScoreEventVO);
exports.AGachaEventVO = h;
o.classImplementsInterfaces(h, "IEventOverviewable");