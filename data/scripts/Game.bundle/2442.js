Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleTitleSelectionItemVO(t, i) {
    var n = this;
    n._selected = false;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this)._title = t;
    n._selected = i;
    return n;
  }
  n.__extends(CastleTitleSelectionItemVO, e);
  Object.defineProperty(CastleTitleSelectionItemVO.prototype, "title", {
    get: function () {
      return this._title;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTitleSelectionItemVO.prototype, "selected", {
    get: function () {
      return this._selected;
    },
    enumerable: true,
    configurable: true
  });
  return CastleTitleSelectionItemVO;
}(require("./2.js").ScrollItemVO);
exports.CastleTitleSelectionItemVO = o;