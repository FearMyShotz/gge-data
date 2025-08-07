Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./6.js");
var r = require("./28.js");
var l = require("./580.js");
var c = require("./30.js");
var u = require("./15.js");
var d = require("./4.js");
var p = require("./1227.js");
var h = require("./2136.js");
var g = function (e) {
  function CastleMonumentData(t) {
    var i = e.call(this) || this;
    i.parseXML(t);
    return i;
  }
  n.__extends(CastleMonumentData, e);
  CastleMonumentData.prototype.parseXML = function (e) {
    this.levelInfoVOs = new Map();
    var t = e.monuments;
    if (t != null) {
      for (var i = 0, n = t; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          var a = new h.MonumentLevelInfoVO();
          a.parseXML(o);
          this.levelInfoVOs.set(a.level, a);
        }
      }
    }
  };
  CastleMonumentData.prototype.parseMRE = function (e) {
    if (e.MRS) {
      if (e.MRS < 0) {
        this.resetLandmarks();
      } else {
        this._remainingResetTime = c.CachedTimer.getCachedTimer() + e.MRS * r.ClientConstTime.SEC_2_MILLISEC;
        this.resetComplete();
      }
    }
  };
  CastleMonumentData.prototype.getLevelInfoByLevel = function (e, t) {
    var i;
    if (this.levelInfoVOs && this.levelInfoVOs.get(e)) {
      i = this.levelInfoVOs.get(e);
    }
    return i;
  };
  CastleMonumentData.prototype.getLevelInfoByPointsAchieved = function (e, t) {
    for (var i = 1; this.levelInfoVOs.get(i) && e >= this.levelInfoVOs.get(i).requiredPoints;) {
      i++;
    }
    return this.levelInfoVOs.get(i - 1);
  };
  Object.defineProperty(CastleMonumentData.prototype, "remainingResetTime", {
    get: function () {
      return s.int((this._remainingResetTime - c.CachedTimer.getCachedTimer()) / r.ClientConstTime.SEC_2_MILLISEC);
    },
    enumerable: true,
    configurable: true
  });
  CastleMonumentData.prototype.resetLandmarks = function () {
    if (!this._alreadyReset) {
      u.CastleBasicController.getInstance().dispatchEvent(new l.MonumentEvent(l.MonumentEvent.MONUMENTS_RESET_WARNING));
    }
    e.prototype.resetLandmarks.call(this);
  };
  Object.defineProperty(CastleMonumentData.prototype, "userList", {
    get: function () {
      return d.CastleModel.userData.monumentList;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.UpgradableLandmarkData.prototype, "userList").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleMonumentData.__initialize_static_members = function () {
    CastleMonumentData.MONUMENT_MAX_LEVELS = [a.MonumentConst.MAX_LEVEL_NORMAL_MONUMENT, a.MonumentConst.MAX_LEVEL_RARE_MONUMENT];
  };
  return CastleMonumentData;
}(p.UpgradableLandmarkData);
exports.CastleMonumentData = g;
o.classImplementsInterfaces(g, "IUpdatable", "IUpgradableLandmarkData");
g.__initialize_static_members();