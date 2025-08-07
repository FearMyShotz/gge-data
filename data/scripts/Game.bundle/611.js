Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CollectableItemEffectVO(t, i = false) {
    var n = this;
    n._effectId = -1;
    n._isTemporary = false;
    CONSTRUCTOR_HACK;
    (n = e.call(this, 0) || this)._effectId = t;
    n._isTemporary = i;
    return n;
  }
  n.__extends(CollectableItemEffectVO, e);
  Object.defineProperty(CollectableItemEffectVO.prototype, "effectId", {
    get: function () {
      return this._effectId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableItemEffectVO.prototype, "isTemporary", {
    get: function () {
      return this._isTemporary;
    },
    enumerable: true,
    configurable: true
  });
  return CollectableItemEffectVO;
}(require("./96.js").ACollectableItemVO);
exports.CollectableItemEffectVO = o;