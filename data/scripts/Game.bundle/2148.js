Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function DefenderEffectVO(e) {
    this._spaceID = 0;
    this._areaType = 0;
    this._defenderArea = e;
    this._spaceID = e.mapID > 0 ? e.mapID : e.kingdomID;
    this._areaType = o.int(e.areaType);
    this._defenderFlankEffects = new Map();
  }
  DefenderEffectVO.prototype.addDefenderFlankEffects = function (e, t) {
    if (t != a.ClientConstCastle.FLANK_LEFT && t != a.ClientConstCastle.FLANK_MIDDLE && t != a.ClientConstCastle.FLANK_RIGHT && t != a.ClientConstCastle.FLANK_YARD) {
      throw new Error("INCORRECT FLANK CHOSEN");
    }
    this._defenderFlankEffects.set(t, e);
  };
  DefenderEffectVO.prototype.getDefenderFlankEffects = function (e) {
    if (e != a.ClientConstCastle.FLANK_LEFT && e != a.ClientConstCastle.FLANK_MIDDLE && e != a.ClientConstCastle.FLANK_RIGHT && e != a.ClientConstCastle.FLANK_YARD) {
      throw new Error("INCORRECT FLANK CHOSEN");
    }
    return this._defenderFlankEffects.get(e);
  };
  Object.defineProperty(DefenderEffectVO.prototype, "spaceID", {
    get: function () {
      return this._spaceID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DefenderEffectVO.prototype, "areaType", {
    get: function () {
      return this._areaType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DefenderEffectVO.prototype, "defenderArea", {
    get: function () {
      return this._defenderArea;
    },
    enumerable: true,
    configurable: true
  });
  return DefenderEffectVO;
}();
exports.DefenderEffectVO = n;
var o = require("./6.js");
var a = require("./18.js");