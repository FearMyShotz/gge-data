Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleAttackDialogProperties(t) {
    var i = e.call(this) || this;
    if (!t) {
      throw new ReferenceError("CastleAttackInfoVO must not be null!");
    }
    i._attackInfoVO = t;
    return i;
  }
  n.__extends(CastleAttackDialogProperties, e);
  Object.defineProperty(CastleAttackDialogProperties.prototype, "attackInfoVO", {
    get: function () {
      return this._attackInfoVO;
    },
    enumerable: true,
    configurable: true
  });
  return CastleAttackDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleAttackDialogProperties = o;