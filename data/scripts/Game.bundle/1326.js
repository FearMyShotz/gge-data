Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./18.js");
var r = require("./518.js");
var l = function (e) {
  function SpyMapmovementVO() {
    var t = this;
    t._spyCount = 0;
    t._spyAccuracy = -1;
    t._spyRisk = 0;
    t._spyType = 0;
    t._sabotageDamage = -1;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this).name = SpyMapmovementVO.NAME;
    t.group = "Mapmovement";
    return t;
  }
  n.__extends(SpyMapmovementVO, e);
  SpyMapmovementVO.prototype.loadFromParamObject = function (t) {
    e.prototype.loadFromParamObject.call(this, t);
    this.parseSpyInfo(t.S);
  };
  SpyMapmovementVO.prototype.parseSpyInfo = function (e) {
    this._spyType = a.int(e.ST);
    if (this._spyType == s.ClientConstCastle.SPYTYPE_SABOTAGE) {
      this._sabotageDamage = a.int(e.SA);
    } else {
      this._spyAccuracy = a.int(e.SA);
    }
    this._spyCount = a.int(e.SC);
    this._spyRisk = a.int(e.SR);
  };
  Object.defineProperty(SpyMapmovementVO.prototype, "isSabotageSpyMovement", {
    get: function () {
      return this._spyType == s.ClientConstCastle.SPYTYPE_SABOTAGE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SpyMapmovementVO.prototype, "spyCount", {
    get: function () {
      return this._spyCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SpyMapmovementVO.prototype, "spyAccuracy", {
    get: function () {
      return this._spyAccuracy;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SpyMapmovementVO.prototype, "spyRisk", {
    get: function () {
      return this._spyRisk;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SpyMapmovementVO.prototype, "spyType", {
    get: function () {
      return this._spyType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SpyMapmovementVO.prototype, "canBeRetreated", {
    get: function () {
      if (!this.isMyMovement) {
        return false;
      }
      switch (this._direction) {
        case r.BasicMapmovementVO.TRAVELSTATE_MOVING_TO_TARGET:
          return true;
        case r.BasicMapmovementVO.TRAVELSTATE_RETURN_HOME:
        default:
          return false;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.BasicMapmovementVO.prototype, "canBeRetreated").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SpyMapmovementVO.prototype, "sabotageDamage", {
    get: function () {
      return this._sabotageDamage;
    },
    enumerable: true,
    configurable: true
  });
  SpyMapmovementVO.__initialize_static_members = function () {
    SpyMapmovementVO.NAME = "Spy";
  };
  return SpyMapmovementVO;
}(r.BasicMapmovementVO);
exports.SpyMapmovementVO = l;
o.classImplementsInterfaces(l, "IMapMovementVO");
l.__initialize_static_members();