Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CollectableScrollItemVO(t, i) {
    var n = e.call(this) || this;
    n._collectable = t;
    n._collectableRenderOptions = i;
    return n;
  }
  n.__extends(CollectableScrollItemVO, e);
  Object.defineProperty(CollectableScrollItemVO.prototype, "collectable", {
    get: function () {
      return this._collectable;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableScrollItemVO.prototype, "collectableRenderOptions", {
    get: function () {
      return this._collectableRenderOptions;
    },
    enumerable: true,
    configurable: true
  });
  return CollectableScrollItemVO;
}(require("./2.js").ScrollItemVO);
exports.CollectableScrollItemVO = o;