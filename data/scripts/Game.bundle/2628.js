Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./5.js");
var a = require("./6.js");
var s = require("./22.js");
var r = function () {
  function FusionForgeItemInfoVO() {
    this._initialFusionLevel = -1;
    this._isFusionSource = false;
    this._isFusionTarget = false;
    this._uniqueId = -1;
    this._serverXP = 0;
  }
  FusionForgeItemInfoVO.prototype.parseXmlNode = function (e) {
    this._initialFusionLevel = a.int(s.CastleXMLUtils.getIntAttribute("initialFusionLevel", e, -1));
    this._isFusionSource = s.CastleXMLUtils.getBooleanAttribute("isFusionSource", e, false);
    this._isFusionTarget = s.CastleXMLUtils.getBooleanAttribute("isFusionTarget", e, false);
  };
  FusionForgeItemInfoVO.prototype.getDeltaXpBetweenCurrentLevels = function () {
    return a.int(this.isForged() ? this.serverXP - o.FusionConst.getStartXPFromLevel(this.getCurrentLevel()) : 0);
  };
  FusionForgeItemInfoVO.prototype.getDeltaXpForNextLevel = function () {
    return a.int(this.getTotalXpForNextLevel() - o.FusionConst.getStartXPFromLevel(this.getCurrentLevel()));
  };
  FusionForgeItemInfoVO.prototype.getTotalXpForNextLevel = function () {
    return a.int(o.FusionConst.getStartXPFromLevel(this.getCurrentLevel() + 1));
  };
  FusionForgeItemInfoVO.prototype.getCurrentTotalXp = function () {
    return a.int(this.isForged() ? this.serverXP : o.FusionConst.getStartXPFromLevel(this.getCurrentLevel()));
  };
  FusionForgeItemInfoVO.prototype.isForged = function () {
    return this.serverXP != 0 && this.serverXP > o.FusionConst.getStartXPFromLevel(this.initialFusionLevel);
  };
  FusionForgeItemInfoVO.prototype.getCurrentLevel = function () {
    return a.int(this.serverXP <= 0 && this.initialFusionLevel > 0 ? this.initialFusionLevel : o.FusionConst.getLevelFromXP(this.serverXP));
  };
  FusionForgeItemInfoVO.prototype.getDeltaXpPercentFactor = function () {
    return n.MathBase.clamp(this.getDeltaXpBetweenCurrentLevels() / this.getDeltaXpForNextLevel(), 0, 1);
  };
  Object.defineProperty(FusionForgeItemInfoVO.prototype, "initialFusionLevel", {
    get: function () {
      return this._initialFusionLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FusionForgeItemInfoVO.prototype, "isFusionSource", {
    get: function () {
      return this._isFusionSource;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FusionForgeItemInfoVO.prototype, "isFusionTarget", {
    get: function () {
      return this._isFusionTarget;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FusionForgeItemInfoVO.prototype, "serverXP", {
    get: function () {
      return this._serverXP;
    },
    set: function (e) {
      this._serverXP = a.int(n.MathBase.max(0, e));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FusionForgeItemInfoVO.prototype, "uniqueId", {
    get: function () {
      return this._uniqueId;
    },
    set: function (e) {
      this._uniqueId = e;
    },
    enumerable: true,
    configurable: true
  });
  return FusionForgeItemInfoVO;
}();
exports.FusionForgeItemInfoVO = r;