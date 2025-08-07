Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleMovementItemVO(t) {
    var i = e.call(this) || this;
    i._movement = t;
    return i;
  }
  n.__extends(CastleMovementItemVO, e);
  Object.defineProperty(CastleMovementItemVO.prototype, "movement", {
    get: function () {
      return this._movement;
    },
    enumerable: true,
    configurable: true
  });
  return CastleMovementItemVO;
}(require("./2.js").ScrollItemVO);
exports.CastleMovementItemVO = o;