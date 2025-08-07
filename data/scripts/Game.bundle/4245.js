Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./28.js");
var r = require("./557.js");
var l = require("./30.js");
var c = require("./54.js");
var u = require("./4.js");
var d = require("./4246.js");
var p = function (e) {
  function CastleActivityBonusData(t) {
    var i = this;
    i.nextActivityBonusTimeStamp = 0;
    i._rewardID = 0;
    i.readyToCollect = false;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).parseXML(t);
    i._rewardID = -1;
    return i;
  }
  n.__extends(CastleActivityBonusData, e);
  CastleActivityBonusData.prototype.parseXML = function (e) {
    this._activityRewardVOs = [];
    var t = e.activityrewards;
    if (t != null) {
      for (var i = 0, n = t; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          var a = new d.ActivityRewardVO();
          a.fillFromParamXML(o);
          a.setReward(u.CastleModel.rewardData.getListById(a.rewardID));
          this._activityRewardVOs.push(a);
        }
      }
    }
  };
  CastleActivityBonusData.prototype.parse_UAC = function (e) {
    this._rewardID = a.int(e.CID);
    this.nextActivityBonusTimeStamp = a.int(l.CachedTimer.getCachedTimer() + e.TTU * s.ClientConstTime.SEC_2_MILLISEC);
    this.readyToCollect = false;
    this.dispatchEvent(new r.CastleLoginBonusEvent(r.CastleLoginBonusEvent.ACTIVITYBONUS_STATE_CHANGED));
  };
  CastleActivityBonusData.prototype.executeUpdate = function (e) {
    if (!this.readyToCollect && this.isActive && this.remainingTimeTillNextActivityBonus <= 0) {
      this.readyToCollect = true;
      this.dispatchEvent(new r.CastleLoginBonusEvent(r.CastleLoginBonusEvent.ACTIVITYBONUS_STATE_CHANGED));
    }
  };
  CastleActivityBonusData.prototype.getNextActivityRewardVO = function () {
    for (var e = 0; e < this._activityRewardVOs.length; e++) {
      var t = this._activityRewardVOs[e];
      if (this._rewardID == t.activityRewardID) {
        return t;
      }
    }
    return null;
  };
  Object.defineProperty(CastleActivityBonusData.prototype, "isActive", {
    get: function () {
      return this._rewardID >= 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleActivityBonusData.prototype, "isReadyToCollect", {
    get: function () {
      return this.readyToCollect;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleActivityBonusData.prototype, "remainingTimeTillNextActivityBonus", {
    get: function () {
      return Math.max((this.nextActivityBonusTimeStamp - l.CachedTimer.getCachedTimer()) * s.ClientConstTime.MILLISEC_2_SEC, 0);
    },
    enumerable: true,
    configurable: true
  });
  return CastleActivityBonusData;
}(c.CastleBasicData);
exports.CastleActivityBonusData = p;
o.classImplementsInterfaces(p, "IUpdatable");