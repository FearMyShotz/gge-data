Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./28.js");
var r = require("./423.js");
var l = require("./30.js");
var c = require("./15.js");
var u = require("./4.js");
var d = require("./1227.js");
var p = require("./5385.js");
var h = function (e) {
  function CastleLaboratoryData(t) {
    var i = e.call(this) || this;
    i.parseXML(t);
    return i;
  }
  n.__extends(CastleLaboratoryData, e);
  CastleLaboratoryData.prototype.parseXML = function (e) {
    this.levelInfoVOs = new Map();
    var t = e.laboratories;
    if (t != null) {
      for (var i = 0, n = t; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          var a = new p.LaboratoryLevelInfoVO();
          a.parseXML(o);
          this.levelInfoVOs.set(a.kingdomID.toString() + a.level.toString(), a);
        }
      }
    }
  };
  CastleLaboratoryData.prototype.parseLRR = function (e) {
    if (e.LRS) {
      if (e.LRS < 0) {
        this.resetLandmarks();
      } else {
        this._remainingResetTime = l.CachedTimer.getCachedTimer() + e.LRS * s.ClientConstTime.SEC_2_MILLISEC;
        this.resetComplete();
      }
    }
  };
  CastleLaboratoryData.prototype.getLevelInfoByLevel = function (e, t) {
    var i;
    var n = t.toString() + e.toString();
    if (this.levelInfoVOs && this.levelInfoVOs.get(n)) {
      i = this.levelInfoVOs.get(n);
    }
    return i;
  };
  CastleLaboratoryData.prototype.getLevelInfoByPointsAchieved = function (e, t) {
    for (var i = 1; this.levelInfoVOs.get(t.toString() + i) && e >= this.levelInfoVOs.get(t.toString() + i).requiredPoints;) {
      i++;
    }
    return this.levelInfoVOs.get(t.toString() + (i - 1));
  };
  Object.defineProperty(CastleLaboratoryData.prototype, "remainingResetTime", {
    get: function () {
      return a.int((this._remainingResetTime - l.CachedTimer.getCachedTimer()) / s.ClientConstTime.SEC_2_MILLISEC);
    },
    enumerable: true,
    configurable: true
  });
  CastleLaboratoryData.prototype.resetLandmarks = function () {
    if (!this._alreadyReset) {
      c.CastleBasicController.getInstance().dispatchEvent(new r.LaboratoryEvent(r.LaboratoryEvent.LABORATORY_RESET_WARNING));
    }
    e.prototype.resetLandmarks.call(this);
  };
  Object.defineProperty(CastleLaboratoryData.prototype, "userList", {
    get: function () {
      return u.CastleModel.userData.laboratoryList;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.UpgradableLandmarkData.prototype, "userList").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CastleLaboratoryData;
}(d.UpgradableLandmarkData);
exports.CastleLaboratoryData = h;
o.classImplementsInterfaces(h, "IUpdatable", "IUpgradableLandmarkData");