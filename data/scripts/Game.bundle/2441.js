Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleTitleScrollItemVO(t, i) {
    var n = this;
    n._selected = false;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this)._title = t;
    n._selected = i;
    return n;
  }
  n.__extends(CastleTitleScrollItemVO, e);
  Object.defineProperty(CastleTitleScrollItemVO.prototype, "title", {
    get: function () {
      return this._title;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTitleScrollItemVO.prototype, "selected", {
    get: function () {
      return this._selected;
    },
    set: function (e) {
      this._selected = e;
    },
    enumerable: true,
    configurable: true
  });
  return CastleTitleScrollItemVO;
}(require("./2.js").ScrollItemVO);
exports.CastleTitleScrollItemVO = o;