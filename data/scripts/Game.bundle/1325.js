Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./6.js");
var r = require("./518.js");
var l = function (e) {
  function PlaguemonkMapmovementVO() {
    var t = this;
    t._plagueMonkCount = 0;
    t._plagueMonkRisk = 0;
    t._plagueDamage = -1;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this).name = PlaguemonkMapmovementVO.NAME;
    t.group = "Mapmovement";
    return t;
  }
  n.__extends(PlaguemonkMapmovementVO, e);
  PlaguemonkMapmovementVO.prototype.loadFromParamObject = function (t) {
    e.prototype.loadFromParamObject.call(this, t);
    if (a.instanceOfClass(this.sourceArea, "PlagueareaMapobjectVO")) {
      this.sourceArea.kingdomID = this.kingdomID;
    }
    if (a.instanceOfClass(this.targetArea, "PlagueareaMapobjectVO")) {
      this.targetArea.kingdomID = this.kingdomID;
    }
    this.parsePlagueMonkInfo(t.P);
  };
  PlaguemonkMapmovementVO.prototype.parsePlagueMonkInfo = function (e) {
    this._plagueDamage = s.int(e.E);
    this._plagueMonkCount = s.int(e.C);
    this._plagueMonkRisk = s.int(e.R);
  };
  Object.defineProperty(PlaguemonkMapmovementVO.prototype, "plagueMonkCount", {
    get: function () {
      return this._plagueMonkCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PlaguemonkMapmovementVO.prototype, "plagueMonkRisk", {
    get: function () {
      return this._plagueMonkRisk;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PlaguemonkMapmovementVO.prototype, "canBeRetreated", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.BasicMapmovementVO.prototype, "canBeRetreated").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PlaguemonkMapmovementVO.prototype, "plagueDamage", {
    get: function () {
      return this._plagueDamage;
    },
    enumerable: true,
    configurable: true
  });
  PlaguemonkMapmovementVO.__initialize_static_members = function () {
    PlaguemonkMapmovementVO.NAME = "Plaguemonk";
  };
  return PlaguemonkMapmovementVO;
}(r.BasicMapmovementVO);
exports.PlaguemonkMapmovementVO = l;
o.classImplementsInterfaces(l, "IMapMovementVO");
l.__initialize_static_members();