Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./6.js");
var r = require("./28.js");
var l = require("./568.js");
var c = require("./30.js");
var u = require("./4.js");
var d = require("./2073.js");
var p = require("./339.js");
var h = createjs.Event;
var g = function (e) {
  function CastleRubyWishingWellData(t) {
    var i = this;
    i._remainingSeconds = -1;
    i._endTime = -1;
    i.currentLevel = -1;
    i.isWaitingForCollectResponse = false;
    i.waitingForServerResponse = false;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).parseXML(t);
    return i;
  }
  n.__extends(CastleRubyWishingWellData, e);
  Object.defineProperty(CastleRubyWishingWellData.prototype, "remainingSeconds", {
    get: function () {
      return this._remainingSeconds;
    },
    set: function (e) {
      this._remainingSeconds = e;
      this._endTime = s.int(c.CachedTimer.getCachedTimer() * r.ClientConstTime.MILLISEC_2_SEC + e);
    },
    enumerable: true,
    configurable: true
  });
  CastleRubyWishingWellData.prototype.isReadyToStart = function () {
    return this._remainingSeconds == -1;
  };
  CastleRubyWishingWellData.prototype.isReadyToCollect = function () {
    return this._remainingSeconds == 0;
  };
  Object.defineProperty(CastleRubyWishingWellData.prototype, "endTime", {
    get: function () {
      return this._endTime;
    },
    enumerable: true,
    configurable: true
  });
  CastleRubyWishingWellData.prototype.getXmlList = function (e) {
    return e.wishingwells;
  };
  CastleRubyWishingWellData.prototype.getNewNode = function () {
    return new d.CastleRubyWishingWellVO();
  };
  CastleRubyWishingWellData.prototype.getCurrentNode = function () {
    return this.getNode(this.currentLevel);
  };
  CastleRubyWishingWellData.prototype.parse_RWW = function (e) {
    if (e) {
      var t = this.currentLevel;
      this.currentLevel = s.int(e.L);
      this._currentVO = this.getCurrentNode();
      this.remainingSeconds = e.RT;
      this.waitingForServerResponse = false;
      var n = require("./33.js").Iso;
      if (t != this.currentLevel && n.controller.dataUpdater) {
        n.controller.dataUpdater.updateRubyWishWell();
      } else {
        this.dispatchEvent(new h(CastleRubyWishingWellData.UPDATE));
      }
    }
  };
  CastleRubyWishingWellData.prototype.isRunning = function () {
    return !this.isReadyToCollect() && !this.isReadyToStart();
  };
  CastleRubyWishingWellData.prototype.getPercentageFinished = function () {
    if (this._currentVO) {
      return Math.max(Math.min(1 - this._remainingSeconds / this._currentVO.waitingTime, 1), 0);
    } else {
      return 0;
    }
  };
  CastleRubyWishingWellData.prototype.getRemainingSecondsCalculated = function () {
    return s.int(Math.max(0, this._endTime - c.CachedTimer.getCachedTimer() * r.ClientConstTime.MILLISEC_2_SEC));
  };
  CastleRubyWishingWellData.prototype.getCurrentWodId = function () {
    if (this._currentVO) {
      return this._currentVO.wodId;
    } else {
      return CastleRubyWishingWellData.MIN_WOD_ID;
    }
  };
  CastleRubyWishingWellData.prototype.requestFreshWishingWellData = function () {
    if (!this.waitingForServerResponse) {
      u.CastleModel.smartfoxClient.sendCommandVO(new l.C2SWishingWellCommandVO(a.WishingWellConst.OPTION_UPDATE_INFO_WISHING_WELL));
      this.waitingForServerResponse = true;
    }
  };
  CastleRubyWishingWellData.UPDATE = "WISHING_WELL_UPDATE";
  CastleRubyWishingWellData.MIN_WOD_ID = 601;
  CastleRubyWishingWellData.MAX_WOD_ID = 611;
  CastleRubyWishingWellData.MULTIPLIER = 2;
  return CastleRubyWishingWellData;
}(p.CastleXmlData);
exports.CastleRubyWishingWellData = g;
o.classImplementsInterfaces(g, "IUpdatable");