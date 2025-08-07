Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function FactionVillageInfoVO(t, i) {
    var n = this;
    n._towerID = 0;
    n._canBeAttacked = false;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this)._towerID = t;
    n.absAreaPos = i;
    return n;
  }
  n.__extends(FactionVillageInfoVO, e);
  Object.defineProperty(FactionVillageInfoVO.prototype, "canBeAttacked", {
    get: function () {
      return this._canBeAttacked;
    },
    set: function (e) {
      this._canBeAttacked = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionVillageInfoVO.prototype, "towerID", {
    get: function () {
      return this._towerID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionVillageInfoVO.prototype, "realPosition", {
    set: function (e) {
      this._realPosition = e;
    },
    enumerable: true,
    configurable: true
  });
  return FactionVillageInfoVO;
}(require("./498.js").MinWorldMapCastleInfoVO);
exports.FactionVillageInfoVO = o;