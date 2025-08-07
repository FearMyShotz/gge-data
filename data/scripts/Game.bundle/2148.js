Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function AttackerEffectVO() {
    this._attackerFlankEffects = new Map();
  }
  AttackerEffectVO.prototype.addAttackerFlankEffects = function (e, t) {
    if (t != o.ClientConstCastle.FLANK_LEFT && t != o.ClientConstCastle.FLANK_MIDDLE && t != o.ClientConstCastle.FLANK_RIGHT) {
      throw new Error("INCORRECT FLANK CHOSEN");
    }
    this._attackerFlankEffects.set(t, e);
  };
  AttackerEffectVO.prototype.getAttackerFlankEffects = function (e) {
    if (e != o.ClientConstCastle.FLANK_LEFT && e != o.ClientConstCastle.FLANK_MIDDLE && e != o.ClientConstCastle.FLANK_RIGHT) {
      throw new Error("INCORRECT FLANK CHOSEN");
    }
    return this._attackerFlankEffects.get(e);
  };
  return AttackerEffectVO;
}();
exports.AttackerEffectVO = n;
var o = require("./18.js");