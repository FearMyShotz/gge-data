Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./32.js");
var s = require("./15.js");
var r = require("./339.js");
var l = require("./4342.js");
var c = function (e) {
  function MightData(t) {
    var i = this;
    i._userCurrentMight = 0;
    i._userCurrentBuildingMight = 0;
    i._userHighestMightAchieved = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).parseXML(t);
    return i;
  }
  n.__extends(MightData, e);
  MightData.prototype.getXmlList = function (e) {
    return e.mightranks;
  };
  MightData.prototype.getNewNode = function () {
    return new l.MightRankVO();
  };
  MightData.prototype.getMightRank = function (e) {
    var t = null;
    if (this._nodes != null) {
      for (var i = 0, n = Array.from(this._nodes.values()); i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o && o.threshold < e && (t == null || o.threshold > t.threshold)) {
          t = o;
        }
      }
    }
    return t;
  };
  MightData.prototype.getNextMightRank = function (e) {
    var t = null;
    if (this._nodes != null) {
      for (var i = 0, n = Array.from(this._nodes.values()); i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o && o.threshold > e && (t == null || o.threshold < t.threshold)) {
          t = o;
        }
      }
    }
    return t;
  };
  MightData.prototype.parse_GMU = function (e) {
    if (e && e.hasOwnProperty("MP") && e.hasOwnProperty("HMP")) {
      this._userCurrentMight = parseInt(e.MP);
      this._userCurrentBuildingMight = parseInt(e.TSBM);
      this._userHighestMightAchieved = parseInt(e.HMP);
      s.CastleBasicController.getInstance().dispatchEvent(new a.CastleUserDataEvent(a.CastleUserDataEvent.CHANGE_USER_MIGHT));
    }
  };
  Object.defineProperty(MightData.prototype, "userHighestMightAchieved", {
    get: function () {
      return this._userHighestMightAchieved;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MightData.prototype, "userCurrentMight", {
    get: function () {
      return this._userCurrentMight;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MightData.prototype, "userMightToNextLevel", {
    get: function () {
      var e = this.getNextMightRank(this._userHighestMightAchieved);
      if (e) {
        return e.threshold - this._userCurrentMight;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MightData.prototype, "userCurrentBuildingMight", {
    get: function () {
      return this._userCurrentBuildingMight;
    },
    enumerable: true,
    configurable: true
  });
  return MightData;
}(r.CastleXmlData);
exports.MightData = c;
o.classImplementsInterfaces(c, "IUpdatable");