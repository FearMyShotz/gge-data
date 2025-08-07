Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./69.js");
var s = function (e) {
  function AMessageSpyVO() {
    var t = this;
    t._subtypeSpy = 0;
    t._subtypeResult = 0;
    t._kingdomID = 0;
    t._ownerID = 0;
    t._areaID = 0;
    t._areaType = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(AMessageSpyVO, e);
  AMessageSpyVO.prototype.hasDetailedSpyLog = function () {
    throw new a.AbstractMethodError();
  };
  AMessageSpyVO.prototype.isFailedSpyLog = function () {
    return this.subtypeResult == o.MessageConst.SUBTYPE_ATTACKER_FAILED || this.subtypeResult == o.MessageConst.SUBTYPE_DEFENDER_SUCCESS;
  };
  AMessageSpyVO.prototype.isDefenceSpyLog = function () {
    return this.subtypeSpy == o.MessageConst.SUBTYPE_SPY_DEFENCE && this.subtypeResult == o.MessageConst.SUBTYPE_ATTACKER_SUCCESS;
  };
  AMessageSpyVO.prototype.isEcoSpyLog = function () {
    return this.subtypeSpy == o.MessageConst.SUBTYPE_SPY_ECO;
  };
  Object.defineProperty(AMessageSpyVO.prototype, "isSabotageLog", {
    get: function () {
      return this.subtypeSpy == o.MessageConst.SUBTYPE_SPY_SABOTAGE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AMessageSpyVO.prototype, "isPlagueLog", {
    get: function () {
      return this.subtypeSpy == o.MessageConst.SUBTYPE_SPY_PLAQUE_MONK;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AMessageSpyVO.prototype, "subtypeSpy", {
    get: function () {
      return this._subtypeSpy;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AMessageSpyVO.prototype, "subtypeResult", {
    get: function () {
      return this._subtypeResult;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AMessageSpyVO.prototype, "kingdomID", {
    get: function () {
      return this._kingdomID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AMessageSpyVO.prototype, "ownerID", {
    get: function () {
      return this._ownerID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AMessageSpyVO.prototype, "areaName", {
    get: function () {
      return this._areaName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AMessageSpyVO.prototype, "areaID", {
    get: function () {
      return this._areaID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AMessageSpyVO.prototype, "areaType", {
    get: function () {
      return this._areaType;
    },
    enumerable: true,
    configurable: true
  });
  return AMessageSpyVO;
}(require("./99.js").AMessageVO);
exports.AMessageSpyVO = s;