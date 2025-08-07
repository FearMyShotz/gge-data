Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./2613.js");
var r = require("./28.js");
var l = require("./762.js");
var c = require("./687.js");
var u = require("./623.js");
var d = require("./2614.js");
var p = require("./528.js");
var h = require("./12.js");
var g = require("./30.js");
var C = require("./54.js");
var _ = require("./4.js");
var m = function (e) {
  function CastleVIPData(t) {
    var i = this;
    i._currentVIPPoints = 0;
    i._maxVIPLevelReached = 0;
    i._vipTimeExpireTimestamp = 0;
    i._usedPremiumCommanders = 0;
    CONSTRUCTOR_HACK;
    i = e.call(this) || this;
    CastleVIPData.DISABLED_VIP_MODE_VO.parseConfigXML(s.XML("<viplevel vipLevelID=\"0\" thresholdMin=\"" + -Number.MAX_VALUE + "\" thresholdMax=\"-1\"/>"));
    i.parseVIPLevels(t);
    i.parseVIPPackages(t);
    return i;
  }
  n.__extends(CastleVIPData, e);
  CastleVIPData.prototype.parseVIPPackages = function (e) {
    this._vipPackages = [];
    for (var t = 0, i = e.packages; t < i.length; t++) {
      var n = i[t];
      if (n != undefined) {
        var o = n.vipPoints || "";
        var a = n.vipTime || "";
        if (o.length > 0 || a.length > 0) {
          var s = new b.VIPPackageVO();
          s.fillFromParamXML(n);
          this._vipPackages.push(s);
        }
      }
    }
  };
  CastleVIPData.prototype.parseVIPLevels = function (e) {
    this._vipLevels = [];
    for (var t = 0, i = e.viplevels; t < i.length; t++) {
      var n = i[t];
      if (n !== undefined) {
        var o = new y.VIPLevelInfoVO();
        o.parseConfigXML(n);
        this._vipLevels.push(o);
      }
    }
    this._vipLevels.sort(this.bindFunction(this.sortVIPLevelByAscendingID));
  };
  CastleVIPData.prototype.sortVIPLevelByAscendingID = function (e, t) {
    return e.levelID - t.levelID;
  };
  CastleVIPData.prototype.parse_VIP = function (e) {
    if (e) {
      this._currentVIPPoints = a.int(e.VP);
      this._maxVIPLevelReached = a.int(e.VRL);
      this._usedPremiumCommanders = a.int(e.UPG);
      var t = a.int(e.VRS);
      if (t > CastleVIPData.NO_VIP_TIME) {
        this._vipTimeExpireTimestamp = g.CachedTimer.getCachedTimer() + t * r.ClientConstTime.SEC_2_MILLISEC;
      } else {
        this._vipTimeExpireTimestamp = CastleVIPData.NO_VIP_TIME;
      }
      this.dispatchEvent(new p.CastleVIPDataEvent(p.CastleVIPDataEvent.VIP_DATA_UPDATED));
    }
  };
  CastleVIPData.prototype.getVIPLevelInfoVOByPoints = function (e) {
    if (this._vipLevels != null) {
      for (var t = 0, i = this._vipLevels; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.inPointRange(e)) {
          return n;
        }
      }
    }
    if (e > 0) {
      return this._vipLevels[this._vipLevels.length - 1];
    } else {
      return null;
    }
  };
  CastleVIPData.prototype.getVIPLevelInfoVOByLevel = function (e) {
    if (this._vipLevels != null) {
      for (var t = 0, i = this._vipLevels; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.levelID == e) {
          return n;
        }
      }
    }
    return null;
  };
  CastleVIPData.prototype.getPackages = function (e) {
    var t = [];
    var i = [170, 171, 172];
    var n = [167, 168, 169];
    for (var o = 0, a = this._vipPackages; o < a.length; o++) {
      var s = a[o];
      if ((e == h.CollectableEnum.VIP_POINTS ? n : i).indexOf(s.packageID) >= 0) {
        t.push(s);
      }
    }
    return t;
  };
  Object.defineProperty(CastleVIPData.prototype, "currentActiveVIPLevel", {
    get: function () {
      if (this.vipModeActive) {
        return this.getVIPLevelInfoVOByPoints(this._currentVIPPoints);
      } else {
        return CastleVIPData.DISABLED_VIP_MODE_VO;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleVIPData.prototype, "currentVIPLevelVOReached", {
    get: function () {
      return this.getVIPLevelInfoVOByPoints(this._currentVIPPoints);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleVIPData.prototype, "vipModeActive", {
    get: function () {
      return this.remainingVIPTimeInSeconds > CastleVIPData.NO_VIP_TIME;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleVIPData.prototype, "maxVIPLevelReached", {
    get: function () {
      return this._maxVIPLevelReached;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleVIPData.prototype, "remainingPremiumCommanders", {
    get: function () {
      return this.currentActiveVIPLevel.freePremiumCommandersPerDay - this._usedPremiumCommanders;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleVIPData.prototype, "remainingVIPTimeInSeconds", {
    get: function () {
      return (this._vipTimeExpireTimestamp - g.CachedTimer.getCachedTimer()) / r.ClientConstTime.SEC_2_MILLISEC;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleVIPData.prototype, "currentPremiumPoints", {
    get: function () {
      return this._currentVIPPoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleVIPData.prototype, "currentVIPLevel", {
    get: function () {
      return this.getVIPLevelInfoVOByPoints(this._currentVIPPoints).levelID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleVIPData.prototype, "maxLevel", {
    get: function () {
      return this._vipLevels.length;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleVIPData.prototype, "maxLevelVO", {
    get: function () {
      return this.getVIPLevelInfoVOByLevel(this.maxLevel);
    },
    enumerable: true,
    configurable: true
  });
  CastleVIPData.prototype.maxPointPackagesBuyable = function (e) {
    var t = a.int(this.maxLevelVO.maxVIPPoints - this.currentPremiumPoints);
    return Math.min(1000, Math.max(0, Math.ceil(t / e)));
  };
  CastleVIPData.prototype.maxTimePackagesBuyable = function (e) {
    var t = 0;
    t = this.vipModeActive ? CastleVIPData.MAX_VIPTIME_SECONDS - this.remainingVIPTimeInSeconds : CastleVIPData.MAX_VIPTIME_SECONDS;
    return Math.min(1000, Math.max(0, Math.floor(t / e)));
  };
  Object.defineProperty(CastleVIPData.prototype, "minBuyableVipTime", {
    get: function () {
      var e = a.int(Number.MAX_VALUE);
      if (this._vipPackages != null) {
        for (var t = 0, i = this._vipPackages; t < i.length; t++) {
          var n = i[t];
          if (n !== undefined) {
            var o = a.int(n.reward.amount);
            if (o > 0 && o < e) {
              e = o;
            }
          }
        }
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  CastleVIPData.prototype.executeUpdate = function (e) {
    if (this._vipTimeExpireTimestamp != CastleVIPData.NO_VIP_TIME && e > this._vipTimeExpireTimestamp && (this._vipTimeExpireTimestamp = CastleVIPData.NO_VIP_TIME, _.CastleModel.smartfoxClient.sendCommandVO(new d.C2SVIPInfoEvent()), _.CastleModel.smartfoxClient.sendCommandVO(new c.C2SGetCastleProductionDataVO()), _.CastleModel.smartfoxClient.sendCommandVO(new l.C2SBoosterInfoVO()), E.CastleLayoutManager.getInstance().isInMyCastle && O.Iso.data)) {
      var t = !!O.Iso.data.objects.provider.getObjectAmountByType(f.IsoObjectEnum.BARRACKS);
      var i = !!O.Iso.data.objects.provider.getObjectAmountByType(f.IsoObjectEnum.WORKSHOP);
      var n = !!O.Iso.data.objects.provider.getObjectAmountByType(f.IsoObjectEnum.D_WORKSHOP);
      if (t) {
        _.CastleModel.smartfoxClient.sendCommandVO(new u.C2SShowPackageListVO(0));
      }
      if (i || n) {
        _.CastleModel.smartfoxClient.sendCommandVO(new u.C2SShowPackageListVO(1));
      }
    }
  };
  CastleVIPData.__initialize_static_members = function () {
    CastleVIPData.MAX_VIPTIME_SECONDS = r.ClientConstTime.SECONDS_PER_DAY * 180;
    CastleVIPData.DISABLED_VIP_MODE_VO = new y.VIPLevelInfoVO();
  };
  CastleVIPData.MAX_VIPTIME_DAYS = 180;
  CastleVIPData.NO_VIP_TIME = 0;
  return CastleVIPData;
}(C.CastleBasicData);
exports.CastleVIPData = m;
o.classImplementsInterfaces(m, "IUpdatable", "ICastleBasicData");
var f = require("./80.js");
var O = require("./34.js");
var E = require("./17.js");
var y = require("./2615.js");
var b = require("./2617.js");
m.__initialize_static_members();